(()=>{
'use strict';

const state={departments:[],people:[],start:'',end:'',openPicker:'',personQuery:''};
let readyRetryTimer=0,trendObserver=null,observedTrend=null;
const q=selector=>document.querySelector(selector);
const esc=value=>String(value??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const num=(value,digits=0)=>Number(value||0).toLocaleString('zh-CN',{minimumFractionDigits:digits,maximumFractionDigits:digits});
const dept=role=>{const value=String(role||'').trim();if(/包装/.test(value))return '包装组';if(/返修/.test(value))return '返修组';if(/大烫/.test(value))return '大烫组';if(/销退/.test(value))return '销退质检';if(/大货/.test(value)&&/质检/.test(value))return '大货质检';return value||'未归类'};
const out=row=>typeof qcEfficiencyOutput==='function'?Number(qcEfficiencyOutput(row))||0:['q','pk','rrp','rqc','ir'].reduce((sum,key)=>sum+(Number(row[key])||0),0);
const hours=row=>typeof qcEffectiveHours==='function'?Math.max(0,Number(qcEffectiveHours(row))||0):Math.max(0,(Number(row.wh)||0)-(Number(row.other)||0));

function scheduleReadyRetry(){
 if(readyRetryTimer)return;
 readyRetryTimer=setTimeout(()=>{readyRetryTimer=0;render()},500);
}

function observeTrend(){
 const trend=q('#qcTrend');
 if(!trend||trend===observedTrend)return;
 trendObserver?.disconnect();
 observedTrend=trend;
 trendObserver=new MutationObserver(()=>queueMicrotask(render));
 trendObserver.observe(trend,{childList:true,subtree:true});
}

function syncDashboardDetailState(){
 const start=String(qcState.peopleDetailStart||'');
 const end=String(qcState.peopleDetailEnd||'');
 if(start)state.start=start;
 if(end)state.end=end;
 const selected=Array.isArray(qcState.peoplePersonFilters)?qcState.peoplePersonFilters:[];
 state.people=[...new Set(selected.map(name=>String(name||'').trim()).filter(Boolean))];
}

function globalRange(){return{start:qcState.start,end:qcState.end};}

function clampRange(){
 const global=globalRange();
 const start=state.start&&state.start>=global.start&&state.start<=global.end?state.start:global.start;
 const end=state.end&&state.end>=global.start&&state.end<=global.end?state.end:global.end;
 state.start=start;
 state.end=end;
 if(state.start>state.end)[state.start,state.end]=[state.end,state.start];
 return{start:state.start,end:state.end};
}

function base(range){
 const data=qcState?.data;
 if(!Array.isArray(data?.capacity))return[];
 const brands=Array.isArray(qcState.brands)?qcState.brands:[];
 return data.capacity.filter(row=>(!range.start||row.d>=range.start)&&(!range.end||row.d<=range.end)&&(!brands.length||brands.includes(String(row.b||'').trim())));
}

function matchesDepartment(row){
 return !state.departments.length||state.departments.includes(dept(row.r));
}

function peopleFor(rows){
 return [...new Set(rows.filter(matchesDepartment).map(row=>String(row.n||'').trim()).filter(Boolean))].sort((left,right)=>left.localeCompare(right,'zh-CN'));
}

function peopleSummary(){
 if(!state.people.length)return'全部员工';
 return state.people.length<=2?state.people.join('、'):'已选 '+state.people.length+' 人';
}

function departmentSummary(){
 if(!state.departments.length)return'全部部门';
 return state.departments.length<=2?state.departments.join('、'):'已选 '+state.departments.length+' 个';
}

function apply(){
 const range=clampRange();
 const rows=base(range).filter(matchesDepartment);
 const people=peopleFor(rows);
 state.people=state.people.filter(name=>people.includes(name));
 qcState.peopleDetailStart=range.start;
 qcState.peopleDetailEnd=range.end;
 qcState.peopleDetailNames=state.people.slice();
 qcState.peoplePersonFilters=state.people.slice();
 window.renderQCDashboard?.();
}

function picker(kind,title,summary,count,actions,choices,search=''){
 const open=state.openPicker===kind?' open':'';
 return '<div class="p1-ew-person-picker p1-ew-picker"><span>'+title+'</span><details data-p1-ew-picker="'+kind+'"'+open+'><summary><b>'+esc(summary)+'</b><small>共 '+count+' '+(kind==='departments'?'个':'人')+'</small></summary><div class="p1-ew-person-panel"><div class="p1-ew-person-actions">'+actions+'</div>'+search+'<div class="p1-ew-person-options">'+choices+'</div></div></details></div>';
}

function render(){
 const trend=q('#qcTrend');
 const card=trend?.closest('.qc-trend-card');
 if(!trend||!card)return;
 observeTrend();

 let box=q('#p1EmployeeWorkloadFilter');
 if(!box){
  trend.insertAdjacentHTML('beforebegin','<section id="p1EmployeeWorkloadFilter" class="p1-employee-workload-filter" aria-label="员工工作量筛选"></section>');
  box=q('#p1EmployeeWorkloadFilter');
 }
 if(!qcState?.data){
  box.innerHTML='<strong>员工筛选正在准备</strong>';
  scheduleReadyRetry();
  return;
 }

 syncDashboardDetailState();
 const range=clampRange();
 const all=base(globalRange());
 const departments=[...new Set(all.map(row=>dept(row.r)))].sort((left,right)=>left.localeCompare(right,'zh-CN'));
 state.departments=state.departments.filter(name=>departments.includes(name));
 const departmentRows=all.filter(matchesDepartment);
 const people=peopleFor(departmentRows);
 state.people=state.people.filter(name=>people.includes(name));
 const rows=base(range).filter(row=>matchesDepartment(row)&&(!state.people.length||state.people.includes(String(row.n||'').trim())));

 let done=0;
 const active=new Set();
 const seenHours=new Map();
 rows.forEach(row=>{
  const value=out(row);
  done+=value;
  if(value)active.add(String(row.n||'').trim());
  const key=String(row.n||'')+'|'+String(row.d||'');
  seenHours.set(key,Math.max(seenHours.get(key)||0,hours(row)));
 });
 const effectiveHours=[...seenHours.values()].reduce((sum,value)=>sum+value,0);
 const departmentChoices=departments.map(name=>'<label><input type="checkbox" data-p1-ew-department="'+esc(name)+'"'+(state.departments.includes(name)?' checked':'')+'><span>'+esc(name)+'</span></label>').join('');
 const personQuery=state.personQuery.trim();
 const peopleChoices=people.map(name=>'<label'+(personQuery&&!name.includes(personQuery)?' hidden':'')+'><input type="checkbox" data-p1-ew-person="'+esc(name)+'"'+(state.people.includes(name)?' checked':'')+'><span>'+esc(name)+'</span></label>').join('');
 const departmentPicker=picker('departments','部门（可多选）',departmentSummary(),departments.length,'<button type="button" data-p1-ew-department-action="all">全选</button><button type="button" data-p1-ew-department-action="clear">清空</button>',departmentChoices);
 const peopleSearch='<label class="p1-ew-person-search"><span>搜索姓名</span><input type="search" data-p1-ew-person-search placeholder="输入姓名筛选" value="'+esc(state.personQuery)+'" autocomplete="off"></label>';
 const peoplePicker=picker('people','人员（可多选）',peopleSummary(),people.length,'<button type="button" data-p1-ew-person-action="all">全选</button><button type="button" data-p1-ew-person-action="clear">清空</button>',peopleChoices,peopleSearch);

 box.innerHTML='<div class="p1-ew-head"><div><strong>员工工作量筛选</strong><span>可按日期、多个部门与多位员工查看每日明细</span></div><em>'+esc(range.start)+' 至 '+esc(range.end)+'</em></div>'+
  '<div class="p1-ew-controls"><label>开始日期<input type="date" data-p1-ew-date="start" min="'+esc(globalRange().start)+'" max="'+esc(globalRange().end)+'" value="'+esc(range.start)+'"></label><label>结束日期<input type="date" data-p1-ew-date="end" min="'+esc(globalRange().start)+'" max="'+esc(globalRange().end)+'" value="'+esc(range.end)+'"></label>'+departmentPicker+peoplePicker+'<button type="button" data-p1-ew-action="reset">重置筛选</button></div>'+
  '<div class="p1-ew-kpis"><article><span>完成工作量</span><b>'+num(done)+'<small>件</small></b></article><article><span>当前员工</span><b>'+num(state.people.length||people.length)+'<small>人</small></b></article><article><span>有产出记录</span><b>'+num(active.size)+'<small>人</small></b></article><article><span>有效工时</span><b>'+num(effectiveHours,1)+'<small>小时</small></b></article></div><p>筛选结果：'+esc(departmentSummary())+' · '+esc(peopleSummary())+' · '+esc(range.start)+' 至 '+esc(range.end)+'；无产出记录不计入完成工作量。</p>';

 box.querySelectorAll('[data-p1-ew-picker]').forEach(detail=>{
  detail.addEventListener('toggle',()=>{
   if(detail.open)state.openPicker=detail.dataset.p1EwPicker;
   else if(state.openPicker===detail.dataset.p1EwPicker)state.openPicker='';
  });
 });
}

function bind(){
 document.addEventListener('change',event=>{
  const date=event.target.closest('[data-p1-ew-date]');
  if(date){
   state.openPicker='';
   if(date.dataset.p1EwDate==='start')state.start=date.value;
   else state.end=date.value;
   apply();
   return;
  }

  const department=event.target.closest('[data-p1-ew-department]');
  if(department){
   const next=new Set(state.departments);
   if(department.checked)next.add(department.dataset.p1EwDepartment);
   else next.delete(department.dataset.p1EwDepartment);
   state.departments=[...next];
   state.openPicker='departments';
   apply();
   return;
  }

  const person=event.target.closest('[data-p1-ew-person]');
  if(person){
   const next=new Set(state.people);
   if(person.checked)next.add(person.dataset.p1EwPerson);
   else next.delete(person.dataset.p1EwPerson);
   state.people=[...next];
   state.openPicker='people';
   apply();
  }
 });

 document.addEventListener('input',event=>{
  const search=event.target.closest('[data-p1-ew-person-search]');
  if(!search)return;
  state.personQuery=search.value;
  const keyword=state.personQuery.trim();
  document.querySelectorAll('#p1EmployeeWorkloadFilter [data-p1-ew-person]').forEach(input=>{
   input.closest('label').hidden=Boolean(keyword)&&!input.dataset.p1EwPerson.includes(keyword);
  });
 });
 document.addEventListener('click',event=>{
  const reset=event.target.closest('[data-p1-ew-action="reset"]');
  if(reset){
   state.departments=[];
   state.people=[];
   state.start=qcState.start;
   state.end=qcState.end;
   state.openPicker='';
   state.personQuery='';
   apply();
   return;
  }

  const departmentAction=event.target.closest('[data-p1-ew-department-action]');
  if(departmentAction){
   const all=base(globalRange());
   const departments=[...new Set(all.map(row=>dept(row.r)))].sort((left,right)=>left.localeCompare(right,'zh-CN'));
   state.departments=departmentAction.dataset.p1EwDepartmentAction==='all'?departments:[];
   state.openPicker='departments';
   apply();
   return;
  }

  const personAction=event.target.closest('[data-p1-ew-person-action]');
  if(personAction){
   const people=peopleFor(base(globalRange()));
   state.people=personAction.dataset.p1EwPersonAction==='all'?people:[];
   state.openPicker='people';
   apply();
  }
 });
}

function start(attempts=120){
 observeTrend();
 render();
 if((!q('#qcTrend')||!qcState?.data)&&attempts)setTimeout(()=>start(attempts-1),250);
}

bind();
const prior=window.renderQCDashboard;
if(typeof prior==='function'&&!prior.__p1EmployeeFilter){
 const wrapped=function(){
  const result=prior.apply(this,arguments);
  queueMicrotask(render);
  return result;
 };
 wrapped.__p1EmployeeFilter=true;
 window.renderQCDashboard=wrapped;
}
document.readyState==='loading'?document.addEventListener('DOMContentLoaded',()=>start()):start();
})();
