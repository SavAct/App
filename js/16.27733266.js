"use strict";(globalThis["webpackChunksavactapp"]=globalThis["webpackChunksavactapp"]||[]).push([[16],{80016:(e,l,t)=>{t.r(l),t.d(l,{default:()=>O});var a=t(59835),o=t(86970),i=t(61957);const n={class:"q-ma-md"},s={key:0},u={key:1,class:"q-mt-md"},r={key:0,class:"row justify-between"},c={class:"row"},d={class:"q-ma-sm"},m={class:"col-grow q-ma-sm",style:{"word-wrap":"break-word"}},v={key:0,class:"text-h6"},p={key:1,class:"text-h6"},y={key:2,class:"q-mt-md"},g={key:0,class:"row justify-between"};function b(e,l,t,b,w,f){var k;const h=(0,a.up)("q-input"),W=(0,a.up)("q-icon"),C=(0,a.up)("q-select"),q=(0,a.up)("q-card-section"),S=(0,a.up)("q-card"),_=(0,a.up)("q-expansion-item"),x=(0,a.up)("q-list"),V=(0,a.up)("q-btn-toggle"),Z=(0,a.up)("pri-key-input"),K=(0,a.up)("q-btn"),P=(0,a.up)("q-item-section"),U=(0,a.up)("q-item-label"),T=(0,a.up)("q-item");return(0,a.wg)(),(0,a.iD)("div",n,[(0,a.Wm)(x,{bordered:"",class:"q-my-md"},{default:(0,a.w5)((()=>[(0,a.Wm)(_,{modelValue:e.saleForm,"onUpdate:modelValue":l[4]||(l[4]=l=>e.saleForm=l),"expand-separator":"",label:e.t("sendTokenToAcc"),"expand-icon":"account_balance_wallet",class:"q-mb-xs",onClick:l[5]||(l[5]=l=>e.signature="")},{default:(0,a.w5)((()=>[(0,a.Wm)(S,null,{default:(0,a.w5)((()=>[(0,a.Wm)(q,null,{default:(0,a.w5)((()=>[(0,a.Wm)(h,{class:"q-mb-md",outlined:"",filled:"",modelValue:e.saleContract,"onUpdate:modelValue":l[0]||(l[0]=l=>e.saleContract=l),label:e.t("saleName"),maxlength:"255"},null,8,["modelValue","label"]),(0,a.Wm)(C,{outlined:"",filled:"","use-input":"","fill-input":"","input-debounce":"0",maxlength:"12",modelValue:e.beneficiary,"onUpdate:modelValue":l[2]||(l[2]=l=>e.beneficiary=l),label:e.t("beneficiaryName"),options:e.beneficiaryOptions,"hide-selected":"",onInputValue:l[3]||(l[3]=l=>e.beneficiary=l)},{append:(0,a.w5)((()=>[(0,a.Wm)(W,{name:"close",onClick:l[1]||(l[1]=l=>e.beneficiary=""),class:"cursor-pointer"})])),_:1},8,["modelValue","label","options"])])),_:1})])),_:1})])),_:1},8,["modelValue","label"])])),_:1}),(0,a.Wm)(h,{type:"textarea",outlined:"","bottom-slots":"",modelValue:e.message,"onUpdate:modelValue":l[7]||(l[7]=l=>e.message=l),label:e.t("message"),class:"full-width",disable:e.saleForm},{append:(0,a.w5)((()=>[(0,a.Wm)(W,{name:"close",onClick:l[6]||(l[6]=l=>e.message=""),class:"cursor-pointer"})])),hint:(0,a.w5)((()=>[(0,a.wy)((0,a._)("div",null,(0,o.zw)(e.t("entermsgtosign")),513),[[i.F8,!e.saleForm]])])),_:1},8,["modelValue","label","disable"]),(0,a.Wm)(V,{onClick:l[8]||(l[8]=l=>e.privateKey=""),modelValue:e.usePrivate,"onUpdate:modelValue":l[9]||(l[9]=l=>e.usePrivate=l),class:"q-my-md","no-caps":"",rounded:"",unelevated:"","toggle-color":"blue","text-color":"blue",style:{border:"1px solid #027be3"},options:[{label:e.t("useWallet"),value:!1},{label:e.t("usePriKey"),value:!0}]},null,8,["modelValue","options"]),e.usePrivate?((0,a.wg)(),(0,a.iD)("div",s,[(0,a.Wm)(Z,{modelValue:e.privateKey,"onUpdate:modelValue":l[10]||(l[10]=l=>e.privateKey=l)},null,8,["modelValue"])])):((0,a.wg)(),(0,a.iD)("div",u,[(0,a._)("div",null,(0,o.zw)(e.t("walletSignHint")),1),e.walletStyle?((0,a.wg)(),(0,a.iD)("div",r,[(0,a.Wm)(T,{class:"col-auto q-py-none q-mt-sm",style:(0,o.j5)(`background: ${e.walletStyle.background}; border-radius:5px`)},{default:(0,a.w5)((()=>[(0,a.Wm)(P,{side:""},{default:(0,a.w5)((()=>[(0,a.Wm)(K,{icon:"power_settings_new",color:"red",onClick:e.walletLogout,size:"sm",round:""},null,8,["onClick"])])),_:1}),(0,a.Wm)(P,null,{default:(0,a.w5)((()=>[(0,a.Wm)(U,{style:(0,o.j5)(`color: ${e.walletStyle.textColor}`)},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.walletStyle.text),1)])),_:1},8,["style"])])),_:1}),(0,a.Wm)(P,{side:""},{default:(0,a.w5)((()=>[(0,a.Wm)(W,{name:`img:${e.walletStyle.icon}`},null,8,["name"])])),_:1})])),_:1},8,["style"]),(0,a.Wm)(C,{class:"col q-mx-md",modelValue:e.walletUser,"onUpdate:modelValue":l[11]||(l[11]=l=>e.walletUser=l),options:e.walletUsers,label:"User","option-label":"name"},null,8,["modelValue","options"])])):(0,a.kq)("",!0),e.walletStyle?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(K,{key:1,label:e.t("selectWallet"),color:"blue",onClick:e.selectWallet},null,8,["label","onClick"]))])),(0,a.Wm)(C,{disable:e.usePrivate,outlined:"",filled:"","use-input":"","fill-input":"","input-debounce":"0",modelValue:e.publicKey,"onUpdate:modelValue":l[13]||(l[13]=l=>e.publicKey=l),label:0==e.publicKey.length?"Public key":"",class:"q-my-md full-width",options:null===(k=e.walletUser)||void 0===k?void 0:k.publicKeys,"hide-selected":"",onInputValue:l[14]||(l[14]=l=>e.publicKey=l)},{append:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(W,{name:"close",onClick:l[12]||(l[12]=l=>e.publicKey=""),class:"cursor-pointer"},null,512),[[i.F8,!e.usePrivate&&e.publicKey.length>0]]),(0,a.wy)((0,a.Wm)(W,{name:"update",onClick:e.getPubKeys,class:"cursor-pointer"},null,8,["onClick"]),[[i.F8,!e.usePrivate]])])),_:1},8,["disable","modelValue","label","options"]),(0,a.wy)((0,a._)("div",{class:"text-subtitle2"},(0,o.zw)(e.balance),513),[[i.F8,e.saleForm&&e.publicKey]]),(0,a.Wm)(K,{class:"col-12 col-sm-auto q-my-md",label:e.t("signMsg"),"icon-right":"edit",color:"blue",onClick:e.signMessage},null,8,["label","onClick"]),(0,a.wy)((0,a._)("div",null,[(0,a._)("div",c,[(0,a._)("div",d,(0,o.zw)(e.t("signature")),1),(0,a._)("div",m,(0,o.zw)(e.signature),1),(0,a.Wm)(W,{class:"q-ma-sm cursor-pointer",name:"copy_all",onClick:l[15]||(l[15]=l=>e.copySig())})]),(0,a.wy)((0,a._)("div",null,[e.restTime>0?((0,a.wg)(),(0,a.iD)("div",v,(0,o.zw)(e.restTime)+" "+(0,o.zw)(e.t("signSecondsLeft")),1)):((0,a.wg)(),(0,a.iD)("div",p,(0,o.zw)(e.t("signExpired")),1)),e.usePrivate&&e.restTime>0?((0,a.wg)(),(0,a.iD)("div",y,[e.walletStyle?((0,a.wg)(),(0,a.iD)("div",g,[(0,a.Wm)(T,{class:"col-auto q-py-none q-mt-sm",style:(0,o.j5)(`background: ${e.walletStyle.background}; border-radius:5px`)},{default:(0,a.w5)((()=>[(0,a.Wm)(P,{side:""},{default:(0,a.w5)((()=>[(0,a.Wm)(K,{icon:"power_settings_new",color:"red",onClick:e.walletLogout,size:"sm",round:""},null,8,["onClick"])])),_:1}),(0,a.Wm)(P,null,{default:(0,a.w5)((()=>[(0,a.Wm)(U,{style:(0,o.j5)(`color: ${e.walletStyle.textColor}`)},{default:(0,a.w5)((()=>[(0,a.Uk)((0,o.zw)(e.walletStyle.text),1)])),_:1},8,["style"])])),_:1}),(0,a.Wm)(P,{side:""},{default:(0,a.w5)((()=>[(0,a.Wm)(W,{name:`img:${e.walletStyle.icon}`},null,8,["name"])])),_:1})])),_:1},8,["style"]),(0,a.Wm)(C,{class:"col q-mx-md",modelValue:e.walletUser,"onUpdate:modelValue":l[16]||(l[16]=l=>e.walletUser=l),options:e.walletUsers,label:"User","option-label":"name"},null,8,["modelValue","options"]),(0,a.Wm)(K,{class:"col-12 col-sm-auto q-mt-md",label:e.t("payoutToBenificiary"),"icon-right":"send",color:"blue",onClick:e.sendPayout},null,8,["label","onClick"])])):(0,a.kq)("",!0),e.walletStyle?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(K,{key:1,label:e.t("selectWallet"),color:"blue",onClick:e.selectWallet},null,8,["label","onClick"]))])):e.restTime>0?((0,a.wg)(),(0,a.j4)(K,{key:3,class:"col-12 col-sm-auto q-mt-md",label:e.t("payoutToBenificiary"),"icon-right":"send",color:"blue",onClick:e.sendPayout},null,8,["label","onClick"])):(0,a.kq)("",!0)],512),[[i.F8,e.saleForm]])],512),[[i.F8,e.signature]])])}var w=t(6827),f=t(65054),k=t(60499),h=t(5980),W=t(27712),C=t(53103),q=t(65211),S=t(42586),_=t(62659),x=t(50050),V=t(17779),Z=t(40270)["Buffer"],K=function(e,l,t,a){function o(e){return e instanceof t?e:new t((function(l){l(e)}))}return new(t||(t=Promise))((function(t,i){function n(e){try{u(a.next(e))}catch(l){i(l)}}function s(e){try{u(a["throw"](e))}catch(l){i(l)}}function u(e){e.done?t(e.value):o(e.value).then(n,s)}u((a=a.apply(e,l||[])).next())}))};const P=(0,a.aZ)({name:"page-signing",components:{PriKeyInput:x["default"]},setup(){const e=(0,W.QT)({useScope:"global"}).t.bind(this),l=(0,k.iH)(""),t=(0,k.iH)(""),o=(0,k.iH)(""),i=(0,k.iH)(""),n=(0,k.iH)(!1),s=(0,k.iH)(!1),u=(0,k.iH)(""),r=(0,_.r)(),c=(0,a.Fl)((()=>r.walletUser)),d=(0,a.Fl)((()=>r.walletUsers)),m=(0,a.Fl)((()=>r.selectedConnect)),v=(0,k.iH)(!1),p=(0,k.iH)(""),y=(0,k.iH)("savact"),g=(0,k.iH)("SAVACT"),b=(0,k.iH)(""),x=(0,a.Fl)((()=>{var e;return null===(e=d.value)||void 0===e?void 0:e.map((e=>e.name))})),P=(0,k.iH)(0),U=(0,k.iH)(0);let T=0;function F(){T++,H(T)}function H(e){if(e==T){let l=600-(Math.floor(Date.now()/1e3)-P.value);U.value=l,l>0&&(0,S.setTimeout)(H,1e3,e)}}const $=(0,k.iH)(h.Chains[0]);function D(){var e,l;return K(this,void 0,void 0,(function*(){if(V.log("Get keys"),void 0!=c.value)try{c.value.publicKeys=yield null===(e=c.value)||void 0===e?void 0:e.getKeys()}catch(t){const e=null===(l=null===c||void 0===c?void 0:c.session)||void 0===l?void 0:l.publicKey;"string"==typeof e?c.value.publicKeys=[e]:"object"==typeof e&&(c.value.publicKeys=[e.toLegacyString()])}}))}function E(){var a,d,g;return K(this,void 0,void 0,(function*(){if(!n.value){if(n.value=!0,t.value="",b.value="",v.value){if(P.value=Math.floor(Date.now()/1e3),F(),l.value="",!y.value)return w.Z.create({message:e("noteEnterContract"),position:"top",color:"negative"}),void(n.value=!1);if(!p.value)return w.Z.create({message:e("noteEnterBenificiary"),position:"top",color:"negative"}),void(n.value=!1);if(!0!==(yield null===(a=m.value)||void 0===a?void 0:a.checkAccountName(y.value)))return w.Z.create({message:e("noteNoSaleContract"),position:"top",color:"negative"}),void(n.value=!1);if(!0!==(yield null===(d=m.value)||void 0===d?void 0:d.checkAccountName(p.value)))return w.Z.create({message:e("noteNoBenificiary"),position:"top",color:"negative"}),void(n.value=!1);l.value=`${y.value} ${P.value} ${p.value}`}if(s.value)if(u.value)if(q.b.isValidPrivate(u.value)){o.value=q.b.privateToPublic(u.value);const a=q.b.sign(l.value,u.value);a?t.value=a:w.Z.create({message:e("errSign"),position:"top",color:"negative"})}else w.Z.create({message:e("errPriKeyValidity"),position:"top",color:"negative"});else w.Z.create({message:e("notePriKeyOrWallet"),position:"top"});else if(void 0!=c.value)if(void 0!=c.value.name&&c.value.name.length>0)if(o.value.length>0){const a={isError:!1},n=yield h.Connect.signArbitrary(a,c.value,o.value,l.value,i.value);if(a.isError){const l=n,t=`${e("errWhileSignWith")} ${null===(g=r.getWalletStyle)||void 0===g?void 0:g.text}`;V.log(t,l),w.Z.create({type:"negative",message:t,caption:l.message,position:"top"})}else t.value=n}else w.Z.create({message:e("errEnterPubKey"),position:"top"});else w.Z.create({message:e("errSetUserOfWallet"),position:"top"});else w.Z.create({message:e("errSelectWallet"),position:"top"}),Q();v.value&&o.value&&I(),n.value=!1}}))}function Q(){void 0!=$.value?r.setWalletDialog({show:!0}):w.Z.create({type:"negative",message:e("noChainDefined"),position:"top"})}function z(){(0,f.Z)(t.value).then((()=>{w.Z.create({type:"positive",message:e("copyClipSign"),position:"top"})})).catch((()=>{w.Z.create({type:"negative",message:e("errCopyClip"),position:"top"})}))}function j(){var l,a;return K(this,void 0,void 0,(function*(){if(void 0==c.value||void 0==c.value.name)return;if("string"!=typeof t.value)return;const i={currenttime:P.value,tokenowner:p.value,sig:t.value,pubkey:o.value,rampayer:y.value},n={isError:!1},s=yield h.Connect.sendTrx(n,c.value,c.value.name,y.value,"payoff",i,!1);if(n.isError){const t=s,a=`${e("errWhileSignWith")} ${null===(l=r.getWalletStyle)||void 0===l?void 0:l.text}`;return V.log(a,t),void w.Z.create({type:"negative",message:a,caption:t.message,position:"top"})}const u=s,d=w.Z.create({type:"ongoing",message:e("broadTrx"),position:"top"});if(null==u.transaction)return V.log("Got no signed transaction from the wallet. The wallet may have broadcast it already."),d({type:"info",message:e("infoNoBroadcastMayWallet")}),!1;const v={isError:!1},g=yield null===(a=m.value)||void 0===a?void 0:a.sendTransaction(v,u.transaction);if(void 0==g)return V.log("No available endpoint"),d({type:"negative",message:e("noEndpoint")}),!1;if(v.isError){const e=g;V.log("Error while broadcasting",e),d({type:"negative",message:e.message})}else V.log("Send payout successful",g),d({type:"positive",message:e("sendPayoutDone")})}))}function I(){var l;return K(this,void 0,void 0,(function*(){let t=B(o.value);if(void 0!=t){const a=yield null===(l=m.value)||void 0===l?void 0:l.get_table_rows({code:y.value,scope:y.value,lower_bound:t.id.toString(),table:"purchased",limit:1});if(void 0!=a&&"rows"in a&&a.rows.length>0){const l=a.rows[0];if(l.id==t.id)for(let a of l.owner)if(a.key==t.key)return void(b.value=`${Number(a.amount)/1e4} ${g.value} `+e("balanceOnPubKey"))}}b.value=e("noTokenPubKey")}))}function B(e){var l;const t=C.PublicKey.fromString(e),a=Z.from(t.key.data).toString("hex"),o=a.substr(0,a.length-16),i=a.substr(a.length-16),n=null===(l=i.match(/[0-9a-f]{2}/gi))||void 0===l?void 0:l.reverse().join("");if(n){const e=BigInt("0x"+n);return{hex:a,key:o,id:e}}}return D(),{message:l,signMessage:E,loading:n,usePrivate:s,privateKey:u,publicKey:o,signature:t,balance:b,helpText:i,walletUser:c,getPubKeys:D,walletStyle:r.getWalletStyle,selectWallet:Q,walletLogout:r.walletLogout,walletUsers:d,copySig:z,beneficiary:p,saleContract:y,beneficiaryOptions:x,saleForm:v,sendPayout:j,restTime:U,t:e}}});var U=t(11639),T=t(13246),F=t(50651),H=t(44458),$=t(63190),D=t(13119),E=t(26384),Q=t(22857),z=t(1389),j=t(490),I=t(76749),B=t(68879),N=t(33115),L=t(69984),A=t.n(L);const M=(0,U.Z)(P,[["render",b]]),O=M;A()(P,"components",{QList:T.Z,QExpansionItem:F.Z,QCard:H.Z,QCardSection:$.Z,QInput:D.Z,QSelect:E.Z,QIcon:Q.Z,QBtnToggle:z.Z,QItem:j.Z,QItemSection:I.Z,QBtn:B.Z,QItemLabel:N.Z})}}]);