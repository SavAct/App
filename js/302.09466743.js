"use strict";(globalThis["webpackChunksavactapp"]=globalThis["webpackChunksavactapp"]||[]).push([[302],{30394:(e,t,o)=>{o.r(t),o.d(t,{default:()=>fe});var a=o(59835),l=o(86970),n=o(61957);const i={class:"col q-mt-sm q-px-md"},s={class:"col-auto"},r={class:"row"},u={class:"full-width row"},c={class:"col wrap"},d={class:"col-auto"},m={class:"col-12 text-h6 text-left"},v={class:"col-12 text-left"},p=(0,a._)("span",{class:"q-pl-md q-pr-xs"},"Memo",-1),y={class:"q-pl-md q-pr-xs"},g={class:"q-my-md"},f=["href"],h={key:0,class:"row"},w={class:"text-no-wrap col-sm-auto col-12"},b={class:"q-mb-sm col-12"},T={key:1},V={class:"text-no-wrap"},k={key:0},P=(0,a._)("span",null,":  ",-1),x={key:2,class:"full-width"},S={class:"q-px-md q-mb-md"},C={class:"q-mt-sm cardMaxWidth"};function q(e,t,o,q,_,W){const A=(0,a.up)("q-btn"),D=(0,a.up)("q-card-section"),N=(0,a.up)("q-card"),M=(0,a.up)("key-or-name-input"),O=(0,a.up)("q-chip"),U=(0,a.up)("q-icon"),F=(0,a.up)("q-input"),I=(0,a.up)("q-toggle"),Z=(0,a.up)("q-expansion-item"),H=(0,a.up)("remaining-time"),z=(0,a.up)("date-time-input"),E=(0,a.up)("time-view"),$=(0,a.up)("transfer-data-view"),j=(0,a.up)("wallet-eosio"),B=(0,a.up)("symbol-dialog"),K=(0,a.up)("vote-dialog"),Q=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(Q,{class:"column",style:{height:"100%"}},{default:(0,a.w5)((()=>[(0,a._)("div",i,[(0,a.Wm)(N,{class:"q-my-sm card cardMaxWidth"},{default:(0,a.w5)((()=>[(0,a.Wm)(D,{class:"row items-center justify-left"},{default:(0,a.w5)((()=>{var t;return[(0,a._)("div",s,(0,l.zw)(e.t("payOnThe")),1),(0,a.Wm)(A,{class:"col-auto q-ml-sm",dense:"",label:`${null===(t=e.chain)||void 0===t?void 0:t.name} Network`,onClick:e.showWalletDialog},null,8,["label","onClick"])]})),_:1})])),_:1}),(0,a.Wm)(N,{class:"q-my-sm card cardMaxWidth"},{default:(0,a.w5)((()=>[(0,a.Wm)(D,null,{default:(0,a.w5)((()=>[e.showSender?((0,a.wg)(),(0,a.j4)(M,{key:0,modelValue:e.sender,"onUpdate:modelValue":t[0]||(t[0]=t=>e.sender=t),outlined:"",label:e.t("sender"),walletOption:"",pubkeyOption:"",class:"q-mb-md",useAvailableWallet:""},null,8,["modelValue","label"])):(0,a.kq)("",!0),(0,a.Wm)(M,{modelValue:e.recipient,"onUpdate:modelValue":t[1]||(t[1]=t=>e.recipient=t),outlined:"",label:e.t("recipient")},null,8,["modelValue","label"])])),_:1})])),_:1}),(0,a.Wm)(N,{class:"q-my-sm card cardMaxWidth"},{default:(0,a.w5)((()=>[(0,a.Wm)(D,null,{default:(0,a.w5)((()=>[(0,a._)("div",r,[e.isVote?((0,a.wg)(),(0,a.j4)(O,{key:0,class:"q-mb-md col-grow",color:"number"==typeof e.selVote?"blue":"red","text-color":"white",icon:"poll",clickable:"",onClick:t[3]||(t[3]=t=>e.showVoteDialog=!0),square:""},{default:(0,a.w5)((()=>[(0,a._)("div",u,[(0,a._)("div",c,(0,l.zw)("number"==typeof e.selVote?`${e.selVote+1}. ${e.shrinkText(e.voteOptions[e.selVote],e.Screen.width/20)}`:e.t("selectVote")),1),(0,a._)("div",d,[(0,a.Wm)(A,{round:"",class:"text-white",size:"xs",icon:"done",dense:"",style:(0,l.j5)(`background-color:${"number"==typeof e.selVote?e.VoteColor[e.selVote]:"white"}`),onClick:t[2]||(t[2]=t=>e.showVoteDialog=!0)},null,8,["style"])])])])),_:1},8,["color"])):(0,a.kq)("",!0)]),(0,a.Wm)(F,{outlined:"","bottom-slots":"",modelValue:e.amount,"onUpdate:modelValue":t[5]||(t[5]=t=>e.amount=t),type:"number",label:e.t("amount"),class:"full-width","hide-bottom-space":""},{before:(0,a.w5)((()=>[(0,a.Wm)(U,{name:"monetization_on"})])),append:(0,a.w5)((()=>[(0,a.Wm)(A,{size:"sm",class:"row q-px-sm q-py-none q-ma-none",onClick:t[4]||(t[4]=t=>e.showSymbol=!0)},{default:(0,a.w5)((()=>[(0,a._)("div",m,(0,l.zw)(e.symbol),1),(0,a._)("div",v,(0,l.zw)(e.tokenContract),1)])),_:1})])),_:1},8,["modelValue","label"]),e.isVote?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",{key:0,class:"q-mt-md",onClick:t[7]||(t[7]=t=>e.extraMemo.active=!e.extraMemo.active)},[(0,a.Wm)(U,{name:"notes",size:"sm",color:e.extraMemo.active?"blue":""},null,8,["color"]),p,(0,a.Wm)(I,{modelValue:e.extraMemo.active,"onUpdate:modelValue":t[6]||(t[6]=t=>e.extraMemo.active=t),size:"md","unchecked-icon":"clear","checked-icon":"check"},null,8,["modelValue"])])),(0,a._)("div",null,[(0,a.wy)((0,a.Wm)(F,{outlined:"","bottom-slots":"",modelValue:e.extraMemo.value,"onUpdate:modelValue":t[9]||(t[9]=t=>e.extraMemo.value=t),label:"Memo",maxlength:"255",class:"full-width","hide-bottom-space":""},{append:(0,a.w5)((()=>[""!==e.extraMemo.value?((0,a.wg)(),(0,a.j4)(U,{key:0,name:"close",onClick:t[8]||(t[8]=t=>e.extraMemo.value=""),class:"cursor-pointer"})):(0,a.kq)("",!0)])),_:1},8,["modelValue"]),[[n.F8,e.extraMemo.active]])])])),_:1})])),_:1}),e.savPayAvailable?((0,a.wg)(),(0,a.j4)(N,{key:0,class:"q-my-sm card cardMaxWidth"},{default:(0,a.w5)((()=>[(0,a.Wm)(D,null,{default:(0,a.w5)((()=>{var o;return[e.isVote?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",{key:0,onClick:t[11]||(t[11]=t=>e.savPay=!e.savPay)},[(0,a.Wm)(U,{name:"health_and_safety",size:"sm",color:e.savPay?"blue":""},null,8,["color"]),(0,a._)("span",y,(0,l.zw)(e.t("useSavAct")),1),(0,a.Wm)(I,{modelValue:e.savPay,"onUpdate:modelValue":t[10]||(t[10]=t=>e.savPay=t),size:"md","unchecked-icon":"clear","checked-icon":"check",disable:e.isVote},null,8,["modelValue","disable"])])),(0,a.wy)((0,a._)("div",null,[(0,a.Wm)(Z,{class:(0,l.C_)(["q-mb-md",e.brightStyle?"bg-blue-grey-2":"bg-blue-grey-9"]),"expand-separator":"",label:e.t("isSavActKnown"),"expand-icon":"info"},{default:(0,a.w5)((()=>[(0,a.Wm)(N,null,{default:(0,a.w5)((()=>[(0,a.Wm)(D,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,l.zw)(e.t("recipientKnowsSavAct"))+" ",1),(0,a._)("div",g,(0,l.zw)(e.t("timeLimitDescr")),1),(0,a._)("div",null,[(0,a.Uk)((0,l.zw)(e.t("paymentWpHint"))+" ",1),(0,a._)("a",{href:e.t("wpLink"),target:"_blank"},(0,l.zw)(e.t("wpFileClickName")),9,f)])])),_:1})])),_:1})])),_:1},8,["label","class"]),e.isVote?((0,a.wg)(),(0,a.iD)("div",h,[(0,a._)("span",w,(0,l.zw)(e.t("voteEndTime"))+":  ",1),(0,a.Wm)(H,{class:"text-no-wrap col-sm-auto col-12",modelValue:e.voteEnd,"onUpdate:modelValue":t[12]||(t[12]=t=>e.voteEnd=t),timeOverMsg:e.t("timeIsOver")},null,8,["modelValue","timeOverMsg"]),(0,a._)("div",b,(0,l.zw)(null===(o=e.voteEnd)||void 0===o?void 0:o.toString()),1)])):((0,a.wg)(),(0,a.iD)("div",T,[(0,a._)("span",V,(0,l.zw)(e.isVote?e.t("voteTime"):e.t("timelimit")),1),void 0!==e.limit?((0,a.wg)(),(0,a.iD)("span",k,[P,(0,a.Wm)(H,{modelValue:e.limit,"onUpdate:modelValue":t[13]||(t[13]=t=>e.limit=t),timeOverMsg:e.t("timeIsOver")},null,8,["modelValue","timeOverMsg"])])):(0,a.kq)("",!0),(0,a.Wm)(z,{disable:e.isVote,modelValue:e.limit,"onUpdate:modelValue":t[14]||(t[14]=t=>e.limit=t)},null,8,["disable","modelValue"])])),e.isVote?((0,a.wg)(),(0,a.iD)("div",x,[(0,a._)("span",null,(0,l.zw)(e.t("punishTimeSpanSend"))+":  ",1),(0,a.Wm)(E,{class:"col",showTime:e.decisionTime,minTime:3600,belowMinMsg:e.t("minPunishTime"),valueClasses:"text-green"},null,8,["showTime","belowMinMsg"])])):(0,a.kq)("",!0)],512),[[n.F8,e.savPay]])]})),_:1})])),_:1})):(0,a.kq)("",!0)]),(0,a._)("div",S,[(0,a._)("div",C,[e.inputsValid?((0,a.wg)(),(0,a.j4)($,{key:0,sender:e.sender,recipient:e.to,quantity:e.quantity,memo:e.memo,memoActive:e.extraMemo.active||e.savPay,tokenContract:e.tokenContract},null,8,["sender","recipient","quantity","memo","memoActive","tokenContract"])):(0,a.kq)("",!0)]),(0,a.Wm)(N,{class:"q-mt-sm card cardMaxWidth"},{default:(0,a.w5)((()=>[(0,a.Wm)(D,{class:"row justify-between"},{default:(0,a.w5)((()=>[(0,a.Wm)(j,{class:"col q-pr-md"}),e.walletStyle?((0,a.wg)(),(0,a.j4)(A,{key:0,class:"col-12 col-sm-auto q-mt-md",label:"Send","icon-right":"send",color:"blue",onClick:e.confirm,disable:e.loadingConfirm},null,8,["onClick","disable"])):e.inputsValid?((0,a.wg)(),(0,a.j4)(A,{key:1,class:"col-12 q-mt-sm",size:"sm","no-caps":"",dense:"",label:e.t("alreadyPayed"),onClick:e.alreadyPayed},null,8,["label","onClick"])):(0,a.kq)("",!0)])),_:1})])),_:1})]),(0,a.Wm)(B,{modelValue:e.showSymbol,"onUpdate:modelValue":t[15]||(t[15]=t=>e.showSymbol=t),contract:e.tokenContract,"onUpdate:contract":t[16]||(t[16]=t=>e.tokenContract=t),symbol:e.symbol,"onUpdate:symbol":t[17]||(t[17]=t=>e.symbol=t),connect:e.connect,precision:e.fixed,"onUpdate:precision":t[18]||(t[18]=t=>e.fixed=t)},null,8,["modelValue","contract","symbol","connect","precision"]),(0,a.Wm)(K,{modelValue:e.showVoteDialog,"onUpdate:modelValue":t[19]||(t[19]=t=>e.showVoteDialog=t),selected:e.selVote,"onUpdate:selected":t[20]||(t[20]=t=>e.selVote=t),options:e.voteOptions,title:e.voteTitle},null,8,["modelValue","selected","options","title"])])),_:1})}var _=o(28045),W=o(14028),A=o(14889),D=o(46033),N=o(22759),M=o(72902),O=o(65502),U=o(89889),F=o(6827),I=o(38346),Z=o(5980),H=o(60499),z=o(3390),E=o(28339),$=o(27712),j=o(62659),B=o(94345),K=o(72354),Q=o(7580),G=o(53103),L=o(74544),J=o(39882),R=o.n(J),X=o(86350),Y=o(47983),ee=o(17779),te=o(40270)["Buffer"],oe=function(e,t,o,a){function l(e){return e instanceof o?e:new o((function(t){t(e)}))}return new(o||(o=Promise))((function(o,n){function i(e){try{r(a.next(e))}catch(t){n(t)}}function s(e){try{r(a["throw"](e))}catch(t){n(t)}}function r(e){e.done?o(e.value):l(e.value).then(i,s)}r((a=a.apply(e,t||[])).next())}))};const ae=(0,a.aZ)({name:"page-send",components:{WalletEosio:_["default"],TransferDataView:W["default"],KeyOrNameInput:A["default"],DateTimeInput:D["default"],RemainingTime:N["default"],SymbolDialog:M["default"],VoteDialog:O["default"],TimeView:U["default"]},setup(){var e,t,o,l,n,i;const s=(0,a.FN)(),r=(0,$.QT)({useScope:"global"}).t.bind(this),u=(0,j.r)(),c=(0,z.b)(),d=(0,E.yj)(),m=(0,E.tv)(),v=(0,H.iH)(!1);let p=!1;const y=(0,a.Fl)((()=>c.brightStyle)),g=(0,a.Fl)((()=>u.walletUser)),f=(0,a.Fl)((()=>u.walletUsers)),h=(0,a.Fl)((()=>u.getWalletStyle)),w=(0,H.iH)(!1),b=(0,a.Fl)({set:e=>{if(e){if(!ne())return}else if(ce.value.length>13||me.value.length>13)return void F.Z.create({type:"negative",message:r("keyUseSavPay"),position:"top"});w.value=e},get:()=>w.value}),T=(0,H.iH)(),V=(0,a.Fl)((()=>T.value?T.value.getTime()/1e3:-1)),k=(0,a.Fl)((()=>{if(0==me.value.length)return ee.log("No recipient"),!1;if((ce.value.length>13||me.value.length>13)&&!b.value)return ee.log("SavPay has to be activated on payments from or to a key"),!1;if(ye.value<0)return ee.log("No amount"),!1;if(b.value){if(!ne())return ee.log("SavPay is not available"),!1;if(0==ce.value.length)return ee.log("No sender"),!1;if(!T.value||T.value.getTime()<Date.now())return ee.log("Time limit is already over"),!1}return C&&"number"!=typeof W.value?(ee.log("No vote option selected"),!1):(ee.log("Every input is valid"),!0)})),P=(0,a.Fl)((()=>b.value?u.selectedConnect&&u.selectedConnect.chainParams.savpayContract?u.selectedConnect.chainParams.savpayContract:"":me.value)),x=d.query;ee.log("payment Options",x),void 0!==x.requestId&&c.updateBrowserPayment(x.requestId,!0,!1);let S=void 0!=x.from?x.from:"";0==S.length&&void 0!=g.value&&void 0!=g.value.name?S=g.value.name:S.length>13&&(S.startsWith("EOS")||S.startsWith("PUP"))&&(b.value=!0);let C=!!x.V&&"string"==typeof x.V;const q=(0,H.iH)(!1);let _=[];const W=(0,H.iH)();let A,D,N,M,O,U;if(C&&x.V){const e=R().decode(x.V);let t;if(ee.log("Vote data",e),A=e[0],D=e[1],O=e[2],N=new DataView(e.slice(3,7).reverse().buffer).getUint32(0),A==j.P.PublicVote)try{M=new DataView(e.slice(7,15).reverse().buffer).getBigUint64(0),ee.log("Public vote index",M),t=e.slice(15)}catch(Me){ee.log("Error parsing public vote index",Me),C=!1}else ee.log("Private vote"),t=e.slice(7);t&&(ee.log("optionsArray",t),_=(0,X.OneStringToStringArray)((new TextDecoder).decode(t)),U=O+1==_.length?_.pop():""),O!=_.length?(C=!1,ee.log(`Wrong amount voteId ${D} choisesAmount`,O,"!=",_.length)):q.value=!0,A!=j.P.PrivateVote&&A!=j.P.PublicVote&&ee.log("Unknown vote type:",A),ee.log("Vote parameters",{isVote:C,voteType:A,voteId:D,choisesAmount:O,voteEndTime:N,publicVoteIndex:M,voteOptions:_,voteTitle:U})}const J=(0,a.Fl)((()=>T.value?new Date(1e3*N):void 0)),ae=(0,a.Fl)((()=>T.value&&J.value?(T.value.getTime()-J.value.getTime())/1e3:void 0)),le=(0,a.Fl)((()=>b.value||void 0==x.to||S.length>0));function ne(){return!1!==ie()||(F.Z.create({type:"negative",message:r("errSavPayNotAvailable"),position:"top"}),w.value=!1,!1)}function ie(){if(u.selectedConnect&&u.selectedConnect.chainParams)return!!u.selectedConnect.chainParams.savpayContract}const se=(0,a.Fl)((()=>{var e;return null===(e=u.selectedConnect)||void 0===e?void 0:e.chainParams}));(0,Z.iniSelectedChain)(x.chain,void 0==se.value?qe:void 0);const re=(0,H.iH)(void 0!=x.from?"wallet":"third"),ue=(0,H.iH)(S),ce=(0,a.Fl)({get:()=>ue.value,set:e=>{e.length>13&&(b.value=!0),ue.value=e}}),de=(0,H.iH)(void 0!=x.to?x.to:""),me=(0,a.Fl)({get:()=>de.value,set:e=>{e.length>13&&(b.value=!0),de.value=e}}),ve=(0,H.iH)(!1);me.value.length>13&&(me.value.startsWith("EOS")||me.value.startsWith("PUP"))&&(b.value=!0);const pe=(0,H.iH)((null===(t=null===(e=u.selectedConnect)||void 0===e?void 0:e.chainParams.systemToken)||void 0===t?void 0:t.contract)?u.selectedConnect.chainParams.systemToken.contract:"eosio.token"),ye=(0,H.iH)(0),ge=(0,H.iH)((null===(l=null===(o=u.selectedConnect)||void 0===o?void 0:o.chainParams.systemToken)||void 0===l?void 0:l.symbol)?u.selectedConnect.chainParams.systemToken.symbol:"EOS"),fe=(0,H.iH)((null===(i=null===(n=u.selectedConnect)||void 0===n?void 0:n.chainParams.systemToken)||void 0===i?void 0:i.precision)?u.selectedConnect.chainParams.systemToken.precision:4),he=(0,a.Fl)({set:e=>{if(0==e.trim().length)return;let t=e.indexOf(".")+1,o=e.indexOf(" ",t);if(-1==o)for(let l=t;l<e.length;++l)if(-1=="0123456789".indexOf(e[l])){e=e.slice(0,l)+" "+e.slice(l),o=l;break}let a=o-t;fe.value=t>-1&&a>=0?a:0,-1==o||o>=e.length||(ye.value=parseFloat(e.substring(0,o)),ge.value=e.substring(o+1))},get:()=>{const e=parseFloat(ye.value.toString());if(e>=0&&!isNaN(e)){const t=e.toFixed(fe.value);return`${t} ${ge.value}`}return""}});if("string"==typeof x.pay){const e=x.pay.split(" ");e.length>3||e.length<2?ee.log('Got invalid asset by query parameter "pay"'):(3==e.length&&((0,B.isNameValid)(e[3])?ee.log('Got invalid token contract by query parameter "pay"'):pe.value=e[2]),he.value=`${e[0]} ${e[1]}`)}let we="";void 0!=x.M?we=(new TextDecoder).decode(R().decode(x.M)).toString():void 0!=x.MEMO?we=te.from(x.MEMO,"base64").toString():void 0!=x.m?we=x.m:void 0!=x.memo&&(we=x.memo);const be=(0,H.iH)({active:""!=we,value:we});function Te(){if(T.value){let e;return e=be.value.active&&be.value.value.length>0?`;${be.value.value}`:C&&"number"==typeof W.value?":"+(0,X.createVoteMemo)(D,_.length,W.value,N,M,be.value.value.length>0?(new TextEncoder).encode(be.value.value):void 0):"",`${ce.value}@${me.value}!${(0,Q.base58Time)(V.value)}${e}`}return""}const Ve=(0,a.Fl)((()=>b.value?Te():be.value.active?be.value.value:"")),ke=(0,a.Fl)((()=>u.selectedConnect));if(void 0!=x.t||void 0!=x.dt||void 0!=x.T||void 0!=x.DT){let e;void 0!=x.t||void 0!=x.dt?e=void 0!=x.t?x.t:x.dt:(e=void 0!=x.T?x.T:x.DT,e=(0,Q.base58TimeToNumber)(e));let t=1e3*("number"==typeof e?e:Number.parseInt(e));isNaN(t)||(void 0==x.t&&void 0==x.T&&(t=Date.now()+t),T.value=new Date(t),b.value=!0)}function Pe(){var e,t,o;return oe(this,void 0,void 0,(function*(){if(!0===ve.value)return;ve.value=!0,null===(e=null===s||void 0===s?void 0:s.proxy)||void 0===e||e.$forceUpdate();const a=u.selectedConnect;if(!a)return void(ve.value=!1);if(b.value&&!ne())return void(ve.value=!1);const l=b.value;if(0==ye.value)return ee.log("Amount can not be 0"),F.Z.create({type:"negative",message:r("errNoZeroAmount"),position:"top"}),void(ve.value=!1);ce.value=ce.value.trim(),me.value=me.value.trim();const n=null===(t=(0,B.StringToAsset)(he.value))||void 0===t?void 0:t.amount;if("undefined"==typeof n)return void(ve.value=!1);const i={sender:ce.value,recipient:me.value,quantity:he.value,amount:n,tokenContract:pe.value,time:T.value?V.value:-1,memo:Ve.value};if(void 0==g.value)return F.Z.create({message:r("errSelectWallet"),position:"top"}),_e(),void(ve.value=!1);if((yield g.value.getChainId())!=(null===(o=se.value)||void 0===o?void 0:o.chainId))return F.Z.create({message:r("errWrongWalletChain"),position:"top"}),void(ve.value=!1);if(!k.value)return F.Z.create({type:"negative",message:r("notAllValid"),position:"top"}),void(ve.value=!1);if(!1===(yield De()))return void(ve.value=!1);let c=!1;if(void 0!=g.value.name&&g.value.name.length>0){if(!l&&i.sender&&(0,B.isNameValid)(i.sender)&&g.value.name!=i.sender)return F.Z.create({message:r("errWrongWalletUser"),position:"top"}),void(ve.value=!1);let e=i.sender==g.value.name?Ve.value.substring(Ve.value.indexOf("@")):Ve.value;const t=F.Z.create({type:"ongoing",message:r("signTrx"),position:"top"}),o={isError:!1,notify:t};let n=yield Z.Connect.sendCustomAsset(o,g.value,{from:g.value.name,to:P.value,quantity:i.quantity,memo:e},i.tokenContract,!1,g.value.permission);if((0,K.trxSigningErrorHandling)(o,n,r)&&a){const e=l?yield xe(a,i.recipient):"-1";if(ee.log("Got NextId",e),yield(0,K.broadcastTrx)(o,a,n,r)){let t;if(l){let l=!1;if(i.memo.length>0){const e=i.memo.indexOf(";"),t=i.memo.indexOf(":");let o;-1==t||-1!=e&&e<t?o=e:(o=t,l=!0),i.memo=o>0?i.memo.substring(o+1):""}const n=Date.now();ee.log("loadSavPayTrx with NextId",e);const s=yield Ce(a,e,i,l);s?(ee.log(r("savPayFound")),Date.now()-n<5e3&&o.notify?o.notify({type:"positive",message:r("savPayFound")}):F.Z.create({type:"positive",message:r("savPayFound"),position:"top"}),t=String(s.id),c=!0):(ee.log(r("savPayTrxNotFound")),F.Z.create({type:"negative",message:r("savPayTrxNotFound"),position:"top"}))}else c=!0;ve.value=!1,!0===c?(p={to:i.recipient,from:i.sender.length>0?i.sender:void 0,t:-1==i.time?void 0:i.time,memo:i.memo,pay:`${i.quantity} ${i.tokenContract}`,chain:a.chainParams.shortName?a.chainParams.shortName:a.chainParams.chainId,index:t},qe()):(p=!1,qe())}}}else F.Z.create({message:r("errSetUserOfWallet"),position:"top"});ve.value=!1}))}function xe(e,t){return oe(this,void 0,void 0,(function*(){let o,a;if((0,B.isNameValid)(t))o=String((0,Q.nameToUint64)(t)),a="name";else{const e=G.PublicKey.fromString(t);o=String((0,Q.splitPubKeyToScopeAndTableVec)(e).scope),a="key"}ee.log("Get get NextId with",{code:e.chainParams.savpayContract,table:"data",scope:a,lower_bound:o,upper_bound:o});const l=yield e.get_table_rows({code:e.chainParams.savpayContract,table:"data",scope:a,lower_bound:o,upper_bound:o});if(ee.log("result get NextId",l),l&&"rows"in l&&l.rows.length>0){const e=l.rows[0];return String(e.nextId)}return ee.log("Use String 0 for Nextid",String(0)),String(0)}))}function Se(e,t){if(typeof e!=typeof t||e.length!=t.length)return!1;if("string"==typeof e&&"string"==typeof t)return e.valueOf()===t.valueOf();for(let o=0;o<e.length;o++)if(e[o]!=t[o])return!1;return!0}function Ce(e,t,o,a=!1){var l;return oe(this,void 0,void 0,(function*(){let n=t;ee.log("loadSavPayTrx with",{beginId:t,should:o,isVote:a});let i,s,r=0;if((0,B.isNameValid)(o.sender))i=(0,Q.nameToFromHex)(o.sender);else{const e=G.PublicKey.fromString(o.sender);o.sender=e.toString(),i=(0,Q.hexWithTypeOfPubKey)(e)}if(a)try{s=(0,X.Uint8ArrayToString)(R().decode(o.memo).slice(1))}catch(Me){ee.log("No base58 memo on vote"),s=o.memo}else{const e=(0,X.StringToUint8Array)(o.memo,"utf-8");if(void 0===e)return ee.log("Cannot convert Memo to Uint8Array"),!1;s=(0,X.Uint8ArrayToString)(e)}const c=null===(l=(0,B.StringToAsset)(o.quantity))||void 0===l?void 0:l.symbol;if(void 0==c)return ee.log("No symbol defined"),!1;try{if((0,B.isNameValid)(o.recipient))while(1){const t=yield e.get_table_rows({code:e.chainParams.savpayContract,table:"pay2name",scope:o.recipient,lower_bound:n,json:!1,limit:200});if(t&&"rows"in t&&t.rows.length>0){for(const l of t.rows){const t=(0,X.rawSavActPaymentToObject)(l,X.SavActPayTableType.pay2name);if(void 0!==t&&(t.from==i&&t.orisent==o.amount&&t.time==o.time&&Se(t.memo,s)&&t.fund.symbol.precision==c.precision&&t.fund.symbol.name==c.name)){const a=t.fund.symbol,l={sender:o.sender,recipient:o.recipient,id:Number(t.id),fund:(0,B.AssetToString)(t.fund),orifund:(0,B.AssetToString)({amount:t.orisent,symbol:a}),memo:s,ramBy:t.ramBy,type:t.type,time:t.time,contract:t.contract,lastUpdate:Date.now(),removed:!1,chain:e.chainParams.shortName?e.chainParams.shortName:e.chainParams.chainId};return u.updateHistoryInTrx(o.recipient,l),u.updateHistoryOutTrx(o.sender,l),l}}const a=(0,X.rawSavActPaymentToObject)(t.rows[t.rows.length-1],X.SavActPayTableType.pay2name);a&&(n=String(a.id++))}if(!(r<21))return!1;yield(0,L.sleep)(r<4?500:r<10?1e3:2e3),r++}else{const t=G.PublicKey.fromString(o.recipient),a=(0,Q.splitPubKeyToScopeAndTableVec)(t);o.recipient=t.toString();while(1){const t=yield e.get_table_rows({code:e.chainParams.savpayContract,table:"pay2key",scope:String(a.scope),lower_bound:n,json:!1,limit:200});if(t&&"rows"in t&&t.rows.length>0){for(const n of t.rows){const t=(0,X.rawSavActPaymentToObject)(n,X.SavActPayTableType.pay2key);if(void 0!==t&&(t.from==i&&t.to==a.tableVec&&t.orisent==o.amount&&t.time==o.time&&Se(t.memo,s)&&t.fund.symbol.precision==c.precision&&t.fund.symbol.name==c.name)){const a=t.fund.symbol,l={sender:o.sender,recipient:o.recipient,id:Number(t.id),fund:(0,B.AssetToString)(t.fund),orifund:(0,B.AssetToString)({amount:t.orisent,symbol:a}),memo:s,ramBy:t.ramBy,type:t.type,time:t.time,contract:t.contract,lastUpdate:Date.now(),removed:!1,chain:e.chainParams.shortName?e.chainParams.shortName:e.chainParams.chainId};return u.updateHistoryInTrx(o.recipient,l),u.updateHistoryOutTrx(o.sender,l),l}}const l=(0,X.rawSavActPaymentToObject)(t.rows[t.rows.length-1],X.SavActPayTableType.pay2key);l&&(n=String(l.id++))}if(!(r<21))return!1;yield(0,L.sleep)(r<4?500:r<10?1e3:2e3),r++}}}catch(Me){return ee.log("Error on loadSavPayTrx",Me),!1}}))}function qe(){ee.log("Go back"),history.length>2?m.back():m.push({name:"transfer"})}function _e(){var e;if(void 0==se.value)return void F.Z.create({type:"negative",message:r("noChainDefined"),position:"top"});const t={payment:{to:me.value,from:ce.value,amount:ye.value,symbol:ge.value,memo:we},chainId:null===(e=se.value)||void 0===e?void 0:e.chainId,show:!0};u.setWalletDialog(t)}const We=(0,H.iH)(C||b.value||"string"!=typeof x.to||"t"in x||"T"in x||"dt"in x||"DT"in x),Ae=(0,H.iH)(!1);function De(){return oe(this,void 0,void 0,(function*(){if(C&&void 0!==M){if(Ae.value)return!0;try{const e=me.value.length<=13?(0,Q.nameToFromHex)(me.value):(0,Q.hexWithTypeOfPubKey)(G.PublicKey.fromString(me.value)),t=yield ke.value.get_table_rows({code:ke.value.chainParams.savpayContract,scope:ke.value.chainParams.savpayContract,table:"votes",lower_bound:M.toString(),upper_bound:M.toString(),limit:1,reverse:!0,show_payer:!1});if(t&&"rows"in t&&Array.isArray(t.rows)){if(t.rows.length>0){const o=t.rows[0];if("vid"in o&&"ramBy"in o&&"vt"in o&&"t"in o&&"rtoken"in o&&"rtcontract"in o)if(o.ramBy===me.value&&""===o.holder||o.holder===e)if(o.vid===D&&o.vt===Math.floor(N)&&o.t===V.value&&o.rtcontract===pe.value&&o.options.length===O){const e=(0,B.StringToAsset)(o.rtoken);if((null===e||void 0===e?void 0:e.symbol.precision)===fe.value&&(null===e||void 0===e?void 0:e.symbol.name)===ge.value)return Ae.value=!0,!0;ee.log("Different token symbol")}else ee.log("Different public vote data");else ee.log("Different holder")}Ae.value=!1,F.Z.create({type:"negative",message:r("invalidPublicVoteEntry"),position:"top"})}return!1}catch(Me){ee.log(Me)}return Ae.value=!1,F.Z.create({type:"negative",message:r("errCheckPublicVoteEntry"),position:"top"}),!1}}))}function Ne(){const e=u.selectedConnect;if(!e)return void F.Z.create({type:"negative",message:r("noChainDefined"),position:"top"});const t={to:me.value,from:ce.value.length>0?ce.value:void 0,t:b.value&&T.value?V.value:void 0,memo:Ve.value,pay:`${he.value} ${pe.value}`,chain:e.chainParams.shortName?e.chainParams.shortName:e.chainParams.chainId};p=t,qe()}return(0,a.Jd)((()=>{void 0!==x.requestId&&c.updateBrowserPayment(x.requestId,!1,p)})),{t:r,brightStyle:y,selectMethod:re,chain:se,connect:ke,sender:ce,recipient:me,to:P,amount:ye,fixed:fe,symbol:ge,tokenContract:pe,extraMemo:be,memo:Ve,savPay:b,limit:T,confirm:Pe,loadingConfirm:ve,walletStyle:h,quantity:he,walletLogout:u.walletLogout,showWalletDialog:u.showWalletDialog,walletUsers:f,walletUser:g,selectWallet:_e,inputsValid:k,showSymbol:v,showSender:le,isVote:C,voteOptions:_,voteTitle:U,selVote:W,showVoteDialog:q,shrinkText:X.shrinkText,Screen:I.Z,decisionTime:ae,voteEnd:J,VoteColor:Y.VoteColor,savPayAvailable:We,alreadyPayed:Ne}}});var le=o(11639),ne=o(69885),ie=o(44458),se=o(63190),re=o(68879),ue=o(57691),ce=o(13119),de=o(22857),me=o(23175),ve=o(50651),pe=o(69984),ye=o.n(pe);const ge=(0,le.Z)(ae,[["render",q]]),fe=ge;ye()(ae,"components",{QPage:ne.Z,QCard:ie.Z,QCardSection:se.Z,QBtn:re.Z,QChip:ue.Z,QInput:ce.Z,QIcon:de.Z,QToggle:me.Z,QExpansionItem:ve.Z})}}]);