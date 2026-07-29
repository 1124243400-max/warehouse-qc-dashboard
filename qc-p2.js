(() => {
'use strict';
const q=(s,r=document)=>r.querySelector(s),qa=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const num=(v,d=0)=>Number.isFinite(Number(v))?Number(v).toLocaleString('zh-CN',{minimumFractionDigits:d,maximumFractionDigits:d}):'—';
const pct=(v,d=1)=>Number.isFinite(Number(v))?(Number(v)*100).toFixed(d)+'%':'—';
const brands=['鹭青一','周淼','陈陈'];
const metricIcons={'▦':'overview','◇':'quality','▣':'package','↻':'repair','♙':'people','◎':'presence','◔':'sampling','♢':'quality','▱':'fabric','▥':'production','!':'alert','◷':'clock','↗':'efficiency','★':'star','◴':'clock'};
function period(){const list=qcState.complaintGranularity==='month'?qcState.complaints?.monthly:qcState.complaints?.weekly;return list?.filter(x=>x.end>=qcState.start&&x.start<=qcState.end).at(-1)||list?.at(-1)}
function selected(p){return qcState.brands?.length===1?p?.brands?.find(x=>x.name===qcState.brands[0]):p}
function iconSvg(token){return typeof window.qcIconSvg==='function'?window.qcIconSvg(token):''}
function kpi(icon,label,value,unit,tone,sub=''){const token=metricIcons[icon]||icon;return `<article class="p2-kpi ${tone}"><i class="p2-metric-icon icon-${token} has-svg" aria-hidden="true">${iconSvg(token)}</i><div><span>${label}</span><strong>${value==null?'\u2014':num(value,unit.includes('\u4eba\u65f6')?1:0)}<small>${unit}</small></strong>${value==null?'<em>\u5f85\u540c\u6b65</em>':sub}</div></article>`}
function filter(view){
 const common=`<label><span>品牌（多选）</span><strong>${esc(qcBrandLabel())}</strong></label><b class="p2-sync"><i class="ui-line-icon icon-sync has-svg" aria-hidden="true">${iconSvg('sync')}</i>已与全局同步</b>`;
 const data={realtime:[['作业模块','全部模块'],['班组','全部班组'],['人员',qcState.person==='all'?'全部人员':qcState.person],['刷新频率','5 分钟']],people:[['岗位','全部岗位'],['作业模块','全部模块'],['班组','全部班组'],['排名口径','综合人效']],quality:[['质量模块','全部模块'],['问题类型','全部类型'],['严重程度','全部']],complaint:[['统计粒度',qcState.complaintGranularity==='month'?'月度':'周度'],['客诉类型','全部类型'],['渠道','全部渠道'],['状态','全部']],alerts:[['异常来源','全部来源'],['严重程度','全部'],['处理状态','未关闭'],['责任人','全部人员']]}[view]||[];
 return (view==='people'?'':common)+data.map(x=>`<label><span>${x[0]}</span><strong>${esc(x[1])}</strong></label>`).join('');
}
function install(){
 const meta={realtime:['实时作业','当前作业量、效率与异常实时监控'],people:['人员分析','在岗时长、人数、产能与质量表现'],quality:['质量分析','问题分布与返修口径'],complaint:['客诉分析','客诉率、问题结构与品牌趋势'],alerts:['异常中心','统一发现、分析、跟进与关闭品控异常']};
 Object.entries(meta).forEach(([v,m])=>{const s=q(`[data-qc-view-section="${v}"]`),h=s?.querySelector('.qc-section-head');if(!s||!h)return;h.querySelector('span').textContent=m[0];h.querySelector('h2').textContent=m[0];const p=h.querySelector('p');if(p)p.textContent=m[1];let b=s.querySelector('[data-qc-local-bar],[data-p2-filter]');if(!b){h.insertAdjacentHTML('afterend',`<div class="p2-filter" data-p2-filter="${v}"></div>`);b=s.querySelector('[data-p2-filter]')}b.className='p2-filter';b.dataset.p2Filter=v;b.innerHTML=filter(v)});
 const t=q('#qcComplaintToolbar');if(t&&!q('#p2Complaint'))t.insertAdjacentHTML('afterend','<div id="p2Complaint" class="p2-workbench"></div>');
}
function personStats(r={start:qcState.start,end:qcState.end}){const map=new Map();qcFilterRows(qcState.data.capacity,r).forEach(x=>{if(!x.n)return;let p=map.get(x.n);if(!p){p={name:x.n,out:0,days:new Map()};map.set(x.n,p)}p.out+=qcEfficiencyOutput(x);if(x.d&&+x.wh>(p.days.get(x.d)||0))p.days.set(x.d,+x.wh)});return [...map.values()].map(p=>{p.wh=[...p.days.values()].reduce((a,b)=>a+b,0);p.rate=p.wh?p.out/p.wh:null;return p})}
function realtime(){
 const root=q('#qcRealtimeCards');if(!root)return;const r={start:qcState.start,end:qcState.end},cr=qcComparisonRange(r),a=qcFilterRows(qcState.data.capacity,r),b=cr?qcFilterRows(qcState.data.capacity,cr):[],m=qcCapacityMetrics(a),pm=qcCapacityMetrics(b),ps=personStats(r),pps=cr?personStats(cr):[],out=a.reduce((s,x)=>s+qcEfficiencyOutput(x),0),pout=b.reduce((s,x)=>s+qcEfficiencyOutput(x),0),wh=ps.reduce((s,x)=>s+x.wh,0),pwh=pps.reduce((s,x)=>s+x.wh,0),eff=wh?out/wh:null,peff=pwh?pout/pwh:null;
 const d=(x,y,bad=false)=>{const n=(+x||0)-(+y||0),rr=y?n/y:null,good=bad?n<=0:n>=0;return `<em class="${n===0?'neutral':good?'good':'risk'}">${n>0?'↗':n<0?'↘':'→'} ${rr==null?'—':(rr>0?'+':'')+(rr*100).toFixed(1)+'%'}</em>`};
 const cards=[
  ['▦','人效产出合计',out,pout,'件','blue',false,'q/rq + pk + rrp + ir'],
  ['◇','大货质检',m.largeQc,pm.largeQc,'件','green',false,'Base lq'],
  ['◇','销退质检',m.returnQc,pm.returnQc,'件','green',false,'Base rq/ret'],
  ['◇','唯品会质检',m.vipQc,pm.vipQc,'件','blue',false,'Base vp'],
  ['◇','下架质检',m.offShelfQc,pm.offShelfQc,'件','amber',true,'Base os'],
  ['↻','返修质检',m.repairQc,pm.repairQc,'件','violet',true,'Base rqc'],
  ['!','异常件质检',m.abnormalQc,pm.abnormalQc,'件','red',true,'Base ab'],
  ['▣','包装',m.packing,pm.packing,'件','amber',false,'Base pk'],
  ['↻','进返修间',m.repair,pm.repair,'件','violet',true,'Base rrp'],
  ['♙','综合人效',eff,peff,'件/人时','blue',false,'产出合计 ÷ wh'],
  ['◎','在岗',ps.filter(x=>x.wh).length,pps.filter(x=>x.wh).length,'人','teal',false,'有效 wh 人数']
 ];
 root.innerHTML=cards.map(x=>kpi(x[0],x[1],x[2],x[4],x[5],`${d(x[2],x[3],x[6])}<b>${esc(x[7])}</b>`)).join('');
}
function complaint(){
 const root=q('#p2Complaint');if(!root||!qcState.complaints)return;const p=period(),s=selected(p),rate=qcComplaintRate(s?.complaints,s?.shipment),qr=qcComplaintRate(s?.qualityIssues,s?.shipment),known=[s?.qualityIssues,s?.fabricComplaints,s?.productionComplaints],complete=known.every(Number.isFinite),other=complete?Math.max(0,(+s.complaints||0)-known.reduce((a,b)=>a+b,0)):null,total=+s?.complaints||0,colors=['#176fe5','#f29223','#ef3e3e','#33a86e'],parts=complete?[...known,other]:[s?.qualityIssues||0,0,0,0];let cursor=0;const stops=parts.map((v,i)=>{const a=cursor;cursor+=total?v/total*100:0;return colors[i]+' '+a+'% '+cursor+'%'}).join(',');
 const weeks=(qcState.complaints.weekly||[]).slice(-12),vals=weeks.map(w=>{const x=qcState.brands?.length===1?w.brands?.find(y=>y.name===qcState.brands[0]):w;return (qcComplaintRate(x?.complaints,x?.shipment)||0)*100}),max=Math.max(2.4,...vals)*1.12;
 const brandRows=brands.map(name=>{const x=p?.brands?.find(y=>y.name===name);return{name,c:x?.complaints,r:qcComplaintRate(x?.complaints,x?.shipment)}}),bm=Math.max(.001,...brandRows.map(x=>x.r||0)),months=(qcState.complaints.monthly||[]).slice(-4);
 root.innerHTML=`
 <section class="p2-kpis complaint">${kpi('◔','实际客诉率',rate==null?null:rate*100,'%','blue')+kpi('♢','质检问题客诉率',qr==null?null:qr*100,'%','green')+kpi('▣','本期总客诉',s?.complaints,'件','amber')+kpi('◇','本期发货',s?.shipment,'单','blue')+kpi('♢','质检问题',s?.qualityIssues,'件','green')+kpi('▱','面料问题',s?.fabricComplaints,'件','amber')+kpi('▥','生产问题',s?.productionComplaints,'件','red')}</section>
 <section class="p2-grid complaint-top"><article class="p2-card trend"><header><strong>客诉率趋势（近 12 周）</strong><span>预警线 2.0%</span></header><div class="p2-trend" style="--warn:${100-2/max*100}%"><i class="warn"><b>预警 2.0%</b></i><div>${vals.map((v,i)=>`<article><strong>${v.toFixed(2)}%</strong><i class="${v>=2?'risk':''}" style="height:${v/max*100}%"></i><span>${weeks[i].end.slice(5)}</span></article>`).join('')}</div></div></article><article class="p2-card"><header><strong>客诉问题结构</strong><span>当前周期</span></header><div class="p2-donut-wrap"><div class="p2-donut" style="background:conic-gradient(${stops||'#eef2f6 0 100%'})"><strong>${num(total)}<small>件<br>总客诉</small></strong></div><div class="p2-donut-legend">${[['质检问题',s?.qualityIssues],['面料问题',s?.fabricComplaints],['生产问题',s?.productionComplaints],['其他问题',other]].map((x,i)=>`<div><i style="background:${colors[i]}"></i><span>${x[0]}</span><b>${x[1]==null?'—':num(x[1])+' 件'}</b><em>${x[1]==null||!total?'待同步':pct(x[1]/total,0)}</em></div>`).join('')}</div></div></article></section>
 <section class="p2-grid complaint-mid"><article class="p2-card"><header><strong>品牌客诉对比</strong><span>基于同周期发货量</span></header><div class="p2-brand-bars">${brandRows.map(x=>`<div><strong>${x.name}</strong><i><em style="width:${(x.r||0)/bm*100}%"></em></i><span>${x.c==null?'—':num(x.c)+' 件'}</span><b>${pct(x.r,2)}</b></div>`).join('')}</div></article><article class="p2-card"><header><strong>问题类型 TOP 5</strong><span>待周报分类</span></header><div class="p2-template">${[1,2,3,4,5].map(i=>`<div><b>${i}</b><span>待同步问题类型</span><i></i><em>—</em></div>`).join('')}</div></article><article class="p2-card"><header><strong>处理闭环</strong><span>待状态字段</span></header><div class="p2-closure">${['待确认','处理中','待复盘','已关闭'].map((x,i)=>`<article><i>${i+1}</i><span>${x}</span><strong>—</strong></article>`).join('<b>→</b>')}</div><p class="p2-note">闭环率：—（模板已保留）</p></article></section>
 <article class="p2-card full"><header><strong>品牌 × 月份 × 客诉类型</strong><span>缺失分类保持空白，不做推算</span></header><div class="p2-month"><div class="head"><span>月份</span>${brands.map(x=>`<strong>${x}</strong>`).join('')}</div>${months.length?months.map(m=>`<div><span>${m.start.slice(0,7)}</span>${brands.map(name=>{const x=m.brands?.find(y=>y.name===name);return`<article><b>总客诉 ${num(x?.complaints)}</b><em>质检 ${num(x?.qualityIssues)}</em><em>面料 ${num(x?.fabricComplaints)}</em><em>生产 ${num(x?.productionComplaints)}</em><strong>客诉率 ${pct(qcComplaintRate(x?.complaints,x?.shipment),2)}</strong></article>`}).join('')}</div>`).join(''):'<div class="p2-empty">暂无月度数据，模板已保留</div>'}</div></article>
 <footer class="p2-actions"><span>数据来源：仓储周会/月报</span><button>查看客诉明细</button><button>生成复盘</button><button data-qc-drill-view="alerts">进入异常中心</button></footer>`;
}
function enrich(){
 const p=q('[data-qc-view-section="people"]'),a=q('[data-qc-view-section="alerts"]'),quality=q('[data-qc-view-section="quality"]');
 p?.classList.add('p2-people-layout');a?.classList.add('p2-alert-layout');quality?.classList.add('p2-quality-layout');
 if(p&&!q('#p2PeopleTemplate'))p.insertAdjacentHTML('beforeend','<section id="p2PeopleTemplate" class="p2-grid people-template"><article class="p2-card"><header><strong>人员能力雷达</strong><span>按当前人效 Top 1</span></header><div class="p2-radar"><span>质检类</span><span>包装</span><span>进返修间</span><span>大货</span><strong>能力雷达</strong></div></article><article class="p2-card"><header><strong>排班建议</strong><span>模板</span></header><ul class="p2-suggest"><li><b>核心人员排班</b><span>结合在岗时长与综合人效安排。</span></li><li><b>模块能力匹配</b><span>按质检类、包装、进返修间实际产出分配。</span></li><li><b>班次字段待同步</b><span>后续每日飞书更新自动补充。</span></li></ul></article></section>');
 if(a&&!q('#p2AlertTemplate'))q('#qcAlertWorkbench')?.insertAdjacentHTML('afterend','<section id="p2AlertTemplate" class="p2-grid alert-template"><article class="p2-card"><header><strong>处理进度</strong><span>状态字段待同步</span></header><ol class="p2-timeline"><li class="done">系统发现</li><li>已分派</li><li>处理中</li><li>待复盘</li></ol></article><article class="p2-card"><header><strong>建议动作</strong><span>模板</span></header><ul class="p2-suggest"><li><b>定位问题来源</b><span>关联品牌、模块和日期。</span></li><li><b>分派责任人</b><span>责任人字段待飞书同步。</span></li><li><b>形成闭环</b><span>记录复盘与关闭时间。</span></li></ul></article></section>');
}
function render(){if(!qcState?.data)return;install();qa('[data-p2-filter]').forEach(x=>x.innerHTML=filter(x.dataset.p2Filter));enrich();realtime();try{complaint()}catch(error){console.error('P2 complaint render',error)}}
const prior=window.renderQCDashboard;
window.renderQCDashboard=renderQCDashboard=function(){prior();render()};
install();render();
})();
