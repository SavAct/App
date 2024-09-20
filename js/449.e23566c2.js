"use strict";(globalThis["webpackChunksavactapp"]=globalThis["webpackChunksavactapp"]||[]).push([[449],{403:(e,t,o)=>{o.r(t),o.d(t,{default:()=>ke});var a=o(61758),l=o(58790),n=o(29104);const i={class:"col q-mt-sm q-px-md"},s={class:"col-auto"},r={class:"row"},c={class:"full-width row"},u={class:"col wrap"},d={class:"col-auto"},m={class:"col-12 text-h6 text-left"},v={class:"col-12 text-left"},p={class:"row"},g={class:"col-auto q-pl-md"},y={class:"col-grow"},f={class:"q-pl-md q-pr-xs"},b={class:"row"},h={class:"col"},w={key:0,class:"row"},k={key:1},V={class:"text-no-wrap"},x={key:0},T={key:2,class:"full-width"},P={class:"col-auto"},S={class:"q-px-md q-mb-md"},q={class:"q-mt-sm cardMaxWidth"},C={class:"col q-py-md q-px-sm text-subtitle2"},A={class:"col q-py-md q-px-sm text-subtitle2"},_={class:"q-my-md"},F=["href"],W={class:"col q-py-md q-px-sm text-subtitle2"};function D(e,t,o,D,E,M){const O=(0,a.g2)("q-btn"),N=(0,a.g2)("q-card-section"),U=(0,a.g2)("q-card"),L=(0,a.g2)("key-or-name-input"),I=(0,a.g2)("q-chip"),K=(0,a.g2)("q-input"),R=(0,a.g2)("q-icon"),$=(0,a.g2)("q-toggle"),Q=(0,a.g2)("remaining-time"),X=(0,a.g2)("date-time-input"),B=(0,a.g2)("time-view"),z=(0,a.g2)("transfer-data-view"),j=(0,a.g2)("wallet-eosio"),G=(0,a.g2)("q-dialog"),H=(0,a.g2)("symbol-dialog"),J=(0,a.g2)("vote-dialog"),Z=(0,a.g2)("q-page"),Y=(0,a.gN)("close-popup");return(0,a.uX)(),(0,a.Wv)(Z,{class:"column",style:{height:"100%"}},{default:(0,a.k6)((()=>[(0,a.Lk)("div",i,[(0,a.bF)(U,{class:"q-my-sm card cardMaxWidth"},{default:(0,a.k6)((()=>[(0,a.bF)(N,{class:"row items-center justify-left"},{default:(0,a.k6)((()=>{var t;return[(0,a.Lk)("div",s,(0,l.v_)(e.t("payOnThe")),1),(0,a.bF)(O,{class:"col-auto q-ml-sm",dense:"",label:`${null===(t=e.chain)||void 0===t?void 0:t.name} Network`,onClick:e.showWalletDialog},null,8,["label","onClick"])]})),_:1})])),_:1}),(0,a.bF)(U,{class:"q-my-sm card cardMaxWidth"},{default:(0,a.k6)((()=>[(0,a.bF)(N,null,{default:(0,a.k6)((()=>[e.showSender?((0,a.uX)(),(0,a.Wv)(L,{key:0,modelValue:e.sender,"onUpdate:modelValue":t[0]||(t[0]=t=>e.sender=t),outlined:"",label:e.t("sender"),walletOption:"",pubkeyOption:"",class:"q-mb-md",useAvailableWallet:""},null,8,["modelValue","label"])):(0,a.Q3)("",!0),(0,a.bF)(L,{dense:"",modelValue:e.recipient,"onUpdate:modelValue":t[1]||(t[1]=t=>e.recipient=t),outlined:"",label:e.t("recipient")},null,8,["modelValue","label"])])),_:1})])),_:1}),(0,a.bF)(U,{class:"q-my-sm card cardMaxWidth"},{default:(0,a.k6)((()=>[(0,a.bF)(N,null,{default:(0,a.k6)((()=>[(0,a.Lk)("div",r,[e.isVote?((0,a.uX)(),(0,a.Wv)(I,{key:0,class:"q-mb-md col-grow",color:"number"==typeof e.selVote?"blue":"red","text-color":"white",icon:"poll",clickable:"",onClick:t[3]||(t[3]=t=>e.showVoteDialog=!0),square:""},{default:(0,a.k6)((()=>[(0,a.Lk)("div",c,[(0,a.Lk)("div",u,(0,l.v_)("number"==typeof e.selVote?`${e.selVote+1}. ${e.shrinkText(e.voteOptions[e.selVote],e.Screen.width/20)}`:e.t("selectVote")),1),(0,a.Lk)("div",d,[(0,a.bF)(O,{round:"",class:"text-white",size:"xs",icon:"done",dense:"",style:(0,l.Tr)(`background-color:${"number"==typeof e.selVote?e.VoteColor[e.selVote]:"white"}`),onClick:t[2]||(t[2]=t=>e.showVoteDialog=!0)},null,8,["style"])])])])),_:1},8,["color"])):(0,a.Q3)("",!0)]),(0,a.bF)(K,{outlined:"","bottom-slots":"",modelValue:e.amount,"onUpdate:modelValue":t[5]||(t[5]=t=>e.amount=t),type:"number",label:e.t("amount"),class:"full-width","hide-bottom-space":""},{append:(0,a.k6)((()=>[(0,a.bF)(O,{size:"sm",class:"row q-px-sm q-py-none q-ma-none",onClick:t[4]||(t[4]=t=>e.showSymbol=!0)},{default:(0,a.k6)((()=>[(0,a.Lk)("div",m,(0,l.v_)(e.symbol),1),(0,a.Lk)("div",v,(0,l.v_)(e.tokenContract),1)])),_:1})])),_:1},8,["modelValue","label"]),e.isVote?(0,a.Q3)("",!0):((0,a.uX)(),(0,a.CE)("div",{key:0,class:"q-mt-md",onClick:t[7]||(t[7]=t=>e.extraMemo.active=!e.extraMemo.active)},[(0,a.bF)(R,{name:"notes",size:"sm",color:e.extraMemo.active?"blue":""},null,8,["color"]),t[28]||(t[28]=(0,a.Lk)("span",{class:"q-pl-md q-pr-xs"},"Memo",-1)),(0,a.bF)($,{modelValue:e.extraMemo.active,"onUpdate:modelValue":t[6]||(t[6]=t=>e.extraMemo.active=t),size:"md","unchecked-icon":"clear","checked-icon":"check"},null,8,["modelValue"])])),(0,a.Lk)("div",p,[(0,a.bo)((0,a.bF)(K,{class:"col full-width",dense:"",outlined:"","bottom-slots":"",modelValue:e.extraMemo.value,"onUpdate:modelValue":t[9]||(t[9]=t=>e.extraMemo.value=t),label:"Memo",maxlength:"255","hide-bottom-space":""},{append:(0,a.k6)((()=>[""!==e.extraMemo.value?((0,a.uX)(),(0,a.Wv)(R,{key:0,name:"close",onClick:t[8]||(t[8]=t=>e.extraMemo.value=""),class:"cursor-pointer"})):(0,a.Q3)("",!0)])),_:1},8,["modelValue"]),[[n.aG,e.extraMemo.active]]),(0,a.bo)((0,a.Lk)("div",g,[(0,a.bF)(R,{class:"cursor-pointer",name:"info",onClick:t[10]||(t[10]=t=>e.showMemoExplainDialog=!0),round:"",size:"xs",dense:""})],512),[[n.aG,e.extraMemo.active]])])])),_:1})])),_:1}),e.savPayAvailable?((0,a.uX)(),(0,a.Wv)(U,{key:0,class:"q-my-sm card cardMaxWidth"},{default:(0,a.k6)((()=>[(0,a.bF)(N,{class:"row"},{default:(0,a.k6)((()=>[(0,a.Lk)("div",y,[e.isVote?(0,a.Q3)("",!0):((0,a.uX)(),(0,a.CE)("div",{key:0,onClick:t[12]||(t[12]=t=>e.savPay=!e.savPay)},[(0,a.bF)(R,{name:"health_and_safety",size:"sm",color:e.savPay?"blue":""},null,8,["color"]),(0,a.Lk)("span",f,(0,l.v_)(e.t("useSavAct")),1),(0,a.bF)($,{modelValue:e.savPay,"onUpdate:modelValue":t[11]||(t[11]=t=>e.savPay=t),size:"md","unchecked-icon":"clear","checked-icon":"check",disable:e.isVote},null,8,["modelValue","disable"])])),(0,a.bo)((0,a.Lk)("div",b,[(0,a.Lk)("div",h,[e.isVote?((0,a.uX)(),(0,a.CE)("div",w,[(0,a.Lk)("span",{class:"text-no-wrap col-sm-auto col-12 cursor-pointer",onClick:t[13]||(t[13]=t=>e.showDateDialog=!0)},[(0,a.eW)((0,l.v_)(e.t("voteEndTime"))+" ",1),(0,a.bF)(R,{class:"",name:"more"}),t[29]||(t[29]=(0,a.eW)("  "))]),(0,a.bF)(Q,{class:"text-no-wrap col-sm-auto col-12",modelValue:e.voteEnd,"onUpdate:modelValue":t[14]||(t[14]=t=>e.voteEnd=t),timeOverMsg:e.t("timeIsOver")},null,8,["modelValue","timeOverMsg"])])):((0,a.uX)(),(0,a.CE)("div",k,[(0,a.Lk)("span",V,(0,l.v_)(e.isVote?e.t("voteTime"):e.t("timelimit")),1),void 0!==e.limit?((0,a.uX)(),(0,a.CE)("span",x,[t[30]||(t[30]=(0,a.Lk)("span",null,":  ",-1)),(0,a.bF)(Q,{modelValue:e.limit,"onUpdate:modelValue":t[15]||(t[15]=t=>e.limit=t),timeOverMsg:e.t("timeIsOver")},null,8,["modelValue","timeOverMsg"])])):(0,a.Q3)("",!0),(0,a.bF)(X,{disable:e.isVote,modelValue:e.limit,"onUpdate:modelValue":t[16]||(t[16]=t=>e.limit=t)},null,8,["disable","modelValue"])])),e.isVote?((0,a.uX)(),(0,a.CE)("div",T,[(0,a.Lk)("span",null,(0,l.v_)(e.t("punishTimeSpanSend"))+":  ",1),(0,a.bF)(B,{class:"col",showTime:e.decisionTime,minTime:3600,belowMinMsg:e.t("minPunishTime"),valueClasses:"text-green"},null,8,["showTime","belowMinMsg"])])):(0,a.Q3)("",!0)]),(0,a.Lk)("div",P,[(0,a.bF)(R,{class:"cursor-pointer",name:"info",onClick:t[17]||(t[17]=t=>e.showSavActExplainDialog=!0),round:"",size:"xs",dense:""})])],512),[[n.aG,e.savPay]])])])),_:1})])),_:1})):(0,a.Q3)("",!0)]),(0,a.Lk)("div",S,[(0,a.Lk)("div",q,[e.inputsValid?((0,a.uX)(),(0,a.Wv)(z,{key:0,sender:e.sender,recipient:e.to,quantity:e.quantity,memo:e.memo,memoActive:e.extraMemo.active||e.savPay,tokenContract:e.tokenContract},null,8,["sender","recipient","quantity","memo","memoActive","tokenContract"])):(0,a.Q3)("",!0)]),(0,a.bF)(U,{class:"q-mt-sm card cardMaxWidth"},{default:(0,a.k6)((()=>[(0,a.bF)(N,{class:"row justify-between"},{default:(0,a.k6)((()=>[(0,a.bF)(j,{class:"col q-pr-md"}),e.walletStyle?((0,a.uX)(),(0,a.Wv)(O,{key:0,class:"col-12 col-sm-auto q-mt-md",label:"Send","icon-right":"send",color:"blue",onClick:e.confirm,disable:e.loadingConfirm},null,8,["onClick","disable"])):e.inputsValid?((0,a.uX)(),(0,a.Wv)(O,{key:1,class:"col-12 q-mt-sm",size:"sm","no-caps":"",dense:"",label:e.t("alreadyPayed"),onClick:e.alreadyPayed},null,8,["label","onClick"])):(0,a.Q3)("",!0)])),_:1})])),_:1})]),(0,a.bF)(G,{modelValue:e.showMemoExplainDialog,"onUpdate:modelValue":t[18]||(t[18]=t=>e.showMemoExplainDialog=t)},{default:(0,a.k6)((()=>[(0,a.bF)(U,{bordered:""},{default:(0,a.k6)((()=>[(0,a.bF)(N,{class:"row q-ma-none q-pa-none"},{default:(0,a.k6)((()=>[(0,a.bo)((0,a.bF)(O,{class:"col-1 q-mt-none q-pa-none",dense:"",flat:"",icon:"arrow_back_ios_new"},null,512),[[Y]]),(0,a.Lk)("div",C,(0,l.v_)(e.t("isMemoKnown")),1)])),_:1}),(0,a.bF)(N,{class:"q-pt-none"},{default:(0,a.k6)((()=>[(0,a.Lk)("div",null,(0,l.v_)(e.t("memoDescr")),1)])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a.bF)(G,{modelValue:e.showSavActExplainDialog,"onUpdate:modelValue":t[19]||(t[19]=t=>e.showSavActExplainDialog=t)},{default:(0,a.k6)((()=>[(0,a.bF)(U,{bordered:""},{default:(0,a.k6)((()=>[(0,a.bF)(N,{class:"row q-ma-none q-pa-none"},{default:(0,a.k6)((()=>[(0,a.bo)((0,a.bF)(O,{class:"col-1 q-mt-none q-pa-none",dense:"",flat:"",icon:"arrow_back_ios_new"},null,512),[[Y]]),(0,a.Lk)("div",A,(0,l.v_)(e.t("isSavActKnown")),1)])),_:1}),(0,a.bF)(N,{class:"q-pt-none"},{default:(0,a.k6)((()=>[(0,a.Lk)("div",null,(0,l.v_)(e.t("timeLimitDescr")),1),(0,a.Lk)("div",_,(0,l.v_)(e.t("recipientKnowsSavAct")),1),(0,a.Lk)("div",null,[(0,a.eW)((0,l.v_)(e.t("paymentWpHint"))+" ",1),(0,a.Lk)("a",{href:e.t("wpLink"),target:"_blank"},(0,l.v_)(e.t("wpFileClickName")),9,F)])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a.bF)(G,{modelValue:e.showDateDialog,"onUpdate:modelValue":t[21]||(t[21]=t=>e.showDateDialog=t)},{default:(0,a.k6)((()=>[(0,a.bF)(U,{bordered:""},{default:(0,a.k6)((()=>[(0,a.bF)(N,{class:"row q-ma-none q-pa-none"},{default:(0,a.k6)((()=>[(0,a.bo)((0,a.bF)(O,{class:"col-1 q-mt-none q-pa-none",dense:"",flat:"",icon:"arrow_back_ios_new"},null,512),[[Y]]),(0,a.Lk)("div",W,(0,l.v_)(e.t("voteEndTime")),1)])),_:1}),(0,a.bF)(N,{class:(0,l.C4)(["row q-mt-none q-pt-none q-mb-md",e.$q.screen.lt.sm?"q-mx-none":"q-mx-md "])},{default:(0,a.k6)((()=>{var o;return[(0,a.bF)(Q,{class:"text-no-wrap col-sm-auto col-12",modelValue:e.voteEnd,"onUpdate:modelValue":t[20]||(t[20]=t=>e.voteEnd=t),timeOverMsg:e.t("timeIsOver")},null,8,["modelValue","timeOverMsg"]),(0,a.Lk)("div",null,(0,l.v_)(null===(o=e.voteEnd)||void 0===o?void 0:o.toString()),1)]})),_:1},8,["class"])])),_:1})])),_:1},8,["modelValue"]),(0,a.bF)(H,{modelValue:e.showSymbol,"onUpdate:modelValue":t[22]||(t[22]=t=>e.showSymbol=t),contract:e.tokenContract,"onUpdate:contract":t[23]||(t[23]=t=>e.tokenContract=t),symbol:e.symbol,"onUpdate:symbol":t[24]||(t[24]=t=>e.symbol=t),connect:e.connect,precision:e.fixed,"onUpdate:precision":t[25]||(t[25]=t=>e.fixed=t)},null,8,["modelValue","contract","symbol","connect","precision"]),(0,a.bF)(J,{modelValue:e.showVoteDialog,"onUpdate:modelValue":t[26]||(t[26]=t=>e.showVoteDialog=t),selected:e.selVote,"onUpdate:selected":t[27]||(t[27]=t=>e.selVote=t),options:e.voteOptions,title:e.voteTitle},null,8,["modelValue","selected","options","title"])])),_:1})}var E=o(6885),M=o(80080),O=o(98919),N=o(53928),U=o(77489),L=o(85119),I=o(55928),K=o(64993),R=o(20989),$=o(21103),Q=o(87881),X=o(38734),B=o(87639),z=o(60455),j=o(57387),G=o(39507),H=o(70308),J=o(72092),Z=o(65999),Y=o(97687),ee=o(72561),te=o(17008),oe=o(32334),ae=o(76847),le=o(8522)["Buffer"],ne=function(e,t,o,a){function l(e){return e instanceof o?e:new o((function(t){t(e)}))}return new(o||(o=Promise))((function(o,n){function i(e){try{r(a.next(e))}catch(t){n(t)}}function s(e){try{r(a["throw"](e))}catch(t){n(t)}}function r(e){e.done?o(e.value):l(e.value).then(i,s)}r((a=a.apply(e,t||[])).next())}))};const ie=(0,a.pM)({name:"page-send",components:{WalletEosio:E["default"],TransferDataView:M["default"],KeyOrNameInput:O["default"],DateTimeInput:N["default"],RemainingTime:U["default"],SymbolDialog:L["default"],VoteDialog:I["default"],TimeView:K["default"]},setup(){var e,t,o,l,n,i;const s=(0,a.nI)(),r=(0,j.s9)({useScope:"global"}).t.bind(this),c=(0,G.V)(),u=(0,B.J)(),d=(0,z.lq)(),m=(0,z.rd)(),v=(0,X.KR)(!1);let p=!1;const g=(0,a.EW)((()=>u.brightStyle)),y=(0,a.EW)((()=>c.walletUser)),f=(0,a.EW)((()=>c.walletUsers)),b=(0,a.EW)((()=>c.getWalletStyle)),h=(0,X.KR)(!1),w=(0,a.EW)({set:e=>{if(e){if(!se())return}else if(me.value.length>13||pe.value.length>13)return void R.A.create({type:"negative",message:r("keyUseSavPay"),position:"top"});h.value=e},get:()=>h.value}),k=(0,X.KR)(new Date(Date.now()+864e5+6e5)),V=(0,a.EW)((()=>k.value?k.value.getTime()/1e3:-1)),x=(0,a.EW)((()=>{if(0==pe.value.length)return console.log("No recipient"),!1;if((me.value.length>13||pe.value.length>13)&&!w.value)return console.log("SavPay has to be activated on payments from or to a key"),!1;if(fe.value<0)return console.log("No amount"),!1;if(w.value){if(!se())return console.log("SavPay is not available"),!1;if(0==me.value.length)return console.log("No sender"),!1;if(!k.value||k.value.getTime()<Date.now())return console.log("Time limit is already over"),!1}return _&&"number"!=typeof D.value?(console.log("No vote option selected"),!1):(console.log("Every input is valid"),!0)})),T=(0,a.EW)((()=>w.value?c.selectedConnect&&c.selectedConnect.chainParams.savpayContract?c.selectedConnect.chainParams.savpayContract:"":pe.value)),P=d.query;console.log("payment Options",P),void 0!==P.requestId&&u.updateBrowserPayment(P.requestId,!0,!1);let S=void 0!=P.from?P.from:"";0==S.length&&void 0!=y.value&&void 0!=y.value.name?S=y.value.name:S.length>13&&(S.startsWith("EOS")||S.startsWith("PUP"))&&(w.value=!0);const q=(0,X.KR)(!1),C=(0,X.KR)(!1),A=(0,X.KR)(!1);let _=!!P.V&&"string"==typeof P.V;const F=(0,X.KR)(!1);let W=[];const D=(0,X.KR)();let E,M,O,N,U,L;if(_&&P.V){const e=te.A.decode(P.V);let t;if(console.log("Vote data",e),E=e[0],M=e[1],U=e[2],O=new DataView(e.slice(3,7).reverse().buffer).getUint32(0),E==G.R.PublicVote)try{N=new DataView(e.slice(7,15).reverse().buffer).getBigUint64(0),console.log("Public vote index",N),t=e.slice(15)}catch(Oe){console.log("Error parsing public vote index",Oe),_=!1}else console.log("Private vote"),t=e.slice(7);t&&(console.log("optionsArray",t),W=(0,oe.OneStringToStringArray)((new TextDecoder).decode(t)),L=U+1==W.length?W.pop():""),U!=W.length?(_=!1,console.log(`Wrong amount voteId ${M} choisesAmount`,U,"!=",W.length)):F.value=!0,E!=G.R.PrivateVote&&E!=G.R.PublicVote&&console.log("Unknown vote type:",E),console.log("Vote parameters",{isVote:_,voteType:E,voteId:M,choisesAmount:U,voteEndTime:O,publicVoteIndex:N,voteOptions:W,voteTitle:L})}const I=(0,a.EW)((()=>k.value?new Date(1e3*O):void 0)),K=(0,a.EW)((()=>k.value&&I.value?(k.value.getTime()-I.value.getTime())/1e3:void 0)),ie=(0,a.EW)((()=>w.value||void 0==P.to||S.length>0));function se(){return!1!==re()||(R.A.create({type:"negative",message:r("errSavPayNotAvailable"),position:"top"}),h.value=!1,!1)}function re(){if(c.selectedConnect&&c.selectedConnect.chainParams)return!!c.selectedConnect.chainParams.savpayContract}const ce=(0,a.EW)((()=>{var e;return null===(e=c.selectedConnect)||void 0===e?void 0:e.chainParams}));(0,Q.iniSelectedChain)(P.chain,void 0==ce.value?_e:void 0);const ue=(0,X.KR)(void 0!=P.from?"wallet":"third"),de=(0,X.KR)(S),me=(0,a.EW)({get:()=>de.value,set:e=>{e.length>13&&(w.value=!0),de.value=e}}),ve=(0,X.KR)(void 0!=P.to?P.to:""),pe=(0,a.EW)({get:()=>ve.value,set:e=>{e.length>13&&(w.value=!0),ve.value=e}}),ge=(0,X.KR)(!1);pe.value.length>13&&(pe.value.startsWith("EOS")||pe.value.startsWith("PUP"))&&(w.value=!0);const ye=(0,X.KR)((null===(t=null===(e=c.selectedConnect)||void 0===e?void 0:e.chainParams.systemToken)||void 0===t?void 0:t.contract)?c.selectedConnect.chainParams.systemToken.contract:"eosio.token"),fe=(0,X.KR)(0),be=(0,X.KR)((null===(l=null===(o=c.selectedConnect)||void 0===o?void 0:o.chainParams.systemToken)||void 0===l?void 0:l.symbol)?c.selectedConnect.chainParams.systemToken.symbol:"EOS"),he=(0,X.KR)((null===(i=null===(n=c.selectedConnect)||void 0===n?void 0:n.chainParams.systemToken)||void 0===i?void 0:i.precision)?c.selectedConnect.chainParams.systemToken.precision:4),we=(0,a.EW)({set:e=>{if(0==e.trim().length)return;let t=e.indexOf(".")+1,o=e.indexOf(" ",t);if(-1==o)for(let l=t;l<e.length;++l)if(-1=="0123456789".indexOf(e[l])){e=e.slice(0,l)+" "+e.slice(l),o=l;break}let a=o-t;he.value=t>-1&&a>=0?a:0,-1==o||o>=e.length||(fe.value=parseFloat(e.substring(0,o)),be.value=e.substring(o+1))},get:()=>{const e=parseFloat(fe.value.toString());if(e>=0&&!isNaN(e)){const t=e.toFixed(he.value);return`${t} ${be.value}`}return""}});if("string"==typeof P.pay){const e=P.pay.split(" ");e.length>3||e.length<2?console.log('Got invalid asset by query parameter "pay"'):(3==e.length&&((0,H.isNameValid)(e[3])?console.log('Got invalid token contract by query parameter "pay"'):ye.value=e[2]),we.value=`${e[0]} ${e[1]}`)}let ke="";void 0!=P.M?ke=(new TextDecoder).decode(te.A.decode(P.M)).toString():void 0!=P.MEMO?ke=le.from(P.MEMO,"base64").toString():void 0!=P.m?ke=P.m:void 0!=P.memo&&(ke=P.memo);const Ve=(0,X.KR)({active:""!=ke,value:ke});function xe(){if(k.value){let e;return e=Ve.value.active&&Ve.value.value.length>0?`;${Ve.value.value}`:_&&"number"==typeof D.value?":"+(0,oe.createVoteMemo)(M,W.length,D.value,O,N,Ve.value.value.length>0?(new TextEncoder).encode(Ve.value.value):void 0):"",`${me.value}@${pe.value}!${(0,Z.base58Time)(V.value)}${e}`}return""}const Te=(0,a.EW)((()=>w.value?xe():Ve.value.active?Ve.value.value:"")),Pe=(0,a.EW)((()=>c.selectedConnect));if(void 0!=P.t||void 0!=P.dt||void 0!=P.T||void 0!=P.DT){let e;void 0!=P.t||void 0!=P.dt?e=void 0!=P.t?P.t:P.dt:(e=void 0!=P.T?P.T:P.DT,e=(0,Z.base58TimeToNumber)(e));let t=1e3*("number"==typeof e?e:Number.parseInt(e));isNaN(t)||(void 0==P.t&&void 0==P.T&&(t=Date.now()+t),k.value=new Date(t),w.value=!0)}function Se(){var e,t,o;return ne(this,void 0,void 0,(function*(){if(!0===ge.value)return;ge.value=!0,null===(e=null===s||void 0===s?void 0:s.proxy)||void 0===e||e.$forceUpdate();const a=c.selectedConnect;if(!a)return void(ge.value=!1);if(w.value&&!se())return void(ge.value=!1);const l=w.value;if(0==fe.value)return console.log("Amount can not be 0"),R.A.create({type:"negative",message:r("errNoZeroAmount"),position:"top"}),void(ge.value=!1);me.value=me.value.trim(),pe.value=pe.value.trim();const n=null===(t=(0,H.StringToAsset)(we.value))||void 0===t?void 0:t.amount;if("undefined"==typeof n)return void(ge.value=!1);const i={sender:me.value,recipient:pe.value,quantity:we.value,amount:n,tokenContract:ye.value,time:k.value?V.value:-1,memo:Te.value};if(void 0==y.value)return R.A.create({message:r("errSelectWallet"),position:"top"}),Fe(),void(ge.value=!1);if((yield y.value.getChainId())!=(null===(o=ce.value)||void 0===o?void 0:o.chainId))return R.A.create({message:r("errWrongWalletChain"),position:"top"}),void(ge.value=!1);if(!x.value)return R.A.create({type:"negative",message:r("notAllValid"),position:"top"}),void(ge.value=!1);if(!1===(yield Ee()))return void(ge.value=!1);let u=!1;if(void 0!=y.value.name&&y.value.name.length>0){if(!l&&i.sender&&(0,H.isNameValid)(i.sender)&&y.value.name!=i.sender)return R.A.create({message:r("errWrongWalletUser"),position:"top"}),void(ge.value=!1);let e=i.sender==y.value.name?Te.value.substring(Te.value.indexOf("@")):Te.value;const t=R.A.create({type:"ongoing",message:r("signTrx"),position:"top"}),o={isError:!1,notify:t};let n=yield Q.Connect.sendCustomAsset(o,y.value,{from:y.value.name,to:T.value,quantity:i.quantity,memo:e},i.tokenContract,!1,y.value.permission);if((0,J.trxSigningErrorHandling)(o,n,r)&&a){const e=l?yield qe(a,i.recipient):"-1";if(console.log("Got NextId",e),yield(0,J.broadcastTrx)(o,a,n,r)){let t;if(l){let l=!1;if(i.memo.length>0){const e=i.memo.indexOf(";"),t=i.memo.indexOf(":");let o;-1==t||-1!=e&&e<t?o=e:(o=t,l=!0),i.memo=o>0?i.memo.substring(o+1):""}const n=Date.now();console.log("loadSavPayTrx with NextId",e);const s=yield Ae(a,e,i,l);s?(console.log(r("savPayFound")),Date.now()-n<5e3&&o.notify?o.notify({type:"positive",message:r("savPayFound")}):R.A.create({type:"positive",message:r("savPayFound"),position:"top"}),t=String(s.id),u=!0):(console.log(r("savPayTrxNotFound")),R.A.create({type:"negative",message:r("savPayTrxNotFound"),position:"top"}))}else u=!0;ge.value=!1,!0===u?(p={to:i.recipient,from:i.sender.length>0?i.sender:void 0,t:-1==i.time?void 0:i.time,memo:i.memo,pay:`${i.quantity} ${i.tokenContract}`,chain:a.chainParams.shortName?a.chainParams.shortName:a.chainParams.chainId,index:t},_e()):(p=!1,_e())}}}else R.A.create({message:r("errSetUserOfWallet"),position:"top"});ge.value=!1}))}function qe(e,t){return ne(this,void 0,void 0,(function*(){let o,a;if((0,H.isNameValid)(t))o=String((0,Z.nameToUint64)(t)),a="name";else{const e=Y.PublicKey.fromString(t);o=String((0,Z.splitPubKeyToScopeAndTableVec)(e).scope),a="key"}console.log("Get get NextId with",{code:e.chainParams.savpayContract,table:"data",scope:a,lower_bound:o,upper_bound:o});const l=yield e.get_table_rows({code:e.chainParams.savpayContract,table:"data",scope:a,lower_bound:o,upper_bound:o});if(console.log("result get NextId",l),l&&"rows"in l&&l.rows.length>0){const e=l.rows[0];return String(e.nextId)}return console.log("Use String 0 for Nextid",String(0)),String(0)}))}function Ce(e,t){if(typeof e!=typeof t||e.length!=t.length)return!1;if("string"==typeof e&&"string"==typeof t)return e.valueOf()===t.valueOf();for(let o=0;o<e.length;o++)if(e[o]!=t[o])return!1;return!0}function Ae(e,t,o,a=!1){var l;return ne(this,void 0,void 0,(function*(){let n=t;console.log("loadSavPayTrx with",{beginId:t,should:o,isVote:a});let i,s,r=0;if((0,H.isNameValid)(o.sender))i=(0,Z.nameToFromHex)(o.sender);else{const e=Y.PublicKey.fromString(o.sender);o.sender=e.toString(),i=(0,Z.hexWithTypeOfPubKey)(e)}if(a)try{s=(0,oe.Uint8ArrayToString)(te.A.decode(o.memo).slice(1))}catch(Oe){console.log("No base58 memo on vote"),s=o.memo}else{const e=(0,oe.StringToUint8Array)(o.memo,"utf-8");if(void 0===e)return console.log("Cannot convert Memo to Uint8Array"),!1;s=(0,oe.Uint8ArrayToString)(e)}const u=null===(l=(0,H.StringToAsset)(o.quantity))||void 0===l?void 0:l.symbol;if(void 0==u)return console.log("No symbol defined"),!1;try{if((0,H.isNameValid)(o.recipient))while(1){const t=yield e.get_table_rows({code:e.chainParams.savpayContract,table:"pay2name",scope:o.recipient,lower_bound:n,json:!1,limit:200});if(t&&"rows"in t&&t.rows.length>0){for(const l of t.rows){const t=(0,oe.rawSavActPaymentToObject)(l,oe.SavActPayTableType.pay2name);if(void 0!==t&&(t.from==i&&t.orisent==o.amount&&t.time==o.time&&Ce(t.memo,s)&&t.fund.symbol.precision==u.precision&&t.fund.symbol.name==u.name)){const a=t.fund.symbol,l={sender:o.sender,recipient:o.recipient,id:Number(t.id),fund:(0,H.AssetToString)(t.fund),orifund:(0,H.AssetToString)({amount:t.orisent,symbol:a}),memo:s,ramBy:t.ramBy,type:t.type,time:t.time,contract:t.contract,lastUpdate:Date.now(),removed:!1,chain:e.chainParams.shortName?e.chainParams.shortName:e.chainParams.chainId};return c.updateHistoryInTrx(o.recipient,l),c.updateHistoryOutTrx(o.sender,l),l}}const a=(0,oe.rawSavActPaymentToObject)(t.rows[t.rows.length-1],oe.SavActPayTableType.pay2name);a&&(n=String(a.id++))}if(!(r<21))return!1;yield(0,ee.sleep)(r<4?500:r<10?1e3:2e3),r++}else{const t=Y.PublicKey.fromString(o.recipient),a=(0,Z.splitPubKeyToScopeAndTableVec)(t);o.recipient=t.toString();while(1){const t=yield e.get_table_rows({code:e.chainParams.savpayContract,table:"pay2key",scope:String(a.scope),lower_bound:n,json:!1,limit:200});if(t&&"rows"in t&&t.rows.length>0){for(const n of t.rows){const t=(0,oe.rawSavActPaymentToObject)(n,oe.SavActPayTableType.pay2key);if(void 0!==t&&(t.from==i&&t.to==a.tableVec&&t.orisent==o.amount&&t.time==o.time&&Ce(t.memo,s)&&t.fund.symbol.precision==u.precision&&t.fund.symbol.name==u.name)){const a=t.fund.symbol,l={sender:o.sender,recipient:o.recipient,id:Number(t.id),fund:(0,H.AssetToString)(t.fund),orifund:(0,H.AssetToString)({amount:t.orisent,symbol:a}),memo:s,ramBy:t.ramBy,type:t.type,time:t.time,contract:t.contract,lastUpdate:Date.now(),removed:!1,chain:e.chainParams.shortName?e.chainParams.shortName:e.chainParams.chainId};return c.updateHistoryInTrx(o.recipient,l),c.updateHistoryOutTrx(o.sender,l),l}}const l=(0,oe.rawSavActPaymentToObject)(t.rows[t.rows.length-1],oe.SavActPayTableType.pay2key);l&&(n=String(l.id++))}if(!(r<21))return!1;yield(0,ee.sleep)(r<4?500:r<10?1e3:2e3),r++}}}catch(Oe){return console.log("Error on loadSavPayTrx",Oe),!1}}))}function _e(){console.log("Go back",history.length,m.getRoutes()),history.length>1?m.back():m.push({name:"transfer"})}function Fe(){var e;if(void 0==ce.value)return void R.A.create({type:"negative",message:r("noChainDefined"),position:"top"});const t={payment:{to:pe.value,from:me.value,amount:fe.value,symbol:be.value,memo:ke},chainId:null===(e=ce.value)||void 0===e?void 0:e.chainId,show:!0};c.setWalletDialog(t)}const We=(0,X.KR)(_||w.value||"string"!=typeof P.to||"t"in P||"T"in P||"dt"in P||"DT"in P),De=(0,X.KR)(!1);function Ee(){return ne(this,void 0,void 0,(function*(){if(_&&void 0!==N){if(De.value)return!0;try{const e=pe.value.length<=13?(0,Z.nameToFromHex)(pe.value):(0,Z.hexWithTypeOfPubKey)(Y.PublicKey.fromString(pe.value)),t=yield Pe.value.get_table_rows({code:Pe.value.chainParams.savpayContract,scope:Pe.value.chainParams.savpayContract,table:"votes",lower_bound:N.toString(),upper_bound:N.toString(),limit:1,reverse:!0,show_payer:!1});if(t&&"rows"in t&&Array.isArray(t.rows)){if(t.rows.length>0){const o=t.rows[0];if("vid"in o&&"ramBy"in o&&"vt"in o&&"t"in o&&"rtoken"in o&&"rtcontract"in o)if(o.ramBy===pe.value&&""===o.holder||o.holder===e)if(o.vid===M&&o.vt===Math.floor(O)&&o.t===V.value&&o.rtcontract===ye.value&&o.options.length===U){const e=(0,H.StringToAsset)(o.rtoken);if((null===e||void 0===e?void 0:e.symbol.precision)===he.value&&(null===e||void 0===e?void 0:e.symbol.name)===be.value)return De.value=!0,!0;console.log("Different token symbol")}else console.log("Different public vote data");else console.log("Different holder")}De.value=!1,R.A.create({type:"negative",message:r("invalidPublicVoteEntry"),position:"top"})}return!1}catch(Oe){console.log(Oe)}return De.value=!1,R.A.create({type:"negative",message:r("errCheckPublicVoteEntry"),position:"top"}),!1}}))}function Me(){const e=c.selectedConnect;if(!e)return void R.A.create({type:"negative",message:r("noChainDefined"),position:"top"});const t={to:pe.value,from:me.value.length>0?me.value:void 0,t:w.value&&k.value?V.value:void 0,memo:Te.value,pay:`${we.value} ${ye.value}`,chain:e.chainParams.shortName?e.chainParams.shortName:e.chainParams.chainId};p=t,_e()}return(0,a.xo)((()=>{void 0!==P.requestId&&u.updateBrowserPayment(P.requestId,!1,p)})),{t:r,brightStyle:g,selectMethod:ue,chain:ce,connect:Pe,sender:me,recipient:pe,to:T,amount:fe,fixed:he,symbol:be,tokenContract:ye,extraMemo:Ve,memo:Te,savPay:w,limit:k,confirm:Se,loadingConfirm:ge,walletStyle:b,quantity:we,walletLogout:c.walletLogout,showWalletDialog:c.showWalletDialog,walletUsers:f,walletUser:y,selectWallet:Fe,inputsValid:x,showSymbol:v,showSender:ie,isVote:_,voteOptions:W,voteTitle:L,selVote:D,showVoteDialog:F,shrinkText:oe.shrinkText,Screen:$.A,decisionTime:K,voteEnd:I,VoteColor:ae.VoteColor,savPayAvailable:We,alreadyPayed:Me,showDateDialog:q,showSavActExplainDialog:C,showMemoExplainDialog:A}}});var se=o(12807),re=o(77716),ce=o(23316),ue=o(44189),de=o(56384),me=o(66760),ve=o(67837),pe=o(50492),ge=o(66908),ye=o(82156),fe=o(88672),be=o(98582),he=o.n(be);const we=(0,se.A)(ie,[["render",D]]),ke=we;he()(ie,"components",{QPage:re.A,QCard:ce.A,QCardSection:ue.A,QBtn:de.A,QChip:me.A,QInput:ve.A,QIcon:pe.A,QToggle:ge.A,QDialog:ye.A}),he()(ie,"directives",{ClosePopup:fe.A})}}]);