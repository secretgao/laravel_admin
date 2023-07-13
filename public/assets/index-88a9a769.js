import{o as mt,a as fe,i as _t,w as ne,b as oe,n as me,c as Pe,u as G,r as A,d as Y,g as vt,e as se,f as _e,h as o,j as gt,m as De,k as yt,T as Fe,l as ze,v as Re,p as ht,q as wt,F as T,s as Ue,t as Me,x as Te,y as Ne,z as P,A as w,B as I,C as f,D as S,E as D,G as j,H as u,I as M,J,K as We,L as ce,M as bt,N as At,O as Q,P as Ce,Q as xt,R as Ct}from"./index-6e980fc8.js";const Z=e=>e!=null,de=e=>typeof e=="function",ve=e=>e!==null&&typeof e=="object",Et=e=>ve(e)&&de(e.then)&&de(e.catch),Qe=e=>typeof e=="number"||/^\d+(\.\d+)?$/.test(e),kt=()=>Bt?/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()):!1;function Lt(){}const ge=Object.assign,Bt=typeof window<"u";function Ee(e,t){const a=t.split(".");let d=e;return a.forEach(p=>{var y;d=ve(d)&&(y=d[p])!=null?y:""}),d}const je=null,q=[Number,String],V={type:Boolean,default:!0},X=e=>({type:String,default:e});var ye=typeof window<"u";function Ge(e){let t;oe(()=>{e(),me(()=>{t=!0})}),Pe(()=>{t&&e()})}function Ke(e,t,a={}){if(!ye)return;const{target:d=window,passive:p=!1,capture:y=!1}=a;let l=!1,m;const i=b=>{if(l)return;const $=G(b);$&&!m&&($.addEventListener(e,t,{capture:y,passive:p}),m=!0)},x=b=>{if(l)return;const $=G(b);$&&m&&($.removeEventListener(e,t,y),m=!1)};mt(()=>x(d)),fe(()=>x(d)),Ge(()=>i(d));let k;return _t(d)&&(k=ne(d,(b,$)=>{x($),i(b)})),()=>{k==null||k(),x(d),l=!0}}var ie,ue;function It(){if(!ie&&(ie=A(0),ue=A(0),ye)){const e=()=>{ie.value=window.innerWidth,ue.value=window.innerHeight};e(),window.addEventListener("resize",e,{passive:!0}),window.addEventListener("orientationchange",e,{passive:!0})}return{width:ie,height:ue}}var $t=/scroll|auto|overlay/i,Ot=ye?window:void 0;function St(e){return e.tagName!=="HTML"&&e.tagName!=="BODY"&&e.nodeType===1}function Pt(e,t=Ot){let a=e;for(;a&&a!==t&&St(a);){const{overflowY:d}=window.getComputedStyle(a);if($t.test(d))return a;a=a.parentNode}return t}kt();const Dt=e=>e.stopPropagation();function Ye(e,t){(typeof e.cancelable!="boolean"||e.cancelable)&&e.preventDefault(),t&&Dt(e)}It();function H(e){if(Z(e))return Qe(e)?`${e}px`:String(e)}function Ft(e){const t={};return e!==void 0&&(t.zIndex=+e),t}const zt=/-(\w)/g,qe=e=>e.replace(zt,(t,a)=>a.toUpperCase()),{hasOwnProperty:Rt}=Object.prototype;function Ut(e,t,a){const d=t[a];Z(d)&&(!Rt.call(e,a)||!ve(d)?e[a]=d:e[a]=He(Object(e[a]),d))}function He(e,t){return Object.keys(t).forEach(a=>{Ut(e,t,a)}),e}var Mt={name:"姓名",tel:"电话",save:"保存",clear:"清空",cancel:"取消",confirm:"确认",delete:"删除",loading:"加载中...",noCoupon:"暂无优惠券",nameEmpty:"请填写姓名",addContact:"添加联系人",telInvalid:"请填写正确的电话",vanCalendar:{end:"结束",start:"开始",title:"日期选择",weekdays:["日","一","二","三","四","五","六"],monthTitle:(e,t)=>`${e}年${t}月`,rangePrompt:e=>`最多选择 ${e} 天`},vanCascader:{select:"请选择"},vanPagination:{prev:"上一页",next:"下一页"},vanPullRefresh:{pulling:"下拉即可刷新...",loosing:"释放即可刷新..."},vanSubmitBar:{label:"合计:"},vanCoupon:{unlimited:"无门槛",discount:e=>`${e}折`,condition:e=>`满${e}元可用`},vanCouponCell:{title:"优惠券",count:e=>`${e}张可用`},vanCouponList:{exchange:"兑换",close:"不使用",enable:"可用",disabled:"不可用",placeholder:"输入优惠码"},vanAddressEdit:{area:"地区",areaEmpty:"请选择地区",addressEmpty:"请填写详细地址",addressDetail:"详细地址",defaultAddress:"设为默认收货地址"},vanAddressList:{add:"新增地址"}};const ke=A("zh-CN"),Le=Y({"zh-CN":Mt}),Tt={messages(){return Le[ke.value]},use(e,t){ke.value=e,this.add({[e]:t})},add(e={}){He(Le,e)}};var Nt=Tt;function Wt(e){const t=qe(e)+".";return(a,...d)=>{const p=Nt.messages(),y=Ee(p,t+a)||Ee(p,a);return de(y)?y(...d):y}}function pe(e,t){return t?typeof t=="string"?` ${e}--${t}`:Array.isArray(t)?t.reduce((a,d)=>a+pe(e,d),""):Object.keys(t).reduce((a,d)=>a+(t[d]?pe(e,d):""),""):""}function Qt(e){return(t,a)=>(t&&typeof t!="string"&&(a=t,t=""),t=t?`${e}__${t}`:e,`${t}${pe(t,a)}`)}function ae(e){const t=`van-${e}`;return[t,Qt(t),Wt(t)]}const jt="van-haptics-feedback",Be=5;function Gt(e,{args:t=[],done:a,canceled:d}){if(e){const p=e.apply(null,t);Et(p)?p.then(y=>{y?a():d&&d()}).catch(Lt):p?a():d&&d()}else a()}function re(e){return e.install=t=>{const{name:a}=e;a&&(t.component(a,e),t.component(qe(`-${a}`),e))},e}const Kt=Symbol();function Yt(e){const t=vt();t&&ge(t.proxy,e)}const[qt,Ie]=ae("badge"),Ht={dot:Boolean,max:q,tag:X("div"),color:String,offset:Array,content:q,showZero:V,position:X("top-right")};var Jt=se({name:qt,props:Ht,setup(e,{slots:t}){const a=()=>{if(t.content)return!0;const{content:m,showZero:i}=e;return Z(m)&&m!==""&&(i||m!==0&&m!=="0")},d=()=>{const{dot:m,max:i,content:x}=e;if(!m&&a())return t.content?t.content():Z(i)&&Qe(x)&&+x>+i?`${i}+`:x},p=m=>m.startsWith("-")?m.replace("-",""):`-${m}`,y=_e(()=>{const m={background:e.color};if(e.offset){const[i,x]=e.offset,{position:k}=e,[b,$]=k.split("-");t.default?(typeof x=="number"?m[b]=H(b==="top"?x:-x):m[b]=b==="top"?H(x):p(x),typeof i=="number"?m[$]=H($==="left"?i:-i):m[$]=$==="left"?H(i):p(i)):(m.marginTop=H(x),m.marginLeft=H(i))}return m}),l=()=>{if(a()||e.dot)return o("div",{class:Ie([e.position,{dot:e.dot,fixed:!!t.default}]),style:y.value},[d()])};return()=>{if(t.default){const{tag:m}=e;return o(m,{class:Ie("wrapper")},{default:()=>[t.default(),l()]})}return l()}}});const Vt=re(Jt);let Xt=2e3;const Zt=()=>++Xt,[en,ko]=ae("config-provider"),tn=Symbol(en),[nn,$e]=ae("icon"),on=e=>e==null?void 0:e.includes("/"),an={dot:Boolean,tag:X("i"),name:String,size:q,badge:q,color:String,badgeProps:Object,classPrefix:String};var ln=se({name:nn,props:an,setup(e,{slots:t}){const a=gt(tn,null),d=_e(()=>e.classPrefix||(a==null?void 0:a.iconPrefix)||$e());return()=>{const{tag:p,dot:y,name:l,size:m,badge:i,color:x}=e,k=on(l);return o(Vt,De({dot:y,tag:p,class:[d.value,k?"":`${d.value}-${l}`],style:{color:x,fontSize:H(m)},content:i},e.badgeProps),{default:()=>{var b;return[(b=t.default)==null?void 0:b.call(t),k&&o("img",{class:$e("image"),src:l},null)]}})}}});const sn=re(ln),rn={show:Boolean,zIndex:q,overlay:V,duration:q,teleport:[String,Object],lockScroll:V,lazyRender:V,beforeClose:Function,overlayStyle:Object,overlayClass:je,transitionAppear:Boolean,closeOnClickOverlay:V};function un(e,t){return e>t?"horizontal":t>e?"vertical":""}function cn(){const e=A(0),t=A(0),a=A(0),d=A(0),p=A(0),y=A(0),l=A(""),m=A(!0),i=()=>l.value==="vertical",x=()=>l.value==="horizontal",k=()=>{a.value=0,d.value=0,p.value=0,y.value=0,l.value="",m.value=!0};return{move:_=>{const s=_.touches[0];a.value=(s.clientX<0?0:s.clientX)-e.value,d.value=s.clientY-t.value,p.value=Math.abs(a.value),y.value=Math.abs(d.value);const N=10;(!l.value||p.value<N&&y.value<N)&&(l.value=un(p.value,y.value)),m.value&&(p.value>Be||y.value>Be)&&(m.value=!1)},start:_=>{k(),e.value=_.touches[0].clientX,t.value=_.touches[0].clientY},reset:k,startX:e,startY:t,deltaX:a,deltaY:d,offsetX:p,offsetY:y,direction:l,isVertical:i,isHorizontal:x,isTap:m}}let te=0;const Oe="van-overflow-hidden";function dn(e,t){const a=cn(),d="01",p="10",y=k=>{a.move(k);const b=a.deltaY.value>0?p:d,$=Pt(k.target,e.value),{scrollHeight:_,offsetHeight:s,scrollTop:N}=$;let U="11";N===0?U=s>=_?"00":"01":N+s>=_&&(U="10"),U!=="11"&&a.isVertical()&&!(parseInt(U,2)&parseInt(b,2))&&Ye(k,!0)},l=()=>{document.addEventListener("touchstart",a.start),document.addEventListener("touchmove",y,{passive:!1}),te||document.body.classList.add(Oe),te++},m=()=>{te&&(document.removeEventListener("touchstart",a.start),document.removeEventListener("touchmove",y),te--,te||document.body.classList.remove(Oe))},i=()=>t()&&l(),x=()=>t()&&m();Ge(i),fe(x),yt(x),ne(t,k=>{k?l():m()})}function Je(e){const t=A(!1);return ne(e,a=>{a&&(t.value=a)},{immediate:!0}),a=>()=>t.value?a():null}const[pn,fn]=ae("overlay"),mn={show:Boolean,zIndex:q,duration:q,className:je,lockScroll:V,lazyRender:V,customStyle:Object};var _n=se({name:pn,props:mn,setup(e,{slots:t}){const a=A(),d=Je(()=>e.show||!e.lazyRender),p=l=>{e.lockScroll&&Ye(l,!0)},y=d(()=>{var l;const m=ge(Ft(e.zIndex),e.customStyle);return Z(e.duration)&&(m.animationDuration=`${e.duration}s`),ze(o("div",{ref:a,style:m,class:[fn(),e.className]},[(l=t.default)==null?void 0:l.call(t)]),[[Re,e.show]])});return Ke("touchmove",p,{target:a}),()=>o(Fe,{name:"van-fade",appear:!0},{default:y})}});const vn=re(_n),gn=ge({},rn,{round:Boolean,position:X("center"),closeIcon:X("cross"),closeable:Boolean,transition:String,iconPrefix:String,closeOnPopstate:Boolean,closeIconPosition:X("top-right"),safeAreaInsetTop:Boolean,safeAreaInsetBottom:Boolean}),[yn,Se]=ae("popup");var hn=se({name:yn,inheritAttrs:!1,props:gn,emits:["open","close","opened","closed","keydown","update:show","clickOverlay","clickCloseIcon"],setup(e,{emit:t,attrs:a,slots:d}){let p,y;const l=A(),m=A(),i=Je(()=>e.show||!e.lazyRender),x=_e(()=>{const L={zIndex:l.value};if(Z(e.duration)){const z=e.position==="center"?"animationDuration":"transitionDuration";L[z]=`${e.duration}s`}return L}),k=()=>{p||(p=!0,l.value=e.zIndex!==void 0?+e.zIndex:Zt(),t("open"))},b=()=>{p&&Gt(e.beforeClose,{done(){p=!1,t("close"),t("update:show",!1)}})},$=L=>{t("clickOverlay",L),e.closeOnClickOverlay&&b()},_=()=>{if(e.overlay)return o(vn,{show:e.show,class:e.overlayClass,zIndex:l.value,duration:e.duration,customStyle:e.overlayStyle,role:e.closeOnClickOverlay?"button":void 0,tabindex:e.closeOnClickOverlay?0:void 0,onClick:$},{default:d["overlay-content"]})},s=L=>{t("clickCloseIcon",L),b()},N=()=>{if(e.closeable)return o(sn,{role:"button",tabindex:0,name:e.closeIcon,class:[Se("close-icon",e.closeIconPosition),jt],classPrefix:e.iconPrefix,onClick:s},null)};let U;const ee=()=>{U&&clearTimeout(U),U=setTimeout(()=>{t("opened")})},B=()=>t("closed"),v=L=>t("keydown",L),O=i(()=>{var L;const{round:z,position:E,safeAreaInsetTop:K,safeAreaInsetBottom:le}=e;return ze(o("div",De({ref:m,style:x.value,role:"dialog",tabindex:0,class:[Se({round:z,[E]:E}),{"van-safe-area-top":K,"van-safe-area-bottom":le}],onKeydown:v},a),[(L=d.default)==null?void 0:L.call(d),N()]),[[Re,e.show]])}),F=()=>{const{position:L,transition:z,transitionAppear:E}=e,K=L==="center"?"van-fade":`van-popup-slide-${L}`;return o(Fe,{name:z||K,appear:E,onAfterEnter:ee,onAfterLeave:B},{default:O})};return ne(()=>e.show,L=>{L&&!p&&(k(),a.tabindex===0&&me(()=>{var z;(z=m.value)==null||z.focus()})),!L&&p&&(p=!1,t("close"))}),Yt({popupRef:m}),dn(m,()=>e.show&&e.lockScroll),Ke("popstate",()=>{e.closeOnPopstate&&(b(),y=!1)}),oe(()=>{e.show&&k()}),Pe(()=>{y&&(t("update:show",!0),y=!1)}),fe(()=>{e.show&&e.teleport&&(b(),y=!0)}),ht(Kt,()=>e.show),()=>e.teleport?o(wt,{to:e.teleport},{default:()=>[_(),F()]}):o(T,null,[_(),F()])}});const wn=re(hn);const Ve="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAWtJREFUWEftlkFuwkAMRWcigXqJIpZwioaTQU9GbgFLBJdAVMSVI1KFaGx/O0hsyioSM+Pn72/P5PTmX35z/OQGOCw/6tS2dSb66uBzriml7+67qpr16dp4koIBOHC+37ccUAvAMOvzbYdCQACHxXyXU9qih/I6FMQEiATvQamqNlZJTIDjYk6ezMdrV+ebGkP9c0r2fyBEzerys5GSUAG07FlePpQltkA1FUSAzvVtuy+Rl2rrXd+fKwMIztfcffyc7Uttqu15KYBYCsUHIoCUTVIOkwBiCigekEwlmfblAGMVrDEd6gJ2qViGYWsQNer9MGUOaK2FTkfrTrBHsdBaKMCkUcxBpqhgZd89J5BMIC8UDrKyhwEiKiDZwwBwRzxUQIO7ADwqINKbl1HJG9a163mKhQDMUhhDp5QU1AXDjdF7P/QikjaVSuEx3vBctwL95qfZEJA+7IF+47AUHtePVQ0rgExQZM0/wC/2reMhR5YQoAAAAABJRU5ErkJggg==",Xe=""+new URL("home-653daf67.jpg",import.meta.url).href,Ze="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAvRJREFUaEPdWm1O4zAQjVuB9hKL9iecYuFkW07WcAr4ieASiBU1Gm9iHMcz8ya2i7T9BZXtvPfmM+O6odPn8dePW/fx8YeO98493Ly8H3o8yvU49PHq8uCGIYCfP34Y7nuQaEaAFCewQXXnwt/5h0iE73a78eb5bWwhXhWBAPp0unXe/+ZASyBbWGUTgejfjNJWZWuImAmU/NsKmFu/hQhMIKh+Oh1bgRVda7e7Q2MEItBT9VprqARM4L3/l1mELJSn19ogFwnA4L0f/X5/P5v96erSl4Bdv7yH59G5gWdWK7jUK9UPlgDk896P169/7/IHP/28OOZW4AIUEckLMcES4FREK+sCGEN0PgshMVsvF6tIQDtQUiR/AFkSySiaxTkLFglI6lvAW1OuSqLgSisCkvpbCo2ZRKER/OoI1zG3IsCpfw7wM9BSEoixl1lhQUBSnwsiq8LoelTIBQF0EwqiZh1rhSyjRQJSAJ3TfWJqFXqvNJF8ERCC59zuo8WCicB3qK8RGBI3ir2J1pdYiaQJwbpXykJ5J+C0qrsIRKUlkFoDlIQFD7mSQ9imJJBKrHWjUnbSerBcUDMBJKC3EtBaiRVx70dn2VTjBuhei0fQmXAQp5GPFKiaIEbiYBYk1gG08iHgW63hiKTW1CsxmHlagU7PQVobnQANZw1jjlZExLY+wbNs5grvsgHQN1gB7Yz/r3ZaTKlntAKqPjnH+o2McyPypE4z/jRurK+063diZQbaM6C1olrqArqOVdCRCllAA28aq9CBWlOluVNaGLW1SOU1DbYQRUJ2ZWKiCMgwhsxryabRYiAhzWiSp8x3X/MQVutGLTc8mvXajtcnq7Bvd8r4faU8kPVUAhZLtGojJPfMnwERQGOiFQFLqoYJSO+7zYADLrPZAvlGNMAhctkND7RnWmS2QDMiBNq5h9pb+2oC0bWmW/upwVr8TiKSnpSm/5FLD8QSzQhoDZmWzxGwpTVdCMTUS7+hoNqQ3GBuBcrt+wRFn1Z7JydFCwAAAABJRU5ErkJggg==";const bn={class:"map_view"},An={class:"map_view_title"},xn={style:{"font-weight":"bold"}},Cn=["src"],En={class:"map_view_title_notice"},kn={class:"map_view_title_notice_desc"},Ln={class:"map_view_title_notice_desc"},Bn={class:"map_view_title_notice_desc"},In=["src"],$n={class:"map_view_ad"},On=["href"],Sn=["src"],Pn={class:"map_view_ad"},Dn=["href"],Fn=["src"],zn={class:"map_view_center"},Rn=["href"],Un={key:0},Mn=["src"],Tn={__name:"mobile",setup(e){Ue();const t=A({lng:13.730562,lat:100.570478});A(3);const a=A(null),d=A(!1),p=Y({adListLeft:[],adListRight:[],mapList:[],points:[],notice1:"",notice2:"",notice3:"",infoCenter:{lng:"",lat:""}}),y=A(!1);Y({name:"",contact_information:"",comment:"",pic_url:""});const l=Y({name:"",contact_information:"",comment:"",display_pic_url:"",showModal:!1,position:{lng:"",lat:""}}),m=A(0);oe(()=>{Me().then(B=>{p.adListLeft=B.list.filter((v,O)=>O%2==1),p.adListRight=B.list.filter((v,O)=>O%2==0)}),Te().then(B=>{p.notice1=B.notice1,p.notice2=B.notice2,p.notice3=B.notice3}),k()});const i=({BMap:B,map:v})=>{new B.Geolocation().getCurrentPosition(function(L){console.log(L),t.value.lng=L.longitude,t.value.lat=L.latitude},{enableHighAccuracy:!0});const F=new B.NavigationControl;v.addControl(F)},x=({type:B,target:v,point:O,pixel:F,overlay:L})=>{p.infoCenter={lng:O.lng,lat:O.lat},console.log("state.infoCenter",p.infoCenter),y.value=!0},k=()=>{Ne().then(B=>{let v=B.list,O=[];v.forEach(F=>{F.icon=Ve,F.display_label_pic_url&&(F.icon=F.display_label_pic_url),O.push({lng:F.lng,lat:F.lat})}),p.mapList=v,p.points=O})},b=B=>{_(),m.value=B,l.showModal=!0},$=()=>{p.mapList.forEach((v,O)=>(O==m.value&&(l.name=v.name,l.contact_information=v.contact_information,l.comment=v.comment,l.pic_url=v.pic_url,l.address=v.address,l.position.lng=v.lng,l.position.lat=v.lat),v)),l.showModal=!0},_=()=>{l.name="",l.contact_information="",l.comment="",l.pic_url="",l.position.lng="",l.position.lat="",l.showModal=!1},s=()=>{ce().then(B=>{console.log(B),new B.LocalSearch(a.value.map,{renderOptions:{map:a.value.map}}).search("芭提雅旅游区")})},N=()=>{d.value=!0},U=B=>{const{lng:v,lat:O}=l.position;B=="baidu"&&(window.location.href=`http://api.map.baidu.com/marker?location=${v},${O}&title=${l.address}&content=${l.address}&output=html`),B=="gaode"&&(window.location.href=`http://uri.amap.com/marker?position=${v},${O}&name=${l.address}&coordinate=gaode&callnative=1`)},ee=()=>{d.value=!1};return(B,v)=>{const O=P("bm-marker"),F=P("bm-info-window"),L=P("bm-geolocation"),z=wn;return w(),I(T,null,[f("div",bn,[f("div",An,[f("p",xn,[f("img",{src:G(Xe),class:"map_view_logo"},null,8,Cn),S(" Thaixmap")]),f("div",En,[f("p",kn,"Notice: "+D(p.notice1),1),f("p",Ln,"Notice: "+D(p.notice2),1),f("p",Bn,"Notice: "+D(p.notice3),1)])]),f("img",{src:G(Ze),class:"map_view_home",onClick:v[0]||(v[0]=E=>s())},null,8,In),f("div",$n,[(w(!0),I(T,null,j(p.adListLeft,E=>(w(),I("a",{class:"map_view_ad_item",key:E.sort,target:"_blank",href:E.url},[f("img",{src:E.display_img,class:"map_view_ad_item_img"},null,8,Sn)],8,On))),128))]),f("div",Pn,[(w(!0),I(T,null,j(p.adListRight,E=>(w(),I("a",{class:"map_view_ad_item",key:E.sort,target:"_blank",href:E.url},[f("img",{src:E.display_img,class:"map_view_ad_item_img"},null,8,Fn)],8,Dn))),128))]),f("div",zn,[o(G(We),{class:"map_view_center_container map",id:"map",zoom:15,center:"芭提雅旅游区",onReady:i,onRightclick:x,ref_key:"map",ref:a},{default:u(()=>[(w(!0),I(T,null,j(p.mapList,(E,K)=>(w(),M(O,{position:{lng:E.lng,lat:E.lat},dragging:!1,onClick:le=>b(K),zIndex:999,icon:{url:E.icon,size:{width:32,height:32}}},null,8,["position","onClick","icon"]))),256)),o(O,{position:l.position,dragging:!1,onClick:v[4]||(v[4]=E=>$()),zIndex:999},{default:u(()=>[o(F,{title:"标注点",position:l.position,show:l.showModal,onClose:v[2]||(v[2]=E=>_()),onOpen:v[3]||(v[3]=E=>$()),zIndex:"99999"},{default:u(()=>[f("p",null,"地点名称："+D(l.name),1),f("p",{style:{color:"rgba(0,0,235,0.9)",cursor:"pointer"},onClick:v[1]||(v[1]=E=>N())},"地点："+D(l.address),1),f("p",null,"评论："+D(l.comment),1),f("p",null,[S("联系方式："),f("a",{href:"tel:"+l.contact_information},D(l.contact_information),9,Rn)]),l.display_pic_url?(w(),I("div",Un,[S(" 图片： "),f("img",{src:l.display_pic_url},null,8,Mn)])):J("",!0)]),_:1},8,["position","show"])]),_:1},8,["position"]),o(L,{anchor:"BMAP_ANCHOR_BOTTOM_LEFT",showAddressBar:!0,autoLocation:!0})]),_:1},512)])]),o(z,{show:d.value,"onUpdate:show":v[8]||(v[8]=E=>d.value=E),position:"bottom",round:"",class:"popup_map"},{default:u(()=>[f("div",{class:"map_item",onClick:v[5]||(v[5]=E=>U("baidu"))},"百度地图"),f("div",{class:"map_item",onClick:v[6]||(v[6]=E=>U("gaode"))},"高德地图"),f("div",{class:"map_item",onClick:v[7]||(v[7]=E=>ee())},"取消")]),_:1},8,["show"])],64)}}};const Nn={class:"pc-title"},Wn={class:"pc-title-name"},Qn={class:"pc-title-name-logo"},jn=["src"],Gn=f("p",null,"Thaixmap",-1),Kn={class:"pc-title-name-value"},Yn={class:"pc-title_action"},qn={key:0,class:"pc-title_user"},Hn={class:"pc-map_view"},Jn={class:"pc-map_view_ad"},Vn=["href"],Xn=["src"],Zn={class:"pc-map_view_center"},eo={class:"pc-place_main"},to=f("span",{class:"pc-require"},"*",-1),no={key:0},oo=f("span",{class:"pc-require"},"*",-1),ao={key:0},lo={key:0},io={key:0,class:"pc-img_list"},so=["src"],ro={key:1,class:"clearfix"},uo=f("div",{style:{"margin-top":"8px"}},"上传",-1),co={style:{display:"flex","align-items":"center",gap:"10px"}},po=["src"],fo={class:"pc-place_main"},mo=f("span",{class:"pc-require"},"*",-1),_o=f("span",{class:"pc-require"},"*",-1),vo=f("div",{style:{"margin-top":"8px"}},"上传",-1),go={style:{display:"flex","align-items":"center",gap:"10px"}},yo=["src"],ho={class:"pc-map_view_ad"},wo=["href"],bo=["src"],Ao=["src"],xo={__name:"pc",setup(e){Ue();const t=A({lng:13.730562,lat:100.570478}),a=A("芭提雅旅游区"),d=A(15),p=A(""),y=A(""),l=A(!1),m=A(null),i=Y({adListLeft:[],adListRight:[],mapList:[],points:[],notice1:"",notice2:"",notice3:"",infoCenter:{lng:"",lat:""},fileList:[],labelList:[]}),x=A(!1),k=A(!1),b=A(!1),$=A(null),_=Y({name:"",contact_information:"",comment:"",pic_url:"",address:"",display_pic_url:"",address:"",label_id:null}),s=Y({id:null,name:"",contact_information:"",address:"",comment:"",display_pic_url:[],showModal:!1,position:{lng:"",lat:""},label_id:null}),N=A(0);oe(()=>{localStorage.getItem("token")?l.value=!0:l.value=!1,Me().then(c=>{i.adListLeft=c.list.filter((n,g)=>g%2==1),i.adListRight=c.list.filter((n,g)=>g%2==0)}),Te().then(c=>{i.notice1=c.notice1,i.notice2=c.notice2,i.notice3=c.notice3}),U(),O()}),me(()=>{setTimeout(()=>{$.value.observer.disconnect()},50)});const U=()=>{bt().then(c=>{i.labelList=c.list})},ee=()=>{localStorage.getItem("token")?(localStorage.removeItem("token"),l.value=!1):x.value=!0},B=({BMap:c,map:n})=>{new c.Geolocation().getCurrentPosition(function(h){t.value.lng=h.longitude,t.value.lat=h.latitude},{enableHighAccuracy:!0});const C=new c.NavigationControl;n.addControl(C),a.value="芭提雅旅游区"},v=({type:c,target:n,point:g,pixel:C,overlay:h})=>{window.localStorage.getItem("token")||(Q.error("请登录"),x.value=!0),i.infoCenter={lng:g.lng,lat:g.lat},k.value=!0},O=()=>{Ne().then(c=>{let n=c.list,g=[];n=n.map(C=>(C.icon=Ve,C.display_label_pic_url&&(C.icon=C.display_label_pic_url),g.push({lng:C.lng,lat:C.lat}),C)),i.mapList=n,i.points=g})},F=c=>{z(),N.value=c,s.showModal=!0},L=()=>{let c=i.mapList;i.fileList=[],c.forEach((n,g)=>(g==N.value&&(s.id=n.id,console.log("item",n),s.name=n.name,s.contact_information=n.contact_information,s.comment=n.comment,s.address=n.address,s.display_pic_url=n.display_pic_url,s.position.lng=n.lng,s.position.lat=n.lat),n)),s.display_pic_url.forEach(n=>{i.fileList.push({uid:n,name:n,status:"done",url:n})}),s.showModal=!0},z=()=>{s.name="",s.contact_information="",s.comment="",s.address="",s.pic_url="",s.position.lng="",s.position.lat="",s.showModal=!1},E=()=>{k.value=!0},K=()=>{k.value=!1,i.infoCenter={lng:"",lat:""},_.pic_url="",_.address="",_.display_pic_url="",_.name="",_.contact_information="",_.comment=""},le=c=>{let n=new FormData;n.append("file",c.file);let g=[];i.fileList&&(g=i.fileList),Ce(n).then(C=>{g.push({uid:c.file.uid,name:c.file.name,status:"done",url:C.display_path,path:C.path}),g=g.filter(h=>h.status!="uploading"),i.fileList=g})},et=c=>{let n=new FormData;n.append("file",c.file);let g=[];i.fileList&&(g=i.fileList),Ce(n).then(C=>{g.push({uid:c.file.uid,name:c.file.name,status:"done",url:C.display_path,path:C.path}),g=g.filter(h=>h.status!="uploading"),i.fileList=g})},tt=()=>{if(!p.value)return Q.error("用户名不能为空"),!1;if(!y.value)return Q.error("密码不能为空"),!1;if(p.value!="admin"||y.value!="123456"){Q.error("请输入正确的账号密码");return}else window.localStorage.setItem("token",!0),x.value=!1,l.value=!0},nt=()=>{b.value=!0},ot=()=>{b.value=!1},at=()=>{let c=new FormData;if(!s.name){Q.warning("请输入名称");return}if(!s.address){Q.warning("请输入地址");return}let n=[];i.fileList&&(n=i.fileList);let g=[];n.forEach(C=>{C.path&&g.push(C.path)}),c.append("id",s.id),c.append("comment",s.comment),c.append("address",s.address),c.append("contact_information",s.contact_information),c.append("name",s.name),c.append("lng",s.position.lng),c.append("lat",s.position.lat),c.append("lat",s.position.lat),s.label_id&&c.append("label_id",s.label_id),g.length>0&&c.append("pic_url",g.join(",")),xt(c).then(C=>{Q.success(C.message),O(),s.name="",s.contact_information="",s.comment="",s.display_pic_url="",s.position.lng="",s.position.lat="",_.pic_url="",b.value=!1,i.fileList=[],z()})},lt=()=>{let c=new FormData;if(!_.name){Q.warning("请输入名称");return}if(!_.address){Q.warning("请输入地址");return}let n=[];i.fileList&&(n=i.fileList);let g=[];n.forEach(C=>{C.path&&g.push(C.path)}),c.append("comment",_.comment),c.append("address",_.address),c.append("contact_information",_.contact_information),c.append("name",_.name),c.append("label_id",_.label_id),c.append("lng",i.infoCenter.lng),c.append("lat",i.infoCenter.lat),g.length>0&&c.append("pic_url",g.join(",")),Ct(c).then(C=>{Q.success(C.message),O(),_.name="",_.address="",_.contact_information="",_.comment="",i.infoCenter.lng="",i.infoCenter.lat="",_.pic_url="",k.value=!1,i.fileList=[],K()})},it=()=>{ce().then(c=>{console.log(c),new c.LocalSearch(m.value.map,{renderOptions:{map:m.value.map}}).search("芭提雅旅游区")})},st=()=>{ce().then(c=>{const{lng:n,lat:g}=s.position,C=c.Point(t.value.lng,t.value.lat),h=c.Point(n,g),W=c.DrivingRoute(m.value.map);W.search(C,h),console.log("driving",W)})};return ne(_,(c,n)=>{console.log("val",c)}),(c,n)=>{const g=P("a-button"),C=P("bm-marker"),h=P("a-col"),W=P("a-input"),R=P("a-row"),he=P("plus-outlined"),we=P("a-upload"),be=P("a-radio"),Ae=P("a-radio-group"),xe=P("bm-info-window"),rt=P("bm-geolocation"),ut=P("a-icon"),ct=P("svg-icon"),dt=P("a-input-password"),pt=P("a-modal");return w(),I(T,null,[f("div",Nn,[f("div",Wn,[f("div",Qn,[f("img",{src:G(Xe),class:"pc-title-name-logo-img"},null,8,jn),Gn]),f("div",Kn,[f("p",null,D(i.notice1),1),f("p",null,D(i.notice2),1),f("p",null,D(i.notice3),1)])]),f("div",Yn,[l.value?(w(),I("p",qn,"admin")):J("",!0),o(g,{class:"pc-title_btn",type:"primary",onClick:n[0]||(n[0]=r=>ee())},{default:u(()=>[S(D(l.value?"登出":"登录"),1)]),_:1})])]),f("div",Hn,[f("div",Jn,[(w(!0),I(T,null,j(i.adListLeft,r=>(w(),I("a",{class:"pc-map_view_ad_item",key:r.sort,target:"_blank",href:r.url},[f("img",{src:r.display_img,class:"pc-map_view_ad_item_img"},null,8,Xn)],8,Vn))),128))]),f("div",Zn,[o(G(We),{class:"pc-map_view_center_container map","scroll-wheel-zoom":!0,id:"map",zoom:d.value,center:a.value,onReady:B,onRightclick:v,ref_key:"map",ref:m},{default:u(()=>[(w(!0),I(T,null,j(i.mapList,(r,ft)=>(w(),M(C,{position:{lng:r.lng,lat:r.lat},dragging:!1,onClick:Co=>F(ft),zIndex:999,icon:{url:r.icon,size:{width:32,height:32}}},null,8,["position","onClick","icon"]))),256)),o(C,{position:s.position,dragging:!1,onClick:n[13]||(n[13]=r=>L()),zIndex:999},{default:u(()=>[o(xe,{title:"标注点",position:s.position,show:s.showModal,onClose:n[11]||(n[11]=r=>z()),onOpen:n[12]||(n[12]=r=>L()),zIndex:"99999",ref:$.value,width:400},{default:u(()=>[f("div",eo,[l.value&&!b.value?(w(),M(G(At),{key:0,class:"pc-place_main_icon",onClick:n[1]||(n[1]=r=>nt())})):J("",!0),o(R,{type:"flex",justify:"flex-start",align:"bottom",style:{"margin-bottom":"10px"}},{default:u(()=>[o(h,{span:6,style:{"text-align":"right"}},{default:u(()=>[to,S("名称：")]),_:1}),o(h,{span:18},{default:u(()=>[b.value?(w(),M(W,{key:1,value:s.name,"onUpdate:value":n[2]||(n[2]=r=>s.name=r),placeholder:"请输入名称"},null,8,["value"])):(w(),I("p",no,D(s.name),1))]),_:1})]),_:1}),o(R,{type:"flex",justify:"flex-start",align:"bottom",style:{"margin-bottom":"10px"}},{default:u(()=>[o(h,{span:6,style:{"text-align":"right"}},{default:u(()=>[oo,S("地址：")]),_:1}),o(h,{span:18},{default:u(()=>[b.value?(w(),M(W,{key:1,value:s.address,"onUpdate:value":n[4]||(n[4]=r=>s.address=r),placeholder:"请输入地址"},null,8,["value"])):(w(),I("p",{key:0,style:{color:"rgba(0,0,235,0.9)",cursor:"pointer"},onClick:n[3]||(n[3]=r=>st())},D(s.address),1))]),_:1})]),_:1}),o(R,{type:"flex",justify:"flex-start",align:"bottom",style:{"margin-bottom":"10px"}},{default:u(()=>[o(h,{span:6,style:{"text-align":"right"}},{default:u(()=>[S("评论：")]),_:1}),o(h,{span:18},{default:u(()=>[b.value?(w(),M(W,{key:1,type:"textarea",autosize:"",value:s.comment,"onUpdate:value":n[5]||(n[5]=r=>s.comment=r),placeholder:"请输入评论"},null,8,["value"])):(w(),I("p",ao,D(s.comment),1))]),_:1})]),_:1}),o(R,{type:"flex",justify:"flex-start",align:"bottom",style:{"margin-bottom":"10px"}},{default:u(()=>[o(h,{span:6,style:{"text-align":"right"}},{default:u(()=>[S("联系方式：")]),_:1}),o(h,{span:18},{default:u(()=>[b.value?(w(),M(W,{key:1,value:s.contact_information,"onUpdate:value":n[6]||(n[6]=r=>s.contact_information=r),placeholder:"请输入联系方式"},null,8,["value"])):(w(),I("p",lo,D(s.contact_information),1))]),_:1})]),_:1}),o(R,{type:"flex",justify:"flex-start",align:"top",style:{"margin-bottom":"10px"}},{default:u(()=>[o(h,{span:6,style:{"text-align":"right"}},{default:u(()=>[S("图片：")]),_:1}),o(h,{span:18},{default:u(()=>[b.value?(w(),I("div",ro,[o(we,{"list-type":"picture-card","file-list":i.fileList,"onUpdate:fileList":n[7]||(n[7]=r=>i.fileList=r),customRequest:et,name:"file",class:"pc-upload",multiple:"true"},{default:u(()=>[f("div",null,[o(he),uo])]),_:1},8,["file-list"])])):(w(),I("div",io,[(w(!0),I(T,null,j(s.display_pic_url,r=>(w(),I("img",{src:r},null,8,so))),256))]))]),_:1})]),_:1}),b.value?(w(),M(R,{key:1,style:{"margin-bottom":"10px"}},{default:u(()=>[o(h,{span:6,style:{"text-align":"right"}},{default:u(()=>[S("标注点图标：")]),_:1}),o(h,{span:18},{default:u(()=>[o(Ae,{value:s.label_id,"onUpdate:value":n[8]||(n[8]=r=>s.label_id=r)},{default:u(()=>[(w(!0),I(T,null,j(i.labelList,r=>(w(),M(be,{key:r.id,value:r.id,disabled:!b.value,style:{"margin-bottom":"10px"}},{default:u(()=>[f("div",co,[f("p",null,D(r.name),1),f("img",{src:r.display_img,class:"pc-icon"},null,8,po)])]),_:2},1032,["value","disabled"]))),128))]),_:1},8,["value"])]),_:1})]),_:1})):J("",!0),b.value?(w(),M(R,{key:2,type:"flex",justify:"flex-start",align:"bottom"},{default:u(()=>[o(h,{span:6}),o(h,{span:18},{default:u(()=>[o(g,{type:"primary",onClick:n[9]||(n[9]=r=>at()),style:{"margin-right":"10px"}},{default:u(()=>[S("确定")]),_:1}),o(g,{onClick:n[10]||(n[10]=r=>ot())},{default:u(()=>[S("取消")]),_:1})]),_:1})]),_:1})):J("",!0)])]),_:1},8,["position","show"])]),_:1},8,["position"]),o(C,{position:i.infoCenter,dragging:!1,onClick:n[23]||(n[23]=r=>E()),zIndex:999},{default:u(()=>[o(xe,{show:k.value,onClose:n[21]||(n[21]=r=>K()),onOpen:n[22]||(n[22]=r=>E()),zIndex:"99999",ref:$.value,width:400},{default:u(()=>[f("div",fo,[o(R,{type:"flex",justify:"flex-start",align:"bottom",style:{"margin-bottom":"10px"}},{default:u(()=>[o(h,{span:6,style:{"text-align":"right"}},{default:u(()=>[mo,S("名称：")]),_:1}),o(h,{span:18},{default:u(()=>[o(W,{value:_.name,"onUpdate:value":n[14]||(n[14]=r=>_.name=r),placeholder:"请输入名称"},null,8,["value"])]),_:1})]),_:1}),o(R,{type:"flex",justify:"flex-start",align:"bottom",style:{"margin-bottom":"10px"}},{default:u(()=>[o(h,{span:6,style:{"text-align":"right"}},{default:u(()=>[_o,S("地址：")]),_:1}),o(h,{span:18},{default:u(()=>[o(W,{value:_.address,"onUpdate:value":n[15]||(n[15]=r=>_.address=r),placeholder:"请输入地址"},null,8,["value"])]),_:1})]),_:1}),o(R,{type:"flex",justify:"flex-start",align:"bottom",style:{"margin-bottom":"10px"}},{default:u(()=>[o(h,{span:6,style:{"text-align":"right"}},{default:u(()=>[S("评论：")]),_:1}),o(h,{span:18},{default:u(()=>[o(W,{type:"textarea",autosize:"",value:_.comment,"onUpdate:value":n[16]||(n[16]=r=>_.comment=r),placeholder:"请输入评论"},null,8,["value"])]),_:1})]),_:1}),o(R,{type:"flex",justify:"flex-start",align:"bottom",style:{"margin-bottom":"10px"}},{default:u(()=>[o(h,{span:6,style:{"text-align":"right"}},{default:u(()=>[S("联系方式：")]),_:1}),o(h,{span:18},{default:u(()=>[o(W,{value:_.contact_information,"onUpdate:value":n[17]||(n[17]=r=>_.contact_information=r),placeholder:"请输入联系方式"},null,8,["value"])]),_:1})]),_:1}),o(R,{type:"flex",justify:"flex-start",align:"top",style:{"margin-bottom":"10px"}},{default:u(()=>[o(h,{span:6,style:{"text-align":"right"}},{default:u(()=>[S("图片：")]),_:1}),o(h,{span:18},{default:u(()=>[o(we,{"file-list":i.fileList,"onUpdate:fileList":n[18]||(n[18]=r=>i.fileList=r),"list-type":"picture-card",name:"file",customRequest:le,class:"pc-upload",multiple:"true"},{default:u(()=>[f("div",null,[o(he),vo])]),_:1},8,["file-list"])]),_:1})]),_:1}),o(R,{type:"flex",justify:"flex-start",align:"bottom",style:{"margin-bottom":"10px"}},{default:u(()=>[o(h,{span:6,style:{"text-align":"right"}},{default:u(()=>[S("标注点图标：")]),_:1}),o(h,{span:18},{default:u(()=>[o(Ae,{value:_.label_id,"onUpdate:value":n[19]||(n[19]=r=>_.label_id=r)},{default:u(()=>[(w(!0),I(T,null,j(i.labelList,r=>(w(),M(be,{key:r.id,value:r.id,style:{"margin-bottom":"10px"}},{default:u(()=>[f("div",go,[f("p",null,D(r.name),1),f("img",{src:r.display_img,class:"pc-icon"},null,8,yo)])]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1})]),_:1}),o(R,{type:"flex",justify:"flex-start",align:"bottom"},{default:u(()=>[o(h,{span:6}),o(h,{span:18},{default:u(()=>[o(g,{type:"primary",onClick:n[20]||(n[20]=r=>lt()),style:{"margin-right":"10px"}},{default:u(()=>[S("确定")]),_:1})]),_:1})]),_:1})])]),_:1},8,["show"])]),_:1},8,["position"]),o(rt,{anchor:"BMAP_ANCHOR_BOTTOM_RIGHT",showAddressBar:!0,autoLocation:!0})]),_:1},8,["zoom","center"])]),f("div",ho,[(w(!0),I(T,null,j(i.adListRight,r=>(w(),I("a",{class:"pc-map_view_ad_item",key:r.sort,target:"_blank",href:r.url},[f("img",{src:r.display_img,class:"pc-map_view_ad_item_img"},null,8,bo)],8,wo))),128))]),o(pt,{visible:x.value,"onUpdate:visible":n[26]||(n[26]=r=>x.value=r),title:"登陆",footer:null},{default:u(()=>[o(W,{value:p.value,"onUpdate:value":n[24]||(n[24]=r=>p.value=r),placeholder:"请输入账号",size:"large","allow-clear":"",style:{"margin-bottom":"20px"}},{default:u(()=>[o(ut,{slot:"prefix",type:"user"})]),_:1},8,["value"]),o(dt,{value:y.value,"onUpdate:value":n[25]||(n[25]=r=>y.value=r),placeholder:"请输入密码",size:"large","allow-clear":"",style:{"margin-bottom":"20px"}},{default:u(()=>[o(ct,{icon:"password",size:14,slot:"prefix"})]),_:1},8,["value"]),o(g,{type:"primary",block:"",size:"large",onClick:tt},{default:u(()=>[S(" 登录 ")]),_:1})]),_:1},8,["visible"]),f("img",{src:G(Ze),class:"pc-location",onClick:n[27]||(n[27]=r=>it())},null,8,Ao)])],64)}}},Lo={__name:"index",setup(e){const t=Y({target:""});return oe(()=>{/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(navigator.userAgent)||document.body.clientWidth<750?t.target="mobile_plate":t.target="pc_plate",window.onresize=function(){/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(navigator.userAgent)||document.body.clientWidth<750?t.target="mobile_plate":t.target="pc_plate"}}),(a,d)=>(w(),I(T,null,[t.target=="mobile_plate"?(w(),M(Tn,{key:0})):J("",!0),t.target=="pc_plate"?(w(),M(xo,{key:1})):J("",!0)],64))}};export{Lo as default};