"use strict";(globalThis["webpackChunksavactapp"]=globalThis["webpackChunksavactapp"]||[]).push([[874],{96036:(e,l,o)=>{o.r(l),o.d(l,{default:()=>Ce});var t=o(61758),a=o(58790),i=o(29104);const n={class:"q-px-md q-pt-sm q-pb-none"},s={class:"col-auto"},u={class:"q-pr-xs q-pb-sm"},c={class:"q-pr-xs"},d={class:"col-grow"},r={class:"q-pr-xs"},m={class:"col-12 text-h6 text-left"},v={class:"col-12 text-left"},p={key:2,class:"q-mt-md text-red"},b={key:3,class:"row q-mt-sm reverse"},y={key:4},g={class:"row col-10 justify-between"},k={class:"text-no-wrap"},f={key:0},h={class:"full-width q-mt-md"},C={key:1,class:"col-12 q-mx-sm"},w={class:"text-no-wrap"},V={key:0},T={key:4,class:"text-red"},x={key:5,class:"full-width q-mt-md"},q={class:"full-width row q-pr-none justify-between"},E={class:"col-12 col-sm-grow q-mb-sm"},P={key:0,class:"row items-center no-wrap"},_={key:0,class:"row items-center no-wrap"},Q={key:0,class:"q-mt-md col-12"},W={class:"q-mt-sm full-width text-center",style:{"white-space":"nowrap"}},L={key:0,class:"full-width justify-center"},A={class:"col-12 justify-center row",ref:"qrCodeDiv"};function F(e,l,o,F,M,R){const S=(0,t.g2)("q-btn"),X=(0,t.g2)("q-card-section"),K=(0,t.g2)("q-card"),U=(0,t.g2)("q-input"),O=(0,t.g2)("vote-option-list"),I=(0,t.g2)("q-toggle"),D=(0,t.g2)("key-or-name-input"),N=(0,t.g2)("q-icon"),$=(0,t.g2)("q-btn-toggle"),B=(0,t.g2)("date-time-input"),z=(0,t.g2)("remaining-time"),j=(0,t.g2)("time-span-input"),G=(0,t.g2)("time-view"),H=(0,t.g2)("q-spinner"),J=(0,t.g2)("social-input-list"),Y=(0,t.g2)("q-scroll-area"),Z=(0,t.g2)("qrcode-vue"),ee=(0,t.g2)("symbol-dialog"),le=(0,t.g2)("q-page");return(0,t.uX)(),(0,t.Wv)(le,null,{default:(0,t.k6)((()=>[(0,t.Lk)("div",n,[(0,t.Lk)("div",null,[(0,t.bF)(K,{class:"col q-my-sm card cardMaxWidth"},{default:(0,t.k6)((()=>[(0,t.bF)(X,{class:"row items-center justify-left"},{default:(0,t.k6)((()=>{var l;return[(0,t.Lk)("div",s,(0,a.v_)(e.t(e.isVotePage?"voteOnThe":"payOnThe")),1),(0,t.bF)(S,{disable:e.blockElements,class:"col-auto q-ml-sm",dense:"",label:`${null===(l=e.chain)||void 0===l?void 0:l.name} ${e.t("network")}`,onClick:e.showWalletDialog,loading:e.loadPushVote},null,8,["disable","label","onClick","loading"])]})),_:1})])),_:1}),e.isVotePage?((0,t.uX)(),(0,t.Wv)(K,{key:0,class:"col q-my-sm card cardMaxWidth"},{default:(0,t.k6)((()=>[(0,t.bF)(X,{class:"items-center justify-left"},{default:(0,t.k6)((()=>[(0,t.bF)(U,{class:"q-mb-md",disable:e.blockElements,dense:"",modelValue:e.voteTitle,"onUpdate:modelValue":l[0]||(l[0]=l=>e.voteTitle=l),outlined:"",label:e.t("voteTitleOptional"),maxlength:"80"},null,8,["disable","modelValue","label"]),(0,t.Lk)("div",u,(0,a.v_)(e.t("voteOptions")),1),(0,t.bF)(O,{disable:e.blockElements,modelValue:e.voteOptions,"onUpdate:modelValue":l[1]||(l[1]=l=>e.voteOptions=l)},null,8,["disable","modelValue"])])),_:1})])),_:1})):(0,t.Q3)("",!0),(0,t.bF)(K,{class:"q-my-sm card cardMaxWidth"},{default:(0,t.k6)((()=>[(0,t.bF)(X,null,{default:(0,t.k6)((()=>[e.isVotePage?(0,t.Q3)("",!0):((0,t.uX)(),(0,t.CE)("div",{key:0,onClick:l[3]||(l[3]=l=>e.defineCustomer=!e.defineCustomer)},[(0,t.Lk)("span",c,(0,a.v_)(e.t("bindPayCodeToCustomer")),1),(0,t.bF)(I,{modelValue:e.defineCustomer,"onUpdate:modelValue":l[2]||(l[2]=l=>e.defineCustomer=l),size:"md","unchecked-icon":"clear","checked-icon":"check"},null,8,["modelValue"])])),e.defineCustomer?((0,t.uX)(),(0,t.Wv)(D,{key:1,disable:e.blockElements,modelValue:e.customer,"onUpdate:modelValue":l[4]||(l[4]=l=>e.customer=l),outlined:"",label:e.t("customer"),class:"q-mb-md"},null,8,["disable","modelValue","label"])):(0,t.Q3)("",!0),(0,t.bF)(D,{disable:e.blockElements,class:"q-mt-sm",modelValue:e.recipient,"onUpdate:modelValue":l[5]||(l[5]=l=>e.recipient=l),outlined:"",label:e.t("recipient"),walletOption:"",pubkeyOption:""},null,8,["disable","modelValue","label"])])),_:1})])),_:1}),(0,t.bF)(K,{class:"q-my-sm card cardMaxWidth"},{default:(0,t.k6)((()=>[(0,t.bF)(X,null,{default:(0,t.k6)((()=>[e.isVotePage?((0,t.uX)(),(0,t.CE)("div",{key:0,onClick:l[7]||(l[7]=l=>{e.blockElements||(e.recfund=!e.recfund)}),class:"q-mt-none q-mb-none col-grow row reverse"},[e.recipient.length<=13?((0,t.uX)(),(0,t.Wv)(S,{key:0,class:(0,a.C4)(["col-auto q-mb-sm",e.isVotePage?"":"q-mb-sm"]),size:"sm",outline:"",label:e.t("provideRAM"),to:{name:"SavPay-RAM"}},null,8,["class","label"])):(0,t.Q3)("",!0),(0,t.Lk)("div",d,[(0,t.Lk)("span",r,(0,a.v_)(e.t("recommendedAmount")),1),(0,t.bF)(I,{disable:e.blockElements,modelValue:e.recfund,"onUpdate:modelValue":l[6]||(l[6]=l=>e.recfund=l),size:"md","unchecked-icon":"clear","checked-icon":"check"},null,8,["disable","modelValue"])])])):(0,t.Q3)("",!0),e.recfund?((0,t.uX)(),(0,t.Wv)(U,{key:1,disable:e.blockElements,outlined:"","bottom-slots":"",modelValue:e.fund,"onUpdate:modelValue":l[9]||(l[9]=l=>e.fund=l),type:"number",label:e.t("amount"),class:"full-width","hide-bottom-space":""},{append:(0,t.k6)((()=>[(0,t.bF)(S,{size:"sm",class:"row q-px-sm q-py-none q-ma-none",onClick:l[8]||(l[8]=l=>e.showSymbol=!0)},{default:(0,t.k6)((()=>[(0,t.Lk)("div",m,(0,a.v_)(e.symbol),1),(0,t.Lk)("div",v,(0,a.v_)(e.tokenContract),1)])),_:1})])),_:1},8,["disable","modelValue","label"])):(0,t.Q3)("",!0),!e.isSystemToken&&e.recipient.length>13?((0,t.uX)(),(0,t.CE)("div",p,(0,a.v_)(`${e.t("onlySystemToPubKey_a")} ${e.systemTokenSymbol} ${e.t("onlySystemToPubKey_b")}!`),1)):(0,t.Q3)("",!0),e.isVotePage?(0,t.Q3)("",!0):((0,t.uX)(),(0,t.CE)("div",b,[e.recipient.length<=13?((0,t.uX)(),(0,t.Wv)(S,{key:0,class:(0,a.C4)(["col-auto",e.isVotePage?"":"q-mb-sm"]),size:"sm",outline:"",label:e.t("provideRAM"),to:{name:"SavPay-RAM"}},null,8,["class","label"])):(0,t.Q3)("",!0),(0,t.Lk)("div",{onClick:l[11]||(l[11]=l=>e.extraMemo.active=!e.extraMemo.active),class:"q-mb-none col-grow"},[l[29]||(l[29]=(0,t.Lk)("span",{class:"q-pr-xs"},"Memo",-1)),(0,t.bF)(I,{disable:e.blockElements,modelValue:e.extraMemo.active,"onUpdate:modelValue":l[10]||(l[10]=l=>e.extraMemo.active=l),size:"md","unchecked-icon":"clear","checked-icon":"check"},null,8,["disable","modelValue"])])])),e.isVotePage?(0,t.Q3)("",!0):((0,t.uX)(),(0,t.CE)("div",y,[(0,t.bo)((0,t.bF)(U,{disable:e.blockElements,outlined:"","bottom-slots":"",modelValue:e.extraMemo.value,"onUpdate:modelValue":l[13]||(l[13]=l=>e.extraMemo.value=l),label:"Memo",maxlength:"255",class:"full-width q-mt-none","hide-bottom-space":""},{before:(0,t.k6)((()=>[(0,t.bF)(N,{name:"notes"})])),append:(0,t.k6)((()=>[""!==e.extraMemo.value?((0,t.uX)(),(0,t.Wv)(N,{key:0,name:"close",onClick:l[12]||(l[12]=l=>e.extraMemo.value=""),class:"cursor-pointer"})):(0,t.Q3)("",!0)])),_:1},8,["disable","modelValue"]),[[i.aG,e.extraMemo.active]])]))])),_:1})])),_:1}),(0,t.bF)(K,{class:"q-my-sm card cardMaxWidth"},{default:(0,t.k6)((()=>[(0,t.bF)(X,null,{default:(0,t.k6)((()=>[(0,t.Lk)("div",g,[(0,t.bo)((0,t.bF)($,{modelValue:e.fixTimeType,"onUpdate:modelValue":l[14]||(l[14]=l=>e.fixTimeType=l),class:"q-mt-none q-mb-sm","no-caps":"",rounded:"",unelevated:"","toggle-color":void 0===e.fixTimeType?"red":"blue","text-color":"blue",style:{border:"1px solid #027be3"},options:[{label:e.t("optionNoTimeLimit"),value:void 0},{label:e.t("absoluteTime"),value:!0},{label:e.t("relativeTime"),value:!1}]},null,8,["modelValue","toggle-color","options"]),[[i.aG,!e.isVotePage]]),e.isVotePage?((0,t.uX)(),(0,t.CE)(t.FK,{key:0},[(0,t.Lk)("div",null,(0,a.v_)(e.t("voteEndTime")),1),(0,t.bF)(B,{disable:e.blockElements,class:"q-mb-sm",modelValue:e.voteEnd,"onUpdate:modelValue":l[15]||(l[15]=l=>e.voteEnd=l)},null,8,["disable","modelValue"]),(0,t.Lk)("div",null,[(0,t.Lk)("span",k,(0,a.v_)(e.t("timelimit")),1),void 0!==e.voteEnd?((0,t.uX)(),(0,t.CE)("span",f,[l[30]||(l[30]=(0,t.Lk)("span",null,":  ",-1)),(0,t.bF)(z,{modelValue:e.voteEnd,"onUpdate:modelValue":l[16]||(l[16]=l=>e.voteEnd=l),timeOverMsg:e.t("timeIsOver")},null,8,["modelValue","timeOverMsg"])])):(0,t.Q3)("",!0)]),(0,t.Lk)("div",h,(0,a.v_)(e.t("voteTime")),1)],64)):(0,t.Q3)("",!0),void 0===e.fixTimeType?((0,t.uX)(),(0,t.CE)("div",C,(0,a.v_)(e.t("noFraudProtect")),1)):!0===e.fixTimeType?((0,t.uX)(),(0,t.CE)(t.FK,{key:2},[(0,t.bF)(B,{disable:e.blockElements,class:"q-mb-sm",modelValue:e.absolutLimit,"onUpdate:modelValue":l[17]||(l[17]=l=>e.absolutLimit=l)},null,8,["disable","modelValue"]),(0,t.Lk)("div",null,[(0,t.Lk)("span",w,(0,a.v_)(e.t("timelimit")),1),void 0!==e.absolutLimit?((0,t.uX)(),(0,t.CE)("span",V,[l[31]||(l[31]=(0,t.Lk)("span",null,":  ",-1)),(0,t.bF)(z,{modelValue:e.absolutLimit,"onUpdate:modelValue":l[18]||(l[18]=l=>e.absolutLimit=l),timeOverMsg:e.t("timeIsOver")},null,8,["modelValue","timeOverMsg"])])):(0,t.Q3)("",!0)])],64)):!1===e.fixTimeType?((0,t.uX)(),(0,t.Wv)(j,{key:3,modelValue:e.relativeLimit,"onUpdate:modelValue":l[19]||(l[19]=l=>e.relativeLimit=l)},null,8,["modelValue"])):(0,t.Q3)("",!0),e.timeIsTooHigh?((0,t.uX)(),(0,t.CE)("div",T,(0,a.v_)(e.t("timeToHigh")),1)):(0,t.Q3)("",!0),e.isVotePage?((0,t.uX)(),(0,t.CE)("div",x,[(0,t.Lk)("span",null,(0,a.v_)(e.t("punishTimeSpan"))+":  ",1),(0,t.bF)(G,{class:"col",showTime:e.decisionTime,minTime:60,belowMinMsg:e.t("minPunishTime"),valueClasses:"text-green"},null,8,["showTime","belowMinMsg"])])):(0,t.Q3)("",!0)])])),_:1})])),_:1})]),(0,t.bF)(K,{class:"q-mb-md card cardMaxWidth"},{default:(0,t.k6)((()=>[(0,t.bF)(X,null,{default:(0,t.k6)((()=>[(0,t.Lk)("div",q,[(0,t.Lk)("div",E,[e.isVotePage?((0,t.uX)(),(0,t.Wv)($,{key:0,disable:!e.paymentcode||!0===e.publicConfirmed,modelValue:e.voteType,"onUpdate:modelValue":l[20]||(l[20]=l=>e.voteType=l),push:"",glossy:"","toggle-color":"blue",options:!0!==e.publicConfirmed?[{label:e.t("publicVote"),value:"public",slot:"public"},{label:e.t("privateVote"),value:"private",slot:"private"}]:[{label:e.t("publicVote"),value:"public",slot:"public"}],onClick:e.voteTypeClick,dense:e.$q.screen.width<320},{public:(0,t.k6)((()=>[e.$q.screen.gt.xs?((0,t.uX)(),(0,t.CE)("div",P,[e.loadPushVote?((0,t.uX)(),(0,t.Wv)(H,{key:0,color:"primary"})):((0,t.uX)(),(0,t.Wv)(N,{key:1,right:"",name:"cloud_upload"}))])):(0,t.Q3)("",!0)])),private:(0,t.k6)((()=>[e.$q.screen.gt.xs?((0,t.uX)(),(0,t.CE)("div",_,[(0,t.bF)(N,{right:"",name:"supervised_user_circle"})])):(0,t.Q3)("",!0)])),_:1},8,["disable","modelValue","options","onClick","dense"])):(0,t.Q3)("",!0)]),e.isVotePage&&void 0!==e.publicConfirmed&&!0!==e.publicConfirmed?((0,t.uX)(),(0,t.CE)("div",Q,[(0,t.bF)(J,{modelValue:e.socialList,"onUpdate:modelValue":l[21]||(l[21]=l=>e.socialList=l),disable:e.blockElements},null,8,["modelValue","disable"]),(0,t.bF)(S,{disable:e.blockElements,class:"full-width q-mt-lg",label:e.t("publishVote"),"icon-right":"send",onClick:e.makeVotePublic,color:"blue"},null,8,["disable","label","onClick"])])):(0,t.Q3)("",!0),!1!==e.publicConfirmed?((0,t.uX)(),(0,t.Wv)(S,{key:1,class:"col-1",disable:0==e.paymentcode.length,icon:"content_copy",onClick:l[22]||(l[22]=l=>e.copy(e.paymentcode))},null,8,["disable"])):(0,t.Q3)("",!0),!1!==e.publicConfirmed?((0,t.uX)(),(0,t.Wv)(S,{key:2,class:"col-1",disable:0==e.paymentcode.length,icon:"qr_code",onClick:l[23]||(l[23]=l=>e.copyQrImage(e.qrCodeDiv,e.t))},null,8,["disable"])):(0,t.Q3)("",!0),!1!==e.publicConfirmed?((0,t.uX)(),(0,t.Wv)(S,{key:3,class:"col-1",disable:0==e.paymentcode.length,icon:"download",onClick:l[24]||(l[24]=l=>e.downloadQrCode(e.qrCodeDiv))},null,8,["disable"])):(0,t.Q3)("",!0),!1!==e.publicConfirmed?((0,t.uX)(),(0,t.Wv)(Y,{key:4,class:"col-12",visible:!0,style:{height:"35px"}},{default:(0,t.k6)((()=>[(0,t.Lk)("div",W,(0,a.v_)(e.paymentcode),1)])),_:1})):(0,t.Q3)("",!0)]),e.paymentcode&&!1!==e.publicConfirmed?((0,t.uX)(),(0,t.CE)("div",L,[(0,t.Lk)("div",A,[(0,t.bF)(Z,{value:e.paymentcode,size:300,level:"L",margin:1,onClick:e.copyQrImage},null,8,["value","onClick"])],512)])):(0,t.Q3)("",!0)])),_:1})])),_:1}),(0,t.bo)((0,t.bF)(K,{class:"card q-pa-md q-mb-md cardMaxWidth"},{default:(0,t.k6)((()=>[(0,t.bF)(X,null,{default:(0,t.k6)((()=>[(0,t.bF)(S,{class:"full-width",color:"red",label:e.t("resetVote"),"icon-right":"restart_alt",onClick:e.voteReset},null,8,["label","onClick"])])),_:1})])),_:1},512),[[i.aG,!0===e.publicConfirmed]])]),(0,t.bF)(ee,{modelValue:e.showSymbol,"onUpdate:modelValue":l[25]||(l[25]=l=>e.showSymbol=l),contract:e.tokenContract,"onUpdate:contract":l[26]||(l[26]=l=>e.tokenContract=l),symbol:e.symbol,"onUpdate:symbol":l[27]||(l[27]=l=>e.symbol=l),connect:e.connect,precision:e.precision,"onUpdate:precision":l[28]||(l[28]=l=>e.precision=l)},null,8,["modelValue","contract","symbol","connect","precision"])])),_:1})}var M=o(98919),R=o(63555),S=o(53928),X=o(77489),K=o(64993),U=o(85119),O=o(57793),I=o(34867),D=o(32324),N=o(78652),$=o(20989),B=o(87881),z=o(70308),j=o(39507),G=o(38734),H=o(57387),J=o(65999),Y=o(60455),Z=o(32334),ee=o(72092),le=o(72561),oe=o(97687),te=o(69487),ae=o(43271),ie=function(e,l,o,t){function a(e){return e instanceof o?e:new o((function(l){l(e)}))}return new(o||(o=Promise))((function(o,i){function n(e){try{u(t.next(e))}catch(l){i(l)}}function s(e){try{u(t["throw"](e))}catch(l){i(l)}}function u(e){e.done?o(e.value):a(e.value).then(n,s)}u((t=t.apply(e,l||[])).next())}))};const ne=(0,t.pM)({name:"page-receive",components:{KeyOrNameInput:M["default"],DateTimeInput:S["default"],RemainingTime:X["default"],TimeView:K["default"],SymbolDialog:U["default"],TimeSpanInput:R["default"],QrcodeVue:I.A,VoteOptionList:O["default"],SocialInputList:D["default"]},setup(){var e,l;const o=(0,H.s9)({useScope:"global"}).t.bind(this),a=(0,j.V)(),i=(0,Y.lq)(),n=i.query,s=1==n.vote||null===n.vote,u=(0,G.KR)(["",""]),c=(0,G.KR)(!1),d=(0,G.KR)([]),r=(0,G.KR)("private"),m=(0,t.EW)({get:()=>r.value,set:e=>{!0!==b.value&&(r.value=e)}}),v=(0,G.KR)("");function p(){"public"==m.value&&!0!==b.value?(b.value=!1,a.walletUser||a.showWalletDialog()):b.value=void 0}const b=(0,G.KR)(void 0),y=(0,t.EW)((()=>a.selectedConnect)),g=(0,G.KR)(""),k=(0,t.EW)({get:()=>g.value,set:e=>{e.length>13&&"undefined"==typeof W.value&&(W.value=!0),g.value=e}}),f=(0,G.KR)(""),h=(0,t.EW)({get:()=>f.value,set:e=>{e.length>13&&"undefined"==typeof W.value&&(W.value=!0),f.value=e}}),C=(0,G.KR)(!1),w=(0,G.KR)(!1),V=(0,G.KR)((null===(l=null===(e=a.selectedConnect)||void 0===e?void 0:e.chainParams.systemToken)||void 0===l?void 0:l.contract)?a.selectedConnect.chainParams.systemToken.contract:"eosio.token"),T=(0,G.KR)(!0),x=(0,G.KR)(0),q=(0,G.KR)(4),E=(0,G.KR)("EOS"),P=(0,G.KR)({active:!1,value:""}),_=(0,G.KR)(!0),Q=(0,t.EW)((()=>"undefined"!=typeof W.value)),W=(0,t.EW)({set:e=>{if("boolean"==typeof e){if(!ce())return}else if(h.value.length>13||k.value.length>13)return void $.A.create({type:"negative",message:o("keyUseSavPay"),position:"top"});_.value=!!s||e},get:()=>_.value}),L=(0,G.KR)(new Date(Date.now()+5184e5)),A=(0,G.KR)(new Date(Date.now()+6048e5)),F=(0,G.KR)(604800),M=(0,t.EW)((()=>A.value&&"function"==typeof A.value.getTime&&L.value&&"function"==typeof L.value.getTime?(A.value.getTime()-L.value.getTime())/1e3:void 0)),R=(0,t.EW)((()=>{var e;return null===(e=a.selectedConnect)||void 0===e?void 0:e.chainParams})),S=(0,t.EW)((()=>A.value&&"function"==typeof A.value.getTime?Math.round(A.value.getTime()/1e3):void 0)),X=(0,t.EW)((()=>{if(W.value){if(void 0===S.value)return;return S.value>4294967295}return F.value>4294967295})),K=(0,t.EW)((()=>{var e,l;return null===(l=null===(e=a.selectedConnect)||void 0===e?void 0:e.chainParams.systemToken)||void 0===l?void 0:l.symbol})),U=(0,t.EW)((()=>{var e,l;return V.value==(null===(l=null===(e=a.selectedConnect)||void 0===e?void 0:e.chainParams.systemToken)||void 0===l?void 0:l.contract)&&E.value==K.value})),O=(0,t.EW)((()=>x.value<0?"":(0,z.AssetToString)({amount:BigInt(Math.round(x.value*Math.pow(10,q.value))),symbol:{name:E.value,precision:q.value}}))),I=(0,t.EW)((()=>{var e,l,o,t;if(x.value<0)return"";const i=(null===(l=null===(e=a.selectedConnect)||void 0===e?void 0:e.chainParams.systemToken)||void 0===l?void 0:l.symbol)!=E.value||(null===(t=null===(o=a.selectedConnect)||void 0===o?void 0:o.chainParams.systemToken)||void 0===t?void 0:t.contract)!=V.value;return`${O.value}${i?" "+V.value:""}`}));function D(){return Math.floor(127*Math.random())}const ne=(0,G.KR)(D()),se=(0,G.KR)(BigInt(1)),ue=(0,t.EW)((()=>{if(X.value)return"";const e=s?{type:"public"==m.value?j.R.PublicVote:j.R.PrivateVote,id:ne.value,options:u.value,title:v.value,end:L.value.getTime()/1e3,publicIndex:se.value}:void 0;return(0,ae.GenerateLink)(R.value,k.value,P.value,I.value,W.value,W.value?S.value:F.value,C.value?h.value:void 0,e)}));function ce(){return!1!==de()||($.A.create({type:"negative",message:o("errSavPayNotAvailable"),position:"top"}),W.value=void 0,!1)}function de(){if(a.selectedConnect&&a.selectedConnect.chainParams)return!!a.selectedConnect.chainParams.savpayContract}function re(e){(0,N.A)(e).then((()=>{$.A.create({type:"positive",message:o("copyToClip"),caption:(0,Z.shrinkText)(e,80),position:"top"})})).catch((()=>{$.A.create({type:"negative",message:o("errCopyClip"),position:"top"})}))}const me=(0,G.KR)();function ve(){return ie(this,void 0,void 0,(function*(){s&&(a.walletUser?pe():a.showWalletDialog())}))}function pe(){return ie(this,void 0,void 0,(function*(){if(console.log("pushVoteOptions"),void 0===y.value.chainParams.savpayContract)return console.log(o("errSavPayNotAvailable")),void $.A.create({type:"negative",message:o("errSavPayNotAvailable"),position:"top"});if(d.value.length>0)for(let a of d.value)if(0==a.url.length)return void $.A.create({type:"negative",message:o("errSocialUrlEmpty"),position:"top"});if(!a.walletUser||void 0===a.walletUser.name)return void console.log("No wallet user name.");const e=a.walletUser.name;if("boolean"!=typeof W.value||!1===W.value)return void console.log("No fix time.");if("number"!=typeof S.value)return void console.log("No absolute limit.");c.value=!0,v.value=v.value.trim();const l=yield be(),t={ramBy:e,holder:k.value,vid:ne.value,vt:Math.floor(L.value.getTime()/1e3),t:S.value,rtoken:O.value,rtcontract:V.value,title:v.value,voptions:u.value,links:d.value},i=$.A.create({type:"ongoing",message:o("signTrx"),position:"top"}),n={isError:!1,notify:i};let s=yield B.Connect.sendTrx(n,a.walletUser,e,y.value.chainParams.savpayContract,"addvote",t,!1,a.walletUser.permission);if((0,ee.trxSigningErrorHandling)(n,s,o)&&y.value&&(yield(0,ee.broadcastTrx)(n,y.value,s,o))){const e=yield ye(l,t);!1===e?(b.value=!1,n.notify?n.notify({type:"negative",message:o("voteIsNotOnline")}):$.A.create({type:"negative",message:o("voteIsNotOnline"),position:"top"})):(se.value=e,b.value=!0,n.notify?n.notify({type:"positive",message:o("voteIsOnline")}):$.A.create({type:"positive",message:o("voteIsOnline"),position:"top"}))}c.value=!1}))}function be(){return ie(this,void 0,void 0,(function*(){const e=yield y.value.get_table_rows({code:y.value.chainParams.savpayContract,scope:y.value.chainParams.savpayContract,table:"votes",limit:1,reverse:!0,show_payer:!1});return e&&"rows"in e&&Array.isArray(e.rows)&&e.rows.length>0?e.rows[0].index:0}))}function ye(e,l,o=void 0,t=30){return ie(this,void 0,void 0,(function*(){console.log("Get table by lower bound",e);try{const a=l.holder.length<=13?(0,J.nameToFromHex)(l.holder):(0,J.hexWithTypeOfPubKey)(oe.PublicKey.fromString(l.holder)),i=yield y.value.get_table_rows({code:y.value.chainParams.savpayContract,scope:y.value.chainParams.savpayContract,table:"votes",lower_bound:String(e),upper_bound:void 0!==o&&o.low>e?String(o.low-1):void 0,limit:10,reverse:!0,show_payer:!1});if(console.log("table result",i),i&&"rows"in i&&Array.isArray(i.rows)&&i.rows.length>0){let n=i.rows[0].index,s=i.rows[0].index;console.log("Check from",i.rows[0].index,"to",i.rows[i.rows.length-1].index);const u=i.rows.find((e=>{if(e.index<n&&(n=e.index),e.index>s&&(s=e.index),e.ramBy===l.ramBy&&e.vid===l.vid&&e.vt===l.vt&&e.t===l.t&&e.rtoken===l.rtoken&&e.rtcontract===l.rtcontract){if(!(0,te.optionsAreEqual)(e.options,l.voptions)||!(0,te.linksAreEqual)(l.links,e.links))return!1;if(e.ramBy===l.holder){if(""==e.holder)return!0}else if(a===e.holder)return!0;return!1}}));return u?BigInt(u.index):(void 0===o?o={low:n,high:s}:(o.low>n&&(o.low=n),o.high<s&&(o.high=s)),t--,!(t<=0)&&(yield(0,le.sleep)(1e3),n<=e&&void 0!=s?(console.log("Check again newest"),yield ye(s,l,o,t)):(console.log("Check older entries until new"),yield ye(e,l,o))))}}catch(a){console.log("Error on checking public vote entry",a)}return!1}))}const ge=(0,t.EW)((()=>!!s&&(c.value||b.value)));function ke(){c.value=!1,u.value=["",""],d.value=[],b.value=!1,ne.value=D()}return{t:o,isVotePage:s,paymentcode:ue,recipient:k,customer:h,defineCustomer:C,recfund:T,fund:x,symbol:E,precision:q,extraMemo:P,relativeLimit:F,absolutLimit:A,limitActive:Q,voteEnd:L,tokenContract:V,chain:R,showSymbol:w,copy:re,showWalletDialog:a.showWalletDialog,connect:y,fixTimeType:W,timeIsTooHigh:X,downloadQrCode:ae.downloadQrCode,qrCodeDiv:me,copyQrImage:ae.copyQrImage,isSystemToken:U,systemTokenSymbol:K,voteOptions:u,decisionTime:M,loadPushVote:c,voteType:m,publicConfirmed:b,voteTypeClick:p,blockElements:ge,makeVotePublic:ve,socialList:d,voteReset:ke,voteTitle:v}}});var se=o(12807),ue=o(77716),ce=o(23316),de=o(44189),re=o(56384),me=o(67837),ve=o(50492),pe=o(66908),be=o(28975),ye=o(58210),ge=o(48958),ke=o(98582),fe=o.n(ke);const he=(0,se.A)(ne,[["render",F]]),Ce=he;fe()(ne,"components",{QPage:ue.A,QCard:ce.A,QCardSection:de.A,QBtn:re.A,QInput:me.A,QIcon:ve.A,QToggle:pe.A,QBtnToggle:be.A,QSpinner:ye.A,QScrollArea:ge.A})}}]);