"use strict";(globalThis["webpackChunksavactapp"]=globalThis["webpackChunksavactapp"]||[]).push([[294],{75294:(e,l,t)=>{t.r(l),t.d(l,{default:()=>D});var o=t(61758),a=t(58790),n=t(29104);const i={class:"q-ma-md"},s={key:0},u={key:1,class:"q-mt-md"},r={key:0,class:"row justify-between"},c={class:"row"},d={class:"q-ma-sm"},v={class:"col-grow q-ma-sm",style:{"word-wrap":"break-word"}},p={key:0,class:"text-h6"},m={key:1,class:"text-h6"},g={key:2,class:"q-mt-md"},b={key:0,class:"row justify-between"};function y(e,l,t,y,f,k){var w;const h=(0,o.g2)("q-input"),C=(0,o.g2)("q-icon"),K=(0,o.g2)("q-select"),F=(0,o.g2)("q-card-section"),S=(0,o.g2)("q-card"),A=(0,o.g2)("q-expansion-item"),_=(0,o.g2)("q-list"),x=(0,o.g2)("q-btn-toggle"),V=(0,o.g2)("pri-key-input"),q=(0,o.g2)("q-btn"),W=(0,o.g2)("q-item-section"),P=(0,o.g2)("q-item-label"),E=(0,o.g2)("q-item");return(0,o.uX)(),(0,o.CE)("div",i,[(0,o.bF)(_,{bordered:"",class:"q-my-md"},{default:(0,o.k6)((()=>[(0,o.bF)(A,{modelValue:e.saleForm,"onUpdate:modelValue":l[4]||(l[4]=l=>e.saleForm=l),"expand-separator":"",label:e.t("sendTokenToAcc"),"expand-icon":"account_balance_wallet",class:"q-mb-xs",onClick:l[5]||(l[5]=l=>e.signature="")},{default:(0,o.k6)((()=>[(0,o.bF)(S,null,{default:(0,o.k6)((()=>[(0,o.bF)(F,null,{default:(0,o.k6)((()=>[(0,o.bF)(h,{class:"q-mb-md",outlined:"",filled:"",modelValue:e.saleContract,"onUpdate:modelValue":l[0]||(l[0]=l=>e.saleContract=l),label:e.t("saleName"),maxlength:"255"},null,8,["modelValue","label"]),(0,o.bF)(K,{outlined:"",filled:"","use-input":"","fill-input":"","input-debounce":"0",maxlength:"12",modelValue:e.beneficiary,"onUpdate:modelValue":l[2]||(l[2]=l=>e.beneficiary=l),label:e.t("beneficiaryName"),options:e.beneficiaryOptions,"hide-selected":"",onInputValue:l[3]||(l[3]=l=>e.beneficiary=l)},{append:(0,o.k6)((()=>[(0,o.bF)(C,{name:"close",onClick:l[1]||(l[1]=l=>e.beneficiary=""),class:"cursor-pointer"})])),_:1},8,["modelValue","label","options"])])),_:1})])),_:1})])),_:1},8,["modelValue","label"])])),_:1}),(0,o.bF)(h,{type:"textarea",outlined:"","bottom-slots":"",modelValue:e.message,"onUpdate:modelValue":l[7]||(l[7]=l=>e.message=l),label:e.t("message"),class:"full-width",disable:e.saleForm},{append:(0,o.k6)((()=>[(0,o.bF)(C,{name:"close",onClick:l[6]||(l[6]=l=>e.message=""),class:"cursor-pointer"})])),hint:(0,o.k6)((()=>[(0,o.bo)((0,o.Lk)("div",null,(0,a.v_)(e.t("entermsgtosign")),513),[[n.aG,!e.saleForm]])])),_:1},8,["modelValue","label","disable"]),(0,o.bF)(x,{onClick:l[8]||(l[8]=l=>e.privateKey=""),modelValue:e.usePrivate,"onUpdate:modelValue":l[9]||(l[9]=l=>e.usePrivate=l),class:"q-my-md","no-caps":"",rounded:"",unelevated:"","toggle-color":"blue","text-color":"blue",style:{border:"1px solid #027be3"},options:[{label:e.t("useWallet"),value:!1},{label:e.t("usePriKey"),value:!0}]},null,8,["modelValue","options"]),e.usePrivate?((0,o.uX)(),(0,o.CE)("div",s,[(0,o.bF)(V,{modelValue:e.privateKey,"onUpdate:modelValue":l[10]||(l[10]=l=>e.privateKey=l)},null,8,["modelValue"])])):((0,o.uX)(),(0,o.CE)("div",u,[(0,o.Lk)("div",null,(0,a.v_)(e.t("walletSignHint")),1),e.walletStyle?((0,o.uX)(),(0,o.CE)("div",r,[(0,o.bF)(E,{class:"col-auto q-py-none q-mt-sm",style:(0,a.Tr)(`background: ${e.walletStyle.background}; border-radius:5px`)},{default:(0,o.k6)((()=>[(0,o.bF)(W,{side:""},{default:(0,o.k6)((()=>[(0,o.bF)(q,{icon:"power_settings_new",color:"red",onClick:e.walletLogout,size:"sm",round:""},null,8,["onClick"])])),_:1}),(0,o.bF)(W,null,{default:(0,o.k6)((()=>[(0,o.bF)(P,{style:(0,a.Tr)(`color: ${e.walletStyle.textColor}`)},{default:(0,o.k6)((()=>[(0,o.eW)((0,a.v_)(e.walletStyle.text),1)])),_:1},8,["style"])])),_:1}),(0,o.bF)(W,{side:""},{default:(0,o.k6)((()=>[(0,o.bF)(C,{name:`img:${e.walletStyle.icon}`},null,8,["name"])])),_:1})])),_:1},8,["style"]),(0,o.bF)(K,{class:"col q-mx-md",modelValue:e.walletUser,"onUpdate:modelValue":l[11]||(l[11]=l=>e.walletUser=l),options:e.walletUsers,label:"User","option-label":"name"},null,8,["modelValue","options"])])):(0,o.Q3)("",!0),e.walletStyle?(0,o.Q3)("",!0):((0,o.uX)(),(0,o.Wv)(q,{key:1,label:e.t("selectWallet"),color:"blue",onClick:e.selectWallet},null,8,["label","onClick"]))])),(0,o.bF)(K,{disable:e.usePrivate,outlined:"",filled:"","use-input":"","fill-input":"","input-debounce":"0",modelValue:e.publicKey,"onUpdate:modelValue":l[13]||(l[13]=l=>e.publicKey=l),label:0==e.publicKey.length?"Public key":"",class:"q-my-md full-width",options:null===(w=e.walletUser)||void 0===w?void 0:w.publicKeys,"hide-selected":"",onInputValue:l[14]||(l[14]=l=>e.publicKey=l)},{append:(0,o.k6)((()=>[(0,o.bo)((0,o.bF)(C,{name:"close",onClick:l[12]||(l[12]=l=>e.publicKey=""),class:"cursor-pointer"},null,512),[[n.aG,!e.usePrivate&&e.publicKey.length>0]]),(0,o.bo)((0,o.bF)(C,{name:"update",onClick:e.getPubKeys,class:"cursor-pointer"},null,8,["onClick"]),[[n.aG,!e.usePrivate]])])),_:1},8,["disable","modelValue","label","options"]),(0,o.bo)((0,o.Lk)("div",{class:"text-subtitle2"},(0,a.v_)(e.balance),513),[[n.aG,e.saleForm&&e.publicKey]]),(0,o.bF)(q,{class:"col-12 col-sm-auto q-my-md",label:e.t("signMsg"),"icon-right":"edit",color:"blue",onClick:e.signMessage},null,8,["label","onClick"]),(0,o.bo)((0,o.Lk)("div",null,[(0,o.Lk)("div",c,[(0,o.Lk)("div",d,(0,a.v_)(e.t("signature")),1),(0,o.Lk)("div",v,(0,a.v_)(e.signature),1),(0,o.bF)(C,{class:"q-ma-sm cursor-pointer",name:"copy_all",onClick:l[15]||(l[15]=l=>e.copySig())})]),(0,o.bo)((0,o.Lk)("div",null,[e.restTime>0?((0,o.uX)(),(0,o.CE)("div",p,(0,a.v_)(e.restTime)+" "+(0,a.v_)(e.t("signSecondsLeft")),1)):((0,o.uX)(),(0,o.CE)("div",m,(0,a.v_)(e.t("signExpired")),1)),e.usePrivate&&e.restTime>0?((0,o.uX)(),(0,o.CE)("div",g,[e.walletStyle?((0,o.uX)(),(0,o.CE)("div",b,[(0,o.bF)(E,{class:"col-auto q-py-none q-mt-sm",style:(0,a.Tr)(`background: ${e.walletStyle.background}; border-radius:5px`)},{default:(0,o.k6)((()=>[(0,o.bF)(W,{side:""},{default:(0,o.k6)((()=>[(0,o.bF)(q,{icon:"power_settings_new",color:"red",onClick:e.walletLogout,size:"sm",round:""},null,8,["onClick"])])),_:1}),(0,o.bF)(W,null,{default:(0,o.k6)((()=>[(0,o.bF)(P,{style:(0,a.Tr)(`color: ${e.walletStyle.textColor}`)},{default:(0,o.k6)((()=>[(0,o.eW)((0,a.v_)(e.walletStyle.text),1)])),_:1},8,["style"])])),_:1}),(0,o.bF)(W,{side:""},{default:(0,o.k6)((()=>[(0,o.bF)(C,{name:`img:${e.walletStyle.icon}`},null,8,["name"])])),_:1})])),_:1},8,["style"]),(0,o.bF)(K,{class:"col q-mx-md",modelValue:e.walletUser,"onUpdate:modelValue":l[16]||(l[16]=l=>e.walletUser=l),options:e.walletUsers,label:"User","option-label":"name"},null,8,["modelValue","options"]),(0,o.bF)(q,{class:"col-12 col-sm-auto q-mt-md",label:e.t("payoutToBenificiary"),"icon-right":"send",color:"blue",onClick:e.sendPayout},null,8,["label","onClick"])])):(0,o.Q3)("",!0),e.walletStyle?(0,o.Q3)("",!0):((0,o.uX)(),(0,o.Wv)(q,{key:1,label:e.t("selectWallet"),color:"blue",onClick:e.selectWallet},null,8,["label","onClick"]))])):e.restTime>0?((0,o.uX)(),(0,o.Wv)(q,{key:3,class:"col-12 col-sm-auto q-mt-md",label:e.t("payoutToBenificiary"),"icon-right":"send",color:"blue",onClick:e.sendPayout},null,8,["label","onClick"])):(0,o.Q3)("",!0)],512),[[n.aG,e.saleForm]])],512),[[n.aG,e.signature]])])}var f=t(20989),k=t(78652),w=t(38734),h=t(87881),C=t(57387),K=t(97687),F=t(39507),S=t(41472),A=t(70308),_=t(8522)["Buffer"],x=function(e,l,t,o){function a(e){return e instanceof t?e:new t((function(l){l(e)}))}return new(t||(t=Promise))((function(t,n){function i(e){try{u(o.next(e))}catch(l){n(l)}}function s(e){try{u(o["throw"](e))}catch(l){n(l)}}function u(e){e.done?t(e.value):a(e.value).then(i,s)}u((o=o.apply(e,l||[])).next())}))};const V=(0,o.pM)({name:"page-signing",components:{PriKeyInput:S["default"]},setup(){const e=(0,C.s9)({useScope:"global"}).t.bind(this),l=(0,w.KR)(""),t=(0,w.KR)(""),a=(0,w.KR)(""),n=(0,w.KR)(""),i=(0,w.KR)(!1),s=(0,w.KR)(!1),u=(0,w.KR)(""),r=(0,F.V)(),c=(0,o.EW)((()=>r.walletUser)),d=(0,o.EW)((()=>r.walletUsers)),v=(0,o.EW)((()=>r.selectedConnect)),p=(0,w.KR)(!1),m=(0,w.KR)(""),g=(0,w.KR)("savact"),b=(0,w.KR)("SAVACT"),y=(0,w.KR)(""),S=(0,o.EW)((()=>{var e;return null===(e=d.value)||void 0===e?void 0:e.map((e=>e.name))})),V=(0,w.KR)(0),q=(0,w.KR)(0);let W=0;function P(){W++,E(W)}function E(e){if(e==W){let l=600-(Math.floor(Date.now()/1e3)-V.value);q.value=l,l>0&&setTimeout(E,1e3,e)}}const T=(0,w.KR)(h.Chains[0]);function U(){var e,l;return x(this,void 0,void 0,(function*(){if(console.log("Get keys"),void 0!=c.value)try{c.value.publicKeys=yield null===(e=c.value)||void 0===e?void 0:e.getKeys()}catch(t){const e=null===(l=null===c||void 0===c?void 0:c.session)||void 0===l?void 0:l.publicKey;"string"==typeof e?c.value.publicKeys=[e]:"object"==typeof e&&(c.value.publicKeys=[e.toLegacyString()])}}))}function L(){var o,d,b;return x(this,void 0,void 0,(function*(){if(!i.value){if(i.value=!0,t.value="",y.value="",p.value){if(V.value=Math.floor(Date.now()/1e3),P(),l.value="",!g.value)return f.A.create({message:e("noteEnterContract"),position:"top",color:"negative"}),void(i.value=!1);if(!m.value)return f.A.create({message:e("noteEnterBenificiary"),position:"top",color:"negative"}),void(i.value=!1);if(!0!==(yield null===(o=v.value)||void 0===o?void 0:o.checkAccountName(g.value)))return f.A.create({message:e("noteNoSaleContract"),position:"top",color:"negative"}),void(i.value=!1);if(!0!==(yield null===(d=v.value)||void 0===d?void 0:d.checkAccountName(m.value)))return f.A.create({message:e("noteNoBenificiary"),position:"top",color:"negative"}),void(i.value=!1);l.value=`${g.value} ${V.value} ${m.value}`}if(s.value)if(u.value){const o=(0,A.isValidPrivate)(u.value);if(o){a.value=o.toPublic().toLegacyString();const n=_.from(l.value,"utf8"),i=o.signMessage(n).toString();"string"==typeof i?t.value=i:f.A.create({message:e("errSign"),position:"top",color:"negative"})}else f.A.create({message:e("errPriKeyValidity"),position:"top",color:"negative"})}else f.A.create({message:e("notePriKeyOrWallet"),position:"top"});else if(void 0!=c.value)if(void 0!=c.value.name&&c.value.name.length>0)if(a.value.length>0){const o=f.A.create({type:"ongoing",message:e("signTrx"),position:"top"}),i={isError:!1,notify:o},s=yield h.Connect.signArbitrary(i,c.value,a.value,l.value,n.value);if(i.isError){const l=s,t=`${e("errWhileSignWith")} ${null===(b=r.getWalletStyle)||void 0===b?void 0:b.text}`;console.log(t,l),f.A.create({type:"negative",message:t,caption:l.message,position:"top"})}else t.value=s}else f.A.create({message:e("errEnterPubKey"),position:"top"});else f.A.create({message:e("errSetUserOfWallet"),position:"top"});else f.A.create({message:e("errSelectWallet"),position:"top"}),Q();p.value&&a.value&&X(),i.value=!1}}))}function Q(){void 0!=T.value?r.setWalletDialog({show:!0}):f.A.create({type:"negative",message:e("noChainDefined"),position:"top"})}function R(){(0,k.A)(t.value).then((()=>{f.A.create({type:"positive",message:e("copyClipSign"),position:"top"})})).catch((()=>{f.A.create({type:"negative",message:e("errCopyClip"),position:"top"})}))}function $(){var l,o;return x(this,void 0,void 0,(function*(){if(void 0==c.value||void 0==c.value.name)return;if("string"!=typeof t.value)return;const n={currenttime:V.value,tokenowner:m.value,sig:t.value,pubkey:a.value,rampayer:g.value},i={isError:!1},s=yield h.Connect.sendTrx(i,c.value,c.value.name,g.value,"payoff",n,!1);if(i.isError){const t=s,o=`${e("errWhileSignWith")} ${null===(l=r.getWalletStyle)||void 0===l?void 0:l.text}`;return console.log(o,t),void f.A.create({type:"negative",message:o,caption:t.message,position:"top"})}const u=s,d=f.A.create({type:"ongoing",message:e("broadTrx"),position:"top"});if(null==u.transaction)return console.log("Got no signed transaction from the wallet. The wallet may have broadcast it already."),d({type:"info",message:e("infoNoBroadcastMayWallet")}),!1;const p={isError:!1},b=yield null===(o=v.value)||void 0===o?void 0:o.sendTransaction(p,u.transaction);if(void 0==b)return console.log("No available endpoint"),d({type:"negative",message:e("noEndpoint")}),!1;if(p.isError){const e=b;console.log("Error while broadcasting",e),d({type:"negative",message:e.message})}else console.log("Send payout successful",b),d({type:"positive",message:e("sendPayoutDone")})}))}function X(){var l;return x(this,void 0,void 0,(function*(){let t=I(a.value);if(void 0!=t){const o=yield null===(l=v.value)||void 0===l?void 0:l.get_table_rows({code:g.value,scope:g.value,lower_bound:t.id.toString(),table:"purchased",limit:1});if(void 0!=o&&"rows"in o&&o.rows.length>0){const l=o.rows[0];if(l.id==t.id)for(let o of l.owner)if(o.key==t.key)return void(y.value=`${Number(o.amount)/1e4} ${b.value} `+e("balanceOnPubKey"))}}y.value=e("noTokenPubKey")}))}function I(e){var l;const t=K.PublicKey.fromString(e),o=_.from(t.key.data).toString("hex"),a=o.substr(0,o.length-16),n=o.substr(o.length-16),i=null===(l=n.match(/[0-9a-f]{2}/gi))||void 0===l?void 0:l.reverse().join("");if(i){const e=BigInt("0x"+i);return{hex:o,key:a,id:e}}}return U(),{message:l,signMessage:L,loading:i,usePrivate:s,privateKey:u,publicKey:a,signature:t,balance:y,helpText:n,walletUser:c,getPubKeys:U,walletStyle:r.getWalletStyle,selectWallet:Q,walletLogout:r.walletLogout,walletUsers:d,copySig:R,beneficiary:m,saleContract:g,beneficiaryOptions:S,saleForm:p,sendPayout:$,restTime:q,t:e}}});var q=t(12807),W=t(53999),P=t(88841),E=t(23316),T=t(44189),U=t(67837),L=t(75848),Q=t(50492),R=t(28975),$=t(90124),X=t(25173),I=t(56384),B=t(13796),N=t(98582),G=t.n(N);const M=(0,q.A)(V,[["render",y]]),D=M;G()(V,"components",{QList:W.A,QExpansionItem:P.A,QCard:E.A,QCardSection:T.A,QInput:U.A,QSelect:L.A,QIcon:Q.A,QBtnToggle:R.A,QItem:$.A,QItemSection:X.A,QBtn:I.A,QItemLabel:B.A})}}]);