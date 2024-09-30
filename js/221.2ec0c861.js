"use strict";(globalThis["webpackChunksavactapp"]=globalThis["webpackChunksavactapp"]||[]).push([[221],{96221:(e,t,n)=>{n.r(t),n.d(t,{default:()=>S});var l=n(61758),a=n(58790),o=n(29104);const s={class:"q-ma-md"},r={class:"row justify-center items-center"},i={class:"row justify-center items-center q-mt-md"},c={class:"q-mx-sm q-mt-md"};function u(e,t,n,u,d,v){const b=(0,l.g2)("q-btn"),f=(0,l.g2)("q-spinner-grid"),m=(0,l.g2)("q-table");return(0,l.uX)(),(0,l.CE)("div",s,[(0,l.Lk)("div",r,(0,a.v_)(e.t("tokenDistributionNote")),1),(0,l.Lk)("div",i,[(0,l.bF)(b,{dense:"",flat:"",icon:"refresh",label:e.t("loadBalances"),size:"md",onClick:e.getBalances,class:"send-btn",disable:e.loading},null,8,["label","onClick","disable"]),(0,l.bo)((0,l.bF)(f,{class:"q-ml-lg",size:"2em"},null,512),[[o.aG,e.loading]])]),(0,l.bF)(b,{dense:"",flat:"",icon:"refresh",label:e.t("distributedTokens"),size:"md",onClick:e.getSold,class:"send-btn"},null,8,["label","onClick"]),(0,l.Lk)("div",c,(0,a.v_)(e.goalText),1),(0,l.bF)(m,{title:e.tableTitle,rows:e.rows,columns:e.columns,"row-key":"name","no-data-label":e.t("clickForBalances")},null,8,["title","rows","columns","no-data-label"]),t[0]||(t[0]=(0,l.Lk)("div",{class:"q-mt-md"},null,-1))])}var d=n(38734),v=n(57387),b=n(87881),f=n(39507),m=function(e,t,n,l){function a(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function s(e){try{i(l.next(e))}catch(t){o(t)}}function r(e){try{i(l["throw"](e))}catch(t){o(t)}}function i(e){e.done?n(e.value):a(e.value).then(s,r)}i((l=l.apply(e,t||[])).next())}))};const g=(0,l.pM)({name:"page-token-distribution",setup(){const e=(0,f.V)(),t=(0,l.EW)((()=>e.allConnects)),n=(0,l.EW)((()=>e.selectedConnect)),a=(0,d.KR)(!1),o=(0,d.KR)("eos"),s=(0,d.KR)([]),r=(0,d.KR)(),i=(0,d.KR)(),c=(0,d.KR)(),u="SAVACT",g="savact",p="token.savact",h=[g,p,"savactsavact","savactsavweb","savactecosys","savactmarket","savactpeople","savactardent","olookei1oolo"];let k=(0,d.KR)([]),w=(0,d.KR)(0);function y(){return m(this,void 0,void 0,(function*(){const e=(0,b.GetConnectByChainId)(o.value,t.value);if(void 0==e)return void console.log("No connection found");let n={json:"true",code:g,scope:g,table:"stat",key_type:"",lower_bound:"",upper_bound:"",index_position:"",limit:1,reverse:!1,show_payer:!1},l=yield e.get_table_rows(n);if(void 0!=l&&"rows"in l&&l.rows.length>0&&"sold"in l.rows[0]){let e=l.rows[0];if(r.value=Number(e.sold),c.value="","stars"in e){k.value=e.stars;let t=0;for(;t<k.value.length;++t)if(console.log("sold.value",r.value),console.log("mark.value",k.value[t].mark),r.value<Number(k.value[t].mark))break;t==k.value.length?c.value="The sale is over.":c.value=`The next goal is ${(k.value[t].mark/1e4).toString()} SAVACT. Current state: ${Math.floor(r.value/k.value[t].mark*1e3)/10}%.`}i.value=`${(r.value/1e4).toString()} ${u}`}}))}function C(){return m(this,void 0,void 0,(function*(){if(a.value)return;a.value=!0;const e=(0,b.GetConnectByChainId)(o.value,t.value);if(void 0==e)return console.log("No connection found"),void(a.value=!1);s.value=[];try{let t,n={code:p,table:"accounts",lower_bound:void 0,upper_bound:void 0,limit:500,reverse:!1,show_payer:!1};do{if(t=yield e.get_table_by_scope(n),void 0!=t&&"rows"in t&&t.rows.length>0){let e=t.rows.map((e=>({name:e.scope,balance:void 0})));s.value.push(...e),n.lower_bound=t.more}}while(void 0!=t&&"more"in t&&""!=t.more);s.value=s.value.filter((e=>{for(let t of h)if(e.name==t)return!1;return!0}));for(let l of s.value)if(t=yield e.get_currency_balance(n.code,l.name,u),void 0!=t&&"length"in t&&t.length>0){let e=t[0].indexOf(" "+u);if(e>0){let n=t[0].substring(0,e);n.length>0&&(l.balance=parseFloat(n))}}}catch(n){console.log("Cannot send the request",n)}finally{a.value=!1}}))}function _(e){if(void 0==e||e<=0)return-1===e?"black":"grey";let t="";return e<=3e3?(t=e<=600?`#${(10*Math.floor(25.5*e/600)).toString(16).replace("-","0").padStart(2,"0")}ff00`:`#ff${(255-10*Math.floor(25.5*(e-600)/2300)).toString(16).replace("-","0").padStart(2,"0")}00`,t):"red"}const S=[{name:"name",required:!0,label:"Account",align:"left",field:e=>e.name,format:e=>`${e}`,sortable:!0},{name:"balance",align:"center",label:u,field:"balance",sortable:!0,sortOrder:"ad"}];return{allConnects:t,selectedConnect:n,loading:a,pingColor:_,getBalances:C,tableTitle:i,columns:S,rows:s,getSold:y,steps:w,goalText:c,t:(0,v.s9)({useScope:"global"}).t.bind(this)}}});var p=n(12807),h=n(56384),k=n(75942),w=n(9979),y=n(98582),C=n.n(y);const _=(0,p.A)(g,[["render",u]]),S=_;C()(g,"components",{QBtn:h.A,QSpinnerGrid:k.A,QTable:w.A})}}]);