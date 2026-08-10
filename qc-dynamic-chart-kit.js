(function () {
  'use strict';

  const COLORS = {
    primary: '#d31335',
    blue: '#2878e8',
    green: '#16a57e',
    amber: '#f19122',
    violet: '#8257d8',
    cyan: '#0e9eb2',
    danger: '#df3c45',
    text: '#172026',
    muted: '#65798d',
    grid: '#e8edf2',
  };
  const PALETTE = [COLORS.blue, COLORS.green, COLORS.amber, COLORS.violet, COLORS.danger, COLORS.cyan];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function alpha(hex, opacity) {
    const value = hex.replace('#', '');
    const full = value.length === 3 ? value.split('').map((item) => item + item).join('') : value;
    const number = Number.parseInt(full, 16);
    return `rgba(${number >> 16},${(number >> 8) & 255},${number & 255},${opacity})`;
  }

  function baseOption() {
    return {
      animation: !reducedMotion.matches,
      animationDuration: 760,
      animationDurationUpdate: 420,
      animationEasing: 'cubicOut',
      animationEasingUpdate: 'cubicOut',
      textStyle: { fontFamily: 'Inter, "PingFang SC", "Microsoft YaHei", sans-serif', color: COLORS.text },
      color: PALETTE,
      tooltip: {
        trigger: 'axis',
        triggerOn: 'mousemove|click',
        transitionDuration: 0,
        axisPointer: { type: 'line', snap: true, animation: false, lineStyle: { color: '#91a3b5', width: 1 } },
        confine: true,
        backgroundColor: 'rgba(255,255,255,.98)',
        borderColor: '#dce4eb',
        borderWidth: 1,
        padding: [9, 12],
        textStyle: { color: COLORS.text, fontSize: 12 },
        extraCssText: 'box-shadow:0 10px 28px rgba(15,35,55,.12);border-radius:10px;',
      },
      grid: { left: 16, right: 18, top: 38, bottom: 18, containLabel: true },
    };
  }

  function lineOption(dates, series, options = {}) {
    const base = baseOption();
    const showPointLabels = options.showPointLabels === true;
    return {
      ...base,
      legend: {
        show: series.length > 1,
        top: 0,
        right: 4,
        icon: 'circle',
        itemWidth: 10,
        itemHeight: 10,
        itemGap: 16,
        selectedMode: true,
        textStyle: { color: COLORS.muted, fontSize: 11 },
      },
      grid: { ...base.grid, top: series.length > 1 ? 42 : 24, bottom: 12 },
      xAxis: {
        type: 'category',
        data: dates,
        boundaryGap: false,
        axisLine: { lineStyle: { color: '#cbd6e0' } },
        axisTick: { show: false },
        axisLabel: { color: COLORS.muted, fontSize: 11, hideOverlap: true },
      },
      yAxis: {
        type: 'value',
        min: options.yMin,
        max: options.yMax,
        axisLabel: { color: COLORS.muted, fontSize: 10, formatter: options.yFormatter || null },
        splitLine: { lineStyle: { color: COLORS.grid, type: 'dashed' } },
      },
      series: series.map((item, index) => {
        const color = item.color || PALETTE[index % PALETTE.length];
        return {
          name: item.name,
          type: 'line',
          data: item.data,
          smooth: 0.4,
          animationDuration: 760,
          animationDurationUpdate: 420,
          animationEasing: 'cubicOut',
          animationEasingUpdate: 'cubicOut',
          connectNulls: false,
          symbol: 'circle',
          symbolSize: 8,
          showSymbol: true,
          cursor: 'pointer',
          lineStyle: { width: 3, color, shadowColor: alpha(color, .2), shadowBlur: 8, shadowOffsetY: 4 },
          itemStyle: { color, borderColor: '#fff', borderWidth: 1.5 },
          label: showPointLabels ? {
            show: true,
            position: index % 2 === 0 ? 'top' : 'bottom',
            distance: 6,
            color,
            fontSize: 10,
            fontWeight: 700,
            valueAnimation: true,
            textBorderColor: 'rgba(255,255,255,.98)',
            textBorderWidth: 3,
            formatter: (params) => {
              const value = Array.isArray(params.value) ? params.value.at(-1) : params.value;
              return Number.isFinite(Number(value)) ? Number(value).toLocaleString('zh-CN') : '';
            },
          } : { show: false },
          labelLayout: showPointLabels ? { hideOverlap: false } : undefined,
          areaStyle: item.area === false ? undefined : {
            color: {
              type: 'linear', x: 0, y: 0, x2: 0, y2: 1,
              colorStops: [{ offset: 0, color: alpha(color, .2) }, { offset: 1, color: alpha(color, .015) }],
            },
          },
          emphasis: { focus: 'series', scale: true, scaleSize: 4, itemStyle: { borderWidth: 2, borderColor: '#fff', shadowBlur: 10, shadowColor: alpha(color, .35) } },
          markLine: item.markLine ? {
            silent: true,
            symbol: 'none',
            label: { formatter: item.markLine.label, color: COLORS.danger, fontSize: 10 },
            lineStyle: { color: COLORS.danger, type: 'dashed', width: 1 },
            data: [{ yAxis: item.markLine.value }],
          } : undefined,
        };
      }),
    };
  }

  function pieOption(rows, centerValue, centerLabel) {
    const base = baseOption();
    return {
      ...base,
      tooltip: {
        ...base.tooltip,
        trigger: 'item',
        formatter: (params) => `${params.name}<br><b>${Number(params.value).toLocaleString('zh-CN')} 件</b> · ${params.percent}%`,
      },
      legend: { show: false },
      graphic: [{
        type: 'group', left: 'center', top: 'middle', children: [
          { type: 'text', style: { text: Number(centerValue || 0).toLocaleString('zh-CN'), fill: COLORS.text, font: '700 24px Inter, "Microsoft YaHei"', textAlign: 'center' }, left: 'center', top: -16 },
          { type: 'text', style: { text: centerLabel || '总客诉', fill: COLORS.muted, font: '11px Inter, "Microsoft YaHei"', textAlign: 'center' }, left: 'center', top: 16 },
        ],
      }],
      series: [{
        name: '客诉问题结构',
        type: 'pie',
        radius: ['54%', '76%'],
        center: ['50%', '50%'],
        avoidLabelOverlap: true,
        minAngle: 3,
        itemStyle: { borderColor: '#fff', borderWidth: 3, borderRadius: 6 },
        label: { show: false },
        emphasis: { scale: true, scaleSize: 7, label: { show: false }, itemStyle: { shadowBlur: 14, shadowColor: 'rgba(31,67,99,.2)' } },
        animationType: 'scale',
        animationTypeUpdate: 'transition',
        animationDuration: 920,
        animationDurationUpdate: 620,
        animationEasing: 'cubicOut',
        animationEasingUpdate: 'cubicOut',
        animationDelay: (index) => 70 + Math.min(index * 65, 260),
        data: rows,
      }],
    };
  }
  function comboOption(rows) {
    const names = rows.map((item) => item.name);
    const base = baseOption();
    const lineColor = '#ef6a52';
    return {
      ...base,
      legend: {
        top: 0,
        right: 4,
        icon: 'roundRect',
        itemWidth: 12,
        itemHeight: 7,
        textStyle: { color: COLORS.muted, fontSize: 11 },
      },
      grid: { left: 16, right: 20, top: 38, bottom: 54, containLabel: true },
      xAxis: {
        type: 'category',
        data: names,
        axisTick: { show: false },
        axisLine: { lineStyle: { color: '#cbd6e0' } },
        axisLabel: { color: COLORS.muted, fontSize: 10, rotate: names.length > 9 ? 32 : 0, interval: 0 },
      },
      yAxis: [
        { type: 'value', name: '有效产出', nameTextStyle: { color: COLORS.muted }, axisLabel: { color: COLORS.muted, fontSize: 10 }, splitLine: { lineStyle: { color: COLORS.grid, type: 'dashed' } } },
        { type: 'value', name: '综合人效', nameTextStyle: { color: COLORS.muted }, axisLabel: { color: COLORS.muted, fontSize: 10 }, splitLine: { show: false } },
      ],
      series: [
        {
          name: '有效产出（件）', type: 'bar', data: rows.map((item) => item.output), barWidth: 16,
          showBackground: true,
          backgroundStyle: { color: 'rgba(0,0,0,.04)', borderRadius: [8, 8, 0, 0] },
          itemStyle: { color: COLORS.blue, borderRadius: [8, 8, 0, 0], shadowColor: alpha(COLORS.blue, .2), shadowBlur: 6 },
          emphasis: { itemStyle: { color: '#0f6fdf' } },
          animationDuration: 760,
          animationDurationUpdate: 720,
          animationEasing: 'cubicOut',
          animationEasingUpdate: 'cubicOut',
          animationDelay: (index) => Math.min(index * 22, 220),
          animationDelayUpdate: (index) => Math.min(index * 16, 160),
          universalTransition: { enabled: false },
        },
        {
          name: '综合人效（件/人时）', type: 'line', yAxisIndex: 1, data: rows.map((item) => item.rate), smooth: 0.4,
          symbol: 'circle', symbolSize: 8, cursor: 'pointer', lineStyle: { color: lineColor, width: 3, shadowColor: alpha(lineColor, .2), shadowBlur: 8, shadowOffsetY: 4 },
          itemStyle: { color: lineColor, borderColor: '#fff', borderWidth: 2 },
          emphasis: { focus: 'series', scale: true, itemStyle: { borderWidth: 2, borderColor: '#fff', shadowBlur: 10, shadowColor: alpha(lineColor, .35) } },
          animationDuration: 980,
          animationDurationUpdate: 900,
          animationEasing: 'cubicInOut',
          animationEasingUpdate: 'cubicOut',
          animationDelay: 120,
          animationDelayUpdate: 80,
        },
      ],
    };
  }

  function withoutEntryAnimation(option) {
    return {
      ...option,
      animation: false,
      animationDuration: 0,
      animationDelay: 0,
      series: Array.isArray(option.series) ? option.series.map((series) => ({
        ...series,
        animation: false,
        animationDuration: 0,
        animationDelay: 0,
      })) : option.series,
    };
  }

  class ChartManager {
    constructor() {
      this.items = new Map();
      this.playedKeys = new Set();
      this.resizeObserver = 'ResizeObserver' in window ? new ResizeObserver((entries) => {
        entries.forEach((entry) => this.items.get(entry.target)?.chart.resize());
      }) : null;
      this.visibilityObserver = 'IntersectionObserver' in window ? new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const item = this.items.get(entry.target);
          if (entry.isIntersecting && item) item.chart.resize();
        });
      }, { threshold: .05 }) : null;
      window.addEventListener('resize', this.debounce(() => this.resizeAll(), 80));
    }

    render(key, element, option, onClick) {
      if (!element || !window.echarts) return null;
      const current = this.items.get(element);
      const chart = current?.chart || window.echarts.init(element, null, { renderer: 'canvas', useCoarsePointer: true, pointerSize: 36 });
      const isReplacement = !current && this.playedKeys.has(key);
      chart.setOption(isReplacement ? withoutEntryAnimation(option) : option, { notMerge: true, lazyUpdate: true });
      this.playedKeys.add(key);
      chart.off('click');
      if (onClick) chart.on('click', onClick);
      element.dataset.dynamicChart = key;
      this.items.set(element, { key, chart });
      if (!current) {
        this.resizeObserver?.observe(element);
        this.visibilityObserver?.observe(element);
      }
      return chart;
    }

    prune() {
      this.items.forEach((item, element) => {
        if (element.isConnected) return;
        this.resizeObserver?.unobserve(element);
        this.visibilityObserver?.unobserve(element);
        item.chart.dispose();
        this.items.delete(element);
      });
    }

    resizeAll() {
      this.items.forEach((item) => item.chart.resize());
    }

    debounce(fn, wait) {
      let timer;
      return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), wait);
      };
    }
  }

  window.QCDynamicChartKit = { COLORS, PALETTE, ChartManager, lineOption, comboOption, pieOption, reducedMotion };
})();