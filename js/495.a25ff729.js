"use strict";(globalThis["webpackChunksavactapp"]=globalThis["webpackChunksavactapp"]||[]).push([[495],{4495:(e,t,o)=>{o.r(t),o.d(t,{default:()=>Q});var n=o(61758),a=o(58790),i=o(29104);const r={class:"row q-pt-md q-pb-sm q-px-md"},l={class:"col-auto q-ml-sm"},s={class:"col q-pr-sm"},c={class:"col-auto"},d={class:"full-width row flex-center q-gutter-sm"},u={class:"col q-pr-sm"},p={class:"col-auto q-pr-sm"},m={class:"col-auto"},y={class:"row justify-center items-center full-width"},g={class:"full-width row flex-center q-gutter-sm"};function f(e,t,o,f,v,b){const h=(0,n.g2)("q-btn"),w=(0,n.g2)("q-input"),k=(0,n.g2)("q-tooltip"),S=(0,n.g2)("trx-tool-tip"),T=(0,n.g2)("q-avatar"),_=(0,n.g2)("q-td"),P=(0,n.g2)("q-tr"),A=(0,n.g2)("q-table"),C=(0,n.g2)("q-page");return(0,n.uX)(),(0,n.Wv)(C,{class:"items-center justify-evenly",style:{position:"relative",height:"100%"}},{default:(0,n.k6)((()=>{var o;return[(0,n.Lk)("div",r,[(0,n.Lk)("div",{class:(0,a.C4)(["col",e.$q.screen.gt.xs?"text-h5":"text-h6"])},"SavAct Payments",2),(0,n.Lk)("div",l,[(0,n.bF)(h,{class:"col-auto q-ml-sm",label:`${null===(o=e.chain)||void 0===o?void 0:o.name} Network`,onClick:e.showWalletDialog,outline:""},null,8,["label","onClick"])])]),(0,n.bF)(A,{title:"Incommings",class:"q-mx-sm card",rows:e.inRows,columns:e.inColumns,"row-key":e.rowKey,color:"amber",loading:e.loadingUpdateIn,"no-data-label":e.t("hintHistoryUse")},{top:(0,n.k6)((()=>[(0,n.Lk)("div",s,[(0,n.bF)(w,{modelValue:e.user,"onUpdate:modelValue":t[0]||(t[0]=t=>e.user=t),dense:"",type:"text",label:e.t("user"),onKeydown:t[1]||(t[1]=(0,i.jR)((t=>e.updateIn()),["enter"]))},null,8,["modelValue","label"])]),(0,n.Lk)("div",c,[(0,n.bF)(h,{icon:"update",label:"In",loading:e.loadingUpdateIn,outline:"",onClick:t[2]||(t[2]=t=>e.updateIn()),disable:e.loadingUpdateIn},{default:(0,n.k6)((()=>[(0,n.bF)(k,null,{default:(0,n.k6)((()=>[(0,n.eW)((0,a.v_)(e.t("update")),1)])),_:1})])),_:1},8,["loading","disable"])])])),body:(0,n.k6)((o=>[(0,n.bF)(P,{props:o,class:(0,a.C4)(["cursor-pointer",o.row.removed?e.brightStyle?"bg-grey":"bg-grey-10":""]),onClick:t=>e.onRowClick(o.row,!0)},{default:(0,n.k6)((()=>[(0,n.bF)(S,{trx:o.row},null,8,["trx"]),(0,n.bF)(_,{key:"type",props:o},{default:(0,n.k6)((()=>[(0,n.bF)(T,{"text-color":"black",size:"md",color:e.colorStatus(o.row.time),icon:0==o.row.type?"shopping_cart":"poll"},null,8,["color","icon"])])),_:2},1032,["props"]),(0,n.bF)(_,{key:"id",props:o},{default:(0,n.k6)((()=>[(0,n.eW)((0,a.v_)(o.row.id),1)])),_:2},1032,["props"]),(0,n.bF)(_,{key:"sender",props:o},{default:(0,n.k6)((()=>[(0,n.eW)((0,a.v_)(e.shortAddress(o.row.sender)),1)])),_:2},1032,["props"]),(0,n.bF)(_,{key:"fund",props:o},{default:(0,n.k6)((()=>[(0,n.eW)((0,a.v_)(o.row.orifund),1),t[8]||(t[8]=(0,n.Lk)("br",null,null,-1)),(0,n.eW)((0,a.v_)(o.row.contract),1)])),_:2},1032,["props"]),(0,n.bF)(_,{key:"time",props:o},{default:(0,n.k6)((()=>[o.row.time>1?((0,n.uX)(),(0,n.CE)(n.FK,{key:0},[(0,n.eW)((0,a.v_)(new Date(1e3*o.row.time).toLocaleTimeString()),1),t[9]||(t[9]=(0,n.Lk)("br",null,null,-1)),(0,n.eW)((0,a.v_)(new Date(1e3*o.row.time).toLocaleDateString()),1)],64)):((0,n.uX)(),(0,n.CE)(n.FK,{key:1},[(0,n.eW)("-")],64))])),_:2},1032,["props"]),(0,n.bF)(_,{key:"memo",props:o},{default:(0,n.k6)((()=>[(0,n.eW)((0,a.v_)(e.shortenText(e.StringToUtf8String(o.row.memo))),1)])),_:2},1032,["props"])])),_:2},1032,["props","class","onClick"])])),"no-data":(0,n.k6)((({message:e})=>[(0,n.Lk)("div",d,[(0,n.Lk)("span",null,(0,a.v_)(e),1)])])),_:1},8,["rows","columns","row-key","loading","no-data-label"]),(0,n.bF)(A,{title:"Outgoings",class:"q-mx-sm q-my-md card",rows:e.outRows,columns:e.outColumns,"row-key":e.rowKey,color:"amber",loading:e.loadingUpdateOut,"no-data-label":e.t("hintHistoryUse")},{top:(0,n.k6)((()=>[(0,n.Lk)("div",u,[(0,n.bF)(w,{modelValue:e.to,"onUpdate:modelValue":t[3]||(t[3]=t=>e.to=t),dense:"",type:"text",label:e.t("recipient"),onKeydown:t[4]||(t[4]=(0,i.jR)((t=>e.search(0)),["enter"]))},null,8,["modelValue","label"])]),(0,n.Lk)("div",p,[(0,n.bF)(h,{icon:"search",outline:"",onClick:t[5]||(t[5]=t=>e.search(0)),disable:e.loadingSearch||e.loadingUpdateOut},{default:(0,n.k6)((()=>[(0,n.bF)(k,null,{default:(0,n.k6)((()=>[(0,n.eW)((0,a.v_)(e.t("searchDeeper")),1)])),_:1})])),_:1},8,["disable"])]),(0,n.Lk)("div",m,[(0,n.bF)(h,{icon:"update",label:"Out",loading:e.loadingUpdateOut,outline:"",onClick:t[6]||(t[6]=t=>e.updateOut()),disable:e.loadingSearch||e.loadingUpdateOut},{default:(0,n.k6)((()=>[(0,n.bF)(k,null,{default:(0,n.k6)((()=>[(0,n.eW)((0,a.v_)(e.t("update")),1)])),_:1})])),_:1},8,["loading","disable"])])])),body:(0,n.k6)((o=>[(0,n.bF)(P,{props:o,class:(0,a.C4)(["cursor-pointer",o.row.removed?e.brightStyle?"bg-grey":"bg-grey-10":""]),onClick:t=>e.onRowClick(o.row,!1)},{default:(0,n.k6)((()=>[(0,n.bF)(S,{trx:o.row},null,8,["trx"]),(0,n.bF)(_,{key:"type",props:o},{default:(0,n.k6)((()=>[(0,n.bF)(T,{"text-color":"black",size:"md",color:e.colorStatus(o.row.time),icon:0==o.row.type?"shopping_cart":"poll"},null,8,["color","icon"])])),_:2},1032,["props"]),(0,n.bF)(_,{key:"nr",props:o},{default:(0,n.k6)((()=>[(0,n.eW)((0,a.v_)(o.row.nr),1)])),_:2},1032,["props"]),(0,n.bF)(_,{key:"recipient",props:o},{default:(0,n.k6)((()=>[(0,n.eW)((0,a.v_)(e.shortAddress(o.row.recipient)),1)])),_:2},1032,["props"]),(0,n.bF)(_,{key:"fund",props:o},{default:(0,n.k6)((()=>[(0,n.eW)((0,a.v_)(o.row.orifund),1),t[10]||(t[10]=(0,n.Lk)("br",null,null,-1)),(0,n.eW)((0,a.v_)(o.row.contract),1)])),_:2},1032,["props"]),(0,n.bF)(_,{key:"time",props:o},{default:(0,n.k6)((()=>[o.row.time>1?((0,n.uX)(),(0,n.CE)(n.FK,{key:0},[(0,n.eW)((0,a.v_)(new Date(1e3*o.row.time).toLocaleTimeString()),1),t[11]||(t[11]=(0,n.Lk)("br",null,null,-1)),(0,n.eW)((0,a.v_)(new Date(1e3*o.row.time).toLocaleDateString()),1)],64)):((0,n.uX)(),(0,n.CE)(n.FK,{key:1},[(0,n.eW)("-")],64))])),_:2},1032,["props"]),(0,n.bF)(_,{key:"memo",props:o},{default:(0,n.k6)((()=>[(0,n.eW)((0,a.v_)(e.shortenText(e.StringToUtf8String(o.row.memo))),1)])),_:2},1032,["props"])])),_:2},1032,["props","class","onClick"])])),bottom:(0,n.k6)((()=>[(0,n.Lk)("div",y,[e.moreAvailable?((0,n.uX)(),(0,n.Wv)(h,{key:0,icon:"add_circle_outline",loading:e.loadingSearch,round:"",onClick:t[7]||(t[7]=t=>e.search(e.lastSearchId)),disable:e.loadingSearch||e.loadingUpdateOut},null,8,["loading","disable"])):(0,n.Q3)("",!0)])])),"no-data":(0,n.k6)((({message:e})=>[(0,n.Lk)("div",g,[(0,n.Lk)("span",null,(0,a.v_)(e),1)])])),_:1},8,["rows","columns","row-key","loading","no-data-label"])]})),_:1})}var v=o(38734),b=o(50697),h=o(57387),w=o(20989),k=o(39507),S=o(70308),T=o(65999),_=o(48960),P=o(97687),A=o(72561),C=o(60455),F=o(75111),U=o(87639),I=o(32334),x=function(e,t,o,n){function a(e){return e instanceof o?e:new o((function(t){t(e)}))}return new(o||(o=Promise))((function(o,i){function r(e){try{s(n.next(e))}catch(t){i(t)}}function l(e){try{s(n["throw"](e))}catch(t){i(t)}}function s(e){e.done?o(e.value):a(e.value).then(r,l)}s((n=n.apply(e,t||[])).next())}))};const W=(0,n.pM)({name:"page-history",components:{TrxToolTip:b["default"]},setup(){var e;const t=(0,U.J)(),o=(0,k.V)(),a=(0,h.s9)({useScope:"global"}).t.bind(this),i=(0,C.lq)(),r=(0,C.rd)(),l=i.query;"chain"in l&&"string"==typeof l.chain&&o.selectChain(l.chain);const s=(0,n.EW)((()=>t.brightStyle));!o.historyUserInput&&(null===(e=o.walletUser)||void 0===e?void 0:e.name)&&o.setHistoryUserInput(o.walletUser.name);const c=(0,n.EW)((()=>o.historyUserInput.length>13?P.PublicKey.fromString(o.historyUserInput).toString():o.historyUserInput)),d=(0,n.EW)((()=>o.historyRecipientInput.length>13?P.PublicKey.fromString(o.historyRecipientInput).toString():o.historyRecipientInput)),u=(0,v.KR)(!1),p=(0,v.KR)(!1),m=(0,v.KR)(!1),y=(0,v.KR)(!1),g=(0,v.KR)(-1),f=(0,n.EW)((()=>{var e;return null===(e=o.selectedConnect)||void 0===e?void 0:e.chainParams}));console.log("user norm",c.value),o.iniHistory(c.value);const b=(0,v.KR)(o.historyUserInput?o.historyUserInput:""),W=(0,n.EW)({get:()=>b.value,set:e=>{b.value=e,e.length<=13&&(e=e.toLowerCase()),(0,S.isNameValid)(e)||e.length>52&&_.E.isValidPublic(e)?o.setHistoryUserInput(e):o.setHistoryUserInput(void 0)}}),K=(0,v.KR)(o.historyRecipientInput?o.historyRecipientInput:""),q=(0,n.EW)({get:()=>K.value,set:e=>{K.value=e,e.length<=13&&(e=e.toLowerCase()),(0,S.isNameValid)(e)||e.length>52&&_.E.isValidPublic(e)?o.setHistoryRecipientInput(e):o.setHistoryRecipientInput("")}});function N(e){return x(this,void 0,void 0,(function*(){const t=c.value;if(!t)return void w.A.create({type:"negative",message:a("noSenderDefined"),caption:a("enterUserFirst"),position:"top"});const n=d.value;if(!n)return void w.A.create({type:"negative",message:a("noRecipientDefined"),caption:a("enterRecipientFirst"),position:"top"});const i=o.selectedConnect;if(!i)return void w.A.create({type:"negative",message:a("noChainDefined"),position:"top"});if(u.value)return;let r;if(u.value=!0,(0,S.isNameValid)(t))r=(0,T.nameToFromHex)(t);else{if(!_.E.isValidPublic(t))return w.A.create({type:"negative",message:t.length<13?a("invalidAcc"):a("invalidPub"),position:"top"}),void(u.value=!1);r=(0,T.hexWithTypeOfPubKey)(P.PublicKey.fromString(t))}const l=200,s=Date.now();let p;try{if((0,S.isNameValid)(n)){const a=yield i.get_table_rows({code:i.chainParams.savpayContract,table:"pay2name",scope:n,lower_bound:String(e),limit:l,json:!1});if(p=I.SavActPayTableType.pay2name,a.rows.length>0)for(const e of a.rows){const a=(0,I.rawSavActPaymentToObject)(e,p);void 0!=a&&r===a.from&&void 0!=a.fund.symbol&&o.updateHistoryOutTrx(t,{sender:t,recipient:n,id:Number(a.id),fund:(0,S.AssetToString)(a.fund),orifund:(0,S.AssetToString)({amount:a.orisent,symbol:a.fund.symbol}),memo:a.memo,ramBy:a.ramBy,type:a.type,time:a.time,contract:a.contract,lastUpdate:s,removed:!1,chain:i.chainParams.shortName?i.chainParams.shortName:i.chainParams.chainId})}y.value=a.more}else if(_.E.isValidPublic(n)){const c=P.PublicKey.fromString(n),d=(0,T.splitPubKeyToScopeAndTableVec)(c),m=yield i.get_table_rows({code:i.chainParams.savpayContract,table:"pay2key",scope:d.scope.toString(),limit:200,json:!1,reverse:!0});if(p=I.SavActPayTableType.pay2key,!(m.rows.length>0))return w.A.create({type:"negative",message:t.length<13?a("invalidAcc"):a("invalidPub"),position:"top"}),void(u.value=!1);for(const e of m.rows){const a=(0,I.rawSavActPaymentToObject)(e,p);void 0!=a&&r===a.from&&void 0!=a.fund.symbol&&(void 0!==a.to&&a.to===d.tableVec&&o.updateHistoryOutTrx(t,{sender:t,recipient:n,id:Number(a.id),fund:(0,S.AssetToString)(a.fund),orifund:(0,S.AssetToString)({amount:a.orisent,symbol:a.fund.symbol}),memo:a.memo,ramBy:a.ramBy,type:a.type,time:a.time,contract:a.contract,lastUpdate:s,removed:!1,chain:i.chainParams.shortName?i.chainParams.shortName:i.chainParams.chainId}))}const f=e,v=e+l;o.user[t].outHistory.forEach(((e,n)=>{e.lastUpdate!=s&&e.id>=f&&e.id<f&&o.markRemovedOutTrx(t,n)})),g.value=v,y.value=m.more}else w.A.create({type:"negative",message:n.length<13?a("invalidAcc"):a("invalidPub"),position:"top"})}catch(m){console.log("Error on requesting data",m)}finally{u.value=!1}}))}function R(e){return x(this,void 0,void 0,(function*(){const t=o.selectedConnect;if(!t)return w.A.create({type:"negative",message:a("noChainDefined"),position:"top"}),!1;try{let n=!0,i=0;const r=200;while(n){const l=Date.now();let s;if((0,S.isNameValid)(e)){const a=yield t.get_table_rows({code:t.chainParams.savpayContract,table:"pay2name",scope:e,lower_bound:String(i),limit:r,reverse:!0,json:!1});if(s=I.SavActPayTableType.pay2name,a.rows.length>0)for(const n of a.rows){const a=(0,I.rawSavActPaymentToObject)(n,s);void 0!=a&&void 0!=a.fund.symbol&&o.updateHistoryInTrx(e,{sender:(0,T.hexTypeOfPubKeyToNameOrKeyStr)(a.from),recipient:e,id:Number(a.id),fund:(0,S.AssetToString)(a.fund),orifund:(0,S.AssetToString)({amount:a.orisent,symbol:a.fund.symbol}),memo:a.memo,ramBy:a.ramBy,type:a.type,time:a.time,contract:a.contract,lastUpdate:l,removed:!1,chain:t.chainParams.shortName?t.chainParams.shortName:t.chainParams.chainId})}n=a.more}else{if(!_.E.isValidPublic(e))return w.A.create({type:"negative",message:e.length<13?a("invalidAcc"):a("invalidPub"),position:"top"}),!1;{const a=P.PublicKey.fromString(e),c=(0,T.splitPubKeyToScopeAndTableVec)(a);e=a.toString();const d=yield t.get_table_rows({code:t.chainParams.savpayContract,table:"pay2key",scope:c.scope.toString(),lower_bound:String(i),limit:r,reverse:!0,json:!1});if(s=I.SavActPayTableType.pay2key,d.rows.length>0)for(const n of d.rows){const a=(0,I.rawSavActPaymentToObject)(n,s);void 0!=a&&void 0!=a.fund.symbol&&o.updateHistoryInTrx(e,{sender:(0,T.hexTypeOfPubKeyToNameOrKeyStr)(a.from),recipient:e,id:Number(a.id),fund:(0,S.AssetToString)(a.fund),orifund:(0,S.AssetToString)({amount:a.orisent,symbol:a.fund.symbol}),memo:a.memo,ramBy:a.ramBy,type:a.type,time:a.time,contract:a.contract,lastUpdate:l,removed:!1,chain:t.chainParams.shortName?t.chainParams.shortName:t.chainParams.chainId})}n=d.more}}i+=r,yield(0,A.sleep)(1e3)}}catch(n){return console.log("Error on requesting data",n),!1}return!0}))}function O(e){return x(this,void 0,void 0,(function*(){const t=o.selectedConnect;if(!t)return w.A.create({type:"negative",message:a("noChainDefined"),position:"top"}),!1;const n=Date.now();try{if(!o.user[e]||!o.user[e].outHistory||o.user[e].outHistory.length<=0)return w.A.create({type:"negative",message:a("noOutHistory"),position:"top"}),!1;for(const i of o.user[e].outHistory)if(!i.removed){let r,l,s,c="",d=!1;if((0,S.isNameValid)(i.recipient))r="pay2name",s=I.SavActPayTableType.pay2name,l=e;else{if(!_.E.isValidPublic(i.recipient))return w.A.create({type:"negative",message:i.recipient.length<13?a("invalidAcc"):a("invalidPub"),position:"top"}),!1;{d=!0;const e=P.PublicKey.fromString(i.recipient),t=(0,T.splitPubKeyToScopeAndTableVec)(e);r="pay2key",s=I.SavActPayTableType.pay2key,l=String(t.scope),c=t.tableVec}}const u=yield t.get_table_rows({code:t.chainParams.savpayContract,table:r,scope:l,lower_bound:String(i.id),upper_bound:String(i.id),reverse:!0,json:!1});if(!("rows"in u&&u.rows.length>0))return!1;{const a=u.rows[0],r=(0,I.rawSavActPaymentToObject)(a,s);if(void 0==r||void 0==r.fund.symbol)continue;if(d&&(void 0===r.to||c!=r.to))return!1;o.updateHistoryOutTrx(e,{sender:e,recipient:i.recipient,id:Number(r.id),fund:(0,S.AssetToString)(r.fund),orifund:(0,S.AssetToString)({amount:r.orisent,symbol:r.fund.symbol}),memo:r.memo,ramBy:r.ramBy,type:r.type,time:r.time,contract:r.contract,lastUpdate:n,removed:!1,chain:t.chainParams.shortName?t.chainParams.shortName:t.chainParams.chainId})}}}catch(i){return console.log("Error on requesting data",i),!1}return!0}))}function L(){return x(this,void 0,void 0,(function*(){const e=c.value;e?p.value||(p.value=!0,yield R(e),p.value=!1):w.A.create({type:"negative",message:a("noSenderDefined"),caption:a("enterUserFirst"),position:"top"})}))}function V(){return x(this,void 0,void 0,(function*(){const e=c.value;e?m.value||(m.value=!0,yield O(e),m.value=!1):w.A.create({type:"negative",message:a("noSenderDefined"),caption:a("enterUserFirst"),position:"top"})}))}const E=[{name:"type",align:"left",label:"",field:"type"},{name:"id",align:"left",label:"Id",field:"id",sortable:!0},{name:"sender",align:"left",label:a("sender"),field:"sender",sortable:!0},{name:"fund",align:"left",label:a("fund"),field:"fund",sortable:!0},{name:"time",align:"center",label:a("deadline"),field:"time",sortable:!0},{name:"memo",align:"left",label:"Memo",field:"memo"}],H=[{name:"type",align:"left",label:"",field:"type"},{name:"nr",align:"left",label:"Local nr.",field:"nr",sortable:!0},{name:"recipient",align:"left",label:a("recipient"),field:"recipient"},{name:"fund",align:"left",label:a("fund"),field:"fund",sortable:!0},{name:"time",align:"center",label:a("deadline"),field:"time",sortable:!0},{name:"memo",align:"left",label:"Memo",field:"memo"}],D=(0,n.EW)((()=>{var e;if(o.user[c.value]){const t=null===(e=o.selectedConnect)||void 0===e?void 0:e.chainParams.shortName;return o.user[c.value].inHistory.filter((e=>e.chain===t))}return[]})),j=(0,n.EW)((()=>{var e;if(o.user[c.value]){const t=null===(e=o.selectedConnect)||void 0===e?void 0:e.chainParams.shortName;return d.value.length>0?o.user[c.value].outHistory.filter((e=>e.recipient==d.value&&e.chain===t)):o.user[c.value].outHistory}return[]}));function B(e,t){let o=t?{user:e.recipient,from:e.sender,id:e.id,chain:e.chain}:{user:e.sender,to:e.recipient,id:e.id,chain:e.chain};r.push({name:"action",query:o})}function Q(e){return`${e.sender} ${e.recipient} ${e.id}`}return"to"in l&&"string"==typeof l.to&&(q.value=l.to),"user"in l&&"string"==typeof l.user&&(W.value=l.user,L()),{t:a,brightStyle:s,user:W,to:q,search:N,loadingSearch:u,moreAvailable:y,lastSearchId:g,updateIn:L,updateOut:V,loadingUpdateIn:p,loadingUpdateOut:m,eosioStore:o,chain:f,showWalletDialog:o.showWalletDialog,inColumns:E,outColumns:H,inRows:D,outRows:j,shortAddress:S.shortAddress,shortenText:S.shortenText,onRowClick:B,rowKey:Q,colorStatus:F.colorStatus,StringToUtf8String:I.StringToUtf8String}}});var K=o(12807),q=o(77716),N=o(56384),R=o(9979),O=o(67837),L=o(97410),V=o(44488),E=o(45262),H=o(3952),D=o(98582),j=o.n(D);const B=(0,K.A)(W,[["render",f]]),Q=B;j()(W,"components",{QPage:q.A,QBtn:N.A,QTable:R.A,QInput:O.A,QTooltip:L.A,QTr:V.A,QTd:E.A,QAvatar:H.A})}}]);