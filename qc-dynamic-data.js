(function () {
  'use strict';

  const DEFAULT_CONFIG = {
    interval: 86400000,
    requestTimeout: 15000,
    triggers: { timer: false, manual: true, visibility: false, websocket: false },
    endpoints: {
      dashboard: './data/qc-dashboard.json',
      complaints: './data/qc-complaints.json',
      warehouseOverview: './data/warehouse-overview.json',
      warehouseExceptions: './data/warehouse-exceptions.json',
      warehouseInbound: './data/warehouse-inbound.json',
    },
  };

  function mergeConfig(source = {}) {
    return {
      ...DEFAULT_CONFIG,
      ...source,
      triggers: { ...DEFAULT_CONFIG.triggers, ...(source.triggers || {}) },
      endpoints: { ...DEFAULT_CONFIG.endpoints, ...(source.endpoints || {}) },
    };
  }

  function textHash(text) {
    let hash = 2166136261;
    for (let index = 0; index < text.length; index += 1) {
      hash ^= text.charCodeAt(index);
      hash = Math.imul(hash, 16777619);
    }
    return (hash >>> 0).toString(36);
  }

  class DataService {
    constructor(config = {}) {
      this.config = mergeConfig(config);
      this.listeners = new Map();
      this.timer = null;
      this.inFlight = null;
      this.signature = '';
      this.cache = new Map();
      this.userPaused = false;
      this.visibilityPaused = false;
      this.lastSuccessAt = null;
      this.lastError = null;
      this.boundVisibility = this.handleVisibility.bind(this);
    }

    on(channel, callback) {
      if (!this.listeners.has(channel)) this.listeners.set(channel, new Set());
      this.listeners.get(channel).add(callback);
      return () => this.listeners.get(channel)?.delete(callback);
    }

    emit(channel, payload) {
      this.listeners.get(channel)?.forEach((callback) => {
        try { callback(payload); } catch (error) { console.error('QC dynamic listener failed', error); }
      });
    }

    start() {
      document.addEventListener('visibilitychange', this.boundVisibility);
      this.visibilityPaused = document.hidden;
      if (this.visibilityPaused) this.emit('state', { state: 'hidden', at: Date.now() });
      else this.schedule(350);
      return this;
    }

    stop() {
      clearTimeout(this.timer);
      this.timer = null;
      document.removeEventListener('visibilitychange', this.boundVisibility);
    }

    pause() {
      this.userPaused = true;
      clearTimeout(this.timer);
      this.timer = null;
      this.emit('state', { state: 'paused', at: Date.now() });
    }

    resume() {
      this.userPaused = false;
      if (this.visibilityPaused) {
        this.emit('state', { state: 'hidden', at: Date.now() });
        return;
      }
      this.emit('state', { state: 'running', at: Date.now() });
      this.refresh('resume');
    }

    handleVisibility() {
      if (!this.config.triggers.visibility) return;
      this.visibilityPaused = document.hidden;
      clearTimeout(this.timer);
      this.timer = null;
      if (document.hidden) {
        this.emit('state', { state: 'hidden', at: Date.now() });
      } else if (!this.userPaused) {
        this.emit('state', { state: 'running', at: Date.now() });
        this.refresh('visibility-resume');
      }
    }

    schedule(delay = this.config.interval) {
      clearTimeout(this.timer);
      this.timer = null;
      if (this.userPaused || this.visibilityPaused || !this.config.triggers.timer) return;
      this.timer = setTimeout(() => this.refresh('timer'), Math.max(250, delay));
    }

    async fetchJson(path) {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), this.config.requestTimeout);
      try {
        const separator = path.includes('?') ? '&' : '?';
        const response = await fetch(`${path}${separator}dynamic=${Date.now()}`, {
          cache: 'no-store',
          headers: { Accept: 'application/json' },
          signal: controller.signal,
        });
        if (!response.ok) throw new Error(`${path} 返回 ${response.status}`);
        const text = await response.text();
        if (!text.trim()) throw new Error(`${path} 内容为空`);
        const hash = textHash(text);
        const cached = this.cache.get(path);
        if (cached?.hash === hash) return cached;
        const result = { data: JSON.parse(text), hash };
        this.cache.set(path, result);
        return result;
      } finally {
        clearTimeout(timeout);
      }
    }

    async fetchAll() {
      const endpoint = this.config.endpoints;
      const [dashboard, complaints, overview, exceptions, inbound] = await Promise.all([
        this.fetchJson(endpoint.dashboard),
        this.fetchJson(endpoint.complaints),
        this.fetchJson(endpoint.warehouseOverview),
        this.fetchJson(endpoint.warehouseExceptions),
        this.fetchJson(endpoint.warehouseInbound),
      ]);
      this.validate(dashboard.data, complaints.data, overview.data, exceptions.data, inbound.data);
      return {
        dashboard: dashboard.data,
        complaints: complaints.data,
        warehouse: { overview: overview.data, exceptions: exceptions.data, inbound: inbound.data },
        signature: [dashboard.hash, complaints.hash, overview.hash, exceptions.hash, inbound.hash].join(':'),
      };
    }

    validate(dashboard, complaints, overview, exceptions, inbound) {
      if (!dashboard?.availableRange || !Array.isArray(dashboard.capacity) || !Array.isArray(dashboard.issues) || !Array.isArray(dashboard.repairs)) {
        throw new Error('品控主数据结构校验失败');
      }
      if (!Array.isArray(complaints?.weekly) || !Array.isArray(complaints?.monthly) || (complaints.monthlyAdjustments != null && !Array.isArray(complaints.monthlyAdjustments))) {
        throw new Error('客诉数据结构校验失败');
      }
      if (!overview || !exceptions || !inbound) throw new Error('仓储实时数据结构校验失败');
    }

    apply(payload, trigger) {
      if (typeof qcState === 'undefined' || !qcState?.data) return false;
      qcState.data = payload.dashboard;
      qcState.complaints = payload.complaints;

      const range = payload.dashboard.availableRange;
      if (!qcState.start || !qcState.end || qcState.start < range.start || qcState.end > range.end || qcState.start > qcState.end) {
        const safe = typeof qcCompleteWeekRange === 'function'
          ? qcCompleteWeekRange(range.end)
          : { start: range.start, end: range.end };
        qcState.start = safe.start;
        qcState.end = safe.end;
      }

      if (typeof realtimeState !== 'undefined') {
        realtimeState.overview = payload.warehouse.overview;
        realtimeState.exceptions = payload.warehouse.exceptions;
        realtimeState.inbound = payload.warehouse.inbound;
      }
      if (typeof renderRealtimeModules === 'function') renderRealtimeModules();
      if (typeof renderQCDashboard === 'function') renderQCDashboard();

      window.dispatchEvent(new CustomEvent('qc:data-updated', {
        detail: { trigger, at: Date.now(), availableRange: range },
      }));
      return true;
    }

    async refresh(trigger = 'manual') {
      if (trigger === 'manual' && !this.config.triggers.manual) return null;
      if (this.inFlight) return this.inFlight;
      if ((this.userPaused || this.visibilityPaused) && trigger !== 'manual') return null;

      this.emit('state', { state: 'loading', trigger, at: Date.now() });
      this.inFlight = this.fetchAll()
        .then((payload) => {
          const changed = payload.signature !== this.signature;
          const applied = changed ? this.apply(payload, trigger) : true;
          if (changed && applied) this.signature = payload.signature;
          this.lastSuccessAt = Date.now();
          this.lastError = null;
          this.emit('update', { changed: changed && applied, trigger, at: this.lastSuccessAt });
          return payload;
        })
        .catch((error) => {
          this.lastError = error;
          this.emit('error', { error, trigger, at: Date.now() });
          console.error('QC dynamic refresh failed; current real data remains unchanged.', error);
          return null;
        })
        .finally(() => {
          this.inFlight = null;
          this.schedule();
        });
      return this.inFlight;
    }

    attachWebSocket(socket) {
      if (!this.config.triggers.websocket || !socket?.addEventListener) return () => {};
      const handler = () => this.refresh('websocket');
      socket.addEventListener('message', handler);
      return () => socket.removeEventListener('message', handler);
    }
  }

  window.QCDynamicData = { DataService, DEFAULT_CONFIG };
})();