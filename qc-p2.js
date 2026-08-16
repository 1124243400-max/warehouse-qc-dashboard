(() => {
'use strict';
function refreshPeopleChartLink(section){
 const name=String(qcState.peopleLinkedPerson||'').trim();
 const linked=qa('[data-p2-person-link]',section);
 const hasMatch=linked.some(node=>node.dataset.p2PersonLink===name);
 if(name&&!hasMatch)qcState.peopleLinkedPerson='';
 const active=hasMatch?name:'';
 linked.forEach(node=>{const selected=Boolean(active)&&node.dataset.p2PersonLink===active;node.classList.toggle('is-person-linked',selected);node.setAttribute('aria-pressed',selected?'true':'false')});
 const activeNode=active?linked.find(node=>node.dataset.p2PersonLink===active):null;
 const activeBrands=String(activeNode?.dataset.p2PersonBrands||'').trim();
 qa('[data-p2-person-link-status]',section).forEach(node=>{node.textContent=active?'\u5df2\u5b9a\u4f4d\uff1a'+active+(activeBrands?' \u00b7 '+activeBrands:'')+'\uff1b\u70b9\u51fb\u53ef\u5207\u6362\u4eba\u5458':'\u70b9\u51fb\u5de6\u4fa7\u6392\u884c\u6216\u53f3\u4fa7\u67f1\u5f62\u3001\u6298\u7ebf\u70b9\u3001\u59d3\u540d\uff0c\u53cc\u5411\u540c\u6b65\u5b9a\u4f4d'});
 qa('[data-p2-person-focus-summary]',section).forEach(summary=>{
  summary.hidden=!active;
  if(!active)return;
  const set=(selector,value)=>{const target=summary.querySelector(selector);if(target)target.textContent=value};
  set('[data-p2-focus-name]',active);
  set('[data-p2-focus-brand]',activeBrands||'\u672a\u767b\u8bb0\u54c1\u724c');
  const output=String(activeNode?.dataset.p2PersonOutput||'\u2014'),hours=String(activeNode?.dataset.p2PersonHours||'\u2014'),rate=String(activeNode?.dataset.p2PersonRate||'\u2014');
  set('[data-p2-focus-metrics]','\u6709\u6548\u4ea7\u51fa '+output+' \u4ef6 \u00b7 \u6709\u6548\u5de5\u65f6 '+hours+' \u5c0f\u65f6 \u00b7 \u7efc\u5408\u4eba\u6548 '+rate+' \u4ef6/\u4eba\u65f6');
 });
}
function pulsePeopleChartTarget(section,name,reduced){
 const chart=section.querySelector('.p2-people-comparison-card .p2-people-combo-chart');
 if(!chart)return;
 qa('[data-p2-person-link]',chart).forEach(node=>node.classList.remove('is-person-arrived'));
 if(section._peopleLinkPulseTimer)window.clearTimeout(section._peopleLinkPulseTimer);
 const matched=qa('[data-p2-person-link]',chart).filter(node=>node.dataset.p2PersonLink===name);
 matched.forEach(node=>node.classList.add('is-person-arrived'));
 section._peopleLinkPulseTimer=window.setTimeout(()=>matched.forEach(node=>node.classList.remove('is-person-arrived')),reduced?0:760);
}
function revealPeopleChartPerson(section,name,reduced){
 const chart=section.querySelector('.p2-people-comparison-card .p2-people-combo-chart');
 const scroller=chart?.closest('.p2-combo-scroll');
 const focusBand=chart?qa('.p2-person-focus-band[data-p2-person-link]',chart).find(node=>node.dataset.p2PersonLink===name):null;
 const fallback=chart?qa('[data-p2-person-link]',chart).find(node=>node.dataset.p2PersonLink===name):null;
 const target=focusBand||fallback;
 if(!chart||!scroller||!target)return;
 const viewBoxWidth=chart.viewBox?.baseVal?.width||Number(chart.getAttribute('viewBox')?.split(/\s+/)[2])||chart.clientWidth||1;
 const scale=chart.clientWidth/viewBoxWidth;
 const targetX=focusBand
  ?(Number(focusBand.getAttribute('x'))+Number(focusBand.getAttribute('width'))/2)*scale
  :(target.getBoundingClientRect().left+target.getBoundingClientRect().width/2-chart.getBoundingClientRect().left);
 const maxLeft=Math.max(0,scroller.scrollWidth-scroller.clientWidth);
 const left=Math.min(maxLeft,Math.max(0,targetX-scroller.clientWidth/2));
 scroller.scrollTo({left,behavior:reduced?'auto':'smooth'});
 const card=scroller.closest('.p2-people-comparison-card');
 if(card){
  const rect=card.getBoundingClientRect();
  if(rect.top<0||rect.bottom>window.innerHeight)card.scrollIntoView({behavior:reduced?'auto':'smooth',block:'nearest'});
 }
 pulsePeopleChartTarget(section,name,reduced);
}
function togglePeopleChartLink(section,name,fromChart){
 const next=String(name||'').trim();
 if(!next)return;
 qcState.peopleLinkedPerson=next;
 refreshPeopleChartLink(section);
 const reduced=window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
 if(fromChart){
  const row=qa('[data-p2-person-link]',section).find(node=>node.dataset.p2PersonLink===next&&node.classList.contains('p2-efficiency-rank'));
  row?.scrollIntoView({behavior:reduced?'auto':'smooth',block:'nearest',inline:'nearest'});
  return;
 }
 requestAnimationFrame(()=>revealPeopleChartPerson(section,next,reduced));
}const q=(s,r=document)=>r.querySelector(s),qa=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const num=(v,d=0)=>Number.isFinite(Number(v))?Number(v).toLocaleString('zh-CN',{minimumFractionDigits:d,maximumFractionDigits:d}):'—';
const pct=(v,d=1)=>Number.isFinite(Number(v))?(Number(v)*100).toFixed(d)+'%':'—';
const brands=['鹭青一','周淼','陈陈'];
  const complaintBrandTones={'鹭青一':'brand-luqing','周淼':'brand-zhoumiao','陈陈':'brand-chenchen'};
const complaintBrandColors={'\u9e6d\u9752\u4e00':'#176fe5','\u5468\u6dfc':'#16a57e','\u9648\u9648':'#f19122'};
const metricIcons={'▦':'overview','◇':'quality','▣':'package','↻':'repair','♙':'people','◎':'presence','◔':'sampling','♢':'quality','▱':'fabric','▥':'production','!':'alert','◷':'clock','↗':'efficiency','★':'star','◴':'clock'};
function complaintPeriods(){const monthly=qcState.complaintGranularity==='month',key=monthly?'monthly':'weekly',list=qcState.complaints?.[key]||[],start=qcState.complaintStart||'',end=qcState.complaintEnd||'';return list.filter(item=>monthly?(!start||item.end>=start)&&(!end||item.start<=end):(!start||item.start>=start)&&(!end||item.start<=end))}
function period(){return complaintPeriods().at(-1)}
function selected(p){return qcState.complaintBrand&&qcState.complaintBrand!=='all'?p?.brands?.find(x=>x.name===qcState.complaintBrand):p}
function rangeTotals(periods){const brandAll=!(qcState.complaintBrand&&qcState.complaintBrand!=='all');let c=0,s=0,q=0,f=0,pr=0;periods.forEach(item=>{if(brandAll){c+=Number(item.complaints)||0;s+=Number(item.shipment)||0;q+=Number(item.qualityIssues)||0;(Array.isArray(item.brands)?item.brands:[]).forEach(b=>{if(Number.isFinite(Number(b?.fabricComplaints)))f+=Number(b.fabricComplaints);if(Number.isFinite(Number(b?.productionComplaints)))pr+=Number(b.productionComplaints)})}else{const x=selected(item);c+=Number(x?.complaints)||0;s+=Number(x?.shipment)||0;q+=Number(x?.qualityIssues)||0;if(Number.isFinite(Number(x?.fabricComplaints)))f+=Number(x.fabricComplaints);if(Number.isFinite(Number(x?.productionComplaints)))pr+=Number(x.productionComplaints)}});return{c,s,q,f,pr,r:qcComplaintRate(c,s),count:periods.length}}
function compareNames(){const configured=Array.isArray(qcState.complaintCompareBrands)&&qcState.complaintCompareBrands.length?qcState.complaintCompareBrands:(qcState.complaintBrand&&qcState.complaintBrand!=='all'?[qcState.complaintBrand]:brands);return brands.filter(name=>configured.includes(name))}
function compareTotals(name,periods){const total=periods.reduce((sum,item)=>{const x=item?.brands?.find(brand=>brand.name===name);sum.c+=Number(x?.complaints)||0;sum.s+=Number(x?.shipment)||0;return sum},{name,c:0,s:0});total.r=qcComplaintRate(total.c,total.s);return total}
function complaintBrandCombo(sourceRows){
 const rows=[...sourceRows].sort((a,b)=>brands.indexOf(a.name)-brands.indexOf(b.name)),width=820,height=238,left=58,right=52,top=30,bottom=194,plotWidth=width-left-right,plotHeight=bottom-top,count=Math.max(1,rows.length),rawCountMax=Math.max(1,...rows.map(item=>item.c||0)),magnitude=10**Math.floor(Math.log10(rawCountMax)),normalized=rawCountMax/magnitude,countMax=(normalized<=1?1:normalized<=2?2:normalized<=5?5:10)*magnitude,rateValues=rows.flatMap(item=>[item.r,item.pr]).filter(Number.isFinite).map(value=>value*100),rateMax=Math.max(4,Math.ceil(Math.max(0,...rateValues)*1.15/4)*4),barWidth=Math.min(58,Math.max(34,plotWidth/count*.24));
 const x=index=>left+plotWidth*(index+.5)/count,countY=value=>bottom-(Math.max(0,value||0)/countMax)*plotHeight,rateY=value=>value==null?bottom:bottom-Math.min(rateMax,value*100)/rateMax*plotHeight,grid=Array.from({length:5},(_,index)=>{const ratio=index/4,y=bottom-ratio*plotHeight;return `<g><line x1="${left}" y1="${y}" x2="${width-right}" y2="${y}"/><text x="${left-10}" y="${y+4}" text-anchor="end">${num(countMax*ratio)}</text><text x="${width-right+10}" y="${y+4}">${(rateMax*ratio).toFixed(ratio?1:0)}%</text></g>`}).join('');
 const currentPoints=rows.map((item,index)=>item.r==null?'':`${x(index)},${rateY(item.r)}`).filter(Boolean).join(' '),previousPoints=rows.map((item,index)=>item.pr==null?'':`${x(index)},${rateY(item.pr)}`).filter(Boolean).join(' '),description=rows.map(item=>`${item.name}\u672c\u671f\u5ba2\u8bc9${num(item.c)}\u4ef6\u3001\u672c\u671f\u5ba2\u8bc9\u7387${pct(item.r,2)}\u3001\u4e0a\u671f\u5ba2\u8bc9\u7387${pct(item.pr,2)}`).join('\uff1b');
 const barsMarkup=rows.map((item,index)=>{const center=x(index),y=countY(item.c),color=complaintBrandColors[item.name]||'#71879c';return `<g class="p2-brand-combo-bar" style="--series:${color}"><rect x="${center-barWidth/2}" y="${y}" width="${barWidth}" height="${Math.max(2,bottom-y)}" rx="7" fill="${color}"/><text class="bar-value" x="${center}" y="${Math.max(top+10,y-8)}" text-anchor="middle">${num(item.c)} \u4ef6</text><text class="brand-name" x="${center}" y="${bottom+24}" text-anchor="middle">${esc(item.name)}</text></g>`}).join('');
 const rateMarkup=rows.map((item,index)=>{const center=x(index),labelX=center+barWidth/2+7,currentY=rateY(item.r),previousY=rateY(item.pr),previous=item.pr==null?'':`<circle class="previous-point" cx="${center}" cy="${previousY}" r="4"/><text class="previous-label" x="${labelX}" y="${Math.min(bottom-5,previousY+14)}">${pct(item.pr,2)}</text>`,current=item.r==null?'':`<circle class="current-point" cx="${center}" cy="${currentY}" r="5"/><text class="current-label" x="${labelX}" y="${Math.max(top+10,currentY-7)}">${pct(item.r,2)}</text>`;return previous+current}).join('');
 const meta=rows.map(item=>{const delta=item.r==null||item.pr==null?null:(item.r-item.pr)*100,tone=delta===null||delta===0?'neutral':delta<0?'good':'risk',color=complaintBrandColors[item.name]||'#71879c';return `<article style="--series:${color}"><strong><i></i>${esc(item.name)}</strong><span>\u672c\u671f\u53d1\u8d27 ${num(item.s)} \u5355</span><small class="${tone}">${delta===null?'\u2014':(delta>0?'+':'')+delta.toFixed(2)+' \u4e2a\u767e\u5206\u70b9'}</small></article>`}).join('');
 return `<div id="p2BrandComplaintCombo" class="p2-brand-combo-chart" aria-label="\u54c1\u724c\u5ba2\u8bc9\u4ef6\u6570\u53ca\u5ba2\u8bc9\u7387\u5bf9\u6bd4"><div class="p2-brand-combo-legend"><span><i class="bar"></i>\u672c\u671f\u5ba2\u8bc9</span><span><i class="current"></i>\u672c\u671f\u5ba2\u8bc9\u7387</span><span><i class="previous"></i>\u4e0a\u671f\u5ba2\u8bc9\u7387</span></div><svg viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="p2BrandComboTitle p2BrandComboDesc"><title id="p2BrandComboTitle">\u54c1\u724c\u5ba2\u8bc9\u5bf9\u6bd4\u7ec4\u5408\u56fe</title><desc id="p2BrandComboDesc">${esc(description)}</desc><g class="grid">${grid}</g><text class="axis-title left" x="${left}" y="16">\u5ba2\u8bc9\u4ef6\u6570</text><text class="axis-title right" x="${width-right}" y="16" text-anchor="end">\u5ba2\u8bc9\u7387</text><g class="bars">${barsMarkup}</g>${previousPoints?`<polyline class="previous-line" points="${previousPoints}"/>`:''}${currentPoints?`<polyline class="current-line" points="${currentPoints}"/>`:''}<g class="points">${rateMarkup}</g></svg><div class="p2-brand-combo-meta" style="--brand-count:${count}">${meta}</div></div>`
}
function issueSub(value,total,note=''){const share=value!=null&&Number.isFinite(Number(value))&&total?'占客诉 '+pct(Number(value)/total,0):'待同步';return '<em>'+(note?note+' · ':'')+share+'</em>'}
function iconSvg(token){return typeof window.qcIconSvg==='function'?window.qcIconSvg(token):''}
function kpi(icon,label,value,unit,tone,sub='',options={}){const token=metricIcons[icon]||icon,digits=unit==='%'?2:unit.includes('\u4eba\u65f6')?1:0,detailType=options.detailType||'',active=detailType&&options.activeDetail===detailType;return `<article class="p2-kpi ${tone}${detailType?' has-detail':''}${active?' is-detail-active':''}"${detailType?` data-qc-complaint-card-detail="${detailType}"`:''}><i class="p2-metric-icon icon-${token} has-svg" aria-hidden="true">${iconSvg(token)}</i><div><span>${label}</span><strong>${value==null?'\u2014':num(value,digits)}<small>${unit}</small></strong>${value==null?'<em>\u5f85\u540c\u6b65</em>':sub}</div>${detailType?`<button type="button" class="p2-kpi-detail-trigger${active?' active':''}" data-qc-complaint-detail="${detailType}" aria-expanded="${active?'true':'false'}" aria-controls="p2ComplaintIssueDetail"><span>\u8be6\u60c5</span><i aria-hidden="true">\u203a</i></button>`:''}</article>`}
const complaintDetailMeta={quality:{label:'\u8d28\u68c0\u95ee\u9898',tone:'green',colorLabel:'绿色',field:'qualityIssues'},fabric:{label:'\u9762\u6599\u95ee\u9898',tone:'amber',colorLabel:'橙色',field:'fabricComplaints'},production:{label:'\u751f\u4ea7\u95ee\u9898',tone:'red',colorLabel:'红色',field:'productionComplaints'}};
function complaintDetailRows(type,items){const meta=complaintDetailMeta[type],rows=new Map();(items||[]).forEach(item=>{const details=Array.isArray(item?.issueDetails?.[type])?item.issueDetails[type].filter(row=>Number.isFinite(Number(row?.count))):[];if(details.length){details.forEach(row=>{const name=String(row.name||'\u5176\u4ed6').trim()||'\u5176\u4ed6',current=rows.get(name)||{name,count:0,note:row.note||''};current.count+=Number(row.count)||0;if(!current.note&&row.note)current.note=row.note;rows.set(name,current)})}else{const total=Number(item?.[meta.field]);if(Number.isFinite(total)){const name='\u5468\u62a5\u5206\u7c7b\u5408\u8ba1',current=rows.get(name)||{name,count:0,note:'\u672c\u671f\u5468\u62a5\u672a\u7ee7\u7eed\u62c6\u5206\u95ee\u9898\u70b9'};current.count+=total;rows.set(name,current)}}});return [...rows.values()].sort((a,b)=>b.count-a.count||a.name.localeCompare(b.name,'zh-CN'))}
function complaintDetailPanel(items,brandLabel,periodLabel,activeDetail){const source=(items||[]).map(item=>item?.issueDetails?.source||item?.categorySource).find(Boolean)||'\u4ed3\u50a8\u5468\u4f1a';const panels=Object.entries(complaintDetailMeta).map(([type,meta])=>{const rows=complaintDetailRows(type,items),reportedTotal=(items||[]).reduce((sum,item)=>{const value=Number(item?.[meta.field]);return sum+(Number.isFinite(value)?value:0)},0),detailTotal=rows.reduce((sum,row)=>sum+(Number(row.count)||0),0),denominator=Math.max(reportedTotal,detailTotal);return `<article class="p2-complaint-detail-card ${meta.tone}" data-qc-complaint-detail-panel="${type}"${activeDetail===type?'':' hidden'}><header><div><span>\u5468\u62a5\u95ee\u9898\u660e\u7ec6</span><strong>${meta.label}\u5206\u7c7b</strong></div><button type="button" data-qc-complaint-detail-close aria-label="\u6536\u8d77${meta.label}\u8be6\u60c5">\u6536\u8d77 <i aria-hidden="true">\u00d7</i></button></header><p>${esc(brandLabel)} \u00b7 ${esc(periodLabel)} \u00b7 \u6570\u636e\u6e90\u81ea${esc(source)}${denominator?` \u00b7 \u5360\u6bd4\u6309${meta.label}\u5206\u7c7b\u5408\u8ba1 ${num(denominator)} \u4ef6\u8ba1\u7b97`:''}</p><div class="p2-complaint-detail-legend" aria-label="${meta.colorLabel}条形表示占${meta.label}的比例"><i aria-hidden="true"></i><strong>${meta.colorLabel}条形</strong><span>长度表示占${meta.label}的比例</span></div><div class="p2-complaint-detail-list">${rows.length?rows.map((row,index)=>{const share=denominator?row.count/denominator:null,shareLabel=share==null?'\u2014':pct(share,1),width=share==null?0:Math.min(100,Math.max(3,share*100));return `<div style="--detail-index:${index};--detail-width:${width}%;--detail-delay:${80+index*55}ms" aria-label="${esc(row.name)} ${num(row.count)} \u4ef6\uff0c\u5360${meta.label} ${shareLabel}"><span>${esc(row.name)}</span><i><em></em></i><strong><b>${num(row.count)} \u4ef6</b><small>\u5360${meta.label} ${shareLabel}</small></strong></div>`}).join(''):'<div class="p2-empty">\u5f53\u524d\u5468\u62a5\u672a\u63d0\u4f9b\u8be5\u7c7b\u660e\u7ec6</div>'}</div></article>`}).join('');return `<section id="p2ComplaintIssueDetail" class="p2-complaint-detail${activeDetail?' is-open':''}" data-active-detail="${activeDetail||''}" aria-live="polite"><div class="p2-complaint-detail-clip">${panels}</div></section>`}
function filter(view){
 if(view==='complaint')return '';
 const common=`<label><span>品牌（多选）</span><strong>${esc(qcBrandLabel())}</strong></label><b class="p2-sync"><i class="ui-line-icon icon-sync has-svg" aria-hidden="true">${iconSvg('sync')}</i>已与全局同步</b>`;
 const data={realtime:[['作业模块','全部模块'],['班组','全部班组'],['人员',qcState.person==='all'?'全部人员':qcState.person],['刷新频率','每日更新']],people:[['岗位','全部岗位'],['作业模块','全部模块'],['班组','全部班组'],['排名口径','综合人效']],quality:[['质量模块','全部模块'],['问题类型','全部类型'],['严重程度','全部']],complaint:[['统计粒度',qcState.complaintGranularity==='month'?'月度':'周度'],['客诉类型','全部类型'],['渠道','全部渠道'],['状态','全部']],alerts:[['异常来源','全部来源'],['严重程度','全部'],['处理状态','未关闭'],['责任人','全部人员']]}[view]||[];
 return (view==='people'?'':common)+data.map(x=>`<label><span>${x[0]}</span><strong>${esc(x[1])}</strong></label>`).join('');
}
function install(){
 const meta={realtime:['实时作业','当前作业量、效率与异常实时监控'],people:['人员分析','在岗时长、人数、产能与质量表现'],quality:['质量分析','问题分布与返修口径'],complaint:['客诉分析','客诉率、问题结构与品牌趋势'],alerts:['异常中心','统一发现、分析、跟进与关闭品控异常']};
 Object.entries(meta).forEach(([v,m])=>{const s=q(`[data-qc-view-section="${v}"]`),h=s?.querySelector('.qc-section-head');if(!s||!h)return;h.querySelector('span').textContent=m[0];h.querySelector('h2').textContent=m[0];const p=h.querySelector('p');if(p)p.textContent=m[1];let b=s.querySelector('[data-qc-local-bar],[data-p2-filter]');if(!b){h.insertAdjacentHTML('afterend',`<div class="p2-filter" data-p2-filter="${v}"></div>`);b=s.querySelector('[data-p2-filter]')}b.className='p2-filter';b.dataset.p2Filter=v;b.innerHTML=filter(v)});
 const t=q('#qcComplaintToolbar'),f=q('#qcComplaintFilters');if(t&&f&&t.nextElementSibling!==f)t.insertAdjacentElement('afterend',f);if(f&&!q('#p2Complaint'))f.insertAdjacentHTML('afterend','<div id="p2Complaint" class="p2-workbench"></div>');
 const root=q('#p2Complaint');if(root&&!root.dataset.compareBrandBound){root.dataset.compareBrandBound='true';root.addEventListener('click',event=>{const detailButton=event.target.closest('[data-qc-complaint-detail]'),detailCard=event.target.closest('[data-qc-complaint-card-detail]'),closeButton=event.target.closest('[data-qc-complaint-detail-close]');if(detailButton||detailCard||closeButton){const panel=q('#p2ComplaintIssueDetail',root),type=detailButton?.dataset.qcComplaintDetail||detailCard?.dataset.qcComplaintCardDetail||'',next=(closeButton||qcState.complaintDetailType===type)?'':type;qcState.complaintDetailType=next;qa('[data-qc-complaint-detail]',root).forEach(button=>{const active=button.dataset.qcComplaintDetail===next;button.classList.toggle('active',active);button.setAttribute('aria-expanded',active?'true':'false')});qa('[data-qc-complaint-card-detail]',root).forEach(card=>card.classList.toggle('is-detail-active',card.dataset.qcComplaintCardDetail===next));if(panel){panel.dataset.activeDetail=next;panel.classList.toggle('is-open',Boolean(next));qa('[data-qc-complaint-detail-panel]',panel).forEach(card=>{card.hidden=card.dataset.qcComplaintDetailPanel!==next;if(!card.hidden){card.classList.remove('is-switching');requestAnimationFrame(()=>card.classList.add('is-switching'))}})}if(next){const target=q('#p2ComplaintDetailTarget',root),reduced=window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;requestAnimationFrame(()=>target?.scrollIntoView({behavior:reduced?'auto':'smooth',block:'center'}))}return}const button=event.target.closest('[data-qc-compare-brand]');if(!button)return;const name=button.dataset.qcCompareBrand,current=compareNames(),next=current.includes(name)?current.filter(item=>item!==name):[...current,name];if(!next.length)return;qcState.complaintCompareBrands=next;renderQCDashboard()})}
}
function personStats(r={start:qcState.start,end:qcState.end}){const map=new Map();qcFilterRows(qcState.data.capacity,r).forEach(x=>{if(!x.n)return;let p=map.get(x.n);if(!p){p={name:x.n,out:0,days:new Map()};map.set(x.n,p)}p.out+=qcEfficiencyOutput(x);const effectiveHours=qcEffectiveHours(x);if(x.d&&effectiveHours>(p.days.get(x.d)||0))p.days.set(x.d,effectiveHours)});return [...map.values()].map(p=>{p.wh=[...p.days.values()].reduce((a,b)=>a+b,0);p.rate=p.wh?p.out/p.wh:null;return p})}
function realtime(){
 const root=q('#qcRealtimeCards');if(!root)return;const r={start:qcState.start,end:qcState.end},cr=qcComparisonRange(r),a=qcFilterRows(qcState.data.capacity,r),b=cr?qcFilterRows(qcState.data.capacity,cr):[],m=qcCapacityMetrics(a),pm=qcCapacityMetrics(b),ps=personStats(r),pps=cr?personStats(cr):[],out=a.reduce((s,x)=>s+qcEfficiencyOutput(x),0),pout=b.reduce((s,x)=>s+qcEfficiencyOutput(x),0),wh=ps.reduce((s,x)=>s+x.wh,0),pwh=pps.reduce((s,x)=>s+x.wh,0),eff=wh?out/wh:null,peff=pwh?pout/pwh:null;
 const d=(x,y,bad=false)=>{const n=(+x||0)-(+y||0),rr=y?n/y:null,good=bad?n<=0:n>=0;return `<em class="${n===0?'neutral':good?'good':'risk'}">${n>0?'↗':n<0?'↘':'→'} ${rr==null?'—':(rr>0?'+':'')+(rr*100).toFixed(1)+'%'}</em>`};
 const cards=[
  ['▦','人效产出合计',out,pout,'件','blue',false],
  ['◇','大货质检',m.bigGoods,pm.bigGoods,'件','green',false],
  ['◇','销退质检',m.returnQc,pm.returnQc,'件','green',false],
  ['◇','唯品会质检',m.vipQc,pm.vipQc,'件','blue',false],
  ['◇','下架质检',m.offShelfQc,pm.offShelfQc,'件','amber',true],
  ['↻','返修质检',m.repairQc,pm.repairQc,'件','violet',true],
  ['!','异常件质检',m.abnormalQc,pm.abnormalQc,'件','red',true],
  ['▣','包装',m.packing,pm.packing,'件','amber',false],
  ['↻','进返修间',m.repair,pm.repair,'件','violet',true],
  ['♙','综合人效',eff,peff,'件/人时','blue',false],
  ['◎','在岗',ps.filter(x=>x.wh).length,pps.filter(x=>x.wh).length,'人','teal',false]
 ];
 root.innerHTML=cards.map(x=>kpi(x[0],x[1],x[2],x[4],x[5],d(x[2],x[3],x[6]))).join('');
}
function monthlyStatusText(item){const rows=Array.isArray(item?.handlingStatusSummary)?item.handlingStatusSummary:[],count=label=>rows.filter(row=>row.status===label).reduce((sum,row)=>sum+(Number(row.count)||0),0),documented=count('\u5df2\u8bb0\u5f55\u5904\u7406\u65b9\u6848'),missing=count('\u672a\u63d0\u4f9b\u5904\u7406\u72b6\u6001'),explicit=Math.max(0,rows.reduce((sum,row)=>sum+(Number(row.count)||0),0)-documented-missing);return '\u5904\u7406\u65b9\u6848\u5df2\u8bb0\u5f55 '+num(documented)+' \u00b7 \u660e\u786e\u72b6\u6001 '+num(explicit)+' \u00b7 \u72b6\u6001\u672a\u63d0\u4f9b '+num(missing)}
function complaint(){
 const root=q('#p2Complaint');if(!root||!qcState.complaints)return;
 const periods=complaintPeriods();
 if(!periods.length){root.innerHTML='<div class="p2-empty">当前日期与品牌筛选下暂无客诉数据，请调整周期后重试。</div>';return}
 const granularity=qcState.complaintGranularity==='month'?'month':'week',periodUnit=granularity==='month'?'月':'周',p=periods.at(-1),s=selected(p),rate=qcComplaintRate(s?.complaints,s?.shipment),qr=qcComplaintRate(s?.qualityIssues,s?.shipment),total=+s?.complaints||0,sourceBrands=Array.isArray(p?.brands)?p.brands:[];
 const hasCategories=item=>[item?.qualityIssues,item?.fabricComplaints,item?.productionComplaints].every(value=>value!==null&&value!==''&&Number.isFinite(Number(value)));
 const categoryBrands=qcState.complaintBrand==='all'?sourceBrands.filter(hasCategories):(hasCategories(s)?[s]:[]),categoryComplete=categoryBrands.length>0,categoryTotal=categoryBrands.reduce((sum,item)=>sum+(Number(item.complaints)||0),0),categoryQuality=categoryComplete?categoryBrands.reduce((sum,item)=>sum+(Number(item.qualityIssues)||0),0):null,categoryFabric=categoryComplete?categoryBrands.reduce((sum,item)=>sum+(Number(item.fabricComplaints)||0),0):null,categoryProduction=categoryComplete?categoryBrands.reduce((sum,item)=>sum+(Number(item.productionComplaints)||0),0):null,other=categoryComplete?Math.max(0,categoryTotal-categoryQuality-categoryFabric-categoryProduction):null,categoryNames=categoryBrands.map(item=>item.name).join('、'),partialCategory=qcState.complaintBrand==='all'&&categoryBrands.length>0&&categoryBrands.length<sourceBrands.length,categoryCoverageMismatch=qcState.complaintBrand==='all'&&categoryComplete&&categoryTotal!==total,categoryNote=partialCategory?categoryNames+'已同步':categoryCoverageMismatch?'品牌口径':'',categoryLabel=categoryComplete?(partialCategory?categoryNames+' · 已同步 '+categoryBrands.length+'/'+sourceBrands.length+' 品牌':categoryCoverageMismatch?'全部品牌 · 品牌口径合计':(qcState.complaintBrand==='all'?'全部品牌':qcState.complaintBrand)):'分类待同步',categoryFootnote=partialCategory?'分类数据当前覆盖 '+categoryNames+'，不与未同步品牌混算。':categoryCoverageMismatch?'品牌周会表按品牌口径合计 '+num(categoryTotal)+' 件；汇总总客诉 '+num(total)+' 件，两个口径不混算。':'';
 const colors=['#176fe5','#f29223','#ef3e3e','#33a86e'],parts=categoryComplete?[categoryQuality,categoryFabric,categoryProduction,other]:[];let cursor=0;const stops=parts.map((value,index)=>{const start=cursor;cursor+=categoryTotal?value/categoryTotal*100:0;return colors[index]+' '+start+'% '+cursor+'%'}).join(',');
 const trendPeriods=periods.slice(-12),vals=trendPeriods.map(item=>{const x=selected(item),value=qcComplaintRate(x?.complaints,x?.shipment);return value===null?0:value*100}),max=Math.max(2.4,...vals)*1.12,brandNames=qcState.complaintBrand==='all'?brands:[qcState.complaintBrand],compareBrands=compareNames();
 const brandRows=compareBrands.map(name=>{const current=p?.brands?.find(item=>item.name===name),complaints=Number(current?.complaints)||0,shipment=Number(current?.shipment)||0;return{name,c:complaints,s:shipment,r:qcComplaintRate(complaints,shipment),pr:qcComplaintRate(current?.previousComplaints,current?.previousShipment)}}).sort((a,b)=>b.c-a.c||a.name.localeCompare(b.name,'zh-CN')),compareMax=Math.max(1,...brandRows.map(item=>item.c||0));
 const allMonths=qcState.complaints.monthly||[],start=qcState.complaintStart||'',end=qcState.complaintEnd||'',months=allMonths.filter(item=>(!start||item.end>=start)&&(!end||item.start<=end)).slice(-4),brandLabel=qcState.complaintBrand==='all'?'全部品牌':qcState.complaintBrand,periodLabel=qcComplaintPeriodLabel(p,granularity),trendRange=trendPeriods.length===1?periodLabel:`${qcComplaintPeriodLabel(trendPeriods[0],granularity)} 至 ${periodLabel}`,categoryItems=[['质检问题',categoryQuality,colors[0]],['面料问题',categoryFabric,colors[1]],['生产问题',categoryProduction,colors[2]],['其他问题',other,colors[3]]],detailItems=qcState.complaintBrand==='all'?categoryBrands:(s?[s]:[]),activeDetail=complaintDetailMeta[qcState.complaintDetailType]?qcState.complaintDetailType:'',kpiEntry=root.dataset.kpiRevealed?'':' is-entering';root.dataset.kpiRevealed='true';const range=rangeTotals(periods);const rangeStart=periods[0]?.start||'';const rangeEnd=periods.at(-1)?.end||'';const rangeLabel=(rangeStart&&rangeEnd)?(rangeStart+' ~ '+rangeEnd):periodLabel;const snapComplaints=Number(s?.complaints)||0;const rangeMultiple=snapComplaints?(range.c/snapComplaints):null;
 root.innerHTML=`
 <section class="p2-range-cumulative" aria-label="所选区间累计客诉"><header><strong>所选区间累计客诉</strong><span>${brandLabel} · ${rangeLabel} · 覆盖 ${range.count} 个${periodUnit}</span></header><div class="p2-range-cumulative-body"><div class="p2-range-hero"><strong>${num(range.c)}</strong><small>件 · 区间累计总客诉</small></div><ul class="p2-range-stats"><li><span>累计发货</span><b>${num(range.s)} 单</b></li><li><span>累计客诉率</span><b>${range.r==null?'—':pct(range.r,2)}</b></li><li><span>覆盖周期</span><b>${range.count} 个${periodUnit}</b></li><li><span>质检问题</span><b>${range.q==null?'待同步':num(range.q)+' 件'}</b></li><li><span>面料问题</span><b>${range.f==null?'待同步':num(range.f)+' 件'}</b></li><li><span>生产问题</span><b>${range.pr==null?'待同步':num(range.pr)+' 件'}</b></li></ul></div><p class="p2-range-note">最新周期（${periodLabel}）客诉 ${num(snapComplaints)} 件；区间累计为其 ${rangeMultiple==null?'—':rangeMultiple.toFixed(1)+' 倍'}（${rangeMultiple==null?'':'+'+((rangeMultiple-1)*100).toFixed(0)+'%'}）。下方 KPI 卡为「最新周期快照」，不随区间累加。</p></section><div class="p2-snapshot-tag">最新周期快照 · ${periodLabel}</div><section class="p2-kpis complaint${kpiEntry}">${kpi('\u25d4','\u5b9e\u9645\u5ba2\u8bc9\u7387',rate==null?null:rate*100,'%','blue')+kpi('\u2662','\u8d28\u68c0\u95ee\u9898\u5ba2\u8bc9\u7387',qr==null?null:qr*100,'%','green')+kpi('\u25a3','\u672c\u671f\u603b\u5ba2\u8bc9',s?.complaints,'\u4ef6','amber')+kpi('\u25c7','\u4e0a\u671f\u53d1\u8d27',s?.shipment,'\u5355','blue')+kpi('\u2662','\u8d28\u68c0\u95ee\u9898',s?.qualityIssues,'\u4ef6','green',issueSub(s?.qualityIssues,total),{detailType:'quality',activeDetail})+kpi('\u25b1','\u9762\u6599\u95ee\u9898',categoryFabric,'\u4ef6','amber',issueSub(categoryFabric,categoryTotal,categoryNote),{detailType:'fabric',activeDetail})+kpi('\u25a5','\u751f\u4ea7\u95ee\u9898',categoryProduction,'\u4ef6','red',issueSub(categoryProduction,categoryTotal,categoryNote),{detailType:'production',activeDetail})+kpi('\u25ce','\u5176\u4ed6\u95ee\u9898',other,'\u4ef6','teal',issueSub(other,categoryTotal,categoryNote))}</section>
 <section class="p2-grid complaint-top"><article class="p2-card trend"><header><strong>客诉率趋势（${trendPeriods.length} ${periodUnit}）</strong><span>${brandLabel} · ${trendRange}</span></header><div class="p2-trend" style="--warn:${100-2/max*100}%"><i class="warn"><b>预警 2.0%</b></i><div>${vals.map((value,index)=>`<article><strong>${value.toFixed(2)}%</strong><i class="${value>=2?'risk':''}" style="height:${value/max*100}%"></i><span>${granularity==='month'?trendPeriods[index].start.slice(0,7):trendPeriods[index].end.slice(5)}</span></article>`).join('')}</div></div></article><article class="p2-card"><header><strong>客诉问题结构（最新周期）</strong><span>${categoryLabel} · ${periodLabel}</span></header><div class="p2-donut-wrap"><div class="p2-donut" style="background:conic-gradient(${stops||'#eef2f6 0 100%'})"><strong>${categoryComplete?num(categoryTotal):'—'}<small>件<br>${categoryCoverageMismatch?'品牌口径客诉':partialCategory?'已同步客诉':'总客诉'}</small></strong></div><div class="p2-donut-legend">${categoryItems.map(item=>`<div><i style="background:${item[2]}"></i><span>${item[0]}</span><b>${item[1]==null?'—':num(item[1])+' 件'}</b><em>${item[1]==null||!categoryTotal?'待同步':pct(item[1]/categoryTotal,0)}</em></div>`).join('')}</div></div>${categoryFootnote?`<p class="p2-coverage-note">${categoryFootnote}</p>`:''}</article></section>
 <section class="p2-grid complaint-mid"><article class="p2-card p2-brand-compare-card"><header><strong>品牌客诉对比（最新周期）</strong><span>${periodLabel} · 当前周期同口径</span></header><div class="p2-brand-color-legend" aria-label="品牌颜色标识">${compareBrands.map(name=>`<span class="${complaintBrandTones[name]||"brand-default"}"><i></i>${name}</span>`).join('')}<small class="p2-brand-volume-note">条形长度按本期客诉量对比</small></div><div class="p2-brand-compare-table"><div class="head"><span>品牌</span><span>本期客诉</span><span>本期发货</span><span>客诉率</span><span>较上期</span></div>${brandRows.map((item,index)=>{const delta=item.r==null||item.pr==null?null:(item.r-item.pr)*100,tone=delta===null||delta===0?'neutral':delta<0?'good':'risk';return `<article class="${complaintBrandTones[item.name]||"brand-default"}"><strong>${item.name}</strong><div class="p2-brand-volume"><i aria-label="${item.name}本期客诉量相对最高品牌 ${pct(item.c/compareMax,0)}"><em style="width:${Math.max(4,item.c/compareMax*100)}%;--volume-delay:${index*90}ms"></em></i><b>${num(item.c)} 件</b></div><span>${num(item.s)} 单</span><em>${pct(item.r,2)}</em><small class="${tone}">${delta===null?'—':(delta>0?'+':'')+delta.toFixed(2)+' 个百分点'}</small></article>`}).join('')}</div></article><article class="p2-card p2-category-ranking-card"><header><strong>客诉问题构成</strong><span>${categoryLabel}</span></header><div class="p2-category-ranking">${categoryComplete?categoryItems.sort((a,b)=>b[1]-a[1]).map((item,index)=>`<article><b>${index+1}</b><span>${item[0]}</span><i><em style="width:${Math.max(0,Math.min(100,categoryTotal?item[1]/categoryTotal*100:0))}%;background:${item[2]}"></em></i><strong>${num(item[1])} 件</strong><small>${pct(item[1]/categoryTotal,0)}</small></article>`).join(''):'<div class="p2-empty">当前品牌的客诉分类尚未同步</div>'}</div></article></section>
 <article class="p2-card full p2-month-detail-card" id="p2ComplaintMonthlyDetailCard"><header><strong>\u54c1\u724c \u00d7 \u6708\u4efd \u00d7 \u5ba2\u8bc9\u7c7b\u578b</strong><span>${brandLabel} \u00b7 \u7c7b\u578b\u4e0e\u5904\u7406\u72b6\u6001\u6309\u5468\u4f1a\u660e\u7ec6\u6c47\u603b</span></header><div class="p2-month" style="--brand-columns:${Math.max(1,brandNames.length)}"><div class="head"><span>\u6708\u4efd</span>${brandNames.map(name=>`<strong>${name}</strong>`).join('')}</div>${months.length?months.map(month=>`<div><span>${month.start.slice(0,7)}</span>${brandNames.map(name=>{const item=month.brands?.find(value=>value.name===name);return`<article><b>\u603b\u5ba2\u8bc9 ${num(item?.complaints)}</b><em>\u8d28\u68c0 ${num(item?.qualityIssues)}</em><em>\u9762\u6599 ${item?.fabricComplaints==null?'\u5f85\u540c\u6b65':num(item.fabricComplaints)}</em><em>\u751f\u4ea7 ${item?.productionComplaints==null?'\u5f85\u540c\u6b65':num(item.productionComplaints)}</em><strong>\u5ba2\u8bc9\u7387 ${pct(qcComplaintRate(item?.complaints,item?.shipment),2)}</strong><small class="p2-month-status">${monthlyStatusText(item)}</small></article>`}).join('')}</div>`).join(''):'<div class="p2-empty">\u5f53\u524d\u7b5b\u9009\u8303\u56f4\u6682\u65e0\u6708\u5ea6\u6570\u636e</div>'}</div><div id="p2ComplaintDetailTarget" class="p2-month-detail-target"><div class="p2-month-detail-heading"><strong>${granularity==='month'?'\u672c\u6708\u6c47\u603b':'\u672c\u671f\u5468\u62a5'}\u95ee\u9898\u8be6\u60c5</strong><span>\u70b9\u51fb\u4e0a\u65b9\u201c\u8d28\u68c0\u95ee\u9898 / \u9762\u6599\u95ee\u9898 / \u751f\u4ea7\u95ee\u9898\u201d\u8be6\u60c5\u5b9a\u4f4d\u81f3\u6b64</span></div>${complaintDetailPanel(detailItems,brandLabel,periodLabel,activeDetail)}</div></article>
 <footer class="p2-actions"><button>查看客诉明细</button><button>生成复盘</button><button data-qc-drill-view="alerts">进入异常中心</button></footer>`;
 const comparisonCard=[...root.querySelectorAll('.p2-card')].find(card=>card.querySelector('header strong')?.textContent==='品牌客诉对比（最新周期）');
 if(comparisonCard){const selector=document.createElement('div');selector.className='p2-compare-filter';selector.innerHTML='<span>对比品牌</span>'+brands.map(name=>'<button type="button" data-qc-compare-brand="'+name+'" class="'+(compareBrands.includes(name)?'active':'')+'">'+name+'</button>').join('');comparisonCard.querySelector('header')?.insertAdjacentElement('afterend',selector)}
 if(comparisonCard){comparisonCard.querySelector('.p2-brand-color-legend')?.remove();const table=comparisonCard.querySelector('.p2-brand-compare-table');if(table)table.outerHTML=complaintBrandCombo(brandRows)}
}
function people(){
 const section=q('[data-qc-view-section="people"]');
 if(!section||!qcState?.data)return;
 const range=qcModuleRange('people');
 const base=qcFilterRows(qcState.data.capacity,range);
 const availableBrands=[...new Set(base.map(row=>String(row.b||'').trim()).filter(Boolean))];
 const brandNames=[...brands.filter(name=>availableBrands.includes(name)),...availableBrands.filter(name=>!brands.includes(name)).sort((a,b)=>a.localeCompare(b,'zh-CN'))];
 let brand=qcState.peopleBrandFilter||'all';
 if(brand!=='all'&&!brandNames.includes(brand))brand='all';
 qcState.peopleBrandFilter=brand;
 const brandRows=base.filter(row=>brand==='all'||String(row.b||'').trim()===brand);
 const roles=[...new Set(brandRows.map(row=>String(row.r||'').trim()).filter(Boolean))].sort((a,b)=>a.localeCompare(b,'zh-CN'));
 let role=qcState.peopleRoleFilter||'all';
 if(role!=='all'&&!roles.includes(role))role='all';
 qcState.peopleRoleFilter=role;
 const roleRows=brandRows.filter(row=>role==='all'||String(row.r||'').trim()===role);
 const peopleNames=[...new Set(roleRows.map(row=>String(row.n||'').trim()).filter(Boolean))].sort((a,b)=>a.localeCompare(b,'zh-CN'));
 let selected=Array.isArray(qcState.peoplePersonFilters)?qcState.peoplePersonFilters:qcState.peoplePersonFilter&&qcState.peoplePersonFilter!=='all'?[qcState.peoplePersonFilter]:[];
 selected=[...new Set(selected.map(value=>String(value).trim()).filter(value=>peopleNames.includes(value)))];
 qcState.peoplePersonFilters=selected;
 let controls=q('#p2PeopleControls');
 if(!controls){
  const anchor=q('[data-p2-filter="people"]')||q('#qcPeopleOverview');
  anchor?.insertAdjacentHTML('afterend','<div id="p2PeopleControls" class="p2-people-controls" aria-label="人效筛选"></div>');
  controls=q('#p2PeopleControls');
 }
 const pickerWasOpen=controls?.querySelector('details')?.open===true;
 const pickerSearch=controls?.querySelector('[data-p2-people-search]')?.value||'';
 if(controls){
  const brandOptions='<option value="all">全部品牌</option>'+brandNames.map(value=>'<option value="'+esc(value)+'"'+(value===brand?' selected':'')+'>'+esc(value)+'</option>').join('');
  const roleOptions='<option value="all">全部工种</option>'+roles.map(value=>'<option value="'+esc(value)+'"'+(value===role?' selected':'')+'>'+esc(value)+'</option>').join('');
  const selectionLabel=selected.length?(selected.length<=2?selected.map(esc).join('、'):'已选 '+selected.length+' 人'):'全部人员（汇总）';
  const choices=peopleNames.map(value=>'<label><input type="checkbox" data-p2-people-choice="'+esc(value)+'"'+(selected.includes(value)?' checked':'')+' /><span>'+esc(value)+'</span></label>').join('');
  controls.innerHTML='<label class="p2-people-brand"><span>品牌</span><select data-p2-people-filter="brand">'+brandOptions+'</select></label><label class="p2-people-role"><span>工种</span><select data-p2-people-filter="role">'+roleOptions+'</select></label><div class="p2-person-picker"><span>人员（可连续多选）</span><details><summary><b>'+selectionLabel+'</b><small>共 '+peopleNames.length+' 人</small></summary><div class="p2-person-picker-panel"><div class="p2-person-picker-actions"><input type="search" data-p2-people-search placeholder="搜索人员" aria-label="搜索人员" /><button type="button" data-p2-people-action="all">全选当前条件</button><button type="button" data-p2-people-action="clear">清空</button></div><div class="p2-person-picker-options">'+choices+'</div></div></details></div><em>人效口径：（主表产量 + 备注产量）÷（在岗时长 − 销退抽检计时）</em>';
  const details=controls.querySelector('details');
  if(details&&pickerWasOpen)details.open=true;
  const searchInput=controls.querySelector('[data-p2-people-search]');
  const applySearch=keyword=>qa('[data-p2-people-choice]',controls).forEach(input=>{input.closest('label').hidden=!input.dataset.p2PeopleChoice.includes(keyword)});
  if(searchInput&&pickerSearch){searchInput.value=pickerSearch;applySearch(pickerSearch.trim())}
  if(!controls.dataset.bound){
   controls.dataset.bound='true';
   controls.addEventListener('change',event=>{
    const select=event.target.closest('[data-p2-people-filter]');
    if(select){if(select.dataset.p2PeopleFilter==='brand')qcState.peopleBrandFilter=select.value;else qcState.peopleRoleFilter=select.value;renderQCDashboard();return}
    const checkbox=event.target.closest('[data-p2-people-choice]');
    if(!checkbox)return;
    const next=new Set(qcState.peoplePersonFilters||[]);
    if(checkbox.checked)next.add(checkbox.dataset.p2PeopleChoice);else next.delete(checkbox.dataset.p2PeopleChoice);
    qcState.peoplePersonFilters=[...next];
    renderQCDashboard();
   });
   controls.addEventListener('input',event=>{
    const input=event.target.closest('[data-p2-people-search]');
    if(!input)return;
    const keyword=input.value.trim();
    qa('[data-p2-people-choice]',controls).forEach(choice=>{choice.closest('label').hidden=!choice.dataset.p2PeopleChoice.includes(keyword)});
   });
   controls.addEventListener('click',event=>{
    const button=event.target.closest('[data-p2-people-action]');
    if(!button)return;
    event.preventDefault();
    event.stopPropagation();
    qcState.peoplePersonFilters=button.dataset.p2PeopleAction==='all'?[...controls.querySelectorAll('[data-p2-people-choice]')].map(input=>input.dataset.p2PeopleChoice):[];
    renderQCDashboard();
   });
  }
 }
 const detailRange={start:qcState.peopleDetailStart||range.start,end:qcState.peopleDetailEnd||range.end};
 const detailBase=qcFilterRows(qcState.data.capacity,detailRange);
 const detailBrandRows=detailBase.filter(row=>brand==='all'||String(row.b||'').trim()===brand);
 const detailRoleRows=detailBrandRows.filter(row=>role==='all'||String(row.r||'').trim()===role);
 const rows=detailRoleRows.filter(row=>!selected.length||selected.includes(String(row.n||'').trim()));
 const aggregatePeople=sourceRows=>{
  const stats=new Map();
  sourceRows.forEach(row=>{
   if(!row.n)return;
   const name=String(row.n).trim();
   let item=stats.get(name);
    if(!item){item={name,out:0,days:new Map(),roles:new Set(),brands:new Set()};stats.set(name,item)}
    item.out+=qcEfficiencyOutput(row);
    if(row.r)item.roles.add(row.r);
    if(row.b)item.brands.add(String(row.b).trim());
   const hours=qcEffectiveHours(row);
   if(row.d&&hours>(item.days.get(row.d)||0))item.days.set(row.d,hours);
  });
  return[...stats.values()].map(item=>{
   item.hours=[...item.days.values()].reduce((sum,value)=>sum+value,0);
   item.rate=item.hours?item.out/item.hours:null;
   return item;
  }).filter(item=>item.hours>0).sort((a,b)=>(b.rate||0)-(a.rate||0));
 };
  const roleRanking=aggregatePeople(roleRows);
  const filteredRanking=selected.length?aggregatePeople(rows):roleRanking;
  const orderedPersonBrands=item=>[...item.brands].sort((a,b)=>{const ai=brands.indexOf(a),bi=brands.indexOf(b);return(ai<0?99:ai)-(bi<0?99:bi)||a.localeCompare(b,'zh-CN')});
  const personBrandText=item=>orderedPersonBrands(item).join(' / ')||'\u672a\u767b\u8bb0\u54c1\u724c';
  const personBrandTags=item=>orderedPersonBrands(item).map(name=>'<small class="p2-person-brand '+(complaintBrandTones[name]||'brand-default')+'">'+esc(name)+'</small>').join('')||'<small class="p2-person-brand brand-default">\u672a\u767b\u8bb0\u54c1\u724c</small>';
 const brandLabel=brand==='all'?'全部品牌':brand;
 const roleLabel=role==='all'?'全部工种':role;
 const title=q('#qcRankingTitle');
 if(title)title.textContent=qcRangeLabel(range)+' · '+brandLabel+' · '+roleLabel+'人效排行（'+roleRanking.length+' 人）';
 const rankRoot=q('#qcPeopleRanking');
 if(rankRoot){
  const max=Math.max(1,...roleRanking.map(item=>item.rate||0));
  const tierSize=Math.max(1,Math.ceil(roleRanking.length*.2));
  rankRoot.innerHTML=roleRanking.length?'<div class="p2-efficiency-rank-head"><span>人员 / 品牌 / 工种</span><span>有效产出</span><span>有效工时</span><span>综合人效</span></div><div class="qc-ranking-rows">'+roleRanking.map((item,index)=>{const tone=index<tierSize?'tone-good':index>=roleRanking.length-tierSize?'tone-risk':'tone-mid',brandText=personBrandText(item),outputText=num(item.out),hoursText=num(item.hours,1),rateText=num(item.rate,1);return'<article class="qc-rank-row p2-efficiency-rank '+tone+'" data-p2-person-link="'+esc(item.name)+'" data-p2-person-brands="'+esc(brandText)+'" data-p2-person-output="'+esc(outputText)+'" data-p2-person-hours="'+esc(hoursText)+'" data-p2-person-rate="'+esc(rateText)+'" tabindex="0" role="button" aria-label="\u9009\u62e9 '+esc(item.name)+'\uff0c\u54c1\u724c '+esc(brandText)+'\uff0c\u540c\u6b65\u67e5\u770b\u53f3\u4fa7\u56fe\u8868"><span class="qc-rank-no">'+(index+1)+'</span><div class="qc-rank-main"><div class="qc-rank-meta"><strong>'+esc(item.name)+'</strong><span>'+esc([...item.roles].join(' / ')||'未登记工种')+'</span></div><div class="p2-person-brand-tags" aria-label="相关品牌">'+personBrandTags(item)+'</div><div class="qc-rank-track"><i style="width:'+Math.max(5,(item.rate||0)/max*100)+'%"></i></div></div><em>'+outputText+' 件</em><em>'+hoursText+' 小时</em><b class="qc-rank-score">'+rateText+'<small>件/人时</small></b></article>'}).join('')+'</div>':'<p class="qc-empty">当前工种没有可计算人效的人员记录</p>';
 } const datePeople=new Map();
 rows.forEach(row=>{
  if(!row.d||!row.n)return;
  const name=String(row.n).trim();
  let day=datePeople.get(row.d);
  if(!day){day=new Map();datePeople.set(row.d,day)}
  let item=day.get(name);
  if(!item){item={out:0,hours:0};day.set(name,item)}
  item.out+=qcEfficiencyOutput(row);
  item.hours=Math.max(item.hours,qcEffectiveHours(row));
 });
 const dates=[];
 for(let date=detailRange.start;date<=detailRange.end;date=qcShiftDays(date,1))dates.push(date);
 const allKey='__all__';
 const series=selected.length?selected:[allKey];
 const palette=['#1677e8','#12a37a','#f59a23','#8658d8','#ed5b68','#0f9fb2'];
 const dayValues=dates.map(date=>{
  const people=datePeople.get(date)||new Map();
  const total=[...people.values()].reduce((sum,item)=>sum+item.out,0);
  return{date,people,total};
 });
 const valueAt=(day,name)=>name===allKey?day.total:(day.people.get(name)?.out||0);
 const workloadMax=Math.max(1,...dayValues.flatMap(day=>series.map(name=>valueAt(day,name))));
 const hasWorkload=dayValues.some(day=>series.some(name=>valueAt(day,name)>0));
 const trendTitle=q('#qcTrendTitle'),trendSub=q('#qcTrendSubtitle'),trendRoot=q('#qcTrend');
 if(trendTitle)trendTitle.textContent='每日工作量明细';
 if(trendSub)trendSub.textContent=brandLabel+' · '+roleLabel+' · '+detailRange.start+' 至 '+detailRange.end+' · '+(selected.length?selected.length+' 人对比':'全体汇总');
 if(trendRoot)trendRoot.innerHTML=hasWorkload?'<div class="p2-workload-matrix" style="--day-count:'+dates.length+'"><div class="p2-workload-matrix-row head"><strong>人员</strong>'+dates.map(date=>'<span>'+date.slice(5)+'</span>').join('')+'<b>区间合计</b></div><div class="p2-workload-matrix-body">'+series.map((name,index)=>{const values=dayValues.map(day=>valueAt(day,name)),total=values.reduce((sum,value)=>sum+value,0),activeDays=values.filter(value=>value>0).length,color=palette[index%palette.length];return'<div class="p2-workload-matrix-row"><strong><i style="--series:'+color+'"></i>'+esc(name===allKey?'全部人员':name)+'</strong>'+values.map(value=>{const fill=value?Math.max(5,value/workloadMax*100):0;return'<span class="p2-workload-cell" style="--series:'+color+';--fill:'+fill+'%" title="'+esc((name===allKey?'全部人员':name)+' · '+num(value)+' 件')+'"><b>'+(value?num(value):'—')+'</b></span>'}).join('')+'<b>'+num(total)+'<small>'+activeDays+' 天有产出</small></b></div>'}).join('')+'</div></div><p class="p2-workload-note">横向看每日变化，纵向比较人员；色条越长表示当日产出越高。</p>':'<p class="qc-empty">暂无可计算的工作量趋势</p>';
 const comparisonCard=q('.p2-people-comparison-card');
 if(comparisonCard){
  const chartRows=filteredRanking;
  const subtitle=comparisonCard.querySelector('.qc-card-title span');
  if(subtitle)subtitle.textContent=brandLabel+' · '+roleLabel+' · '+(selected.length?'已选 '+selected.length+' 人':'全部 '+chartRows.length+' 人');
  const comparisonRoot=comparisonCard.querySelector('.p2-people-comparison');
  if(comparisonRoot){
   if(!chartRows.length){
    comparisonRoot.innerHTML='<p class="qc-empty">当前筛选条件下暂无产出与人效数据</p>';
   }else{
    const chartWidth=Math.max(560,chartRows.length*54+86),chartHeight=310,left=48,right=46,top=28,bottom=72,plotWidth=chartWidth-left-right,plotHeight=chartHeight-top-bottom;
    const outputMax=Math.max(1,...chartRows.map(item=>item.out||0)),rateMax=Math.max(1,...chartRows.map(item=>item.rate||0));
    const xAt=index=>left+(index+.5)*plotWidth/chartRows.length;
    const barWidth=Math.min(28,plotWidth/chartRows.length*.55);
    const outputY=value=>top+plotHeight-(Number(value)||0)/outputMax*plotHeight;
    const rateY=value=>top+plotHeight-(Number(value)||0)/rateMax*plotHeight;
    const ticks=[0,.25,.5,.75,1];
    const grid=ticks.map(step=>{const y=top+plotHeight-step*plotHeight;return'<line x1="'+left+'" y1="'+y+'" x2="'+(chartWidth-right)+'" y2="'+y+'"></line><text class="axis output" x="'+(left-7)+'" y="'+(y+3)+'">'+num(outputMax*step)+'</text><text class="axis rate" x="'+(chartWidth-right+7)+'" y="'+(y+3)+'">'+num(rateMax*step,1)+'</text>'}).join('');
    const focusBandWidth=Math.max(36,Math.min(52,plotWidth/chartRows.length*.82));
    const focusBands=chartRows.map((item,index)=>{const x=xAt(index)-focusBandWidth/2;return'<rect class="p2-person-focus-band" x="'+x+'" y="'+(top-7)+'" width="'+focusBandWidth+'" height="'+(plotHeight+34)+'" rx="8" data-p2-person-link="'+esc(item.name)+'" data-p2-person-brands="'+esc(personBrandText(item))+'" aria-hidden="true"></rect>'}).join('');
    const bars=chartRows.map((item,index)=>{const x=xAt(index)-barWidth/2,y=outputY(item.out),height=top+plotHeight-y,brandText=personBrandText(item);return'<g class="p2-combo-bar"><rect x="'+x+'" y="'+y+'" width="'+barWidth+'" height="'+Math.max(1,height)+'" rx="4" data-p2-person-link="'+esc(item.name)+'" data-p2-person-brands="'+esc(brandText)+'" tabindex="0" role="button" aria-label="\u9009\u62e9 '+esc(item.name)+'\uff0c\u54c1\u724c '+esc(brandText)+'\uff0c\u540c\u6b65\u5b9a\u4f4d\u5de6\u4fa7\u6392\u884c"><title>'+esc(item.name+' · '+brandText+' · 有效产出 '+num(item.out)+' 件')+'</title></rect><text class="bar-value" x="'+xAt(index)+'" y="'+Math.max(16,y-7)+'">'+num(item.out)+'</text></g>'}).join('');
    const linePoints=chartRows.map((item,index)=>xAt(index)+','+rateY(item.rate)).join(' ');
    const points=chartRows.map((item,index)=>{const brandText=personBrandText(item);return'<circle cx="'+xAt(index)+'" cy="'+rateY(item.rate)+'" r="4" data-p2-person-link="'+esc(item.name)+'" data-p2-person-brands="'+esc(brandText)+'" tabindex="0" role="button" aria-label="\u9009\u62e9 '+esc(item.name)+'\uff0c\u54c1\u724c '+esc(brandText)+'\uff0c\u540c\u6b65\u5b9a\u4f4d\u5de6\u4fa7\u6392\u884c"><title>'+esc(item.name+' · '+brandText+' · 综合人效 '+num(item.rate,1)+' 件/人时')+'</title></circle>'}).join('');
    const labels=chartRows.map((item,index)=>{const x=xAt(index),y=chartHeight-18,brandText=personBrandText(item);return'<text class="person" x="'+x+'" y="'+y+'" transform="rotate(-35 '+x+' '+y+')" data-p2-person-link="'+esc(item.name)+'" data-p2-person-brands="'+esc(brandText)+'" tabindex="0" role="button" aria-label="\u9009\u62e9 '+esc(item.name)+'\uff0c\u54c1\u724c '+esc(brandText)+'">'+esc(item.name)+'<title>'+esc(item.name+' · '+brandText)+'</title></text>'}).join('');
    comparisonRoot.innerHTML='<div class="p2-combo-legend"><span class="p2-combo-link-hint" data-p2-person-link-status>\u70b9\u51fb\u5de6\u4fa7\u6392\u884c\u6216\u53f3\u4fa7\u67f1\u5f62\u3001\u6298\u7ebf\u70b9\u3001\u59d3\u540d\uff0c\u53cc\u5411\u540c\u6b65\u5b9a\u4f4d</span><span class="bar"><i></i>柱形：有效产出（件）</span><span class="line"><i></i>折线：综合人效（件/人时）</span></div><div class="p2-person-focus-summary" data-p2-person-focus-summary hidden><span>\u5df2\u8054\u52a8\u4eba\u5458</span><strong data-p2-focus-name></strong><em data-p2-focus-brand></em><small data-p2-focus-metrics></small></div><div class="p2-combo-scroll"><svg class="p2-people-combo-chart" viewBox="0 0 '+chartWidth+' '+chartHeight+'" style="width:'+chartWidth+'px" role="img" aria-label="人员有效产出与综合人效组合图"><g class="focus-bands">'+focusBands+'</g><g class="grid">'+grid+'</g><g class="bars">'+bars+'</g><polyline class="efficiency-line" points="'+linePoints+'"></polyline><g class="points">'+points+'</g><g class="labels">'+labels+'</g><text class="axis-title output" x="4" y="14">有效产出</text><text class="axis-title rate" x="'+(chartWidth-4)+'" y="14">综合人效</text></svg></div>';
   }
  }
  if(!comparisonCard.dataset.filterBound){
   comparisonCard.dataset.filterBound='true';
   comparisonCard.addEventListener('click',event=>{
    const button=event.target.closest('[data-p2-open-people-picker]');
    if(!button)return;
    const picker=controls?.querySelector('details');
    if(picker)picker.open=true;
    controls?.scrollIntoView({behavior:'smooth',block:'center'});
   });
  }
 } if(!section.dataset.personLinkBound){
  section.dataset.personLinkBound='true';
  section.addEventListener('click',event=>{
   const target=event.target.closest('[data-p2-person-link]');
   if(!target||!section.contains(target))return;
   togglePeopleChartLink(section,target.dataset.p2PersonLink,Boolean(target.closest('.p2-people-comparison-card')));
  });
  section.addEventListener('keydown',event=>{
   if(event.key!=='Enter'&&event.key!==' ')return;
   const target=event.target.closest('[data-p2-person-link]');
   if(!target||!section.contains(target))return;
   event.preventDefault();
   togglePeopleChartLink(section,target.dataset.p2PersonLink,Boolean(target.closest('.p2-people-comparison-card')));
  });
 }
 refreshPeopleChartLink(section);
}
function enrich(){
 const p=q('[data-qc-view-section="people"]'),a=q('[data-qc-view-section="alerts"]'),quality=q('[data-qc-view-section="quality"]');
 p?.classList.add('p2-people-layout');a?.classList.add('p2-alert-layout');quality?.classList.add('p2-quality-layout');
 if(p){q('#p2PeopleTemplate')?.remove();if(!q('#p2PeopleShell')){p.insertAdjacentHTML('beforeend','<section id="p2PeopleShell" class="p2-people-shell"><div class="p2-people-primary"><div class="p2-people-slot" data-p2-people-slot="ranking"></div><article class="qc-data-card p2-people-comparison-card"><div class="qc-card-title"><strong>产出与人效组合图</strong><span>跟随上方人员筛选</span><button type="button" data-p2-open-people-picker>筛选人员</button></div><div class="p2-people-comparison"></div></article></div><div class="p2-people-secondary"><div class="p2-people-slot" data-p2-people-slot="trend"></div></div></section>');}const shell=q('#p2PeopleShell'),place=(node,slot)=>{const target=shell?.querySelector(slot);if(node&&target&&node.parentElement!==target)target.append(node)};place(p.querySelector('.qc-ranking-card'),'[data-p2-people-slot="ranking"]');place(p.querySelector('.qc-trend-card'),'[data-p2-people-slot="trend"]');p.querySelector('.qc-analysis-grid')?.classList.add('p2-people-hidden');p.querySelector('.qc-efficiency-split')?.classList.add('p2-people-hidden');p.querySelector('.qc-insight-grid')?.classList.add('p2-people-hidden');q('#qcEfficiencyTabs')?.classList.add('p2-people-hidden');} if(a&&!q('#p2AlertTemplate'))q('#qcAlertWorkbench')?.insertAdjacentHTML('afterend','<section id="p2AlertTemplate" class="p2-grid alert-template"><article class="p2-card"><header><strong>处理进度</strong><span>状态字段待同步</span></header><ol class="p2-timeline"><li class="done">系统发现</li><li>已分派</li><li>处理中</li><li>待复盘</li></ol></article><article class="p2-card"><header><strong>建议动作</strong><span>模板</span></header><ul class="p2-suggest"><li><b>定位问题来源</b><span>关联品牌、模块和日期。</span></li><li><b>分派责任人</b><span>责任人字段待飞书同步。</span></li><li><b>形成闭环</b><span>记录复盘与关闭时间。</span></li></ul></article></section>');
}
function render(){if(!qcState?.data)return;install();qa('[data-p2-filter]').forEach(x=>x.innerHTML=filter(x.dataset.p2Filter));enrich();people();realtime();try{complaint()}catch(error){console.error('P2 complaint render',error)}}
const prior=window.renderQCDashboard;
window.renderQCDashboard=renderQCDashboard=function(){prior();render()};
install();render();
})();
