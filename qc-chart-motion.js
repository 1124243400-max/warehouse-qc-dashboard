(function () {
  'use strict';

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const ROOT_CLASS = 'qc-chart-motion-root';
  const ACTIVE_CLASS = 'qc-chart-motion-active';
  const FINISHED_CLASS = 'qc-chart-motion-finished';
  const FINISH_DELAY = 1500;

  const fillRules = [
    { id: 'home-worktype-bars', type: 'bar', axis: 'x', selector: '#home #worktypeList .track > .fill', root: '#worktypeList' },
    { id: 'home-process-bars', type: 'bar', axis: 'x', selector: '#home .process-bar-chart .bar-track > i', root: '.process-bar-chart' },
    { id: 'home-leaderboard-bars', type: 'bar', axis: 'x', selector: '#home [data-leaderboard] .track > .fill', root: '[data-leaderboard]' },
    { id: 'home-role-bars', type: 'bar', axis: 'x', selector: '#home [data-role-bars] .track > .fill', root: '[data-role-bars]' },
    { id: 'qc-core-share', type: 'bar', axis: 'x', selector: '#qc .qc-core-share-track > i', root: '.qc-core-share-track' },
    { id: 'qc-brand-efficiency', type: 'bar', axis: 'x', selector: '#qc .qc-brand-efficiency-item > i > b', root: '.qc-brand-efficiency-item' },
    { id: 'qc-module-horizontal', type: 'bar', axis: 'x', selector: '#qc .qc-horizontal-bars article > div > i', root: '.qc-horizontal-bars' },
    { id: 'qc-brand-vertical', type: 'column', axis: 'y', selector: '#qc .qc-vertical-bars article > div > i', root: '.qc-vertical-bars' },
    { id: 'qc-brand-ranking', type: 'bar', axis: 'x', selector: '#qc .qc-brand-ranking-list > div > i > b', root: '.qc-brand-ranking-list' },
    { id: 'qc-ranking-bars', type: 'bar', axis: 'x', selector: '#qc .qc-rank-track > i', root: '.qc-ranking-rows, .qc-ranking-list, .qc-individual-list, .qc-brand-ranking' },
    { id: 'qc-trend-bars', type: 'bar', axis: 'x', selector: '#qc .qc-trend-track > i', root: '.qc-trend-list' },
    { id: 'qc-generic-bars', type: 'bar', axis: 'x', selector: '#qc .qc-bar-track > i', root: '.qc-bar-list, .qc-data-card' },
    { id: 'qc-period-columns', type: 'column', axis: 'y', selector: '#qc .qc-comparison-bar-plot > i', root: '.qc-comparison-bars' },
    { id: 'qc-realtime-load-bars', type: 'bar', axis: 'x', selector: '#qc .qc-realtime-load-table > div:not(.head) > span:nth-child(2) > b', root: '.qc-realtime-load-table' },
    { id: 'people-efficiency-bars', type: 'bar', axis: 'x', selector: '#qc .p2-efficiency-trend i > b', root: '.p2-efficiency-trend' },
    { id: 'people-workload-columns', type: 'column', axis: 'y', selector: '#qc .p2-workload-days .p2-workload-bar', root: '.p2-workload-days' },
    { id: 'complaint-brand-bars', type: 'bar', axis: 'x', selector: '#qc .p2-brand-volume > i > em', root: '.p2-brand-compare-table' },
    { id: 'complaint-category-bars', type: 'bar', axis: 'x', selector: '#qc .p2-category-ranking article > i > em', root: '.p2-category-ranking' },
    { id: 'complaint-detail-bars', type: 'bar', axis: 'x', selector: '#qc .p2-complaint-detail-list > div > i > em', root: '.p2-complaint-detail-list' },
    { id: 'complaint-brand-fallback-bars', type: 'bar', axis: 'x', selector: '#qc .p2-brand-bars i > em', root: '.p2-brand-bars' },
    { id: 'complaint-trend-fallback-columns', type: 'column', axis: 'y', selector: '#qc .p2-trend article > i', root: '.p2-trend' },
    { id: 'complaint-legacy-columns', type: 'column', axis: 'y', selector: '#qc .qc-complaint-bars article > i', root: '.qc-complaint-bars' },
    { id: 'brand-fallback-columns', type: 'column', axis: 'y', selector: '#qc .p2-brand-column > i', root: '.p2-brand-compare-chart' },
  ];

  const visualRules = [
    { id: 'overview-matrix', type: 'heatmap', selector: '#qc .qc-matrix' },
    { id: 'realtime-line', type: 'line', selector: '#qc .qc-echart-realtime, #qc .qc-realtime-line-chart' },
    { id: 'people-combo', type: 'combo', selector: '#qc .qc-echart-people, #qc .p2-people-combo-chart' },
    { id: 'complaint-line', type: 'line', selector: '#qc .qc-echart-complaint, #qc .qc-complaint-trend-chart, #qc .p2-trend' },
    { id: 'complaint-brand-combo', type: 'combo', selector: '#qc .p2-brand-combo-chart' },
    { id: 'complaint-donut', type: 'donut', selector: '#qc .qc-echart-donut, #qc .p2-donut-wrap' },
  ];

  const playedKeys = new Set();
  const observedRoots = new WeakSet();
  const rootKeys = new WeakMap();
  const cleanupTimers = new WeakMap();
  const pendingScopes = new Set();
  const stats = { scans: 0, scannedScopes: 0, mutationBatches: 0 };
  let scanFrame = 0;

  function finishRoot(root) {
    root.classList.add(FINISHED_CLASS);
    const timer = cleanupTimers.get(root);
    if (timer) clearTimeout(timer);
    cleanupTimers.delete(root);
  }

  function activateRoot(root) {
    root.classList.add(ACTIVE_CLASS);
    rootKeys.get(root)?.forEach((key) => playedKeys.add(key));
    if (reducedMotion.matches) {
      finishRoot(root);
      return;
    }
    const priorTimer = cleanupTimers.get(root);
    if (priorTimer) clearTimeout(priorTimer);
    cleanupTimers.set(root, setTimeout(() => finishRoot(root), FINISH_DELAY));
  }

  const observer = 'IntersectionObserver' in window ? new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      activateRoot(entry.target);
      observer.unobserve(entry.target);
    });
  }, { threshold: .06, rootMargin: '0px 0px -3% 0px' }) : null;

  function queryWithin(scope, selector) {
    const nodes = [];
    if (scope?.nodeType === 1) {
      try { if (scope.matches(selector)) nodes.push(scope); } catch (_) { return nodes; }
    }
    scope?.querySelectorAll?.(selector).forEach((node) => nodes.push(node));
    return nodes;
  }

  function rootFor(element, selector) {
    if (!selector) return element;
    try { return element.closest(selector) || element; } catch (_) { return element; }
  }

  function motionKey(rule, root) {
    if (root.id) return `${rule.id}#${root.id}`;
    const selector = rule.root || rule.selector;
    let ordinal = 0;
    try {
      const roots = [...document.querySelectorAll(selector)];
      ordinal = Math.max(0, roots.indexOf(root));
    } catch (_) {}
    const view = root.closest?.('[data-qc-view-section]')?.getAttribute('data-qc-view-section') || root.closest?.('[data-page]')?.getAttribute('data-page') || 'page';
    return `${rule.id}@${view}:${ordinal}`;
  }

  function observeRoot(root, type, key) {
    if (!root) return;
    root.classList.add(ROOT_CLASS, `qc-chart-motion-${type}`);
    let keys = rootKeys.get(root);
    if (!keys) {
      keys = new Set();
      rootKeys.set(root, keys);
    }
    keys.add(key);

    if (playedKeys.has(key) || root.classList.contains(FINISHED_CLASS)) {
      playedKeys.add(key);
      root.classList.add(ACTIVE_CLASS, FINISHED_CLASS);
      return;
    }
    if (root.classList.contains(ACTIVE_CLASS)) {
      playedKeys.add(key);
      return;
    }
    if (observedRoots.has(root)) return;
    observedRoots.add(root);
    if (reducedMotion.matches || !observer) activateRoot(root);
    else observer.observe(root);
  }

  function prepareFill(fill, rule, index) {
    const root = rootFor(fill, rule.root);
    const key = motionKey(rule, root);
    const shouldAnimate = !playedKeys.has(key) && !root.classList.contains(FINISHED_CLASS);
    if (!fill.dataset.qcChartMotionFill) {
      fill.dataset.qcChartMotionFill = rule.id;
      fill.classList.add('qc-chart-motion-fill');
      if (shouldAnimate) {
        fill.classList.add(`qc-chart-motion-fill-${rule.axis}`);
        fill.style.setProperty('--qc-chart-delay', `${Math.min(index * 36, 300)}ms`);
        if (!fill.children.length && index < 12) fill.classList.add('qc-chart-motion-positioned', 'qc-chart-motion-bounded');
      }
    }
    observeRoot(root, rule.type, key);
  }

  function prepareLines(root, shouldAnimate) {
    if (!shouldAnimate) return;
    root.querySelectorAll('polyline').forEach((line, index) => {
      line.setAttribute('pathLength', '1');
      line.classList.add('qc-chart-motion-line');
      line.style.setProperty('--qc-chart-delay', `${Math.min(index * 80, 280)}ms`);
    });
    root.querySelectorAll('circle').forEach((point, index) => {
      point.classList.add('qc-chart-motion-point');
      point.style.setProperty('--qc-chart-delay', `${Math.min(400 + index * 24, 760)}ms`);
    });
  }

  function prepareComboColumns(root, shouldAnimate) {
    if (!shouldAnimate) return;
    root.querySelectorAll('.bars rect, .p2-combo-bar rect').forEach((column, index) => {
      column.classList.add('qc-chart-motion-fill', 'qc-chart-motion-fill-y');
      column.style.setProperty('--qc-chart-delay', `${Math.min(index * 36, 300)}ms`);
    });
  }

  function prepareHeatmap(root, shouldAnimate) {
    root.querySelectorAll('.qc-matrix-row:not(.head) > button').forEach((cell, index) => {
      cell.dataset.qcChartMotionCell = 'overview-matrix';
      if (!shouldAnimate) return;
      cell.classList.add('qc-chart-motion-heat-cell');
      cell.style.setProperty('--qc-chart-delay', `${Math.min(index * 20, 360)}ms`);
    });
  }

  function prepareMatrix(scope) {
    const rule = { id: 'people-workload-matrix', type: 'matrix', selector: '#qc .p2-workload-matrix' };
    queryWithin(scope, rule.selector).forEach((root) => {
      const key = motionKey(rule, root);
      const shouldAnimate = !playedKeys.has(key) && !root.classList.contains(FINISHED_CLASS);
      root.querySelectorAll('.p2-workload-cell').forEach((cell, index) => {
        cell.dataset.qcChartMotionCell = rule.id;
        cell.classList.add('qc-chart-motion-cell');
        if (shouldAnimate) cell.style.setProperty('--qc-chart-delay', `${Math.min(index * 10, 300)}ms`);
      });
      observeRoot(root, rule.type, key);
    });
  }

  function scan(scope = document) {
    if (!scope?.querySelectorAll && scope?.nodeType !== 1) return;
    stats.scans += 1;
    stats.scannedScopes += 1;
    fillRules.forEach((rule) => {
      queryWithin(scope, rule.selector).forEach((fill, index) => prepareFill(fill, rule, index));
    });
    visualRules.forEach((rule) => {
      queryWithin(scope, rule.selector).forEach((root) => {
        const key = motionKey(rule, root);
        const shouldAnimate = !playedKeys.has(key) && !root.classList.contains(FINISHED_CLASS);
        observeRoot(root, rule.type, key);
        if (rule.type === 'line' || rule.type === 'combo') prepareLines(root, shouldAnimate);
        if (rule.type === 'combo') prepareComboColumns(root, shouldAnimate);
        if (rule.type === 'heatmap') prepareHeatmap(root, shouldAnimate);
        if (rule.type === 'donut' && shouldAnimate) root.querySelector('.p2-donut')?.classList.add('qc-chart-motion-ring');
      });
    });
    prepareMatrix(scope);
    document.documentElement.dataset.qcChartMotionReady = 'true';
  }

  function queueScope(node) {
    if (node?.nodeType !== 1 || !node.isConnected) return;
    for (const scope of pendingScopes) {
      if (scope.contains(node)) return;
      if (node.contains(scope)) pendingScopes.delete(scope);
    }
    pendingScopes.add(node);
  }

  function scheduleScan(records) {
    stats.mutationBatches += 1;
    records.forEach((record) => record.addedNodes.forEach(queueScope));
    if (!pendingScopes.size || scanFrame) return;
    scanFrame = requestAnimationFrame(() => {
      scanFrame = 0;
      const scopes = [...pendingScopes];
      pendingScopes.clear();
      scopes.filter((scope) => scope.isConnected).forEach(scan);
    });
  }

  function audit() {
    const fillCoverage = fillRules.map((rule) => {
      const nodes = [...document.querySelectorAll(rule.selector)];
      return {
        id: rule.id,
        type: rule.type,
        rendered: nodes.length,
        animated: nodes.filter((node) => node.dataset.qcChartMotionFill === rule.id).length,
      };
    });
    const visualCoverage = visualRules.map((rule) => {
      const nodes = [...document.querySelectorAll(rule.selector)];
      return {
        id: rule.id,
        type: rule.type,
        rendered: nodes.length,
        animated: nodes.filter((node) => node.classList.contains(ROOT_CLASS)).length,
      };
    });
    const matrix = [...document.querySelectorAll('#qc .p2-workload-cell')];
    return {
      version: 'single-entry-perf-v2-20260810',
      fillCoverage,
      visualCoverage,
      matrix: { rendered: matrix.length, animated: matrix.filter((node) => node.dataset.qcChartMotionCell).length },
      echarts: [...document.querySelectorAll('#qc .qc-echart')].map((node) => ({ key: node.dataset.dynamicChart || '', canvas: Boolean(node.querySelector('canvas')) })),
      missingRendered: [...fillCoverage, ...visualCoverage].filter((item) => item.rendered > item.animated),
      playedCharts: playedKeys.size,
      performance: { ...stats, pendingScopes: pendingScopes.size },
      reducedMotion: reducedMotion.matches,
    };
  }

  const mutations = new MutationObserver(scheduleScan);
  function start() {
    scan(document);
    mutations.observe(document.body, { childList: true, subtree: true });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
  else start();

  window.QCChartMotion = { scan, audit, fillRules, visualRules };
})();