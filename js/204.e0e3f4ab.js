"use strict";(globalThis["webpackChunksavactapp"]=globalThis["webpackChunksavactapp"]||[]).push([[204],{30459:(e,l,a)=>{a.r(l),a.d(l,{default:()=>I});var t=a(61758),n=a(58790);const o={class:"q-px-md q-pt-sm q-pb-none"},s={class:"col-auto"},i={key:0},u={class:"col-12 text-h6 text-left"},c={class:"col-12 text-left"},d={class:"row col-10 justify-between"},r={class:"text-no-wrap"},m={key:2,class:"text-red"};function v(e,l,a,v,b,p){const y=(0,t.g2)("q-btn"),f=(0,t.g2)("q-card-section"),g=(0,t.g2)("q-card"),k=(0,t.g2)("key-or-name-input"),h=(0,t.g2)("q-btn-toggle"),T=(0,t.g2)("q-icon"),w=(0,t.g2)("q-input"),C=(0,t.g2)("date-time-input"),q=(0,t.g2)("remaining-time"),x=(0,t.g2)("time-span-input"),W=(0,t.g2)("wallet-eosio"),F=(0,t.g2)("q-page");return(0,t.uX)(),(0,t.Wv)(F,null,{default:(0,t.k6)((()=>[(0,t.Lk)("div",o,[(0,t.bF)(g,{class:"col q-my-sm card cardMaxWidth"},{default:(0,t.k6)((()=>[(0,t.bF)(f,{class:"row items-center justify-left"},{default:(0,t.k6)((()=>{var l;return[(0,t.Lk)("div",s,(0,n.v_)(e.t("payOnThe")),1),(0,t.bF)(y,{class:"col-auto q-ml-sm",dense:"",label:`${null===(l=e.chain)||void 0===l?void 0:l.name} ${e.t("network")}`,onClick:e.showWalletDialog},null,8,["label","onClick"])]})),_:1})])),_:1}),(0,t.bF)(g,{class:"q-my-sm card cardMaxWidth"},{default:(0,t.k6)((()=>[(0,t.bF)(f,null,{default:(0,t.k6)((()=>[(0,t.bF)(k,{class:"q-mt-sm",modelValue:e.recipient,"onUpdate:modelValue":l[0]||(l[0]=l=>e.recipient=l),outlined:"",label:e.t("recipient"),walletOption:""},null,8,["modelValue","label"])])),_:1})])),_:1}),(0,t.bF)(g,{class:"q-my-sm card cardMaxWidth"},{default:(0,t.k6)((()=>[(0,t.bF)(f,null,{default:(0,t.k6)((()=>[(0,t.bF)(h,{modelValue:e.isBuyRam,"onUpdate:modelValue":l[1]||(l[1]=l=>e.isBuyRam=l),class:"q-mt-none q-mb-sm","no-caps":"",rounded:"",unelevated:"","toggle-color":"blue","text-color":"blue",style:{border:"1px solid #027be3"},options:[{label:e.t("buyRam"),value:!0},{label:e.t("sellRam"),value:!1}]},null,8,["modelValue","options"])])),_:1})])),_:1}),e.isBuyRam?((0,t.uX)(),(0,t.CE)("div",i,[(0,t.bF)(g,{class:"q-my-sm card cardMaxWidth"},{default:(0,t.k6)((()=>[(0,t.bF)(f,null,{default:(0,t.k6)((()=>[(0,t.bF)(w,{outlined:"","bottom-slots":"",modelValue:e.fund,"onUpdate:modelValue":l[3]||(l[3]=l=>e.fund=l),type:"number",label:e.t("amount"),class:"full-width","hide-bottom-space":""},{before:(0,t.k6)((()=>[(0,t.bF)(T,{name:"monetization_on"})])),append:(0,t.k6)((()=>[(0,t.bF)(y,{size:"sm",class:"row q-px-sm q-py-none q-ma-none",onClick:l[2]||(l[2]=l=>e.showSymbol=!0)},{default:(0,t.k6)((()=>[(0,t.Lk)("div",u,(0,n.v_)(e.systemTokenSymbol),1),(0,t.Lk)("div",c,(0,n.v_)(e.tokenContract),1)])),_:1})])),_:1},8,["modelValue","label"])])),_:1})])),_:1}),(0,t.bF)(g,{class:"q-my-sm card cardMaxWidth"},{default:(0,t.k6)((()=>[(0,t.bF)(f,null,{default:(0,t.k6)((()=>[(0,t.Lk)("div",d,[(0,t.bF)(h,{modelValue:e.fixTimeType,"onUpdate:modelValue":l[4]||(l[4]=l=>e.fixTimeType=l),class:"q-mt-none q-mb-sm","no-caps":"",rounded:"",unelevated:"","toggle-color":"blue","text-color":"blue",style:{border:"1px solid #027be3"},options:[{label:e.t("absoluteTime"),value:!0},{label:e.t("relativeTime"),value:!1}]},null,8,["modelValue","options"]),!0===e.fixTimeType?((0,t.uX)(),(0,t.CE)(t.FK,{key:0},[(0,t.bF)(C,{class:"q-mb-sm",modelValue:e.absolutLimit,"onUpdate:modelValue":l[5]||(l[5]=l=>e.absolutLimit=l)},null,8,["modelValue"]),(0,t.Lk)("div",null,[(0,t.Lk)("span",r,(0,n.v_)(e.t("timelimit")),1),l[8]||(l[8]=(0,t.Lk)("span",null,":  ",-1)),(0,t.bF)(q,{modelValue:e.absolutLimit,"onUpdate:modelValue":l[6]||(l[6]=l=>e.absolutLimit=l),timeOverMsg:e.t("timeIsOver")},null,8,["modelValue","timeOverMsg"])])],64)):!1===e.fixTimeType?((0,t.uX)(),(0,t.Wv)(x,{key:1,modelValue:e.relativeLimit,"onUpdate:modelValue":l[7]||(l[7]=l=>e.relativeLimit=l)},null,8,["modelValue"])):(0,t.Q3)("",!0),e.timeIsTooHigh?((0,t.uX)(),(0,t.CE)("div",m,(0,n.v_)(e.t("timeToHigh")),1)):(0,t.Q3)("",!0)])])),_:1})])),_:1})])):(0,t.Q3)("",!0),(0,t.bF)(g,{class:"q-mt-md card cardMaxWidth"},{default:(0,t.k6)((()=>[(0,t.bF)(f,{class:"row justify-between"},{default:(0,t.k6)((()=>[(0,t.bF)(W,{class:"col q-pr-md"}),e.walletStyle?((0,t.uX)(),(0,t.Wv)(y,{key:0,class:"col-12 col-sm-auto q-mt-md",label:"Send","icon-right":"send",color:"blue",onClick:e.send,disable:e.loadingConfirm},null,8,["onClick","disable"])):(0,t.Q3)("",!0)])),_:1})])),_:1})])])),_:1})}var b=a(6885),p=a(98919),y=a(63555),f=a(53928),g=a(77489),k=a(20989),h=a(87881),T=a(70308),w=a(39507),C=a(38734),q=a(57387),x=a(65999),W=a(72092),F=function(e,l,a,t){function n(e){return e instanceof a?e:new a((function(l){l(e)}))}return new(a||(a=Promise))((function(a,o){function s(e){try{u(t.next(e))}catch(l){o(l)}}function i(e){try{u(t["throw"](e))}catch(l){o(l)}}function u(e){e.done?a(e.value):n(e.value).then(s,i)}u((t=t.apply(e,l||[])).next())}))};const V=(0,t.pM)({name:"page-savpay-ram",components:{KeyOrNameInput:p["default"],WalletEosio:b["default"],TimeSpanInput:y["default"],DateTimeInput:f["default"],RemainingTime:g["default"]},setup(){var e,l;const a=(0,q.s9)({useScope:"global"}).t.bind(this),n=(0,w.V)(),o=(0,t.EW)((()=>n.getWalletStyle)),s=(0,C.KR)(!1),i=(0,C.KR)(!0),u=(0,C.KR)(void 0),c=(0,C.KR)(new Date(Date.now()+6048e5)),d=(0,C.KR)(604800),r=(0,t.EW)((()=>Math.round(c.value.getTime()/1e3))),m=(0,t.EW)((()=>(u.value?r.value:d.value)>4294967295)),v=(0,t.EW)((()=>n.selectedConnect)),b=(0,C.KR)(""),p=(0,C.KR)(""),y=(0,C.KR)(!1),f=(0,C.KR)((null===(l=null===(e=n.selectedConnect)||void 0===e?void 0:e.chainParams.systemToken)||void 0===l?void 0:l.contract)?n.selectedConnect.chainParams.systemToken.contract:"eosio.token"),g=(0,C.KR)(0),V=(0,C.KR)(4),_=(0,C.KR)("EOS"),R=(0,t.EW)((()=>{var e;return null===(e=n.selectedConnect)||void 0===e?void 0:e.chainParams})),E=(0,t.EW)((()=>n.selectedConnect&&n.selectedConnect.chainParams.systemToken?n.selectedConnect.chainParams.systemToken.symbol:"EOS")),S=(0,t.EW)((()=>{var e,l;return f.value==(null===(l=null===(e=n.selectedConnect)||void 0===e?void 0:e.chainParams.systemToken)||void 0===l?void 0:l.contract)&&_.value==E.value})),L=(0,t.EW)((()=>{var e,l;if(g.value<0)return"";const a=_.value!=E.value||(null===(l=null===(e=n.selectedConnect)||void 0===e?void 0:e.chainParams.systemToken)||void 0===l?void 0:l.contract)!=f.value;return`${(0,T.AssetToString)({amount:BigInt(Math.round(g.value*Math.pow(10,V.value))),symbol:{name:_.value,precision:V.value}})}${a?" "+f.value:""}`})),U=(0,t.EW)((()=>{let e=u.value?`!${(0,x.base58Time)(Math.round(c.value.getTime()/1e3))}`:`/${(0,x.base58Time)(d.value)}`;return`RAM@${p.value}${e}`}));function M(){return!1!==A()||(k.A.create({type:"negative",message:a("errSavPayNotAvailable"),position:"top"}),!1)}function A(){if(n.selectedConnect&&n.selectedConnect.chainParams)return!!n.selectedConnect.chainParams.savpayContract}const K=(0,t.EW)((()=>{var e;return null===(e=v.value)||void 0===e?void 0:e.chainParams}));function P(){return F(this,void 0,void 0,(function*(){if(s.value=!0,M()&&n.walletUser&&"string"==typeof n.walletUser.name){const e={isError:!1};let l;l=i.value?yield h.Connect.sendCustomAsset(e,n.walletUser,{from:n.walletUser.name,to:K.value.savpayContract,quantity:L.value,memo:U.value},f.value,!1,n.walletUser.permission):yield h.Connect.sendTrx(e,n.walletUser,n.walletUser.name,K.value.savpayContract,"removeram",{from:n.walletUser.name,to:p.value},!1,n.walletUser.permission),(0,W.trxSigningErrorHandling)(e,l,a)&&v&&(yield(0,W.broadcastTrx)(e,v.value,l,a))&&console.log("Successfull broadcast")}s.value=!1}))}return{t:a,isBuyRam:i,sender:b,recipient:p,fund:g,fixTimeType:u,absolutLimit:c,timeIsTooHigh:m,relativeLimit:d,payAsset:L,memoMsg:U,precision:V,tokenContract:f,chain:R,showSymbol:y,showWalletDialog:n.showWalletDialog,connect:v,isSystemToken:S,systemTokenSymbol:E,walletStyle:o,send:P,loadingConfirm:s,chainParams:K}}});var _=a(12807),R=a(77716),E=a(23316),S=a(44189),L=a(56384),U=a(28975),M=a(67837),A=a(50492),K=a(98582),P=a.n(K);const Q=(0,_.A)(V,[["render",v]]),I=Q;P()(V,"components",{QPage:R.A,QCard:E.A,QCardSection:S.A,QBtn:L.A,QBtnToggle:U.A,QInput:M.A,QIcon:A.A})}}]);