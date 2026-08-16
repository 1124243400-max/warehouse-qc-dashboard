(function () {
  'use strict';

  const kit = window.QCDynamicChartKit;
  const dataModule = window.QCDynamicData;
  if (!kit || !dataModule) {
    console.error('QC dynamic dashboard dependencies are unavailable.');
    return;
  }

  const charts = new kit.ChartManager();
  const config = {
    interval: 86400000,
    ...(window.QC_DYNAMIC_CONFIG || {}),
    triggers: {
      timer: false,
      manual: false,
      visibility: false,
      websocket: false,
    },
  };
  const service = new dataModule.DataService(config);
  let enhancementTimer = 0;
  let numberAnimationFrame = 0;
  let activeNumberItems = [];
  const numberFormatters = new Map();
  let lastEnhancedView = '';
  let pendingEntryView = '';
  let initialNumbersPresented = false;

  function parseNumber(value) {
    const match = String(value || '').replace(/,/g, '').match(/-?\d+(?:\.\d+)?/);
    return match ? Number(match[0]) : null;
  }

  function directNumberNode(element) {
    return [...element.childNodes].find((node) => node.nodeType === Node.TEXT_NODE && /\d/.test(node.nodeValue || '')) || null;
  }

  function animatedNumberFormatter(decimals) {
    if (!numberFormatters.has(decimals)) {
      numberFormatters.set(decimals, new Intl.NumberFormat('zh-CN', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      }));
    }
    return numberFormatters.get(decimals);
  }

  function finishNumberAnimation() {
    if (numberAnimationFrame) cancelAnimationFrame(numberAnimationFrame);
    numberAnimationFrame = 0;
    activeNumberItems.forEach((item) => {
      if (item.node.isConnected) item.node.nodeValue = item.raw;
    });
    activeNumberItems = [];
  }

  function numberAnimationItem(element) {
    if (element.dataset.dynamicNumberReady) return null;
    const node = directNumberNode(element);
    const raw = node?.nodeValue || '';
    const match = raw.match(/-?[\d,]+(?:\.\d+)?/);
    element.dataset.dynamicNumberReady = 'true';
    element.classList.add('qc-dynamic-number-in');
    if (!node || !match) return null;
    const target = Number(match[0].replace(/,/g, ''));
    if (!Number.isFinite(target)) return null;
    const decimalPart = match[0].replace(/,/g, '').split('.')[1];
    return {
      node,
      raw,
      prefix: raw.slice(0, match.index),
      suffix: raw.slice((match.index || 0) + match[0].length),
      target,
      decimals: decimalPart?.length || 0,
    };
  }

  function animateNumbers(roots, shouldAnimate) {
    const selectors = [
      '.qc-core-metric-value > strong',
      '.qc-brand-efficiency-item > strong',
      '.qc-cockpit-kpis article strong',
      '#qcRealtimeCards article strong',
      '.qc-brand-summary article strong',
      '.p2-kpi strong',
      '.p1-ew-kpis b',
      '.qc-alert-summary-card strong',
      '.qc-comparison-detail-metrics strong',
      '.qc-complaint-metric strong',
      '.qc-complaint-issue-total strong',
      '.qc-repair-outcomes strong',
    ];
    const rootList = Array.isArray(roots) ? roots : [roots];
    const elements = [...new Set(rootList.flatMap((root) => [...root.querySelectorAll(selectors.join(','))]))];
    const items = elements.map(numberAnimationItem).filter(Boolean);
    if (!items.length || !shouldAnimate || kit.reducedMotion.matches) return;

    finishNumberAnimation();
    activeNumberItems = items;
    items.forEach((item) => {
      item.node.nodeValue = `${item.prefix}${animatedNumberFormatter(item.decimals).format(0)}${item.suffix}`;
    });
    const startedAt = performance.now();
    const duration = 680;
    const step = (now) => {
      const progress = Math.min(1, (now - startedAt) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      activeNumberItems.forEach((item) => {
        if (!item.node.isConnected) return;
        const value = item.target * eased;
        item.node.nodeValue = `${item.prefix}${animatedNumberFormatter(item.decimals).format(value)}${item.suffix}`;
      });
      if (progress < 1) {
        numberAnimationFrame = requestAnimationFrame(step);
        return;
      }
      finishNumberAnimation();
    };
    numberAnimationFrame = requestAnimationFrame(step);
  }

  function animateProgress() {
    // Bar and column entry motion is owned by QCChartMotion. Keeping this hook
    // intentionally empty avoids width/height resets, forced layout and duplicate animation.
  }

  function fadeRows(root, shouldAnimate) {
    const selector = [
      '.qc-ranking-rows > article',
      '.qc-brand-table-row:not(.head)',
      '.qc-alert-row',
      '.qc-weekly-warehouse-grid > article',
      '.p2-brand-compare-table > article',
      '.p2-category-ranking > article',
      '.p2-month > div:not(.head)',
      '.p2-workload-matrix-body > div',
      '.qc-repair-effective-table-row',
    ].join(',');
    root.querySelectorAll(selector).forEach((row, index) => {
      if (row.dataset.dynamicRowReady) return;
      row.dataset.dynamicRowReady = 'true';
      if (!shouldAnimate || kit.reducedMotion.matches) return;
      row.style.setProperty('--dynamic-row-delay', `${Math.min(index * 8, 64)}ms`);
      row.classList.add('qc-dynamic-row-in');
    });
  }

  function chartElement(className, label) {
    const element = document.createElement('div');
    element.className = `qc-echart ${className}`;
    element.setAttribute('role', 'img');
    element.setAttribute('aria-label', label);
    return element;
  }

  function mountRealtimeValueMotion(element, chart, dateLabels, series, finalOption) {
    const layer = document.createElement('div');
    layer.className = 'qc-realtime-value-motion-layer';
    layer.setAttribute('aria-hidden', 'true');
    series.forEach((item, seriesIndex) => {
      item.data.forEach((value, dataIndex) => {
        if (!Number.isFinite(Number(value))) return;
        const pixel = chart.convertToPixel(
          { xAxisIndex: 0, yAxisIndex: 0 },
          [dateLabels[dataIndex], Number(value)],
        );
        if (!Array.isArray(pixel) || !pixel.every(Number.isFinite)) return;
        const label = document.createElement('span');
        label.className = 'qc-realtime-value-pop';
        label.textContent = Number(value).toLocaleString('zh-CN');
        label.style.left = `${pixel[0]}px`;
        label.style.top = `${pixel[1] + (seriesIndex % 2 === 0 ? -14 : 16)}px`;
        label.style.setProperty('--qc-value-color', item.color || kit.PALETTE[seriesIndex]);
        label.style.setProperty('--qc-value-delay', `${220 + dataIndex * 110 + seriesIndex * 24}ms`);
        layer.append(label);
      });
    });
    element.append(layer);
    setTimeout(() => {
      if (!element.isConnected || chart.isDisposed?.()) return;
      chart.setOption(finalOption, { notMerge: false, lazyUpdate: false });
      requestAnimationFrame(() => layer.remove());
    }, 1480);
  }

  function enhanceRealtimeTrend(root, shouldAnimate) {
    root.querySelectorAll('.qc-realtime-line-chart:not([data-dynamic-ready])').forEach((container) => {
      const svg = container.querySelector('svg');
      if (!svg) return;
      const points = [...svg.querySelectorAll('circle[data-qc-trend-date][data-qc-trend-label]')];
      if (!points.length) return;
      const dates = [...new Set(points.map((point) => point.dataset.qcTrendDate))];
      const grouped = new Map();
      points.forEach((point) => {
        const label = point.dataset.qcTrendLabel;
        if (!grouped.has(label)) grouped.set(label, { name: label, color: point.style.fill || kit.PALETTE[grouped.size], values: new Map() });
        grouped.get(label).values.set(point.dataset.qcTrendDate, Number(point.dataset.qcTrendValue) || 0);
      });
      const series = [...grouped.values()].map((item) => ({
        name: item.name,
        color: item.color,
        data: dates.map((date) => item.values.get(date) ?? null),
      }));
      const element = chartElement('qc-echart-realtime', '近 7 日处理趋势动态图');
      container.dataset.dynamicReady = 'true';
      container.innerHTML = '';
      container.append(element);
      const chartKey = 'realtime-trend';
      const dateLabels = dates.map((date) => date.slice(5));
      const targetBase = kit.lineOption(dateLabels, series, { showPointLabels: true });
      const targetOption = {
        ...targetBase,
        animation: true,
        animationDuration: 1040,
        animationDurationUpdate: 980,
        animationEasing: 'cubicInOut',
        animationEasingUpdate: 'cubicOut',
        aria: { enabled: true },
        series: targetBase.series.map((item, index) => ({
          ...item,
          animationDuration: 1040,
          animationDurationUpdate: 980,
          animationEasing: 'cubicInOut',
          animationEasingUpdate: 'cubicOut',
          animationDelay: index * 70,
          animationDelayUpdate: index * 70,
        })),
      };
      const playEntryMotion = shouldAnimate && !kit.reducedMotion.matches && !charts.hasPlayed(chartKey);
      const initialSeries = series.map((item) => ({ ...item, data: item.data.map(() => 0) }));
      const initialBase = kit.lineOption(dateLabels, initialSeries, { showPointLabels: false });
      const initialOption = {
        ...initialBase,
        animation: false,
        aria: { enabled: true },
        series: initialBase.series.map((item) => ({ ...item, animation: false })),
      };
      const finalOption = {
        ...targetOption,
        animation: false,
        series: targetOption.series.map((item) => ({
          ...item,
          animation: false,
          animationDuration: 0,
          animationDurationUpdate: 0,
        })),
      };
      const motionOption = {
        ...targetOption,
        series: targetOption.series.map((item) => ({
          ...item,
          label: { ...item.label, show: false },
        })),
      };
      const staticOption = playEntryMotion ? initialOption : finalOption;
      const chart = charts.render(chartKey, element, staticOption);
      if (playEntryMotion) {
        element.dataset.dynamicEntryMotion = 'baseline-wave';
        element.dataset.dynamicValueMotion = 'left-to-right-pop';
        requestAnimationFrame(() => requestAnimationFrame(() => {
          if (!element.isConnected || !chart || chart.isDisposed?.()) return;
          chart.setOption(motionOption, { notMerge: false, lazyUpdate: false });
          requestAnimationFrame(() => {
            if (!element.isConnected || chart.isDisposed?.()) return;
            mountRealtimeValueMotion(element, chart, dateLabels, series, finalOption);
          });
        }));
      }
    });
  }

  function enhancePeopleCombo(root, shouldAnimate) {
    root.querySelectorAll('.p2-people-comparison').forEach((container) => {
      const svg = container.querySelector('.p2-people-combo-chart');
      if (!svg) return;
      const rows = [...root.querySelectorAll('.p2-efficiency-rank[data-p2-person-link]')].map((row) => {
        const amounts = row.querySelectorAll(':scope > em');
        return {
          name: row.dataset.p2PersonLink,
          output: parseNumber(amounts[0]?.textContent) || 0,
          hours: parseNumber(amounts[1]?.textContent) || 0,
          rate: parseNumber(row.querySelector('.qc-rank-score')?.textContent) || 0,
        };
      });
      if (!rows.length) return;
      const scroll = container.querySelector('.p2-combo-scroll');
      if (!scroll) return;
      const element = chartElement('qc-echart-people', '人员有效产出与综合人效组合动态图');
      element.style.minWidth = `${Math.max(560, rows.length * 54 + 86)}px`;
      container.dataset.dynamicReady = 'true';
      scroll.innerHTML = '';
      scroll.append(element);
      const targetOption = { ...kit.comboOption(rows), aria: { enabled: true } };
      const initialRows = rows.map((item) => ({ ...item, output: 0, rate: 0 }));
      const initialOption = shouldAnimate && !kit.reducedMotion.matches
        ? { ...kit.comboOption(initialRows), animation: false, aria: { enabled: true } }
        : { ...targetOption, animation: false };
      const chart = charts.render('people-combo', element, initialOption, (params) => {
        const row = [...root.querySelectorAll('.p2-efficiency-rank[data-p2-person-link]')]
          .find((item) => item.dataset.p2PersonLink === params.name);
        row?.click();
      });
      if (shouldAnimate && !kit.reducedMotion.matches) {
        requestAnimationFrame(() => requestAnimationFrame(() => {
          if (element.isConnected) chart?.setOption(targetOption, { notMerge: false, lazyUpdate: false });
        }));
      }
    });
  }

  function complaintTrendOption(dates, values, shouldAnimate) {
    const color = kit.COLORS.blue;
    const motion = shouldAnimate && !kit.reducedMotion.matches;
    const option = kit.lineOption(dates, [{
      name: '客诉率',
      color,
      data: values,
      markLine: { value: 2, label: '预警 2.0%' },
    }], { yMin: 0, yFormatter: '{value}%' });
    const trend = option.series[0];
    Object.assign(trend, {
      showSymbol: false,
      animation: motion,
      animationDuration: motion ? 1100 : 0,
      animationDurationUpdate: motion ? 640 : 0,
      animationEasing: 'cubicInOut',
      animationEasingUpdate: 'cubicOut',
      animationDelay: motion ? 90 : 0,
    });
    option.animation = motion;
    option.animationDuration = motion ? 1100 : 0;
    option.animationEasing = 'cubicInOut';
    option.series.push({
      name: '客诉率数据点',
      type: 'scatter',
      data: values,
      symbol: 'circle',
      symbolSize: 8,
      silent: true,
      tooltip: { show: false },
      itemStyle: { color, borderColor: '#fff', borderWidth: 1.5, shadowColor: 'rgba(40,120,232,.24)', shadowBlur: 7 },
      z: 5,
      animation: motion,
      animationDuration: motion ? 360 : 0,
      animationDurationUpdate: 0,
      animationEasing: 'backOut',
      animationDelay: motion ? (index) => 620 + Math.min(index * 55, 440) : 0,
    });
    return { ...option, aria: { enabled: true } };
  }

  function enhanceP2ComplaintTrend(root, shouldAnimate) {
    root.querySelectorAll('.p2-trend:not([data-dynamic-ready])').forEach((source) => {
      const rows = [...source.querySelectorAll(':scope > div > article')];
      const dates = rows.map((row) => row.querySelector('span')?.textContent?.trim() || '');
      const values = rows.map((row) => parseNumber(row.querySelector('strong')?.textContent));
      if (!rows.length || values.every((value) => value === null)) return;
      const element = chartElement('qc-echart-complaint', '客诉率趋势动态图，红色虚线为 2% 预警线');
      source.dataset.dynamicReady = 'true';
      source.classList.add('qc-dynamic-source-hidden');
      source.insertAdjacentElement('afterend', element);
      if (shouldAnimate && !kit.reducedMotion.matches) element.classList.add('qc-complaint-trend-entering');
      charts.render('complaint-trend', element, complaintTrendOption(dates, values, shouldAnimate));
    });
  }

  function enhanceComplaintDonut(root) {
    root.querySelectorAll('.p2-donut-wrap:not([data-dynamic-ready])').forEach((wrap) => {
      const source = wrap.querySelector('.p2-donut');
      const legendRows = [...wrap.querySelectorAll('.p2-donut-legend > div')];
      const rows = legendRows.map((row, index) => ({
        name: row.querySelector('span')?.textContent?.trim() || `分类 ${index + 1}`,
        value: parseNumber(row.querySelector('b')?.textContent),
        itemStyle: { color: row.querySelector('i')?.style.background || kit.PALETTE[index % kit.PALETTE.length] },
      })).filter((item) => item.value !== null);
      if (!source || !rows.length) return;
      const total = rows.reduce((sum, item) => sum + item.value, 0);
      const label = source.querySelector('small')?.textContent?.trim().replace(/\s+/g, ' ') || '总客诉';
      const element = chartElement('qc-echart-donut', `客诉问题结构动态图，总计 ${total} 件`);
      wrap.dataset.dynamicReady = 'true';
      source.replaceWith(element);
      charts.render('complaint-donut', element, { ...kit.pieOption(rows, total, label), aria: { enabled: true } });
    });
  }
  function enhanceLegacyComplaintTrend(root, shouldAnimate) {
    root.querySelectorAll('.qc-complaint-trend-chart:not([data-dynamic-ready])').forEach((source) => {
      const rows = [...source.querySelectorAll('.qc-complaint-bars article')];
      const dates = [...source.querySelectorAll('.qc-complaint-trend-axis span')].map((item) => item.textContent.trim());
      const values = rows.map((row) => parseNumber(row.querySelector('strong')?.textContent));
      if (!rows.length || values.every((value) => value === null)) return;
      const element = chartElement('qc-echart-complaint', '客诉率趋势动态图，红色虚线为 2% 预警线');
      source.dataset.dynamicReady = 'true';
      source.classList.add('qc-dynamic-source-hidden');
      source.insertAdjacentElement('afterend', element);
      if (shouldAnimate && !kit.reducedMotion.matches) element.classList.add('qc-complaint-trend-entering');
      charts.render('complaint-trend-legacy', element, complaintTrendOption(dates, values, shouldAnimate));
    });
  }

  function enhanceAll() {
    enhancementTimer = 0;
    const shellRoot = document.querySelector('#qc');
    if (!shellRoot) return;
    const view = typeof qcState !== 'undefined' ? qcState?.view : '';
    const visibleRoots = view
      ? [...shellRoot.querySelectorAll(`[data-qc-view-section="${view}"]:not([hidden])`)]
      : [];
    const roots = visibleRoots.length ? visibleRoots : [shellRoot];
    const hasEntryContent = roots.some((root) => root.querySelector([
      '.qc-core-metric-value > strong',
      '.qc-brand-efficiency-item > strong',
      '.qc-cockpit-kpis article strong',
      '#qcRealtimeCards article strong',
      '.qc-horizontal-bars article > div i',
      '.qc-vertical-bars article > div i',
      '.qc-ranking-rows > article',
      '.p2-people-comparison',
      '.p2-trend',
      '.qc-complaint-trend-chart',
      '.qc-complaint-metric strong',
    ].join(',')));
    const entryRequested = view !== lastEnhancedView
      || pendingEntryView === view
      || roots.some((root) => root.classList.contains('qc-dynamic-entry-pending'));
    const shouldAnimate = entryRequested && hasEntryContent;
    if (shouldAnimate) window.QCAnimationTiming?.markViewEntry?.(view);
    charts.prune();
    animateNumbers(roots, shouldAnimate && initialNumbersPresented);
    roots.forEach((root) => {
      animateProgress(root, shouldAnimate);
      fadeRows(root, shouldAnimate);
      enhanceRealtimeTrend(root, shouldAnimate);
      enhancePeopleCombo(root, shouldAnimate);
      enhanceP2ComplaintTrend(root, shouldAnimate);
      enhanceComplaintDonut(root);
      enhanceLegacyComplaintTrend(root, shouldAnimate);
    });
    if (shouldAnimate) {
      roots.forEach((root) => root.classList.remove('qc-dynamic-entry-pending'));
      if (pendingEntryView === view) pendingEntryView = '';
    }
    if (hasEntryContent) {
      lastEnhancedView = view;
      initialNumbersPresented = true;
    }
  }

  function prepareViewEntry(view) {
    if (!view) return;
    pendingEntryView = view;
    const root = document.querySelector('#qc');
    root?.querySelectorAll(`[data-qc-view-section="${view}"]`).forEach((section) => section.classList.add('qc-dynamic-entry-pending'));
  }

  function mountViewTransition() {
    const original = window.qcSetBusinessView;
    if (typeof original !== 'function' || original.qcDynamicWrapped) return;
    const wrapped = function dynamicSetBusinessView(view, options = {}) {
      const currentView = typeof qcState !== 'undefined' ? qcState?.view : '';
      if (view && view !== currentView) prepareViewEntry(view);
      return original.call(this, view, options);
    };
    wrapped.qcDynamicWrapped = true;
    window.qcSetBusinessView = wrapped;
  }

  function scheduleEnhance() {
    if (enhancementTimer) cancelAnimationFrame(enhancementTimer);
    enhancementTimer = requestAnimationFrame(enhanceAll);
  }

  function mountControls() {
    if (document.querySelector('.qc-dynamic-controls')) return;
    const host = document.querySelector('.qc-filter-presets') || document.querySelector('.qc-filter-panel');
    if (!host) return;
    const controls = document.createElement('div');
    const refreshLabel = config.triggers.timer ? '每日自动刷新' : '数据每日更新';
    controls.className = 'qc-dynamic-controls';
    controls.innerHTML = `
      <span class="qc-dynamic-status" role="status" aria-live="polite"><i aria-hidden="true"></i><b>${refreshLabel}</b><em>自动轮询已暂停</em></span>
      ${config.triggers.manual ? '<button type="button" data-dynamic-refresh>立即刷新</button>' : ''}
      ${config.triggers.timer ? '<button type="button" data-dynamic-pause aria-pressed="false">暂停</button>' : ''}
    `;
    host.append(controls);
    controls.querySelector('[data-dynamic-refresh]')?.addEventListener('click', () => service.refresh('manual'));
    controls.querySelector('[data-dynamic-pause]')?.addEventListener('click', (event) => {
      const paused = event.currentTarget.getAttribute('aria-pressed') === 'true';
      if (paused) service.resume();
      else service.pause();
      event.currentTarget.setAttribute('aria-pressed', String(!paused));
      event.currentTarget.textContent = paused ? '暂停' : '继续';
    });
  }

  function setStatus(state, detail = '') {
    mountControls();
    const status = document.querySelector('.qc-dynamic-status');
    if (!status) return;
    status.dataset.state = state;
    const title = status.querySelector('b');
    const meta = status.querySelector('em');
    const refreshLabel = config.triggers.timer ? '每日自动刷新' : '数据每日更新';
    const labels = {
      loading: '正在刷新真实数据',
      success: refreshLabel,
      error: '刷新失败',
      paused: '自动刷新已暂停',
      hidden: '页面隐藏，刷新暂停',
      running: refreshLabel,
    };
    title.textContent = labels[state] || labels.running;
    meta.textContent = detail;
  }

  service.on('state', ({ state }) => {
    if (state === 'loading') setStatus('loading', '读取中');
    else if (state === 'hidden') setStatus('hidden', '返回页面后自动恢复');
    else if (state === 'paused') setStatus('paused', '保留当前真实数据');
    else if (state === 'running') setStatus('running', '已恢复');
  });
  service.on('update', ({ changed, at }) => {
    const time = new Date(at).toLocaleTimeString('zh-CN', { hour12: false });
    setStatus('success', `${time}${changed ? ' 已更新' : ' 无变化'}`);
  });
  service.on('error', ({ error }) => setStatus('error', error?.message || '保留当前真实数据'));

  function boot() {
    mountViewTransition();
    prepareViewEntry(typeof qcState !== 'undefined' ? qcState?.view : 'overview');
    mountControls();
    if (!config.triggers.timer) setStatus('paused', '由每日数据任务维护');
    scheduleEnhance();
    const root = document.querySelector('#qc');
    if (root) new MutationObserver(scheduleEnhance).observe(root, { childList: true, subtree: true, attributes: true, attributeFilter: ['hidden'] });
    const waitForData = () => {
      if (typeof qcState !== 'undefined' && qcState?.data) service.start();
      else setTimeout(waitForData, 250);
    };
    waitForData();
  }

  window.qcDynamicDashboard = {
    service,
    charts,
    refresh: () => service.refresh('manual'),
    pause: () => service.pause(),
    resume: () => service.resume(),
    attachWebSocket: (socket) => service.attachWebSocket(socket),
    enhance: enhanceAll,
    config,
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, { once: true });
  else boot();
})();
