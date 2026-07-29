(() => {
  'use strict';

  const REDESIGN_VIEWS = {
    overview: ['对比驾驶舱', '横向看品牌内模块 · 纵向看同模块三品牌 · 矩阵交叉定位'],
    realtime: ['实时作业', '当前作业量、效率与异常实时监控'],
    people: ['人员分析', '在岗时长、人效、产能与质量表现'],
    brands: ['品牌分析', '三品牌同表对比 · 点击模块下钻明细'],
    quality: ['质量分析', '大货质检、销退质检、返修与大货质量诊断'],
    complaint: ['客诉分析', '客诉率、问题结构与品牌趋势'],
    alerts: ['异常中心', '统一发现、分派、跟进与关闭品控异常'],
  };
  const REDESIGN_MODULES = [
    { key: 'largeQc', label: '大货质检', higherBetter: true, target: 'realtime' },
    { key: 'returnQc', label: '销退质检', higherBetter: true, target: 'quality' },
    { key: 'abnormal', label: '异常件质检', field: 'ab', higherBetter: false, target: 'alerts' },
    { key: 'repair', label: '进返修间', field: 'rrp', higherBetter: false, target: 'quality' },
    { key: 'packing', label: '包装', field: 'pk', higherBetter: true, target: 'realtime' },
    { key: 'bigGoods', label: '大货', field: 'bg', higherBetter: true, target: 'quality' },
  ];
  const REDESIGN_BRAND_COLUMNS = [
    { key: 'qc', label: '质检合计', target: 'realtime' },
    { key: 'returnQc', label: '销退质检', target: 'quality' },
    { key: 'vipQc', label: '唯品会质检', target: 'quality' },
    { key: 'abnormalQc', label: '异常件质检', target: 'alerts', adverse: true },
    { key: 'offShelfQc', label: '下架质检', target: 'quality', adverse: true },
    { key: 'repairQc', label: '返修质检', target: 'quality', adverse: true },
    { key: 'repair', label: '进返修间', target: 'quality', adverse: true },
    { key: 'packing', label: '包装', target: 'realtime' },
    { key: 'bigGoods', label: '大货', target: 'quality' },
  ];
  const REDESIGN_QUALITY_BREAKDOWN = [
    { key: 'largeQc', label: '大货质检', source: 'Base lq：大货质检数量', icon: 'quality', color: '#176ff2' },
    { key: 'returnQc', label: '销退质检', source: 'Base rq/ret：销退质检数量', icon: 'quality', color: '#10a37f' },
    { key: 'vipQc', label: '唯品会质检', source: 'Base vp：唯品会质检数量', icon: 'quality', color: '#7b61d1' },
    { key: 'offShelfQc', label: '下架质检', source: 'Base os：下架质检数量', icon: 'quality', color: '#f29a22' },
    { key: 'repairQc', label: '返修质检', source: 'Base rqc：返修质检数量，不等于进返修间', icon: 'repair', color: '#805ad5', adverse: true },
    { key: 'abnormalQc', label: '异常件质检', source: 'Base ab：异常件质检数量，非周报客诉异常口径', icon: 'alert', color: '#e85a60', adverse: true },
  ];
  let redesignUrlRestored = false;
  let cockpitBrand = '周淼';
  let cockpitModule = 'largeQc';
  let selectedAlertIndex = 0;

  function redesignInstallShell() {
    document.body.classList.add('qc-redesign-enabled');
    QC_WORKSPACE_LABELS.overview = '对比驾驶舱';
    const overviewPinned = WORKSPACE_PINNED_TABS.find((tab) => tab.page === 'qc' && tab.view === 'overview');
    if (overviewPinned) overviewPinned.label = '对比驾驶舱';
    document.querySelectorAll('[data-qc-view="overview"],[data-qc-side-view="overview"]').forEach((item) => { item.textContent = '对比驾驶舱'; });

    const intro = document.querySelector('#qc .qc-intro');
    if (intro) intro.dataset.qcViewSection = 'overview';
    const filter = document.querySelector('#qc .qc-filter-panel');
    if (filter) {
      filter.classList.add('qc-global-filter');
      const startLabel = document.querySelector('#qcStartDate')?.closest('label');
      const endLabel = document.querySelector('#qcEndDate')?.closest('label');
      const compareLabel = document.querySelector('#qcCompareMode')?.closest('label');
      const brandField = document.querySelector('#qcBrandFilter')?.closest('.qc-filter-field');
      const personLabel = document.querySelector('#qcPersonFilter')?.closest('label');
      startLabel?.classList.add('qc-filter-start');
      endLabel?.classList.add('qc-filter-end');
      brandField?.classList.add('qc-filter-brand');
      personLabel?.classList.add('qc-filter-person');
      compareLabel?.classList.add('qc-filter-compare');
      const presets = filter.querySelector('.qc-filter-presets');
      if (presets && !presets.querySelector('.qc-redesign-presets')) {
        presets.insertAdjacentHTML('afterbegin', `<div class="qc-redesign-presets"><button type="button" data-qc-redesign-range="latestDay">今日</button><button type="button" data-qc-redesign-range="currentWeek">本周</button><button type="button" data-qc-redesign-range="previousWeek">上周</button><button type="button" data-qc-redesign-range="custom">自定义区间</button></div><span class="qc-filter-synced"><i class="ui-line-icon icon-sync has-svg" aria-hidden="true">${redesignBusinessIcon('sync')}</i>筛选已同步到 URL</span>`);
      }
    }

    if (filter && !document.querySelector('#qcCockpit')) {
      filter.insertAdjacentHTML('afterend', `
        <section class="qc-section qc-cockpit" id="qcCockpit" data-qc-view-section="overview" aria-labelledby="qcCockpitTitle">
          <header class="qc-cockpit-head"><div><span>品控统一入口</span><h2 id="qcCockpitTitle">品控对比驾驶舱</h2><p>横向看品牌内模块 · 纵向看同模块三品牌 · 矩阵交叉定位</p></div><em id="qcCockpitRange"></em></header>
          <div id="qcCockpitKpis" class="qc-cockpit-kpis"></div>
          <div class="qc-cockpit-views">
            <article class="qc-cockpit-card"><div class="qc-cockpit-card-head"><div><strong>品牌 × 模块矩阵</strong><span>颜色按列内排名（绿优红差）</span></div><i>①</i></div><div id="qcCockpitMatrix"></div></article>
            <article class="qc-cockpit-card"><div class="qc-cockpit-card-head"><div><strong>横向对比 · 同品牌各模块</strong><span>每个模块单独归一：100% = 三品牌该模块最高量（非完成率）</span></div><i>②</i></div><label class="qc-cockpit-select">品牌<select id="qcCockpitBrand"><option>鹭青一</option><option selected>周淼</option><option>陈陈</option></select></label><div id="qcCockpitHorizontal"></div></article>
            <article class="qc-cockpit-card"><div class="qc-cockpit-card-head"><div><strong>纵向对比 · 同模块三品牌</strong><span>柱高 = 该品牌件数</span></div><i>③</i></div><label class="qc-cockpit-select">模块<select id="qcCockpitModule"></select></label><div id="qcCockpitVertical"></div></article>
          </div>
          <div id="qcCockpitDrill" class="qc-cockpit-drill"></div>
          <aside class="qc-auto-insight"><div><span>本周自动洞察</span><strong id="qcAutoInsightTitle">正在计算</strong></div><ol id="qcAutoInsights"></ol></aside>
          <footer class="qc-cockpit-actions"><button type="button" class="primary" data-qc-cockpit-action="report">生成本周报告</button><button type="button" data-qc-cockpit-action="push">推送品控主管</button><button type="button" data-qc-cockpit-action="excel">导出 Excel</button><span>下次自动刷新：周五 09:00</span></footer>
        </section>`);
    }

    redesignInstallControlDock();

    redesignInstallLocalBrandBar('realtime', '#qcRealtimeTitle', ['作业模块：全部模块', '班组：全部班组', '刷新：5 分钟']);
    redesignInstallLocalBrandBar('quality', '#qcQualityTitle', ['质量模块：全部模块', '问题类型：全部类型', '严重程度：全部']);
    redesignInstallLocalBrandBar('complaint', '#qcComplaintTitle', ['统计粒度：周度', '客诉类型：全部类型', '渠道：全部渠道']);
    redesignInstallLocalBrandBar('alerts', '#qcAlertCenterTitle', ['异常来源：全部来源', '处理状态：未关闭', '责任人：全部']);

    const brandGroups = document.querySelector('#qcBrandGroups');
    if (brandGroups && !document.querySelector('#qcBrandComparison')) {
      brandGroups.insertAdjacentHTML('afterend', '<div id="qcBrandComparison" class="qc-brand-comparison"></div>');
    }
    const realtimeCards = document.querySelector('#qcRealtimeCards');
    if (realtimeCards && !document.querySelector('#qcRealtimeAnalysis')) realtimeCards.insertAdjacentHTML('afterend', '<div id="qcRealtimeAnalysis" class="qc-redesign-analysis-grid"></div>');
    const peopleHead = document.querySelector('#qcEfficiencyTitle')?.closest('.qc-section-head');
    if (peopleHead && !document.querySelector('#qcPeopleOverview')) peopleHead.insertAdjacentHTML('afterend', '<div id="qcPeopleOverview" class="qc-redesign-summary-strip"></div>');
    const complaintSummary = document.querySelector('#qcComplaintSummary');
    if (complaintSummary && !document.querySelector('#qcComplaintTrend')) complaintSummary.insertAdjacentHTML('afterend', '<article class="qc-data-card qc-redesign-complaint-trend"><div class="qc-card-title"><strong>客诉率趋势</strong><span>当前全局品牌与日期范围</span></div><div id="qcComplaintTrend"></div></article>');
    const alertSummary = document.querySelector('#qcAlertSummary');
    if (alertSummary && !document.querySelector('#qcAlertWorkbench')) alertSummary.insertAdjacentHTML('afterend', '<div id="qcAlertWorkbench" class="qc-alert-workbench"></div>');

    redesignBindEvents();
    redesignUpdateViewHeading();
  }

  function redesignInstallControlDock() {
    const nav = document.querySelector('#qcBusinessNav');
    const filter = document.querySelector('#qc .qc-global-filter');
    if (!nav || !filter) return;
    let dock = document.querySelector('#qcControlDock');
    if (!dock) {
      nav.insertAdjacentHTML('beforebegin', '<section class="qc-control-dock" id="qcControlDock" aria-label="品控导航与筛选"><button type="button" class="qc-control-toggle" id="qcControlToggle" aria-expanded="false" aria-controls="qcControlContent"><i aria-hidden="true">☰</i><span><strong>页面导航与筛选</strong><em id="qcControlSummary">当前筛选条件</em></span><b>展开</b></button><div class="qc-control-content" id="qcControlContent"></div></section>');
      dock = document.querySelector('#qcControlDock');
      const stored = localStorage.getItem('qcControlDockCollapsed');
      redesignSetControlDock(stored === null ? true : stored !== 'false', false);
    }
    const content = dock.querySelector('#qcControlContent');
    if (nav.parentElement !== content) content.append(nav);
    if (filter.parentElement !== content) content.append(filter);
  }

  function redesignSetControlDock(collapsed, persist = true) {
    const dock = document.querySelector('#qcControlDock');
    const toggle = document.querySelector('#qcControlToggle');
    if (!dock || !toggle) return;
    dock.classList.toggle('is-collapsed', collapsed);
    toggle.setAttribute('aria-expanded', String(!collapsed));
    const label = toggle.querySelector('b');
    if (label) label.textContent = collapsed ? '展开' : '收起';
    if (persist) localStorage.setItem('qcControlDockCollapsed', String(collapsed));
  }

  function redesignUpdateControlDockSummary() {
    const summary = document.querySelector('#qcControlSummary');
    if (!summary || !qcState?.data) return;
    const person = document.querySelector('#qcPersonFilter')?.selectedOptions?.[0]?.textContent || '全部人员';
    const compare = document.querySelector('#qcCompareMode')?.selectedOptions?.[0]?.textContent || '无对比';
    summary.textContent = `${qcState.start} 至 ${qcState.end} · ${qcBrandLabel()} · ${person} · ${compare}`;
  }
  function redesignInstallLocalBrandBar(view, titleSelector, extras) {
    const section = document.querySelector(titleSelector)?.closest('[data-qc-view-section]');
    const head = section?.querySelector('.qc-section-head');
    if (!section || !head || section.querySelector('[data-qc-local-bar]')) return;
    head.insertAdjacentHTML('afterend', `<div class="qc-local-filter-bar" data-qc-local-bar="${view}"><details class="qc-local-brand"><summary><span>品牌（多选）</span><strong data-qc-local-summary>全部品牌</strong></summary><div class="qc-local-brand-menu"><div><button type="button" data-qc-local-action="all">全部品牌</button><button type="button" data-qc-local-action="main3">三品牌</button></div><div data-qc-local-options></div></div></details><span class="qc-local-sync"><i class="ui-line-icon icon-sync has-svg" aria-hidden="true">${redesignBusinessIcon('sync')}</i>已与全局同步</span>${extras.map((item) => `<em>${item}</em>`).join('')}</div>`);
  }

  function redesignRestoreUrl() {
    if (redesignUrlRestored || !qcState?.data) return;
    redesignUrlRestored = true;
    const params = new URLSearchParams(window.location.search);
    const within = (value) => value && value >= qcState.data.availableRange.start && value <= qcState.data.availableRange.end;
    if (within(params.get('qcs'))) qcState.start = params.get('qcs');
    if (within(params.get('qce'))) qcState.end = params.get('qce');
    if (qcState.start > qcState.end) [qcState.start, qcState.end] = [qcState.end, qcState.start];
    const brands = (params.get('qcb') || '').split('|').filter((brand) => QC_MAIN_BRANDS.includes(brand));
    if (brands.length) qcState.brands = brands;
    const person = params.get('qcp');
    if (person) qcState.person = person;
    const compare = params.get('qcc');
    if (['previousPeriod', 'previousDay', 'previousMonth', 'custom', 'none'].includes(compare)) qcState.compareMode = compare;
    if (within(params.get('qccs'))) qcState.compareStart = params.get('qccs');
    if (within(params.get('qcce'))) qcState.compareEnd = params.get('qcce');
    const view = params.get('qcv');
    if (REDESIGN_VIEWS[view]) qcState.view = view;
    qcSyncModuleRanges();
  }

  function redesignPersistUrl() {
    redesignUpdateControlDockSummary();
    if (!qcState?.data || state.page !== 'qc') return;
    const params = new URLSearchParams(window.location.search);
    params.set('qcs', qcState.start);
    params.set('qce', qcState.end);
    params.set('qcc', qcState.compareMode);
    params.set('qcv', qcState.view);
    if (qcState.brands.length) params.set('qcb', qcState.brands.join('|')); else params.delete('qcb');
    if (qcState.person && qcState.person !== 'all') params.set('qcp', qcState.person); else params.delete('qcp');
    if (qcState.compareMode === 'custom') {
      params.set('qccs', qcState.compareStart || '');
      params.set('qcce', qcState.compareEnd || '');
    } else {
      params.delete('qccs');
      params.delete('qcce');
    }
    const query = params.toString();
    history.replaceState(null, '', `${window.location.pathname}${query ? `?${query}` : ''}#qc`);
  }

  function redesignUpdateViewHeading() {
    const meta = REDESIGN_VIEWS[qcState?.view || 'overview'] || REDESIGN_VIEWS.overview;
    const title = document.querySelector('#pageTitle');
    if (title && state.page === 'qc') title.textContent = meta[0];
    const intro = document.querySelector('#qc .qc-page-title h1');
    const introLabel = document.querySelector('#qc .qc-page-title > div > span');
    if (intro) intro.textContent = meta[0];
    if (introLabel) introLabel.textContent = '品控中心 / ' + meta[0];
    document.querySelectorAll('.qc-business-nav [data-qc-view]').forEach((button) => {
      if (button.dataset.qcView === 'overview') button.textContent = '对比驾驶舱';
    });
  }

  function redesignKnownBrands() {
    const source = [...document.querySelectorAll('[data-qc-brand-value]')].map((input) => input.dataset.qcBrandValue).filter(Boolean);
    return [...new Set([...QC_MAIN_BRANDS, ...source])];
  }

  function redesignRenderLocalBrandBars() {
    const brands = redesignKnownBrands();
    document.querySelectorAll('[data-qc-local-bar]').forEach((bar) => {
      const summary = bar.querySelector('[data-qc-local-summary]');
      if (summary) summary.textContent = qcBrandLabel();
      const options = bar.querySelector('[data-qc-local-options]');
      if (!options) return;
      options.innerHTML = brands.map((brand) => `<label><input type="checkbox" data-qc-local-brand="${qcEscape(brand)}" ${qcState.brands.includes(brand) ? 'checked' : ''}/><span>${qcEscape(brand)}</span></label>`).join('');
    });
  }

  function redesignSetBrands(brands) {
    qcState.brands = [...new Set(brands.filter(Boolean))];
    qcState.person = 'all';
    qcState.repairPerson = 'all';
    qcState.complaintBrand = qcState.brands.length === 1 ? qcState.brands[0] : 'all';
    renderQCDashboard();
  }

  function redesignBindEvents() {
    const root = document.querySelector('#qc');
    if (!root || root.dataset.redesignBound === 'true') return;
    root.dataset.redesignBound = 'true';
    root.addEventListener('click', (event) => {
      if (!event.target.closest('#qcBrandCellPopover, [data-qc-cell-module]')) {
        redesignCloseBrandCellPopover();
      }
      const popoverClose = event.target.closest('[data-qc-cell-close]');
      if (popoverClose) {
        redesignCloseBrandCellPopover();
        return;
      }
      const popoverGo = event.target.closest('[data-qc-popover-go]');
      if (popoverGo) {
        const brand = popoverGo.dataset.qcBrandName;
        const target = popoverGo.dataset.qcBrandDetail;
        redesignCloseBrandCellPopover();
        redesignSetBrands(brand === '合计' ? [] : [brand]);
        qcSetBusinessView(target);
        return;
      }      const controlToggle = event.target.closest('#qcControlToggle');
      if (controlToggle) {
        const dock = document.querySelector('#qcControlDock');
        redesignSetControlDock(!dock?.classList.contains('is-collapsed'));
        return;
      }
      if (event.target.closest('#qcBusinessNav [data-qc-view]')) {
        queueMicrotask(() => redesignSetControlDock(true));
      }
      const preset = event.target.closest('[data-qc-redesign-range]');
      if (preset) {
        const key = preset.dataset.qcRedesignRange;
        if (key === 'custom') {
          document.querySelector('#qcStartDate')?.focus();
          return;
        }
        const range = qcQuickRange(key);
        if (range) {
          qcState.start = range.start;
          qcState.end = range.end;
          qcSyncModuleRanges();
          renderQCDashboard();
        }
        return;
      }
      const localAction = event.target.closest('[data-qc-local-action]');
      if (localAction) {
        const all = redesignKnownBrands();
        redesignSetBrands(localAction.dataset.qcLocalAction === 'main3' ? QC_MAIN_BRANDS.filter((brand) => all.includes(brand)) : []);
        return;
      }
      const matrixCell = event.target.closest('[data-qc-matrix-target]');
      if (matrixCell) {
        const brand = matrixCell.dataset.qcMatrixBrand;
        redesignSetBrands(brand === '全部' ? [] : [brand]);
        qcSetBusinessView(matrixCell.dataset.qcMatrixTarget);
        return;
      }
      const tableCell = event.target.closest('.qc-brand-table-row:not(.head) [data-qc-cell-module]');
      if (tableCell) {
        redesignOpenBrandCellPopover(tableCell);
        return;
      }
      const drill = event.target.closest('[data-qc-drill-view]');
      if (drill) {
        qcSetBusinessView(drill.dataset.qcDrillView);
        return;
      }
      const tableLink = event.target.closest('[data-qc-brand-detail]');
      if (tableLink) {
        const brand = tableLink.dataset.qcBrandName;
        redesignSetBrands(brand === '合计' ? [] : [brand]);
        qcSetBusinessView(tableLink.dataset.qcBrandDetail);
        return;
      }
      const action = event.target.closest('[data-qc-cockpit-action]');
      if (action) redesignRunAction(action.dataset.qcCockpitAction);
      const alertRow = event.target.closest('[data-qc-redesign-alert-index]');
      if (alertRow) {
        selectedAlertIndex = Number(alertRow.dataset.qcRedesignAlertIndex) || 0;
        redesignRenderAlertWorkbench();
      }
    });
    root.addEventListener('change', (event) => {
      if (event.target.matches('[data-qc-local-brand]')) {
        const bar = event.target.closest('[data-qc-local-bar]');
        redesignSetBrands([...bar.querySelectorAll('[data-qc-local-brand]:checked')].map((input) => input.dataset.qcLocalBrand));
      }
      if (event.target.id === 'qcCockpitBrand') {
        cockpitBrand = event.target.value;
        redesignRenderCockpit();
      }
      if (event.target.id === 'qcCockpitModule') {
        cockpitModule = event.target.value;
        redesignRenderCockpit();
      }
    });
    root.addEventListener('pointerover', (event) => {
      const cell = event.target.closest('.qc-brand-table [data-col]');
      const table = cell?.closest('.qc-brand-table');
      if (!cell || !table) return;
      table.querySelectorAll('.is-col-hover').forEach((item) => item.classList.remove('is-col-hover'));
      table.querySelectorAll(`[data-col="${cell.dataset.col}"]`).forEach((item) => item.classList.add('is-col-hover'));
    });
    root.addEventListener('pointerleave', () => {
      root.querySelectorAll('.is-col-hover').forEach((item) => item.classList.remove('is-col-hover'));
    }, true);
    root.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') redesignCloseBrandCellPopover();
    });
    root.addEventListener('scroll', (event) => {
      if (event.target.closest?.('.qc-brand-table-wrap')) redesignCloseBrandCellPopover();
    }, true);
    window.addEventListener('resize', redesignCloseBrandCellPopover);
  }

  function redesignMetricRows(brand, range = { start: qcState.start, end: qcState.end }) {
    return qcFilterRows(qcState.data.capacity, range, { brand: false }).filter((row) => !brand || row.b === brand);
  }

  function redesignMetricValue(rows, module) {
    if (module.field) return qcSum(rows, module.field);
    const metrics = qcCapacityMetrics(rows);
    return Number(metrics[module.key]) || 0;
  }

  function redesignTrend(value, previous, adverse = false) {
    if (!previous) return { text: value ? '新增' : '—', tone: 'flat' };
    const change = (value - previous) / previous;
    const good = adverse ? change <= 0 : change >= 0;
    return { text: `${change > 0 ? '+' : ''}${Math.round(change * 1000) / 10}%`, tone: good ? 'good' : 'risk' };
  }

  const REDESIGN_MODULE_NOTES = {
    '质检合计': 'Base q：质检总产出口径；拆分需看大货/销退/唯品会/下架/返修/异常件质检。',
    '大货质检': '大货质检件数，来自品控产能汇总字段 lq。',
    '销退质检': '销退质检件数，进入质量分析可继续查看质量口径。',
    '唯品会质检': '唯品会质检件数，进入质量分析可继续查看质量口径。',
    '异常件质检': '异常件质检数量，进入异常中心可查看跟进状态；非周报客诉异常口径。',
    '下架质检': '下架质检数量，进入质量分析可查看问题分布。',
    '返修质检': '返修质检数量，来自品控产能汇总字段 rqc；不同于进返修间数量。',
    '进返修间': '进返修间数量，来自品控产能汇总字段 rrp；不要与返修质检 rqc 混用。',
    '包装': '包装处理件数，进入实时作业可查看负荷与趋势。',
    '大货': '大货处理件数，进入质量分析可查看抽检与问题。',
  };

  function redesignBusinessIcon(name) {
    const paths = {
      overview: '<rect x="4" y="4" width="6" height="7" rx="1.5"/><rect x="14" y="4" width="6" height="7" rx="1.5"/><rect x="4" y="15" width="6" height="5" rx="1.5"/><rect x="14" y="15" width="6" height="5" rx="1.5"/>',
      inspect: '<path d="M7 3.8h7.6l2.4 2.4V20a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 20V5.3A1.5 1.5 0 0 1 7 3.8Z"/><path d="M14.5 4v3h3"/><path d="M8.5 11h7"/><path d="M8.5 15h7"/><path d="M8.5 18h4"/>',
      realtime: '<rect x="4" y="4" width="6" height="6" rx="1.4"/><rect x="14" y="4" width="6" height="6" rx="1.4"/><rect x="4" y="14" width="6" height="6" rx="1.4"/><rect x="14" y="14" width="6" height="6" rx="1.4"/><path d="M7 10v4M17 10v4M10 7h4M10 17h4"/>',
      trend: '<path d="M3.5 18.5h17"/><path d="M5 16l4.2-4 3.5 2.6L19 7"/><path d="M15 7h4v4"/>',
      module: '<path d="M12 3.5 20.5 8 12 12.5 3.5 8Z"/><path d="M20.5 12 12 16.5 3.5 12"/><path d="M20.5 16 12 20.5 3.5 16"/>',
      alert: '<path d="M12 3.8 21.3 20H2.7Z"/><path d="M12 9.2v5.4"/><path d="M12 17.6h.01"/>',
      repair: '<path d="M19.5 6.5v5h-5"/><path d="M18.7 11.5A7.2 7.2 0 1 1 16.5 6L19.5 9"/>',
      quality: '<path d="M12 3.3 19.5 6v5.6c0 4.7-3 7.7-7.5 9.4-4.5-1.7-7.5-4.7-7.5-9.4V6Z"/><path d="m8.4 12 2.4 2.4 5-5.2"/>',
      complaint: '<path d="M5.5 5.5h13A2.5 2.5 0 0 1 21 8v6.2a2.5 2.5 0 0 1-2.5 2.5H12l-4.3 3.1v-3.1H5.5A2.5 2.5 0 0 1 3 14.2V8a2.5 2.5 0 0 1 2.5-2.5Z"/><path d="M8 10.2h8"/><path d="M8 13h5.2"/>',
      defect: '<path d="m12 3.5 8.5 4.8v7.4L12 20.5l-8.5-4.8V8.3Z"/><path d="M12 8v5"/><path d="M12 16.2h.01"/>',
      efficiency: '<path d="M12 4.5a7.5 7.5 0 1 0 7.5 7.5"/><path d="M12 12 18.5 5.5"/><path d="M16 5.5h2.5V8"/>',
      people: '<path d="M12 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"/><path d="M4.5 20c.8-4.2 3.5-6.2 7.5-6.2s6.7 2 7.5 6.2"/>',
      presence: '<path d="M8.3 10.2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M15.7 10.2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M3.5 20c.5-3.8 2.2-5.8 4.8-5.8s4.3 2 4.8 5.8"/><path d="M10.9 20c.5-3.8 2.2-5.8 4.8-5.8s4.3 2 4.8 5.8"/>',
      sampling: '<path d="M10.5 18.5a7 7 0 1 1 5-2.1"/><path d="m15.5 16.5 4.5 4.5"/><path d="M8.2 11.7l2 2 4.2-4.5"/>',
      rate: '<path d="M5.5 18.5 18.5 5.5"/><circle cx="7.2" cy="7.4" r="2.2"/><circle cx="16.8" cy="16.6" r="2.2"/>',
      package: '<path d="M4.5 8.2 12 4l7.5 4.2v8.2L12 20.6l-7.5-4.2Z"/><path d="M4.8 8.4 12 12.6l7.2-4.2"/><path d="M12 12.6v8"/><path d="m8.2 6.3 7.5 4.2"/>',
      clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3.2 2"/>',
      star: '<path d="m12 3.8 2.3 4.7 5.2.8-3.8 3.7.9 5.2-4.6-2.4-4.6 2.4.9-5.2-3.8-3.7 5.2-.8Z"/>',
      brand: '<path d="M5.5 7.2h13a1.8 1.8 0 0 1 1.8 1.8v8a1.8 1.8 0 0 1-1.8 1.8h-13A1.8 1.8 0 0 1 3.7 17V9a1.8 1.8 0 0 1 1.8-1.8Z"/><path d="M8 7.2V5.8A1.8 1.8 0 0 1 9.8 4h4.4A1.8 1.8 0 0 1 16 5.8v1.4"/><path d="M8 12h8"/>',
      fabric: '<path d="M5 5.5h14v13H5z"/><path d="M5 9h14M5 12.5h14M5 16h14"/><path d="M8.5 5.5v13M12 5.5v13M15.5 5.5v13"/>',
      production: '<path d="M4 19.5V9.7l4.4 2.5V9.7l4.4 2.5V7.5h7.2v12Z"/><path d="M7 16h2M11 16h2M15 16h2"/>',
      sync: '<path d="M20 8a7.5 7.5 0 0 0-13.4-3.8L4.5 6.3"/><path d="M4 4v3h3"/><path d="M4 16a7.5 7.5 0 0 0 13.4 3.8l2.1-2.1"/><path d="M20 20v-3h-3"/>',
    };
    return `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">${paths[name] || paths.overview}</svg>`;
  }
  window.qcIconSvg = redesignBusinessIcon;
  function redesignCloseBrandCellPopover() {
    const popover = document.querySelector('#qcBrandCellPopover');
    if (popover) popover.hidden = true;
    document.querySelectorAll('.qc-brand-table [data-qc-cell-module].is-cell-selected').forEach((cell) => {
      cell.classList.remove('is-cell-selected');
      cell.setAttribute('aria-expanded', 'false');
    });
  }

  function redesignPositionBrandCellPopover(popover, cell) {
    if (!popover || popover.hidden || !cell?.isConnected) return;
    const rect = cell.getBoundingClientRect();
    const margin = 12;
    const width = popover.offsetWidth || 244;
    const height = popover.offsetHeight || 190;
    const left = Math.max(margin, Math.min(window.innerWidth - width - margin, rect.left + rect.width / 2 - width / 2));
    const placeAbove = rect.bottom + height + margin > window.innerHeight && rect.top > height + margin;
    popover.classList.toggle('is-above', placeAbove);
    popover.style.left = `${left}px`;
    popover.style.top = `${placeAbove ? Math.max(margin, rect.top - height - 10) : Math.min(window.innerHeight - height - margin, rect.bottom + 10)}px`;
  }

  function redesignOpenBrandCellPopover(cell) {
    const root = document.querySelector('#qc');
    if (!root || !cell) return;
    let popover = document.querySelector('#qcBrandCellPopover');
    if (!popover) {
      popover = document.createElement('aside');
      popover.id = 'qcBrandCellPopover';
      popover.className = 'qc-brand-cell-popover';
      popover.setAttribute('role', 'dialog');
      popover.setAttribute('aria-label', '模块数据注释');
      popover.innerHTML = `<button type="button" class="qc-brand-cell-popover-close" data-qc-cell-close aria-label="关闭注释">×</button><strong data-qc-cell-title></strong><b data-qc-cell-value></b><p data-qc-cell-compare></p><small data-qc-cell-note></small><button type="button" data-qc-popover-go>点击查看明细 <span>→</span></button>`;
      root.appendChild(popover);
    }
    redesignCloseBrandCellPopover();
    const brand = cell.dataset.qcBrandName || '合计';
    const module = cell.dataset.qcCellModule || '模块';
    const value = Number(cell.dataset.qcCellValue) || 0;
    const previous = Number(cell.dataset.qcCellPrevious) || 0;
    const trend = cell.dataset.qcCellTrend || '—';
    const compareLabel = cell.dataset.qcCellCompare || '对比期';
    popover.querySelector('[data-qc-cell-title]').textContent = `${brand} · ${module}`;
    popover.querySelector('[data-qc-cell-value]').textContent = `${qcNumber(value, '0')} 件`;
    popover.querySelector('[data-qc-cell-compare]').textContent = `${compareLabel} ${qcNumber(previous, '0')} 件 · ${trend}`;
    popover.querySelector('[data-qc-cell-note]').textContent = REDESIGN_MODULE_NOTES[module] || '点击进入对应分析页查看明细。';
    const go = popover.querySelector('[data-qc-popover-go]');
    go.dataset.qcBrandName = brand;
    go.dataset.qcBrandDetail = cell.dataset.qcBrandDetail;
    go.setAttribute('aria-label', `查看${brand}${module}明细`);
    cell.closest('.qc-brand-table')?.querySelectorAll('[data-qc-cell-module]').forEach((item) => item.setAttribute('aria-expanded', 'false'));
    cell.classList.add('is-cell-selected');
    cell.setAttribute('aria-expanded', 'true');
    popover.hidden = false;
    requestAnimationFrame(() => redesignPositionBrandCellPopover(popover, cell));
  }

  function redesignComplaintPeriod() {
    const periods = qcState.complaints?.weekly || [];
    return periods.filter((item) => item.start <= qcState.end && item.end >= qcState.start).at(-1) || periods.at(-1) || null;
  }

  function redesignComplaintForBrand(period, brand) {
    if (!period) return { complaints: 0, qualityIssues: 0, shipment: 0 };
    if (!brand) return period;
    return (period.brands || []).find((item) => item.name === brand) || { complaints: 0, qualityIssues: 0, shipment: 0 };
  }

  function redesignSelectedComplaint(period) {
    if (!period || !qcState.brands.length) return period || {};
    const items = qcState.brands.map((brand) => redesignComplaintForBrand(period, brand));
    const fields = ['complaints', 'qualityIssues', 'fabricComplaints', 'productionComplaints', 'shipment', 'previousComplaints', 'previousShipment'];
    const result = { start: period.start, end: period.end };
    fields.forEach((field) => {
      const values = items.map((item) => item[field]);
      result[field] = values.some((value) => value === null || value === undefined) && ['fabricComplaints', 'productionComplaints'].includes(field)
        ? null
        : values.reduce((sum, value) => sum + (Number(value) || 0), 0);
    });
    return result;
  }

  function redesignRenderCockpit() {
    const root = document.querySelector('#qcCockpit');
    if (!root || !qcState.data) return;
    const range = { start: qcState.start, end: qcState.end };
    const comparison = qcComparisonRange(range);
    const allRows = qcFilterRows(qcState.data.capacity, range, { brand: false });
    const compareRows = comparison ? qcFilterRows(qcState.data.capacity, comparison, { brand: false }) : [];
    const selectedRows = qcState.brands.length ? allRows.filter((row) => qcState.brands.includes(row.b)) : allRows;
    const selectedCompareRows = qcState.brands.length ? compareRows.filter((row) => qcState.brands.includes(row.b)) : compareRows;
    const metrics = qcCapacityMetrics(selectedRows);
    const previous = qcCapacityMetrics(selectedCompareRows);
    const issueRows = qcFilterRows(qcState.data.issues, range);
    const complaintPeriod = redesignComplaintPeriod();
    const complaint = redesignSelectedComplaint(complaintPeriod);
    const efficiency = qcEfficiencySummary(selectedRows, null, range);
    const samples = qcSum(issueRows, 's');
    const defects = qcSum(issueRows, 'x');
    const kpis = [
      { icon: 'inspect', label: '质检合计', value: metrics.qc, unit: '件', oldValue: previous.qc, adverse: false, note: 'Base q：质检总产出口径；拆分见大货/销退/唯品会/下架/返修/异常件质检' },
      { icon: 'alert', label: '异常件质检', value: metrics.abnormalQc, unit: '件', oldValue: previous.abnormalQc, adverse: true, note: 'Base ab：异常件质检数量；不等同周报客诉异常口径' },
      { icon: 'complaint', label: '客诉总数', value: Number(complaint?.complaints) || 0, unit: '件', oldValue: Number(complaint?.previousComplaints) || 0, adverse: true, note: '来源：周会/月报客诉表；客诉率按同一行发货量计算' },
      { icon: 'defect', label: '大货次品', value: metrics.largeDefects, unit: '件', oldValue: previous.largeDefects, adverse: true, note: 'Base ld：大货问题明细次品数量' },
      { icon: 'efficiency', label: '综合人效', value: efficiency.rate, unit: '件/人时', oldValue: null, adverse: false, note: '公式：可计入产出(q/rq + pk + rrp + ir) ÷ 有效在岗时长 wh' },
      { icon: 'sampling', label: '大货抽检率', value: samples ? defects / samples * 100 : 0, unit: '%', oldValue: null, adverse: true, note: '来源：大货问题汇总；公式 x(次品数) ÷ s(抽检数)' },
    ];
    document.querySelector('#qcCockpitRange').textContent = `${qcRangeLabel(range)} · ${qcBrandLabel()} · ${comparison?.label || '无对比'}`;
    document.querySelector('#qcCockpitKpis').innerHTML = kpis.map((item) => {
      const trend = item.oldValue === null ? { text: '当前口径', tone: 'flat' } : redesignTrend(Number(item.value) || 0, Number(item.oldValue) || 0, item.adverse);
      const formatted = item.unit === '件' ? qcNumber(item.value, '0') : qcDecimal(item.value, 1);
      return `<article title="${qcEscape(item.note)}"><i class="qc-cockpit-icon icon-${item.icon} has-svg" aria-hidden="true">${redesignBusinessIcon(item.icon)}</i><span>${item.label}</span><strong>${formatted}<small>${item.unit}</small></strong><b>${item.note}</b><em class="${trend.tone}">${trend.text}</em></article>`;
    }).join('');

    const brandStats = QC_MAIN_BRANDS.map((brand) => {
      const rows = allRows.filter((row) => row.b === brand);
      return { brand, values: Object.fromEntries(REDESIGN_MODULES.map((module) => [module.key, redesignMetricValue(rows, module)])) };
    });
    const tones = {};
    REDESIGN_MODULES.forEach((module) => {
      const ordered = [...brandStats].sort((a, b) => module.higherBetter ? b.values[module.key] - a.values[module.key] : a.values[module.key] - b.values[module.key]);
      ordered.forEach((item, index) => { tones[`${item.brand}:${module.key}`] = index === 0 ? 'good' : index === ordered.length - 1 ? 'bad' : 'mid'; });
    });
    const totalValues = Object.fromEntries(REDESIGN_MODULES.map((module) => [module.key, redesignMetricValue(selectedRows, module)]));
    const rows = [...brandStats, { brand: '全部', values: totalValues }];
    document.querySelector('#qcCockpitMatrix').innerHTML = `
      <div class="qc-matrix"><div class="qc-matrix-row head"><strong>品牌</strong>${REDESIGN_MODULES.map((module) => `<span>${module.label}</span>`).join('')}</div>
      ${rows.map((item) => `<div class="qc-matrix-row ${item.brand !== '全部' && qcState.brands.length && !qcState.brands.includes(item.brand) ? 'is-muted' : ''}"><strong>${item.brand}</strong>${REDESIGN_MODULES.map((module) => `<button type="button" class="${item.brand === '全部' ? 'total' : tones[`${item.brand}:${module.key}`]}" data-qc-matrix-target="${module.target}" data-qc-matrix-brand="${item.brand}" title="点击查看${item.brand} · ${module.label}明细">${qcNumber(item.values[module.key], '0')}</button>`).join('')}</div>`).join('')}</div>
      <div class="qc-matrix-legend"><span><i class="good"></i>优</span><span><i class="mid"></i>中</span><span><i class="bad"></i>需关注</span><em>点击单元格查看详情</em></div>`;

    if (!QC_MAIN_BRANDS.includes(cockpitBrand)) cockpitBrand = QC_MAIN_BRANDS[0];
    const brandSelect = document.querySelector('#qcCockpitBrand');
    brandSelect.value = cockpitBrand;
    const selectedBrandStats = brandStats.find((item) => item.brand === cockpitBrand);
    document.querySelector('#qcCockpitHorizontal').innerHTML = '<div class="qc-horizontal-bars">' + REDESIGN_MODULES.map((module) => {
      const max = Math.max(1, ...brandStats.map((item) => item.values[module.key]));
      const value = selectedBrandStats.values[module.key];
      const ratio = Math.round(value / max * 100);
      return `<article class="${module.higherBetter ? '' : 'adverse'}"><span>${module.label}</span><div><i style="width:${Math.max(3, ratio)}%"></i></div><strong>${ratio}%</strong><em>${qcNumber(value, '0')} 件</em></article>`;
    }).join('') + `</div><p class="qc-cockpit-note">${cockpitBrand} · ${[...REDESIGN_MODULES].sort((a, b) => selectedBrandStats.values[b.key] - selectedBrandStats.values[a.key])[0].label}为当前最高量模块</p>`;

    const moduleSelect = document.querySelector('#qcCockpitModule');
    if (!moduleSelect.options.length) moduleSelect.innerHTML = REDESIGN_MODULES.map((module) => `<option value="${module.key}">${module.label}</option>`).join('');
    if (!REDESIGN_MODULES.some((module) => module.key === cockpitModule)) cockpitModule = REDESIGN_MODULES[0].key;
    moduleSelect.value = cockpitModule;
    const verticalModule = REDESIGN_MODULES.find((module) => module.key === cockpitModule) || REDESIGN_MODULES[0];
    const maxVertical = Math.max(1, ...brandStats.map((item) => item.values[verticalModule.key]));
    document.querySelector('#qcCockpitVertical').innerHTML = '<div class="qc-vertical-bars">' + brandStats.map((item) => {
      const height = Math.max(8, item.values[verticalModule.key] / maxVertical * 100);
      const tone = tones[`${item.brand}:${verticalModule.key}`];
      return `<article><strong>${qcNumber(item.values[verticalModule.key], '0')}</strong><div><i class="${tone}" style="height:${height}%"></i></div><span>${item.brand}</span></article>`;
    }).join('') + `</div><p class="qc-cockpit-note">单位：件 · 柱高为各品牌${verticalModule.label}件数</p>`;

    document.querySelector('#qcCockpitDrill').innerHTML = [
      ['realtime', '实时作业', `${qcNumber(metrics.qc, '0')} 件`, 'realtime'],
      ['brand', '品牌分析', '三品牌明细', 'brands'],
      ['quality', '质量分析', `大货次品 ${qcNumber(metrics.largeDefects, '0')}`, 'quality'],
      ['complaint', '客诉分析', `客诉 ${qcNumber(complaint?.complaints, '0')} 件`, 'complaint'],
    ].map(([icon, label, value, view]) => `<button type="button" data-qc-drill-view="${view}"><i class="qc-drill-icon icon-${icon} has-svg" aria-hidden="true">${redesignBusinessIcon(icon)}</i><span><strong>${label}</strong><em>${value}</em></span><b>→</b></button>`).join('');

    const repairHighest = [...brandStats].sort((a, b) => b.values.repair - a.values.repair)[0];
    const largeQcLowest = [...brandStats].sort((a, b) => a.values.largeQc - b.values.largeQc)[0];
    const complaintBrands = QC_MAIN_BRANDS.map((brand) => ({ brand, value: Number(redesignComplaintForBrand(complaintPeriod, brand).complaints) || 0 })).sort((a, b) => b.value - a.value);
    document.querySelector('#qcAutoInsightTitle').textContent = '3 项需要关注';
    document.querySelector('#qcAutoInsights').innerHTML = [
      `${repairHighest.brand} · 进返修间 ${qcNumber(repairHighest.values.repair, '0')} 件（三品牌最高）`,
      `${largeQcLowest.brand} · 大货质检 ${qcNumber(largeQcLowest.values.largeQc, '0')} 件（三品牌最低）`,
      `${complaintBrands[0].brand} · 客诉 ${qcNumber(complaintBrands[0].value, '0')} 件（本期最高）`,
    ].map((text) => `<li>${text}</li>`).join('');
  }

  function redesignRenderBrandTable() {
    const root = document.querySelector('#qcBrandComparison');
    if (!root || !qcState.data) return;
    const range = { start: qcState.start, end: qcState.end };
    const comparison = qcComparisonRange(range);
    const allCurrent = qcFilterRows(qcState.data.capacity, range, { brand: false });
    const allPrevious = comparison ? qcFilterRows(qcState.data.capacity, comparison, { brand: false }) : [];
    const brandRows = QC_MAIN_BRANDS.map((brand) => ({
      brand,
      current: qcCapacityMetrics(allCurrent.filter((row) => row.b === brand)),
      previous: qcCapacityMetrics(allPrevious.filter((row) => row.b === brand)),
    }));
    const totalCurrent = qcCapacityMetrics(allCurrent);
    const totalPrevious = qcCapacityMetrics(allPrevious);
    const tableRows = [...brandRows, { brand: '合计', current: totalCurrent, previous: totalPrevious }];
    const overallTrend = redesignTrend(Number(totalCurrent.qc) || 0, Number(totalPrevious.qc) || 0, false);
    const highestModule = REDESIGN_BRAND_COLUMNS
      .filter((column) => column.key !== 'qc')
      .map((column) => ({ ...column, value: Number(totalCurrent[column.key]) || 0 }))
      .sort((a, b) => b.value - a.value)[0];
    const repairAttention = brandRows
      .map((row) => {
        const value = Number(row.current.repair) || 0;
        const previous = Number(row.previous.repair) || 0;
        return { brand: row.brand, value, previous, change: previous ? (value - previous) / previous : (value ? 1 : 0) };
      })
      .sort((a, b) => b.change - a.change)[0];
    const attentionTrend = redesignTrend(repairAttention.value, repairAttention.previous, true);
    const summaryCards = [
      { icon: 'overview', label: '三品牌合计', value: qcNumber(totalCurrent.qc, '0'), unit: '件', detail: '当前筛选范围质检合计', tone: 'blue' },
      { icon: 'trend', label: comparison?.label ? `${comparison.label}变化` : '区间变化', value: overallTrend.text, unit: '', detail: '三品牌质检合计对比', tone: overallTrend.tone },
      { icon: 'module', label: '最高模块', value: highestModule?.label || '—', unit: '', detail: highestModule ? `${qcNumber(highestModule.value, '0')} 件` : '暂无数据', tone: 'amber' },
      { icon: 'alert', label: '需关注', value: `${repairAttention.brand}进返修间`, unit: '', detail: `${qcNumber(repairAttention.value, '0')} 件 · ${attentionTrend.text}`, tone: attentionTrend.tone === 'risk' ? 'risk' : 'green' },
    ];
    const rankingConfigs = [
      { key: 'repair', label: '进返修间', target: 'quality', icon: 'repair', tone: 'repair', adverse: true, orderBy: 'value' },
      { key: 'qc', label: '质检合计', target: 'realtime', icon: 'quality', tone: 'quality', adverse: false, orderBy: 'value' },
      { key: 'abnormalQc', label: '异常', target: 'alerts', icon: 'alert', tone: 'abnormal', adverse: true, orderBy: 'risk' },
    ];
    const rankingCards = rankingConfigs.map((config) => {
      const ranked = brandRows.map((row) => {
        const value = Number(row.current[config.key]) || 0;
        const previous = Number(row.previous[config.key]) || 0;
        const change = previous ? (value - previous) / previous : (value ? 1 : 0);
        return { brand: row.brand, value, previous, change, trend: redesignTrend(value, previous, config.adverse) };
      }).sort((a, b) => config.orderBy === 'risk' ? b.change - a.change || b.value - a.value : b.value - a.value);
      const top = ranked[0];
      const max = Math.max(1, ...ranked.map((item) => item.value));
      const heading = config.orderBy === 'risk' ? `${top.brand}需关注` : `${top.brand}最高`;
      return `<button type="button" class="qc-brand-ranking-card ${config.tone}" data-qc-brand-detail="${config.target}" data-qc-brand-name="${top.brand}" aria-label="查看${top.brand}${config.label}明细">
        <div class="qc-brand-ranking-head"><i class="qc-ranking-icon icon-${config.icon} has-svg" aria-hidden="true">${redesignBusinessIcon(config.icon)}</i><span><strong>${config.label} · ${heading}</strong><em>${qcNumber(top.value, '0')} 件&nbsp;&nbsp;|&nbsp;&nbsp;${comparison?.label || '对比期'} ${top.trend.text}</em></span><b>查看明细 →</b></div>
        <div class="qc-brand-ranking-list">${ranked.map((item, index) => `<div><span>${index + 1}</span><strong>${item.brand}</strong><i><b style="width:${Math.max(5, item.value / max * 100)}%"></b></i><em>${qcNumber(item.value, '0')}</em></div>`).join('')}</div>
      </button>`;
    }).join('');
    root.innerHTML = `
      <div class="qc-brand-summary-head"><div><strong>品牌分析</strong><span>三品牌同表对比 · 点击模块下钻明细</span></div><em>${qcRangeLabel(range)} · ${comparison?.label || '无对比'}</em></div>
      <div class="qc-brand-summary">${summaryCards.map((item) => `<article class="${item.tone}"><i class="qc-brand-summary-icon icon-${item.icon} has-svg" aria-hidden="true">${redesignBusinessIcon(item.icon)}</i><span><em>${item.label}</em><strong>${item.value}<small>${item.unit}</small></strong><b>${item.detail}</b></span></article>`).join('')}</div>
      <div class="qc-brand-table-toolbar"><div><strong>品牌 × 模块对比表</strong><span>${qcRangeLabel(range)} · 件数 + ${comparison?.label || '无对比'}</span></div><em>悬停高亮整行整列 · 点击单元格查看注释并下钻</em></div>
      <div class="qc-brand-table-wrap"><div class="qc-brand-table">
        <div class="qc-brand-table-row head"><strong>品牌</strong>${REDESIGN_BRAND_COLUMNS.map((column, index) => `<button type="button" data-col="${index}" data-qc-brand-detail="${column.target}" data-qc-brand-name="合计">${column.label}<i>↗</i></button>`).join('')}</div>
        ${tableRows.map((row) => `<div class="qc-brand-table-row ${row.brand === '合计' ? 'total' : ''}"><strong>${row.brand}</strong>${REDESIGN_BRAND_COLUMNS.map((column, index) => {
          const value = Number(row.current[column.key]) || 0;
          const previous = Number(row.previous[column.key]) || 0;
          const trend = redesignTrend(value, previous, column.adverse);
          return `<button type="button" data-col="${index}" data-qc-brand-detail="${column.target}" data-qc-brand-name="${row.brand}" data-qc-cell-module="${column.label}" data-qc-cell-value="${value}" data-qc-cell-previous="${previous}" data-qc-cell-trend="${trend.text}" data-qc-cell-compare="${comparison?.label || '对比期'}" aria-haspopup="dialog" aria-expanded="false"><b>${qcNumber(value, '0')}</b><em class="${trend.tone}">${trend.text}</em></button>`;
        }).join('')}</div>`).join('')}
      </div></div>
      <div class="qc-brand-ranking-grid">${rankingCards}</div>`;
  }
  function redesignRenderRealtimeAnalysis() {
    const root = document.querySelector('#qcRealtimeAnalysis');
    if (!root || !qcState.data) return;
    const range = { start: qcState.start, end: qcState.end };
    const comparison = qcComparisonRange(range);
    const rows = qcFilterRows(qcState.data.capacity, range);
    const previousRows = comparison ? qcFilterRows(qcState.data.capacity, comparison) : [];
    const realtimeModules = [
      ...REDESIGN_QUALITY_BREAKDOWN,
      { key: 'packing', label: '包装', source: 'Base pk：包装处理量', icon: 'package', color: '#f29a22' },
      { key: 'repair', label: '进返修间', source: 'Base rrp：进返修间数量，不等于返修质检', icon: 'repair', color: '#805ad5', adverse: true },
      { key: 'bigGoods', label: '大货处理', source: 'Base bg：大货处理量', icon: 'module', color: '#315e91' },
    ];
    const values = realtimeModules.map((module) => ({
      ...module,
      value: redesignMetricValue(rows, module),
      previous: redesignMetricValue(previousRows, module),
    }));
    const dates = [];
    for (let date = range.start; date <= range.end; date = qcShiftDays(date, 1)) dates.push(date);
    const trendSeries = [
      { key: 'largeQc', label: '大货质检', color: '#0b72e7' },
      { key: 'returnQc', label: '销退质检', color: '#10a37f' },
      { key: 'packing', label: '包装', color: '#f29a22' },
      { key: 'repair', label: '进返修间', color: '#805ad5' },
    ];
    const daily = dates.slice(-7).map((date) => {
      const dayMetrics = qcCapacityMetrics(rows.filter((row) => row.d === date));
      return { date, largeQc: dayMetrics.largeQc, returnQc: dayMetrics.returnQc, packing: dayMetrics.packing, repair: dayMetrics.repair };
    });
    const chartMax = Math.max(1, ...daily.flatMap((item) => trendSeries.map((line) => item[line.key])));
    const chartWidth = 760;
    const chartHeight = 230;
    const chartLeft = 46;
    const chartTop = 18;
    const plotWidth = 690;
    const plotHeight = 165;
    const xAt = (index) => chartLeft + (daily.length <= 1 ? plotWidth / 2 : index * plotWidth / (daily.length - 1));
    const yAt = (value) => chartTop + plotHeight - (Number(value) || 0) / chartMax * plotHeight;
    const staffMap = new Map();
    rows.forEach((row) => {
      if (!row.n) return;
      if (!staffMap.has(row.n)) staffMap.set(row.n, { name: row.n, output: 0, days: new Map(), brands: new Set(), modules: new Map() });
      const item = staffMap.get(row.n);
      item.output += qcEfficiencyOutput(row);
      if (row.d) item.days.set(row.d, Math.max(item.days.get(row.d) || 0, Number(row.wh) || 0));
      if (row.b) item.brands.add(row.b);
      const moduleLabel = row.r || '质检合计';
      item.modules.set(moduleLabel, (item.modules.get(moduleLabel) || 0) + qcEfficiencyOutput(row));
    });
    const staff = [...staffMap.values()].map((item) => {
      const hours = [...item.days.values()].reduce((sum, value) => sum + value, 0);
      const primary = [...item.modules.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] || '待补充';
      return { ...item, hours, primary, rate: hours ? item.output / hours : null };
    }).sort((a, b) => (b.rate ?? -1) - (a.rate ?? -1) || b.output - a.output).slice(0, 8);
    const currentByBrand = QC_MAIN_BRANDS.map((brand) => {
      const current = qcCapacityMetrics(rows.filter((row) => row.b === brand));
      const previous = qcCapacityMetrics(previousRows.filter((row) => row.b === brand));
      return { brand, current, previous };
    });
    const repairAlert = currentByBrand.map((item) => {
      const value = item.current.repair || 0;
      const previous = item.previous.repair || 0;
      const change = previous ? (value - previous) / previous : 0;
      return { brand: item.brand, value, previous, change };
    }).sort((a, b) => b.change - a.change)[0];
    const abnormalAlert = currentByBrand.map((item) => {
      const value = item.current.abnormalQc || 0;
      const previous = item.previous.abnormalQc || 0;
      const change = previous ? (value - previous) / previous : 0;
      return { brand: item.brand, value, previous, change };
    }).sort((a, b) => b.change - a.change)[0];
    const missingHours = [...staffMap.values()].filter((item) => item.output > 0 && ![...item.days.values()].some((value) => value > 0)).length;
    const alertItems = [
      repairAlert && { tone: repairAlert.change > 0 ? 'risk' : 'info', icon: 'repair', title: `${repairAlert.brand} · 进返修间${repairAlert.change > 0 ? '上升' : '变化'}`, detail: `${qcNumber(repairAlert.value, '0')} 件 · ${redesignTrend(repairAlert.value, repairAlert.previous, true).text}`, target: 'quality' },
      abnormalAlert && { tone: abnormalAlert.change > 0 ? 'warn' : 'info', icon: 'alert', title: `${abnormalAlert.brand} · 异常件质检${abnormalAlert.change > 0 ? '上升' : '变化'}`, detail: `${qcNumber(abnormalAlert.value, '0')} 件 · ${redesignTrend(abnormalAlert.value, abnormalAlert.previous, true).text}`, target: 'alerts' },
      { tone: missingHours ? 'info' : 'good', icon: 'clock', title: missingHours ? `${missingHours} 人在岗时长待补录` : '在岗时长记录完整', detail: missingHours ? '补录后人效计算会更准确' : '本期有效工时可用于人效计算', target: 'people' },
    ].filter(Boolean);
    root.innerHTML = `
      <article class="qc-data-card qc-realtime-load-card"><div class="qc-card-title"><strong>模块实时负荷</strong><span>质检已拆分 · 返修质检 ≠ 进返修间</span></div><div class="qc-realtime-load-table"><div class="head"><span>模块</span><span>当前处理量（件）</span><span>对比基准（件）</span><span>完成比</span></div>${values.map((item) => {
        const ratio = item.previous ? item.value / item.previous * 100 : null;
        return `<div title="${qcEscape(item.source)}"><span><i class="ui-line-icon icon-${item.icon || 'overview'} has-svg">${redesignBusinessIcon(item.icon || 'overview')}</i>${item.label}</span><span><b style="width:${Math.min(100, Math.max(3, ratio ?? 0))}%;background:${item.color || '#377ee8'}"></b><strong>${qcNumber(item.value, '0')}</strong></span><em>${item.previous ? qcNumber(item.previous, '0') : '—'}</em><strong>${ratio === null ? '—' : qcDecimal(ratio, 1) + '%'}</strong></div>`;
      }).join('')}</div><p class="qc-source-note">来源：品控部数据汇总 Base；综合人效另按 q/rq + pk + rrp + ir ÷ wh 计算。</p></article>
      <article class="qc-data-card qc-realtime-trend-card"><div class="qc-card-title"><strong>近 7 日处理趋势</strong><span>${trendSeries.map((item) => `<i class="legend" style="background:${item.color}"></i>${item.label}`).join(' ')}</span></div><div class="qc-realtime-line-chart"><svg viewBox="0 0 ${chartWidth} ${chartHeight}" role="img" aria-label="近七日大货质检、销退质检、包装与进返修间处理趋势">${[0, .25, .5, .75, 1].map((step) => `<line x1="${chartLeft}" y1="${chartTop + step * plotHeight}" x2="${chartLeft + plotWidth}" y2="${chartTop + step * plotHeight}" class="grid"/><text x="4" y="${chartTop + step * plotHeight + 4}">${qcNumber(chartMax * (1 - step), '0')}</text>`).join('')}${trendSeries.map((line) => `<polyline points="${daily.map((item, index) => `${xAt(index)},${yAt(item[line.key])}`).join(' ')}" style="stroke:${line.color}"/><g>${daily.map((item, index) => `<circle cx="${xAt(index)}" cy="${yAt(item[line.key])}" r="4" style="fill:${line.color}"><title>${item.date} · ${line.label} ${qcNumber(item[line.key], '0')} 件</title></circle>`).join('')}</g>`).join('')}${daily.map((item, index) => `<text class="date" x="${xAt(index)}" y="218">${item.date.slice(5)}</text>`).join('')}</svg></div></article>
      <article class="qc-data-card qc-realtime-staff-card"><div class="qc-card-title"><strong>人员实时效率</strong><span>按综合人效排序 · 在岗时长缺失不参与排名</span></div><div class="qc-realtime-staff-table"><div class="head"><span>人员</span><span>品牌</span><span>主要模块</span><span>处理量（件）</span><span>在岗时长</span><span>人效（件/人时）</span><span>状态</span></div>${staff.length ? staff.map((item) => `<div><strong>${item.name}</strong><span>${[...item.brands].join('、') || '—'}</span><span>${item.primary}</span><em>${qcNumber(item.output, '0')}</em><span>${item.hours ? qcDecimal(item.hours, 1) + ' h' : '待补录'}</span><b>${item.rate === null ? '—' : qcDecimal(item.rate, 1)}</b><i class="${item.hours ? 'good' : 'warn'}">${item.hours ? '正常' : '需关注'}</i></div>`).join('') : '<p class="qc-empty">当前筛选范围暂无人员作业记录。</p>'}</div></article>
      <article class="qc-data-card qc-realtime-alert-card"><div class="qc-card-title"><strong>实时预警</strong><span><button type="button" data-qc-drill-view="brands">查看品牌分析</button><button type="button" data-qc-drill-view="alerts">查看异常中心</button></span></div><div class="qc-realtime-alert-list">${alertItems.map((item) => `<button type="button" class="${item.tone}" data-qc-drill-view="${item.target}"><i class="ui-line-icon icon-${item.icon} has-svg">${redesignBusinessIcon(item.icon)}</i><span><strong>${item.title}</strong><em>${item.detail}</em></span><b>查看 →</b></button>`).join('')}</div></article>`;
  }
  function redesignRenderPeopleOverview() {
    const root = document.querySelector('#qcPeopleOverview');
    if (!root || !qcState.data) return;
    const range = qcModuleRange('people');
    const rows = qcFilterRows(qcState.data.capacity, range);
    const efficiency = qcEfficiencySummary(rows, null, range);
    const people = new Set(rows.map((row) => row.n).filter(Boolean)).size;
    const hours = qcSum(rows, 'wh');
    const ranking = new Map();
    rows.forEach((row) => {
      if (!row.n) return;
      if (!ranking.has(row.n)) ranking.set(row.n, { output: 0, hours: 0 });
      const item = ranking.get(row.n);
      item.output += qcPrimaryOutput(row);
      item.hours += Number(row.wh) || 0;
    });
    const top = [...ranking.entries()].map(([name, item]) => ({ name, rate: item.hours ? item.output / item.hours : 0 })).sort((a, b) => b.rate - a.rate)[0];
    root.innerHTML = [
      ['people', '在岗人数', qcNumber(people, '0') + ' 人'],
      ['clock', '有效在岗时长', qcNumber(hours, '0') + ' 小时'],
      ['efficiency', '综合人效', efficiency.rate === null ? '待核对' : qcDecimal(efficiency.rate, 1) + ' 件/人时'],
      ['star', '最高人效', top ? qcDecimal(top.rate, 1) + ' · ' + top.name : '暂无'],
      ['alert', '工时完整性', qcDecimal(efficiency.coverage, 1) + '%'],
    ].map(([icon, label, value]) => `<article><i class="qc-people-icon icon-${icon} has-svg" aria-hidden="true">${redesignBusinessIcon(icon)}</i><span>${label}</span><strong>${value}</strong></article>`).join('');
  }

  function redesignRenderComplaintTrend() {
    const root = document.querySelector('#qcComplaintTrend');
    if (!root || !qcState.complaints) return;
    const periods = (qcState.complaints.weekly || []).slice(-12);
    const threshold = 2;
    const values = periods.map((period) => {
      const selected = qcState.brands.length
        ? redesignSelectedComplaint(period)
        : (qcState.complaintBrand !== 'all' ? redesignComplaintForBrand(period, qcState.complaintBrand) : period);
      const rate = qcComplaintRate(selected?.complaints, selected?.shipment);
      return { label: period.end.slice(5), value: rate === null ? null : rate * 100 };
    });
    const observedMax = Math.max(0, ...values.map((item) => item.value ?? 0));
    const scaleMax = Math.max(2.4, observedMax * 1.12);
    const thresholdHeight = threshold / scaleMax * 100;
    const points = values.map((item) => ({ ...item, height: item.value === null ? 0 : item.value / scaleMax * 100 }));
    const ariaSummary = points.map((item) => `${item.label} ${item.value === null ? '无数据' : item.value.toFixed(2) + '%'}`).join('，');
    root.innerHTML = `<div class="qc-complaint-trend-chart" role="img" aria-label="客诉率趋势，预警线为大于等于 2.00%。${ariaSummary}"><div class="qc-complaint-plot"><span class="threshold" style="bottom:${thresholdHeight}%"><em>预警 ≥ 2.00%</em></span><div class="qc-complaint-bars">${points.map((item) => `<article title="${item.label} · ${item.value === null ? '无数据' : item.value.toFixed(2) + '%'}"><strong style="bottom:calc(${item.height}% + 6px)">${item.value === null ? '—' : item.value.toFixed(2) + '%'}</strong><i class="${item.value !== null && item.value >= threshold ? 'risk' : ''}" style="height:${Math.max(item.value === null ? 0 : 2, item.height)}%"></i></article>`).join('')}</div></div><div class="qc-complaint-trend-axis">${points.map((item) => `<span>${item.label}</span>`).join('')}</div></div>`;
    if (qcState.brands.length) {
      document.querySelectorAll('#qcComplaintBrandTable .qc-complaint-table-row').forEach((row) => {
        const name = row.querySelector('strong')?.textContent?.trim();
        row.hidden = name && !qcState.brands.includes(name);
      });
    }
  }

  function redesignAlertItems() {
    if (!qcState.data) return [];
    const range = { start: qcState.start, end: qcState.end };
    const capacity = qcFilterRows(qcState.data.capacity, range);
    const issues = qcFilterRows(qcState.data.issues, range);
    const metrics = qcCapacityMetrics(capacity);
    const issueCount = qcSum(issues, 'x');
    const complaint = redesignSelectedComplaint(redesignComplaintPeriod());
    const items = [
      { priority: 'P0', title: '异常件质检待复盘', brand: qcBrandLabel(), module: '异常件质检', value: metrics.abnormalQc, sla: '超时 6h', status: '待分派', tone: 'risk', target: 'alerts' },
      { priority: 'P1', title: '客诉率接近预警线', brand: qcBrandLabel(), module: '客诉', value: Number(complaint?.complaints) || 0, sla: '剩余 2h', status: '处理中', tone: 'warn', target: 'complaint' },
      { priority: 'P1', title: '大货次品需要复核', brand: qcBrandLabel(), module: '大货', value: metrics.largeDefects, sla: '剩余 6h', status: '处理中', tone: 'warn', target: 'quality' },
      { priority: 'P2', title: '质量问题分类待确认', brand: qcBrandLabel(), module: '大货质量', value: issueCount, sla: '剩余 12h', status: '待复盘', tone: 'info', target: 'quality' },
    ];
    return items.filter((item) => item.value > 0);
  }

  function redesignRenderAlertWorkbench() {
    const root = document.querySelector('#qcAlertWorkbench');
    if (!root) return;
    const items = redesignAlertItems();
    if (!items.length) {
      root.innerHTML = '<p class="qc-empty">当前筛选范围暂无异常处理项。</p>';
      return;
    }
    selectedAlertIndex = Math.min(selectedAlertIndex, items.length - 1);
    const selected = items[selectedAlertIndex];
    root.innerHTML = `
      <section class="qc-alert-queue"><div class="qc-alert-workbench-title"><strong>异常处理队列</strong><span>${items.length} 项待跟进</span></div><div class="qc-alert-table"><div class="head"><span>优先级</span><span>异常</span><span>品牌</span><span>模块</span><span>数量</span><span>SLA</span><span>状态</span></div>${items.map((item, index) => `<button type="button" class="${index === selectedAlertIndex ? 'active' : ''}" data-qc-redesign-alert-index="${index}"><b class="${item.tone}">${item.priority}</b><strong>${item.title}</strong><span>${item.brand}</span><span>${item.module}</span><em>${qcNumber(item.value, '0')}</em><i class="${item.tone}">${item.sla}</i><small>${item.status}</small></button>`).join('')}</div></section>
      <aside class="qc-alert-detail"><div class="qc-alert-workbench-title"><strong>异常详情</strong><button type="button" data-qc-drill-view="${selected.target}">查看明细 →</button></div><h3>${selected.title}</h3><div class="qc-alert-detail-kpis"><article><span>影响数量</span><strong>${qcNumber(selected.value, '0')}</strong></article><article><span>当前状态</span><strong>${selected.status}</strong></article><article><span>SLA</span><strong>${selected.sla}</strong></article></div><ol><li>系统发现并生成异常项</li><li>分派责任人与处理时限</li><li>处理完成后进入复盘与关闭</li></ol><div class="qc-alert-detail-actions"><button type="button">分派责任人</button><button type="button">生成 8D 报告</button><button type="button">标记已处理</button></div></aside>`;
  }

  function redesignSummaryText() {
    const range = { start: qcState.start, end: qcState.end };
    const rows = qcFilterRows(qcState.data.capacity, range);
    const metrics = qcCapacityMetrics(rows);
    const complaint = redesignSelectedComplaint(redesignComplaintPeriod());
    return [
      '品控周报摘要',
      `统计区间：${qcRangeLabel(range)}`,
      `品牌：${qcBrandLabel()}`,
      `质检总量：${qcNumber(metrics.qc, '0')} 件`,
      `异常件：${qcNumber(metrics.abnormalQc, '0')} 件`,
      `进返修间：${qcNumber(metrics.repair, '0')} 件`,
      `包装：${qcNumber(metrics.packing, '0')} 件`,
      `大货：${qcNumber(metrics.bigGoods, '0')} 件`,
      `客诉：${qcNumber(complaint?.complaints, '0')} 件`,
      '',
      ...[...document.querySelectorAll('#qcAutoInsights li')].map((item) => item.textContent),
    ].join('\r\n');
  }

  function redesignDownload(filename, content, type = 'text/plain;charset=utf-8') {
    const blob = new Blob([content], { type });
    const href = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = filename;
    link.click();
    setTimeout(() => URL.revokeObjectURL(href), 1000);
  }

  function redesignToast(message) {
    let toast = document.querySelector('#qcRedesignToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'qcRedesignToast';
      toast.className = 'qc-redesign-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(redesignToast.timer);
    redesignToast.timer = setTimeout(() => toast.classList.remove('show'), 2200);
  }

  function redesignRunAction(action) {
    if (action === 'report') {
      redesignDownload(`品控周报-${qcState.start}-${qcState.end}.txt`, redesignSummaryText());
      redesignToast('本周报告已生成');
      return;
    }
    if (action === 'excel') {
      const range = { start: qcState.start, end: qcState.end };
      const rows = qcFilterRows(qcState.data.capacity, range, { brand: false });
      const header = ['品牌', ...REDESIGN_BRAND_COLUMNS.map((item) => item.label)];
      const records = QC_MAIN_BRANDS.map((brand) => {
        const metrics = qcCapacityMetrics(rows.filter((row) => row.b === brand));
        return [brand, ...REDESIGN_BRAND_COLUMNS.map((item) => metrics[item.key] || 0)];
      });
      redesignDownload(`品控对比-${qcState.start}-${qcState.end}.csv`, '\ufeff' + [header, ...records].map((record) => record.join(',')).join('\r\n'), 'text/csv;charset=utf-8');
      redesignToast('Excel 数据已导出');
      return;
    }
    const text = redesignSummaryText();
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(text).then(() => redesignToast('推送内容已复制，可发送给品控主管')).catch(() => redesignToast('推送摘要已生成'));
    } else {
      redesignToast('推送摘要已生成');
    }
  }

  const legacyComplaintSelectedValues = qcComplaintSelectedValues;
  qcComplaintSelectedValues = function redesignComplaintSelectedValues(period) {
    if (!qcState.brands.length) return legacyComplaintSelectedValues(period);
    return redesignSelectedComplaint(period);
  };

  const legacyRenderQCDashboard = renderQCDashboard;
  renderQCDashboard = function redesignRenderQCDashboard() {
    redesignRestoreUrl();
    qcState.complaintStart = qcState.start;
    qcState.complaintEnd = qcState.end;
    qcState.complaintBrand = qcState.brands.length === 1 ? qcState.brands[0] : 'all';
    legacyRenderQCDashboard();
    redesignInstallShell();
    redesignRenderLocalBrandBars();
    redesignRenderCockpit();
    redesignRenderBrandTable();
    redesignRenderRealtimeAnalysis();
    redesignRenderPeopleOverview();
    redesignRenderComplaintTrend();
    redesignRenderAlertWorkbench();
    redesignUpdateViewHeading();
    const activeQuick = qcQuickRangeKey();
    document.querySelectorAll('[data-qc-redesign-range]').forEach((button) => button.classList.toggle('active', button.dataset.qcRedesignRange === activeQuick));
    redesignPersistUrl();
  };

  const legacySetBusinessView = qcSetBusinessView;
  qcSetBusinessView = function redesignSetBusinessView(view, options = {}) {
    const shouldScroll = options.scrollToView !== false;
    legacySetBusinessView(view, { ...options, scrollToView: false });
    redesignUpdateViewHeading();
    redesignPersistUrl();
    if (shouldScroll) {
      const target = document.querySelector(view === 'overview' ? '#qcCockpit' : `[data-qc-view-section="${view}"]`);
      if (target) {
        const stickyBottom = Math.max(0, ...['#qcBusinessNav', '#qc .qc-global-filter'].map((selector) => {
          const item = document.querySelector(selector);
          if (!item) return 0;
          const style = getComputedStyle(item);
          if (style.display === 'none' || !['sticky', 'fixed'].includes(style.position)) return 0;
          const rect = item.getBoundingClientRect();
          return rect.bottom > 0 && rect.top < window.innerHeight ? rect.bottom : 0;
        })) + 18;
        window.scrollTo({ top: Math.max(0, window.scrollY + target.getBoundingClientRect().top - stickyBottom), behavior: 'auto' });
      }
    }
  };

  document.querySelector('#qc')?.addEventListener('click', (event) => {
    const button = event.target.closest('.qc-alert-detail-actions button');
    if (!button) return;
    redesignToast(button.textContent.includes('已处理') ? '异常已标记为待复盘' : button.textContent.includes('8D') ? '8D 报告入口已打开' : '已进入责任人分派');
  });

  redesignInstallShell();
  renderWorkspaceTabs();
})();
