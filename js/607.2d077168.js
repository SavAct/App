(globalThis["webpackChunksavactapp"]=globalThis["webpackChunksavactapp"]||[]).push([[607],{91854:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>Je});var l=i(59835),n=i(86970),a=i(61957);const o=e=>((0,l.dD)("data-v-4bc31b9d"),e=e(),(0,l.Cn)(),e),c={class:"row"},s={class:"col-2 row justify-center"},r=o((()=>(0,l._)("div",{class:"q-ml-sm"},"The browser got a request to redirect to:",-1))),u={class:"text-weight-bold"};function d(e,t,i,o,d,I){const m=(0,l.up)("q-btn"),g=(0,l.up)("q-toolbar-title"),b=(0,l.up)("q-icon"),v=(0,l.up)("q-item-section"),w=(0,l.up)("q-item"),N=(0,l.up)("q-item-label"),y=(0,l.up)("q-select"),M=(0,l.up)("q-toolbar"),p=(0,l.up)("q-header"),h=(0,l.up)("MainMenu"),j=(0,l.up)("PageIndex"),z=(0,l.up)("q-page-container"),P=(0,l.up)("PageBrowser"),S=(0,l.up)("router-view"),f=(0,l.up)("q-route-tab"),W=(0,l.up)("q-tabs"),Z=(0,l.up)("q-footer"),D=(0,l.up)("MainEosioProvider"),x=(0,l.up)("q-avatar"),G=(0,l.up)("q-card-section"),A=(0,l.up)("q-card-actions"),V=(0,l.up)("q-card"),k=(0,l.up)("q-dialog"),T=(0,l.up)("q-layout"),Y=(0,l.Q2)("touch-pan"),C=(0,l.Q2)("close-popup");return(0,l.wg)(),(0,l.j4)(T,{view:"lHh Lpr lFf"},{default:(0,l.w5)((()=>[(0,l.Wm)(p,{elevated:"",class:(0,n.C_)(e.brightStyle?"bg-blue-grey-6":"bg-dark")},{default:(0,l.w5)((()=>[(0,l.Wm)(M,null,{default:(0,l.w5)((()=>{var i,o;return[(0,l.Wm)(m,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:t[0]||(t[0]=t=>e.leftDrawerOpen=!e.leftDrawerOpen)}),e.hasParent?((0,l.wg)(),(0,l.j4)(m,{key:0,flat:"",round:"",dense:"",class:"q-ml-sm",icon:"arrow_back_ios_new","aria-label":"Back",onClick:e.goBack},null,8,["onClick"])):(0,l.kq)("",!0),(0,l.Wm)(g,{class:(0,n.C_)({"text-subtitle1":e.$q.screen.lt.sm})},{default:(0,l.w5)((()=>[(0,l._)("span",null,(0,n.zw)(e.routeTitle),1)])),_:1},8,["class"]),(0,l.wy)((0,l._)("div",{class:"q-mr-md"},(0,n.zw)(`${null===(i=e.walletUser)||void 0===i?void 0:i.name} ${e.t("on")} ${e.ShrinkChainID(null===(o=e.walletUser)||void 0===o?void 0:o.chainId)}`),513),[[a.F8,e.walletUser&&e.$q.screen.gt.sm]]),(0,l._)("div",c,[(0,l.Wm)(w,{class:"col",clickable:"",to:"/_settings_/connection"},{default:(0,l.w5)((()=>[(0,l.Wm)(v,null,{default:(0,l.w5)((()=>[(0,l.Wm)(b,{size:"xs",name:"wifi",color:e.connectColor},null,8,["color"])])),_:1})])),_:1}),(0,l.Wm)(w,{class:"col",clickable:"",onClick:t[2]||(t[2]=t=>{var i;return null===(i=e.langSelectEl)||void 0===i?void 0:i.showPopup()})},{default:(0,l.w5)((()=>[(0,l.Wm)(v,null,{default:(0,l.w5)((()=>[(0,l.Wm)(y,{ref:"langSelectEl",dark:"",class:"emoji-font",modelValue:e.locale,"onUpdate:modelValue":t[1]||(t[1]=t=>e.locale=t),options:e.localeOptions,dense:"",borderless:"","emit-value":"","map-options":"","options-dense":"","hide-dropdown-icon":""},{option:(0,l.w5)((t=>[(0,l.Wm)(w,(0,l.dG)(t.itemProps,{class:e.brightStyle?(t.selected?"text-blue-8":"text-black")+" bg-blue-grey-3":""}),{default:(0,l.w5)((()=>[(0,l.Wm)(v,{class:"emoji-font"},{default:(0,l.w5)((()=>[(0,l.Wm)(N,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(t.opt.label),1)])),_:2},1024)])),_:2},1024),(0,l.Wm)(v,{class:"q-mr-md"},{default:(0,l.w5)((()=>[(0,l.Wm)(N,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(t.opt.name),1)])),_:2},1024)])),_:2},1024)])),_:2},1040,["class"])])),_:1},8,["modelValue","options"])])),_:1})])),_:1})])]})),_:1})])),_:1},8,["class"]),(0,l.Wm)(h,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":t[3]||(t[3]=t=>e.leftDrawerOpen=t),bordered:"","content-class":"bg-grey-1"},null,8,["modelValue"]),e.isFirstLoadHome?(0,l.wy)(((0,l.wg)(),(0,l.j4)(z,{key:0},{default:(0,l.w5)((()=>[(0,l.Wm)(j)])),_:1},512)),[[a.F8,"home"==e.route.name]]):(0,l.kq)("",!0),e.isFirstLoadBrowser?(0,l.wy)(((0,l.wg)(),(0,l.j4)(z,{key:1},{default:(0,l.w5)((()=>[(0,l.Wm)(P)])),_:1},512)),[[a.F8,"browser"==e.route.name]]):(0,l.kq)("",!0),(0,l.wy)((0,l.Wm)(z,null,{default:(0,l.w5)((()=>[(0,l.Wm)(S,null,{default:(0,l.w5)((({Component:e})=>[(0,l.Wm)(a.uT,{name:"fade",mode:"out-in"},{default:(0,l.w5)((()=>[((0,l.wg)(),(0,l.j4)((0,l.LL)(e)))])),_:2},1024)])),_:1})])),_:1},512),[[a.F8,"home"!=e.route.name&&"browser"!=e.route.name]]),(0,l.Wm)(Z,{elevated:"",class:(0,n.C_)([e.brightStyle?"bg-blue-grey-6":"bg-dark","text-white"])},{default:(0,l.w5)((()=>[(0,l.Wm)(W,{modelValue:e.tab,"onUpdate:modelValue":t[4]||(t[4]=t=>e.tab=t),class:"fit text-white","indicator-color":e.indicatorColor,"active-color":e.indicatorColor,"switch-indicator":""},{default:(0,l.w5)((()=>[(0,l.Wm)(f,{to:{name:"home"},name:"home",icon:"eva-home",class:"col-2"}),(0,l.Wm)(f,{to:{name:"transfer"},name:"transfer",icon:"eva-swap",class:"col-2"}),(0,l._)("div",s,[(0,l.wy)((0,l.Wm)(m,{class:"navi-btn",icon:"trip_origin",round:"",size:"xl",onClick:e.camClick,"text-color":e.isQRPageOpen?"red":""},null,8,["onClick","text-color"]),[[Y,e.camSwipe,void 0,{prevent:!0,mouse:!0}]])]),(0,l.Wm)(f,{to:{name:"vote"},name:"vote",icon:"equalizer",class:"col-2"}),(0,l.Wm)(f,{to:{name:"browser"},name:"browser",icon:"ion-planet",class:"col-2"})])),_:1},8,["modelValue","indicator-color","active-color"])])),_:1},8,["class"]),(0,l.Wm)(D),(0,l.Wm)(k,{modelValue:e.redirectDialog,"onUpdate:modelValue":t[5]||(t[5]=t=>e.redirectDialog=t),persistent:""},{default:(0,l.w5)((()=>[(0,l.Wm)(V,null,{default:(0,l.w5)((()=>[(0,l.Wm)(G,{class:"row items-center"},{default:(0,l.w5)((()=>[(0,l.Wm)(x,{icon:"signal_wifi_off",color:"primary","text-color":"white"}),r,(0,l._)("div",u,(0,n.zw)(e.redirectPath),1)])),_:1}),(0,l.Wm)(A,{align:"right"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(m,{flat:"",label:"No",color:"primary"},null,512),[[C]]),(0,l.wy)((0,l.Wm)(m,{flat:"",label:"Redirect",color:"primary",onClick:e.redirect},null,8,["onClick"]),[[C]])])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})}var I=i(60499),m=i(71947),g=i(28339),b=i(76647),v=i(47506),w=i(68816),N=i(47462);const y={class:"col-12 col-sm-5"},M={class:"q-pt-md q-mr-sm"},p={class:"row"},h={class:"col-10 col-11-sm"},j={class:"col-2 col-1-sm items-end"},z={class:"full-width q-px-sm row justify-between",style:{position:"relative"}},P={class:"col",style:{height:"58px"}},S={class:"q-mx-md text-h3 text-thin"},f={class:"col"},W={class:"scroll q-pa-md q-pl-xl row",style:{height:"80%"}},Z={class:"col-12 col-8-sm row"},D={class:"col-12 q-gutter-md"},x={style:{"word-wrap":"normal"}},G={key:"update",class:"full-width row justify-center"},A={class:"col-12 col-sm-6"};function V(e,t,o,c,s,r){const u=(0,l.up)("q-btn"),d=(0,l.up)("q-tooltip"),I=(0,l.up)("social-channels"),m=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(m,{class:"items-stretch row justify-between"},{default:(0,l.w5)((()=>[(0,l._)("div",y,[(0,l._)("div",M,[(0,l._)("div",p,[(0,l._)("div",h,[(0,l.wy)((0,l._)("div",{class:"full-width q-px-md textOutput text-body1",ref:"outputDiv"},(0,n.zw)(e.outputText),513),[[a.F8,e.isPlaying]])]),(0,l._)("div",j,[(0,l.wy)((0,l._)("div",null,[((0,l.wg)(),(0,l.iD)(l.HY,null,(0,l.Ko)([2,3,4,5],((t,i)=>(0,l.Wm)(a.uT,{key:i,appear:"",name:"aniMenuIcon"},{default:(0,l.w5)((()=>[t==e.aniIndex?((0,l.wg)(),(0,l.j4)(u,{key:0,class:(0,n.C_)(["q-mt-sm",e.brightStyle?"bg-blue-grey-6":"bg-black"]),style:{border:"1px solid"},icon:e.indicatorIcon(t-1),"text-color":e.indicatorColor(t-1),to:{name:e.toPage(t-1)}},null,8,["icon","text-color","class","to"])):(0,l.kq)("",!0)])),_:2},1024))),64))],512),[[a.F8,-1!==e.aniIndex]])])]),(0,l._)("div",z,[(0,l._)("div",P,[(0,l.Wm)(a.uT,{appear:"",name:"logoIndex"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l._)("div",S,"SavAct",512),[[a.F8,!e.isPlaying&&e.thisPageIsActive]])])),_:1})]),(0,l._)("div",f,[(0,l.Wm)(a.uT,{appear:"",name:"tranYT"},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{class:(0,n.C_)(["float-right",{"navi-btn":!e.isPlaying}]),icon:e.isPlaying?"stop":`img:${i(34420)}`,round:"",onClick:t[0]||(t[0]=t=>e.isPlaying?e.stopPlayingNextTime():e.startAnimation())},null,8,["class","icon"])])),_:1})])])]),(0,l._)("div",W,[(0,l._)("div",Z,[(0,l._)("div",D,[((0,l.wg)(),(0,l.j4)(a.W3,{appear:"",key:e.aniTriggerIn,name:"list"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.listPages,(t=>((0,l.wg)(),(0,l.j4)(u,{class:"navi-btn full-width",key:t.key.toString(),label:e.shrinkText(t.title),to:t.link},{default:(0,l.w5)((()=>[(0,l.Wm)(d,null,{default:(0,l.w5)((()=>[(0,l._)("div",x,(0,n.zw)(t.descr),1),(0,l._)("div",null,(0,n.zw)(`[Uploaded by ${t.editor}]`),1)])),_:2},1024)])),_:2},1032,["label","to"])))),128)),(0,l.wy)((0,l._)("div",G,[(0,l.Wm)(u,{round:"",icon:"more_vert",onClick:e.loadMoreLinks,loading:e.isLoading,disable:e.isLoading},null,8,["onClick","loading","disable"])],512),[[a.F8,!e.isLoadAll]])])),_:1}))])])])]),(0,l._)("div",A,[(0,l._)("div",{class:(0,n.C_)(["fit text-right q-mt-sm",{"q-px-md":e.$q.screen.lt.sm}])},[(0,l.Wm)(I,{"no-scroll":"",vertical:e.$q.screen.gt.xs,links:e.socialLinks,onOpen:e.openSocial,size:"2em",color:e.$q.dark.isActive?void 0:"grey",wrap:""},null,8,["vertical","links","onOpen","color"])],2)])])),_:1})}var k=i(71005),T=i(5980),Y=i(62659),C=i(28775),L=i(3390),H=i(17779),B=function(e,t,i,l){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,a){function o(e){try{s(l.next(e))}catch(t){a(t)}}function c(e){try{s(l["throw"](e))}catch(t){a(t)}}function s(e){e.done?i(e.value):n(e.value).then(o,c)}s((l=l.apply(e,t||[])).next())}))};const Q=(0,l.aZ)({name:"page-index",components:{SocialChannels:k["default"]},props:{aniTrigger:{type:Boolean,required:!1,default:!1}},setup(){const e=(0,b.QT)({useScope:"global"}).t.bind(this),t=(0,L.b)(),i=(0,l.Fl)((()=>t.brightStyle)),n=(0,l.Fl)((()=>{let t=`<a class="twitter-timeline" data-width="100%" data-theme="${i.value?"light":"dark"}" href="https://twitter.com/SavActHQ?ref_src=twsrc%5Etfw" target="_blank"><div style="text-align: center">${e("newsAlt")}<br>${e("newsAltClick")}</div></a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"><\/script>`;return t})),a=(0,Y.r)(),o=(0,l.Fl)((()=>a.allConnects)),c=(0,I.iH)([]),s=(0,I.iH)(!1),r=(0,I.iH)(!1);let u=BigInt(0);const d=BigInt(1),m=(0,T.GetConnectByChainId)("eos",o.value),v=(0,I.iH)(!1),w=(0,g.yj)(),N=(0,I.iH)(!1),y=(0,l.Fl)((()=>"home"==w.name));function M(){return B(this,void 0,void 0,(function*(){if(void 0==m||r.value)return;r.value=!0;const e=yield m.GetPageList("savactsavweb",u,u+d);if(H.log("list first pages",e),void 0==e)return s.value=!0,void(r.value=!1);e.length<=d&&(s.value=!0),u+=BigInt(e.length);const t=u;H.log("list pages",e);for(let i of e)if(i.link.length>0){switch(i.link[0]){case"#":i.link=i.link.substring(1);break;case"_":continue}t==u&&c.value.push(i)}r.value=!1}))}function p(e){return e.length>30?e.substring(0,27)+"...":e}(0,l.YP)(w,(e=>{"home"==e.name?(N.value=!N.value,z.value&&!P.value&&(P.value=!0,setTimeout((()=>S.startAnimation()),1e3))):S&&(Z(),P.value=!1)}));const h=(0,I.iH)(""),j=(0,l.Fl)((()=>[{msg:e("welcomeToSavAct"),blinks:4},{msg:e("menuDown"),blinks:3},{msg:e("menuFraudProtect"),blinks:4},{msg:e("menuVote"),blinks:4},{msg:e("menuBrowser"),blinks:4},{msg:e("menuQR"),blinks:4}])),z=(0,l.Fl)((()=>t.infoAnimate&&t.infoAniPage[L.X.IndexPage])),P=(0,I.iH)(!1);let S;const f=(0,I.iH)(),W=(0,I.iH)(-1);function Z(){S.stopAnimation()}function D(e){switch(e){case 0:return"teal-12";case 1:return"light-green-13";case 2:return"deep-orange-6";case 3:return"cyan-12";case 4:return"red";default:return"white"}}function x(e){switch(e){case 0:return"eva-home";case 1:return"eva-swap";case 2:return"equalizer";case 3:return"ion-planet";case 4:return"trip_origin";default:return""}}function G(e){switch(e){case 0:return"home";case 1:return"transfer";case 2:return"vote";case 3:return"browser";case 4:return"cam"}}function A(e){e.startsWith("https://")||e.startsWith("http://")||(e="https://"+e),window.open(e,"_blank")}(0,l.bv)((()=>{if(f.value){const e=new C.DivShowByHeight(f,P,90);S=new C.OutputAnimation(h,j,W,(()=>e.enter()),(()=>e.leave())),z.value&&S.startAnimation()}else P.value=!1;M()})),(0,l.Jd)((()=>{S&&(Z(),P.value=!1)})),z.value&&(P.value=!0);const V=(0,I.iH)([{url:"t.me/SavActGroup",note:"Discussions and news"},{url:"youtube.com/@SavActProject",note:"Explanation videos"},{url:"twitter.com/SavActHQ",note:"News"},{url:"instagram.com/savact_hq/",note:"Advertising"},{url:"facebook.com/groups/SavAct",note:"News"}]);function k(e){e>=0&&A(V.value[e].url)}function Q(){t.setInfoAniPage(L.X.IndexPage,!1),Z()}return{t:e,openSocial:k,socialLinks:V,thisPageIsActive:y,brightStyle:i,listPages:c,loadMoreLinks:M,shrinkText:p,isLoadAll:s,isLoading:r,showNews:v,aniTriggerIn:N,outputText:h,startAnimation:()=>S.startAnimation(),stopPlayingNextTime:Q,isPlaying:P,outputDiv:f,animate:z,aniIndex:W,indicatorColor:D,indicatorIcon:x,toPage:G,newsDoc:n}}});var F=i(11639),O=i(69885),R=i(68879),J=i(46858),X=i(69984),E=i.n(X);const _=(0,F.Z)(Q,[["render",V],["__scopeId","data-v-42959197"]]),U=_;E()(Q,"components",{QPage:O.Z,QBtn:R.Z,QTooltip:J.Z});const q=["src"],K={key:1,class:"q-pt-md"},$={class:"col row justify-center full-height full-width text-center q-pt-md"},ee={class:"q-mt-md full-width row justify-center"},te={class:"col-6"},ie={key:2,class:"full-width q-pa-sm text-right",style:{position:"absolute",bottom:"0"}};function le(e,t,i,o,c,s){const r=(0,l.up)("q-btn"),u=(0,l.up)("browser-address-input"),d=(0,l.up)("YouTubeEmbed"),I=(0,l.up)("q-spinner-gears"),m=(0,l.up)("q-chip"),g=(0,l.up)("q-linear-progress"),b=(0,l.up)("q-inner-loading"),v=(0,l.up)("q-card"),w=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(w,{class:"column",style:{height:"0"}},{default:(0,l.w5)((()=>[(0,l.Wm)(a.uT,{appear:"",name:"browsMenu"},{default:(0,l.w5)((()=>[((0,l.wg)(),(0,l.iD)("div",{class:"q-pr-md q-py-sm row",key:e.aniTriggerIn},[(0,l.Wm)(r,{class:"col-auto",size:"sm",flat:"",style:{margin:"0",padding:"10px",color:"transparent"},onClick:e.hiddenFunction},null,8,["onClick"]),(0,l.Wm)(u,{modelValue:e.address,"onUpdate:modelValue":t[0]||(t[0]=t=>e.address=t),onEnter:e.enterFile,onFile:e.userAddFile},null,8,["modelValue","onEnter","onFile"])]))])),_:1}),(0,l.Wm)(v,{class:"col"},{default:(0,l.w5)((()=>[""!=e.currentSrc?((0,l.wg)(),(0,l.iD)("iframe",{key:0,ref:"browserFrame",class:(0,n.C_)(["col-grow full-height full-width browser",{"bg-white":0!=e.currentSrc.length}]),name:"browserwindow",onLoad:t[1]||(t[1]=(...t)=>e.onLoadBrowserIframe&&e.onLoadBrowserIframe(...t)),src:e.currentSrc},null,42,q)):e.visible?((0,l.wg)(),(0,l.iD)("div",K,[(0,l.wy)((0,l._)("div",{class:"col-12 q-px-md textOutput text-body1",ref:"outputDiv"},(0,n.zw)(e.outputText),513),[[a.F8,e.isPlaying]]),(0,l._)("div",$,[(0,l.Wm)(a.uT,{appear:"",name:"tranYT"},{default:(0,l.w5)((()=>[((0,l.wg)(),(0,l.j4)(d,{key:e.aniTriggerIn,class:(0,n.C_)({"btn-inBg":e.isPlaying}),style:{position:"absolute","aspect-ratio":"16/9","max-width":"600px",width:"100%"},srcid:e.t("ytSavWeb"),agb:e.t("ytAGB"),title:"YouTube video player",wildcardsrc:"video-wildcards/savweb.png"},null,8,["class","srcid","agb"]))])),_:1})])])):(0,l.kq)("",!0),(0,l.Wm)(b,{showing:e.isLoading},{default:(0,l.w5)((()=>[(0,l.Wm)(I,{size:"40%",color:"primary"}),(0,l.Wm)(m,{class:"q-mt-md",color:e.loadStatus.getError.value?"red":"primary","text-color":"white",icon:e.loadStatus.getError.value?"error":void 0},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e.loadStatus.getLog.value[e.loadStatus.getLog.value.length-1]),1)])),_:1},8,["color","icon"]),(0,l._)("div",ee,[(0,l._)("div",te,[(0,l.Wm)(g,{value:e.loadStatus.getStep.value/e.loadStatus.getMaxStep.value},null,8,["value"])])])])),_:1},8,["showing"]),""==e.currentSrc?((0,l.wg)(),(0,l.iD)("div",ie,[(0,l.Wm)(a.uT,{appear:"",name:"tranYT"},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{icon:e.isPlaying?"stop":"replay",round:"",onClick:t[2]||(t[2]=t=>e.isPlaying?e.stopPlayingNextTime():e.startAnimation())},null,8,["icon"])])),_:1})])):(0,l.kq)("",!0)])),_:1})])),_:1})}var ne=i(14270),ae=i(12381),oe=i(86350),ce=i(54743),se=i(43369),re=i(6827),ue=i(90110),de=i(93249),Ie=i(28237),me=i(17779),ge=function(e,t,i,l){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,a){function o(e){try{s(l.next(e))}catch(t){a(t)}}function c(e){try{s(l["throw"](e))}catch(t){a(t)}}function s(e){e.done?i(e.value):n(e.value).then(o,c)}s((l=l.apply(e,t||[])).next())}))};const be=(0,l.aZ)({name:"page-browser",components:{YouTubeEmbed:ae["default"],BrowserAddressInput:ne["default"]},setup(){const e=(0,b.QT)({useScope:"global"}).t.bind(this),t=(0,L.b)(),i=(0,Y.r)(),n=(0,g.yj)(),a=(0,g.tv)();function o(e,t,i=!0){return N.currentPage=t,r.value=t.link,i?e.objURL==m.value?(m.value=e.objURL,y.postMsg({SavWeb:N.currentPage})):m.value=e.objURL:window.location.href=e.objURL,N.currentPage.link}let c;const s=P(!0).substring(1),r=(0,I.iH)(s),u=(0,I.iH)(),d=(0,l.Fl)((()=>i.allConnects)),m=(0,I.iH)(""),v=(0,I.iH)(!1),w=new se.LoadStatus(0),N={currentPage:Object.assign(Object.assign({f:"ini",darkstyle:void 0!=t.brightStyle&&!t.brightStyle},(0,ce.GetSavWebRouteLocation)(void 0)),{link:"",idToken:""})};let y;function M(){return ge(this,void 0,void 0,(function*(){if(v.value)return;v.value=!0,w.reset(0);const e=ue.ChainFileHandler.getParamsAndSuitableConnect(r.value,d.value);if(void 0===e||!1===e)return v.value=!1,void w.setError("Params error");const i=e.connect;if("chain"in e.params&&"tail"in e.params){const l=e.params,n=Object.assign(Object.assign({f:"ini",darkstyle:void 0!=t.brightStyle&&!t.brightStyle},(0,ce.GetSavWebRouteLocation)(l.tail)),{link:(0,oe.LinkParamsToString)(l),idToken:(0,ce.randomString)()});if(!(null===c||void 0===c?void 0:c.check())){const e=yield ue.ChainFileHandler.downloadByParams(i,l,w);void 0!=e?o(e,n):j()}}else{const t=e.params;r.value=t.toString(),me.log("Immutable comments")}v.value=!1}))}function p(e){return ge(this,void 0,void 0,(function*(){const i=m.value;m.value="";const n=(0,oe.LinkParamsToString)(e);yield(0,l.Y3)(),m.value=i,r.value=n,N.currentPage=Object.assign(Object.assign({f:"ini",darkstyle:void 0!=t.brightStyle&&!t.brightStyle},(0,ce.GetSavWebRouteLocation)(e.tail)),{link:n,idToken:(0,ce.randomString)()}),y.postMsg({SavWeb:N.currentPage})}))}function h(){const e=(0,oe.GetLinkParams)(r.value);"chain"in e&&"file"===e.chain?p(e):M()}function j(){m.value=""}function z(e){me.log(e.srcElement.name),"browserwindow"===e.srcElement.name?y.postMsg({SavWeb:N.currentPage}):me.log("Wrong iFrame name!")}function P(e=!1){if(1==n.fullPath.length)return me.log("Go to home"),a.replace({name:"home"}),"/";if(n.fullPath.length>1&&"_"==n.fullPath[1])return e||e||a.replace({name:"404"}),"/";if(n.fullPath.startsWith("/?goto=")){const e="/"+n.fullPath.substring("/"==n.fullPath[7]?8:7);return e}return n.fullPath}s.length>1&&M(),(0,l.bv)((()=>{if(me.log("Mounted Browser Frame",u,null===u||void 0===u?void 0:u.value),y=new Ie.BrowserMessageHandler(u,(()=>{M()}),w,N,r),me.log("Mounted Browser"),c=new de.BrowserDevMode("/dist/index.html",o),c.startChecking(),y.isListening.value||y.startListening(),A.value){const e=new C.DivShowByHeight(A,x,60);G=new C.OutputAnimation(W,Z,void 0,(()=>e.enter()),(()=>e.leave())),D.value&&G.startAnimation()}else x.value=!1})),(0,l.Jd)((()=>{y.isListening.value&&(y.stopListening(),V(),x.value=!1)}));const S=(0,I.iH)(0),f=(0,I.iH)(!0);(0,l.YP)(n,(e=>{if("browser"==e.name){if(n.fullPath.startsWith("/?goto=")){const e=n.fullPath.substring("/"==n.fullPath[7]?8:7);!1===e.startsWith("_browser_")&&e.length>1&&(r.value=e,M())}let e=r.value.length>0&&"#"==r.value[0]?`${r.value}`:`#${r.value}`;history.replaceState(history.state,"",e),y.isListening.value||y.startListening(),S.value=S.value?0:1,f.value=!0,D.value&&!x.value&&(x.value=!0,setTimeout((()=>G.startAnimation()),1e3))}else y.isListening.value&&(y.stopListening(),V(),x.value=!1),f.value=!1}));const W=(0,I.iH)(""),Z=(0,l.Fl)((()=>[{msg:e("immortalWebsites"),blinks:4},{msg:e("forEverOn"),blinks:6},{msg:e("noCosts"),blinks:4}])),D=(0,l.Fl)((()=>t.infoAnimate&&t.infoAniPage[L.X.BrowserPage])),x=(0,I.iH)(!1);let G;const A=(0,I.iH)();function V(){G.stopAnimation()}function k(){me.log("hiddenFunction"),me.log(m.value)}function T(){t.setInfoAniPage(L.X.BrowserPage,!1),V()}function H(e,t){c.viewTestFileInBrowser(e,t)}return(0,l.YP)(t.browserPayments,(()=>{const e=t.browserPayments.findIndex((e=>!e.answered&&e.tokenId===N.currentPage.idToken&&!1===e.active));if(-1!=e){me.log("Send payment result");const l=t.browserPayments[e];t.answeredBrowserPayment(e);try{const e=JSON.stringify({SavWeb:{f:"payResult",id:l.id,result:l.result}});y.postMsg(JSON.parse(e))}catch(i){me.log("Error on sending payment result",i)}}})),(0,l.YP)((()=>w.getError.value),(e=>{e&&(re.Z.create({message:w.getErrorMsg.value,color:"red",icon:"error",position:"top",timeout:4e3}),V())})),{t:e,loadStatus:w,stopPlayingNextTime:T,visible:f,address:r,enterFile:h,onLoadBrowserIframe:z,currentSrc:m,isLoading:v,browserFrame:u,aniTriggerIn:S,outputText:W,startAnimation:()=>G.startAnimation(),isPlaying:x,outputDiv:A,hiddenFunction:k,userAddFile:H}}});var ve=i(44458),we=i(60854),Ne=i(9120),ye=i(57691),Me=i(8289);const pe=(0,F.Z)(be,[["render",le]]),he=pe;E()(be,"components",{QPage:O.Z,QBtn:R.Z,QCard:ve.Z,QInnerLoading:we.Z,QSpinnerGears:Ne.Z,QChip:ye.Z,QLinearProgress:Me.Z});var je=i(17779),ze=function(e,t){var i={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(i[l]=e[l]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(l=Object.getOwnPropertySymbols(e);n<l.length;n++)t.indexOf(l[n])<0&&Object.prototype.propertyIsEnumerable.call(e,l[n])&&(i[l[n]]=e[l[n]])}return i};const Pe=(0,l.aZ)({name:"MainLayout",components:{MainMenu:w["default"],MainEosioProvider:N["default"],PageIndex:U,PageBrowser:he},setup(){je.log("Platform",v.ZP.is),"safari"in v.ZP.is&&!0===v.ZP.is.safari&&"number"==typeof v.ZP.is.versionNumber&&v.ZP.is.versionNumber<14&&alert("Your webbrowser is too old. Please update your system or use an alternative modern webbrowser like Firefox or Chrome.");const e=(0,L.b)(),t=(0,Y.r)(),i=(0,g.tv)(),n=(0,g.yj)();t.clearAllConnects(),T.Chains.forEach((e=>{t.addConnect(new T.Connect(e))})),!t.selectedConnect&&t.allConnects.length>0&&t.setSelectedConnect(t.allConnects[0]);const a=3,o=(0,l.Fl)((()=>{const e=t.selectedConnect;return e?void 0==e.getRamEPs||e.getRamEPs.length<=0?e.testedAllEPsAvailable?"red":"grey":e.getRamEPs.length>=a?"green":"orange":"grey"})),c=(0,l.Fl)({set:t=>{e.setBrightStyle(t)},get:()=>e.brightStyle});c.value=e.brightStyle;const s=(0,l.Fl)((()=>t.walletUser)),r=(0,l.Fl)((()=>{var e;let t=null===(e=n.name)||void 0===e?void 0:e.toString().replace("-"," ");return t&&(t.startsWith("page-")&&(t=t.substring(5)),t=`${t[0].toUpperCase()}${t.substring(1)}`),(x.value?"":"SavAct")+(n.name&&n.name.toString().length>0?` ${x.value?"":"|"} ${t}`:"")})),u=(0,I.iH)(null),d=(0,b.QT)({useScope:"global"}),w=d.locale,N=d.t.bind(this),y=[{value:"en-US",label:"🇬🇧",name:"English"},{value:"de",label:"🇩🇪",name:"German"}],M=m.Z.lang.getLocale();if(void 0!=M){let e=d.availableLocales.find((e=>e==M));if(void 0==e){const t=M.indexOf("-");if(t>0){const i=M.substring(0,t);e=d.availableLocales.find((e=>e==i)),void 0!=e&&(w.value=i)}}else w.value=M}const p=(0,I.iH)(!1),h=(0,I.iH)(""),j=(0,l.Fl)((()=>{switch(h.value){case"home":return"teal-12";case"transfer":return"light-green-13";case"vote":return"deep-orange-6";case"browser":return"cyan-12";default:return"white"}})),z=(0,I.iH)(!1),P=(0,I.iH)("home"==n.name),S=(0,I.iH)("browser"==n.name);function f(){i.push({name:"cam"})}(0,g.ao)(((e,t,l)=>{if(je.log("Route change to: ",e),"home"==e.name)P.value=!0;else if("browser"==e.name)S.value=!0;else if("send"==t.name){let t;if(void 0!==e.name&&(t=i.getRoutes().find((t=>t.name===e.name))),void 0===t){je.log("Change route to transfer",e);const n="transfer";return void((t=i.getRoutes().find((e=>e.name===n)))&&l({name:n}))}}l()}));let W=0;function Z(e){var t=ze(e,[]);t.isFirst?(je.log("Start"),Date.now()-W<100&&f(),W=Date.now()):t.isFinal&&(je.log("Final"),f())}function D(){je.log("Click"),f()}const x=(0,l.Fl)((()=>{if("_"==n.path.at(1)){const e=n.path.indexOf("/",2);if(-1!=e){const t=n.path.at(e+1);if(void 0!=t&&void 0!="#?&!".indexOf(t))return n.path.substring(0,e)}}return!1}));function G(){je.log("Go back");const e=x.value;e&&(history.length>1?i.back():i.push({path:e}))}(0,l.bv)((()=>{window.addEventListener("message",C),k=!0})),(0,l.Jd)((()=>{k&&(window.removeEventListener("message",C),k=!1)}));const A=(0,I.iH)(!1),V=(0,I.iH)("");let k=!1;function C(e){if(void 0!=e&&void 0!=e.data&&e.data){const t=e.data;if(t.SavWeb){const e=t.SavWeb;void 0!=e.idToken&&""!=e.idToken&&void 0!=e.f&&"ini"==e.f&&H()}else if(t.SavAct&&"fullPath"in t.SavAct&&"string"==typeof t.SavAct.fullPath&&t.SavAct.redirect){je.log("Redirect request",t.SavAct.fullPath);const e=t.SavAct.fullPath.indexOf("://");if(e>0&&"savact.app"==t.SavAct.fullPath.substr(e+3,10)){const i=t.SavAct.fullPath.indexOf("#",e+13);if(i>0){const e=t.SavAct.fullPath.substring(i+1);e.length>0&&"/"==e[0]?V.value=`${e.length>1&&"_"==e[1]?"/":""}${e.substring(1)}`:V.value=e}else V.value=""}else{const e=t.SavAct.fullPath.length>0&&t.SavAct.fullPath[0]?t.SavAct.fullPath.substring(1):t.SavAct.fullPath;V.value=e}i.push({name:"home"}),V.value.length>0&&(A.value=!0)}}}function H(){je.log("Send redirect request to",n.fullPath),window.parent.postMessage({SavAct:{fullPath:n.fullPath,redirect:!0}},"*")}function B(){je.log("redirect to",V.value),i.push(V.value)}return{leftDrawerOpen:p,camClick:D,camSwipe:Z,tab:h,indicatorColor:j,isQRPageOpen:z,brightStyle:c,route:n,isFirstLoadHome:P,isFirstLoadBrowser:S,locale:w,localeOptions:y,t:N,goBack:G,hasParent:x,walletUser:s,ShrinkChainID:T.ShrinkChainID,routeTitle:r,redirectPath:V,redirectDialog:A,redirect:B,connectColor:o,langSelectEl:u}}});var Se=i(20249),fe=i(16602),We=i(51663),Ze=i(81973),De=i(490),xe=i(76749),Ge=i(22857),Ae=i(26384),Ve=i(33115),ke=i(12133),Te=i(71378),Ye=i(47817),Ce=i(94337),Le=i(32074),He=i(63190),Be=i(61357),Qe=i(11821),Fe=i(2873),Oe=i(62146);const Re=(0,F.Z)(Pe,[["render",d],["__scopeId","data-v-4bc31b9d"]]),Je=Re;E()(Pe,"components",{QLayout:Se.Z,QHeader:fe.Z,QToolbar:We.Z,QBtn:R.Z,QToolbarTitle:Ze.Z,QItem:De.Z,QItemSection:xe.Z,QIcon:Ge.Z,QSelect:Ae.Z,QItemLabel:Ve.Z,QPageContainer:ke.Z,QFooter:Te.Z,QTabs:Ye.Z,QRouteTab:Ce.Z,QDialog:Le.Z,QCard:ve.Z,QCardSection:He.Z,QAvatar:Be.Z,QCardActions:Qe.Z}),E()(Pe,"directives",{TouchPan:Fe.Z,ClosePopup:Oe.Z})},34420:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgOTc0IDE0NjAiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDp1cmwoI1VuYmVuYW5udGVyX1ZlcmxhdWZfMjc5KTt9LmNscy0ye2ZpbGw6dXJsKCNVbmJlbmFubnRlcl9WZXJsYXVmXzI4NSk7fS5jbHMtM3tmaWxsOnVybCgjVW5iZW5hbm50ZXJfVmVybGF1Zl8yODkpO30uY2xzLTR7ZmlsbDp1cmwoI1VuYmVuYW5udGVyX1ZlcmxhdWZfMzEyKTt9LmNscy01e2ZpbGw6dXJsKCNVbmJlbmFubnRlcl9WZXJsYXVmXzMzOCk7fS5jbHMtNntmaWxsOnVybCgjVW5iZW5hbm50ZXJfVmVybGF1Zl8zNjIpO30uY2xzLTd7ZmlsbDp1cmwoI1VuYmVuYW5udGVyX1ZlcmxhdWZfMzU3KTt9LmNscy04e2ZpbGw6dXJsKCNVbmJlbmFubnRlcl9WZXJsYXVmXzMwMSk7fS5jbHMtOXtmaWxsOnVybCgjVW5iZW5hbm50ZXJfVmVybGF1Zl8yMDApO30uY2xzLTEwe2ZpbGw6dXJsKCNVbmJlbmFubnRlcl9WZXJsYXVmXzU4KTt9LmNscy0xMXtmaWxsOnVybCgjVW5iZW5hbm50ZXJfVmVybGF1Zl8xOTQpO30uY2xzLTEye2ZpbGw6dXJsKCNVbmJlbmFubnRlcl9WZXJsYXVmXzM2OCk7fS5jbHMtMTN7ZmlsbDp1cmwoI1VuYmVuYW5udGVyX1ZlcmxhdWZfMjQxKTt9LmNscy0xNHtmaWxsOnVybCgjVW5iZW5hbm50ZXJfVmVybGF1Zl8yNTIpO30uY2xzLTE1e2ZpbGw6dXJsKCNVbmJlbmFubnRlcl9WZXJsYXVmXzI3Myk7fS5jbHMtMTZ7ZmlsbDp1cmwoI1VuYmVuYW5udGVyX1ZlcmxhdWZfMzcwKTt9LmNscy0xN3tmaWxsOm5vbmU7c3Ryb2tlOiMwMDA7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDoycHg7b3BhY2l0eTowLjI7fTwvc3R5bGU+PGxpbmVhckdyYWRpZW50IGlkPSJVbmJlbmFubnRlcl9WZXJsYXVmXzI3OSIgeDE9IjY5NjMuMjIiIHkxPSI2MjI0LjM2IiB4Mj0iNzA5OS43IiB5Mj0iNjUxNy4wNCIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSg3Njg2LjUgNzIwMCkgcm90YXRlKDE4MCkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAuMTQiIHN0b3AtY29sb3I9IiMwM2EzOTIiLz48c3RvcCBvZmZzZXQ9IjAuNzMiIHN0b3AtY29sb3I9IiNhYmU1ZGUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iVW5iZW5hbm50ZXJfVmVybGF1Zl8yODUiIHgxPSI2ODEwLjg5IiB5MT0iNjM5Ni4zMSIgeDI9IjY5MDkuMTkiIHkyPSI2MjAzLjM5IiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKDc2ODYuNSA3MjAwKSByb3RhdGUoMTgwKSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMC4xIiBzdG9wLWNvbG9yPSIjMjFjNWM4Ii8+PHN0b3Agb2Zmc2V0PSIwLjkiIHN0b3AtY29sb3I9IiM4OGU4ZTciLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iVW5iZW5hbm50ZXJfVmVybGF1Zl8yODkiIHgxPSI2ODgyLjMxIiB5MT0iNjI1MS42MSIgeDI9IjY4MTAuODkiIHkyPSI2MDMxLjgxIiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKDc2ODYuNSA3MjAwKSByb3RhdGUoMTgwKSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMC4xIiBzdG9wLWNvbG9yPSIjMTBiMWNhIi8+PHN0b3Agb2Zmc2V0PSIwLjc3IiBzdG9wLWNvbG9yPSIjODdlM2VkIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9IlVuYmVuYW5udGVyX1ZlcmxhdWZfMzEyIiB4MT0iNzA3OCIgeTE9IjU5ODQuNSIgeDI9IjcwNzgiIHkyPSI1NzQxLjUiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzY4Ni41IDcyMDApIHJvdGF0ZSgxODApIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwLjA3IiBzdG9wLWNvbG9yPSIjNmE3OGNiIi8+PHN0b3Agb2Zmc2V0PSIwLjc5IiBzdG9wLWNvbG9yPSIjMDQyNTk0Ii8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9IlVuYmVuYW5udGVyX1ZlcmxhdWZfMzM4IiB4MT0iNzE5OS41IiB5MT0iNTg2MyIgeDI9Ijc0NDIuNSIgeTI9IjU4NjMiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzY4Ni41IDcyMDApIHJvdGF0ZSgxODApIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwLjE1IiBzdG9wLWNvbG9yPSIjMGIwNjk2Ii8+PHN0b3Agb2Zmc2V0PSIwLjk1IiBzdG9wLWNvbG9yPSIjNzg2NmM5Ii8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9IlVuYmVuYW5udGVyX1ZlcmxhdWZfMzYyIiB4MT0iNzI5MC42MiIgeTE9IjU5MzEuODkiIHgyPSI3NDU2LjYiIHkyPSI2MjE5LjM2IiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKDc2ODYuNSA3MjAwKSByb3RhdGUoMTgwKSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMC4zMSIgc3RvcC1jb2xvcj0iIzYxMDQ4NSIvPjxzdG9wIG9mZnNldD0iMC45NCIgc3RvcC1jb2xvcj0iI2M0ODNkOCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJVbmJlbmFubnRlcl9WZXJsYXVmXzM1NyIgeDE9Ijc0NjEuNiIgeTE9IjYyNDEuODkiIHgyPSI3NTc4LjM5IiB5Mj0iNjA4Ni45IiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKDc2ODYuNSA3MjAwKSByb3RhdGUoMTgwKSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMC4xNSIgc3RvcC1jb2xvcj0iI2U0NmNkZCIvPjxzdG9wIG9mZnNldD0iMC45MyIgc3RvcC1jb2xvcj0iI2IzMGJhMyIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJVbmJlbmFubnRlcl9WZXJsYXVmXzMwMSIgeDE9IjY5NTYuNSIgeTE9IjYxMDYiIHgyPSI3MTk5LjUiIHkyPSI2MTA2IiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKDc2ODYuNSA3MjAwKSByb3RhdGUoMTgwKSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMC4wNiIgc3RvcC1jb2xvcj0iIzZhYjZlMiIvPjxzdG9wIG9mZnNldD0iMC43MyIgc3RvcC1jb2xvcj0iIzAzNWVhMSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJVbmJlbmFubnRlcl9WZXJsYXVmXzIwMCIgeDE9IjI1MC43MiIgeTE9IjQ4My4zNiIgeDI9IjM4Ny4yIiB5Mj0iNzc2LjA0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwLjE0IiBzdG9wLWNvbG9yPSIjNzZhOTEzIi8+PHN0b3Agb2Zmc2V0PSIwLjczIiBzdG9wLWNvbG9yPSIjZThmYmM3Ii8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9IlVuYmVuYW5udGVyX1ZlcmxhdWZfNTgiIHgxPSI5Ny42NiIgeTE9IjY2MS4yNiIgeDI9IjE5MC43NCIgeTI9IjQ2MS42NiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMC4xIiBzdG9wLWNvbG9yPSIjY2VkZjIwIi8+PHN0b3Agb2Zmc2V0PSIwLjkiIHN0b3AtY29sb3I9IiNmM2ZmOTQiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iVW5iZW5hbm50ZXJfVmVybGF1Zl8xOTQiIHgxPSIxNjMuOTIiIHkxPSI1MDkuNDYiIHgyPSI5OS41NCIgeTI9IjI4NC45MiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMC4xIiBzdG9wLWNvbG9yPSIjZGJkMTBlIi8+PHN0b3Agb2Zmc2V0PSIwLjc3IiBzdG9wLWNvbG9yPSIjZmZmZjlmIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9IlVuYmVuYW5udGVyX1ZlcmxhdWZfMzY4IiB4MT0iMzY1LjUiIHkxPSIyNDMuNSIgeDI9IjM2NS41IiB5Mj0iMC41IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZkZTc5Ii8+PHN0b3Agb2Zmc2V0PSIwLjgzIiBzdG9wLWNvbG9yPSIjZDU5NDA1Ii8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9IlVuYmVuYW5udGVyX1ZlcmxhdWZfMjQxIiB4MT0iNDg3IiB5MT0iMTIyIiB4Mj0iNzMwIiB5Mj0iMTIyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwLjExIiBzdG9wLWNvbG9yPSIjZWE4YzA1Ii8+PHN0b3Agb2Zmc2V0PSIwLjk3IiBzdG9wLWNvbG9yPSIjZmZkNDlhIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9IlVuYmVuYW5udGVyX1ZlcmxhdWZfMjUyIiB4MT0iNDg3IiB5MT0iMzY1IiB4Mj0iNzMwIiB5Mj0iMzY1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwLjE2IiBzdG9wLWNvbG9yPSIjZGE1NjA1Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZiNDgzIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9IlVuYmVuYW5udGVyX1ZlcmxhdWZfMjczIiB4MT0iNzQ5LjEiIHkxPSI1MDAuODkiIHgyPSI4NjUuODkiIHkyPSIzNDUuOSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMC4xNSIgc3RvcC1jb2xvcj0iI2ZmNzU4NyIvPjxzdG9wIG9mZnNldD0iMC45MyIgc3RvcC1jb2xvcj0iI2U4MTUyMCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJVbmJlbmFubnRlcl9WZXJsYXVmXzM3MCIgeDE9IjI0NCIgeTE9IjM2NSIgeDI9IjQ4NyIgeTI9IjM2NSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZjE3ZiIvPjxzdG9wIG9mZnNldD0iMC44NCIgc3RvcC1jb2xvcj0iI2Q1YjIwMCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjx0aXRsZT5TYXZBY3Q8L3RpdGxlPjxnIGlkPSJMb2dvIj48ZyBpZD0iVW50ZXJlclRlaWwiPjxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSI3MzAgOTcyLjUgNDg3IDcyOS41IDczMCA3MjkuNSA3MzAgOTcyLjUiLz48cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iNzMwIDcyOS41IDk3MyA5NzIuNSA3MzAgOTcyLjUgNzMwIDcyOS41Ii8+PHBvbHlnb24gY2xhc3M9ImNscy0zIiBwb2ludHM9Ijk3MyA5NzIuNSA3MzAgMTIxNS41IDczMCA5NzIuNSA5NzMgOTcyLjUiLz48cG9seWdvbiBjbGFzcz0iY2xzLTQiIHBvaW50cz0iNzMwIDEyMTUuNSA0ODcgMTQ1OC41IDQ4NyAxMjE1LjUgNzMwIDEyMTUuNSIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtNSIgcG9pbnRzPSI0ODcgMTQ1OC41IDI0NCAxMjE1LjUgNDg3IDEyMTUuNSA0ODcgMTQ1OC41Ii8+PHBvbHlnb24gY2xhc3M9ImNscy02IiBwb2ludHM9IjI0NCA5NzIuNSA0ODcgMTIxNS41IDI0NCAxMjE1LjUgMjQ0IDk3Mi41Ii8+PHBvbHlnb24gY2xhc3M9ImNscy03IiBwb2ludHM9IjI0NCAxMjE1LjUgMSA5NzIuNSAyNDQgOTcyLjUgMjQ0IDEyMTUuNSIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtOCIgcG9pbnRzPSI0ODcgMTIxNS41IDczMCA5NzIuNSA3MzAgMTIxNS41IDQ4NyAxMjE1LjUiLz48L2c+PGcgaWQ9Ik9iZXJlclRlaWwiPjxwb2x5Z29uIGNsYXNzPSJjbHMtOSIgcG9pbnRzPSIyNDQgNDg2LjUgNDg3IDcyOS41IDI0NCA3MjkuNSAyNDQgNDg2LjUiLz48cG9seWdvbiBjbGFzcz0iY2xzLTEwIiBwb2ludHM9IjI0NCA3MjkuNSAxIDQ4Ni41IDI0NCA0ODYuNSAyNDQgNzI5LjUiLz48cG9seWdvbiBjbGFzcz0iY2xzLTExIiBwb2ludHM9IjEgNDg2LjUgMjQ0IDI0My41IDI0NCA0ODYuNSAxIDQ4Ni41Ii8+PHBvbHlnb24gY2xhc3M9ImNscy0xMiIgcG9pbnRzPSIyNDQgMjQzLjUgNDg3IDAuNSA0ODcgMjQzLjUgMjQ0IDI0My41Ii8+PHBvbHlnb24gY2xhc3M9ImNscy0xMyIgcG9pbnRzPSI0ODcgMC41IDczMCAyNDMuNSA0ODcgMjQzLjUgNDg3IDAuNSIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMTQiIHBvaW50cz0iNzMwIDQ4Ni41IDQ4NyAyNDMuNSA3MzAgMjQzLjUgNzMwIDQ4Ni41Ii8+PHBvbHlnb24gY2xhc3M9ImNscy0xNSIgcG9pbnRzPSI3MzAgMjQzLjUgOTczIDQ4Ni41IDczMCA0ODYuNSA3MzAgMjQzLjUiLz48cG9seWdvbiBjbGFzcz0iY2xzLTE2IiBwb2ludHM9IjQ4NyAyNDMuNSAyNDQgNDg2LjUgMjQ0IDI0My41IDQ4NyAyNDMuNSIvPjwvZz48L2c+PGcgaWQ9IktvbnR1ciI+PHBvbHlnb24gY2xhc3M9ImNscy0xNyIgcG9pbnRzPSI3MzAgOTczIDQ4NyA3MzAgNzMwIDczMCA3MzAgOTczIi8+PHBvbHlnb24gY2xhc3M9ImNscy0xNyIgcG9pbnRzPSI3MzAgNzMwIDk3MyA5NzMgNzMwIDk3MyA3MzAgNzMwIi8+PHBvbHlnb24gY2xhc3M9ImNscy0xNyIgcG9pbnRzPSI5NzMgOTczIDczMCAxMjE2IDczMCA5NzMgOTczIDk3MyIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMTciIHBvaW50cz0iNzMwIDEyMTYgNDg3IDE0NTkgNDg3IDEyMTYgNzMwIDEyMTYiLz48cG9seWdvbiBjbGFzcz0iY2xzLTE3IiBwb2ludHM9IjQ4NyAxNDU5IDI0NCAxMjE2IDQ4NyAxMjE2IDQ4NyAxNDU5Ii8+PHBvbHlnb24gY2xhc3M9ImNscy0xNyIgcG9pbnRzPSIyNDQgOTczIDQ4NyAxMjE2IDI0NCAxMjE2IDI0NCA5NzMiLz48cG9seWdvbiBjbGFzcz0iY2xzLTE3IiBwb2ludHM9IjI0NCAxMjE2IDEgOTczIDI0NCA5NzMgMjQ0IDEyMTYiLz48cG9seWdvbiBjbGFzcz0iY2xzLTE3IiBwb2ludHM9IjQ4NyAxMjE2IDczMCA5NzMgNzMwIDEyMTYgNDg3IDEyMTYiLz48cG9seWdvbiBjbGFzcz0iY2xzLTE3IiBwb2ludHM9IjI0NCA0ODcgNDg3IDczMCAyNDQgNzMwIDI0NCA0ODciLz48cG9seWdvbiBjbGFzcz0iY2xzLTE3IiBwb2ludHM9IjI0NCA3MzAgMSA0ODcgMjQ0IDQ4NyAyNDQgNzMwIi8+PHBvbHlnb24gY2xhc3M9ImNscy0xNyIgcG9pbnRzPSIxIDQ4NyAyNDQgMjQ0IDI0NCA0ODcgMSA0ODciLz48cG9seWdvbiBjbGFzcz0iY2xzLTE3IiBwb2ludHM9IjI0NCAyNDQgNDg3IDEgNDg3IDI0NCAyNDQgMjQ0Ii8+PHBvbHlnb24gY2xhc3M9ImNscy0xNyIgcG9pbnRzPSI0ODcgMSA3MzAgMjQ0IDQ4NyAyNDQgNDg3IDEiLz48cG9seWdvbiBjbGFzcz0iY2xzLTE3IiBwb2ludHM9IjczMCA0ODcgNDg3IDI0NCA3MzAgMjQ0IDczMCA0ODciLz48cG9seWdvbiBjbGFzcz0iY2xzLTE3IiBwb2ludHM9IjczMCAyNDQgOTczIDQ4NyA3MzAgNDg3IDczMCAyNDQiLz48cG9seWdvbiBjbGFzcz0iY2xzLTE3IiBwb2ludHM9IjQ4NyAyNDQgMjQ0IDQ4NyAyNDQgMjQ0IDQ4NyAyNDQiLz48L2c+PC9zdmc+"}}]);