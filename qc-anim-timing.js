(function () {
  'use strict';

  const kit = window.QCDynamicChartKit;
  if (!kit) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const extendedOptions = new WeakSet();
  const entryTimers = new WeakMap();

  function markViewEntry(view) {
    if (!view || reducedMotion.matches) return;
    document.querySelectorAll(`#qc [data-qc-view-section="${view}"]`).forEach((section) => {
      section.classList.add('qc-timing-entry-active');
      clearTimeout(entryTimers.get(section));
      entryTimers.set(section, setTimeout(() => section.classList.remove('qc-timing-entry-active'), 1800));
    });
  }

  const setBusinessView = window.qcSetBusinessView;
  if (typeof setBusinessView === 'function' && !setBusinessView.qcTimingWrapped) {
    const wrapped = function timingSetBusinessView(view, options = {}) {
      const currentView = typeof qcState !== 'undefined' ? qcState?.view : '';
      if (view && view !== currentView) markViewEntry(view);
      return setBusinessView.call(this, view, options);
    };
    wrapped.qcTimingWrapped = true;
    window.qcSetBusinessView = wrapped;
  }

  if (window.echarts && !window.echarts.init.qcTimingWrapped) {
    const originalInit = window.echarts.init;
    const wrappedInit = function timingEchartsInit(element, theme, options = {}) {
      const useDirtyRect = (element?.clientWidth || 0) <= 2000;
      return originalInit.call(this, element, theme, { useDirtyRect, ...options });
    };
    wrappedInit.qcTimingWrapped = true;
    window.echarts.init = wrappedInit;
  }

  markViewEntry(typeof qcState !== 'undefined' ? qcState?.view : 'overview');

  function extendedDuration(value) {
    if (!Number.isFinite(value) || value <= 0) return value;
    const factor = value >= 900 ? 1.55 : value >= 700 ? 1.6 : 1.8;
    return Math.round(value * factor);
  }

  function extendOption(option) {
    if (!option || extendedOptions.has(option)) return option;
    extendedOptions.add(option);

    if (reducedMotion.matches) {
      if (option.tooltip) option.tooltip.transitionDuration = 0;
      return option;
    }

    ['animationDuration', 'animationDurationUpdate'].forEach((key) => {
      if (Number.isFinite(option[key])) option[key] = extendedDuration(option[key]);
    });
    (option.series || []).forEach((series) => {
      ['animationDuration', 'animationDurationUpdate'].forEach((key) => {
        if (Number.isFinite(series[key])) series[key] = extendedDuration(series[key]);
      });
      if (Array.isArray(series.data) && series.data.length > 40) {
        series.progressive = 200;
        series.progressiveThreshold = 40;
        if (series.type === 'bar') {
          series.large = true;
          series.largeThreshold = 40;
        }
      }
    });
    if (option.tooltip) {
      option.tooltip.transitionDuration = option.tooltip.transitionDuration > 0
        ? option.tooltip.transitionDuration * 2
        : .2;
    }
    return option;
  }

  ['lineOption', 'comboOption', 'pieOption'].forEach((name) => {
    const original = kit[name];
    if (typeof original !== 'function') return;
    kit[name] = (...args) => extendOption(original(...args));
  });

  window.QCAnimationTiming = { extendOption, extendedDuration, markViewEntry };
})();