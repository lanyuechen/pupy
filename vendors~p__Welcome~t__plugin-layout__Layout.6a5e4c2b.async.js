(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/hEp":function(j,u,o){"use strict";Object.defineProperty(u,"__esModule",{value:!0}),u.default=void 0;var R=A(o("CrYe"));function A(y){return y&&y.__esModule?y:{default:y}}var x=R;u.default=x,j.exports=x},"15/o":function(j,u,o){},AOa7:function(j,u,o){},CrYe:function(j,u,o){"use strict";var R=o("TqRt"),A=o("284h");Object.defineProperty(u,"__esModule",{value:!0}),u.default=void 0;var x=A(o("q1tI")),y=R(o("r4ZK")),I=R(o("KQxl")),B=function(F,W){return x.createElement(I.default,Object.assign({},F,{ref:W,icon:y.default}))};B.displayName="ArrowRightOutlined";var K=x.forwardRef(B);u.default=K},DnfT:function(j,u,o){},FRQA:function(j,u,o){"use strict";var R=o("GNNt"),A=o("wEI+"),x=o("DnfT"),y=o.n(x),I=o("q1tI"),B=o.n(I),K=o("TSYQ"),G=o.n(K),F=o("jYQm"),W=function(H){var z=Object(I.useContext)(F.a),X=H.children,k=H.contentWidth,q=H.className,l=H.style,c=Object(I.useContext)(A.a.ConfigContext),h=c.getPrefixCls,g=H.prefixCls||h("pro"),O=k||z.contentWidth,N="".concat(g,"-grid-content");return B.a.createElement("div",{className:G()(N,q,{wide:O==="Fixed"}),style:l},B.a.createElement("div",{className:"".concat(g,"-grid-content-children")},X))};u.a=W},"YV/h":function(j,u,o){},ayqn:function(j,u,o){"use strict";Object.defineProperty(u,"__esModule",{value:!0});var R={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"};u.default=R},h4NZ:function(j,u,o){"use strict";Object.defineProperty(u,"__esModule",{value:!0}),u.default=void 0;var R=A(o("jw4T"));function A(y){return y&&y.__esModule?y:{default:y}}var x=R;u.default=x,j.exports=x},jRje:function(j,u,o){"use strict";var R=o("GNNt"),A=o("wEI+"),x=o("q1tI"),y=o.n(x),I=o("TSYQ"),B=o.n(I),K=o("BGR+"),G=o("rsCp"),F=o.n(G),W=o("jYQm");function Y(){return Y=Object.assign||function(c){for(var h=1;h<arguments.length;h++){var g=arguments[h];for(var O in g)Object.prototype.hasOwnProperty.call(g,O)&&(c[O]=g[O])}return c},Y.apply(this,arguments)}function H(c,h){var g=Object.keys(c);if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(c);h&&(O=O.filter(function(N){return Object.getOwnPropertyDescriptor(c,N).enumerable})),g.push.apply(g,O)}return g}function z(c){for(var h=1;h<arguments.length;h++){var g=arguments[h]!=null?arguments[h]:{};h%2?H(Object(g),!0).forEach(function(O){X(c,O,g[O])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(g)):H(Object(g)).forEach(function(O){Object.defineProperty(c,O,Object.getOwnPropertyDescriptor(g,O))})}return c}function X(c,h,g){return h in c?Object.defineProperty(c,h,{value:g,enumerable:!0,configurable:!0,writable:!0}):c[h]=g,c}function k(c,h){if(c==null)return{};var g=q(c,h),O,N;if(Object.getOwnPropertySymbols){var D=Object.getOwnPropertySymbols(c);for(N=0;N<D.length;N++){if(O=D[N],h.indexOf(O)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(c,O))continue;g[O]=c[O]}}return g}function q(c,h){if(c==null)return{};var g={},O=Object.keys(c),N,D;for(D=0;D<O.length;D++){if(N=O[D],h.indexOf(N)>=0)continue;g[N]=c[N]}return g}var l=function(h){var g=h.children,O=h.className,N=h.extra,D=h.style,ne=h.renderContent,ae=k(h,["children","className","extra","style","renderContent"]),oe=Object(x.useContext)(A.a.ConfigContext),fe=oe.getPrefixCls,ie=h.prefixCls||fe("pro"),_="".concat(ie,"-footer-bar"),C=Object(x.useContext)(W.a),ee=Object(x.useMemo)(function(){var $=C.hasSiderMenu,Q=C.isMobile,de=C.siderWidth;return $?de?Q?"100%":"calc(100% - ".concat(de,"px)"):"100%":void 0},[C.collapsed,C.hasSiderMenu,C.isMobile,C.siderWidth]),te=y.a.createElement(y.a.Fragment,null,y.a.createElement("div",{className:"".concat(_,"-left")},N),y.a.createElement("div",{className:"".concat(_,"-right")},g));return Object(x.useEffect)(function(){return!C||!(C==null?void 0:C.setHasFooterToolbar)?function(){}:(C==null||C.setHasFooterToolbar(!0),function(){var $;C==null||(($=C.setHasFooterToolbar)===null||$===void 0)||$.call(C,!1)})},[]),y.a.createElement("div",Y({className:B()(O,"".concat(_)),style:z({width:ee},D)},Object(K.a)(ae,["prefixCls"])),ne?ne(z(z(z({},h),C),{},{leftWidth:ee}),te):te)};u.a=l},jYQm:function(j,u,o){"use strict";var R=o("q1tI"),A=o.n(R),x=Object(R.createContext)({});u.a=x},jw4T:function(j,u,o){"use strict";var R=o("TqRt"),A=o("284h");Object.defineProperty(u,"__esModule",{value:!0}),u.default=void 0;var x=A(o("q1tI")),y=R(o("ayqn")),I=R(o("KQxl")),B=function(F,W){return x.createElement(I.default,Object.assign({},F,{ref:W,icon:y.default}))};B.displayName="ArrowLeftOutlined";var K=x.forwardRef(B);u.default=K},r4ZK:function(j,u,o){"use strict";Object.defineProperty(u,"__esModule",{value:!0});var R={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"};u.default=R},rsCp:function(j,u,o){},tMyG:function(j,u,o){"use strict";var R=o("cIOH"),A=o("15/o"),x=o("pVnL"),y=o.n(x),I=o("lSNA"),B=o.n(I),K=o("lwsE"),G=o.n(K),F=o("W8MJ"),W=o.n(F),Y=o("7W2i"),H=o.n(Y),z=o("LQ03"),X=o.n(z),k=o("cDf5"),q=o.n(k),l=o("q1tI"),c=o.n(l),h=o("TSYQ"),g=o.n(h),O=o("BGR+"),N=o("t23M"),D=o("H84U"),ne=o("RIqP"),ae=o.n(ne),oe=o("wgJM");function fe(a){var t,r=function(i){return function(){t=null,a.apply(void 0,ae()(i))}},e=function(){if(t==null){for(var i=arguments.length,d=new Array(i),s=0;s<i;s++)d[s]=arguments[s];t=Object(oe.a)(r(d))}};return e.cancel=function(){return oe.a.cancel(t)},e}function ie(){return function(t,r,e){var n=e.value,i=!1;return{configurable:!0,get:function(){if(i||this===t.prototype||this.hasOwnProperty(r))return n;var s=fe(n.bind(this));return i=!0,Object.defineProperty(this,r,{value:s,configurable:!0,writable:!0}),i=!1,s}}}}var _=o("zT1h");function C(a){return a!==window?a.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function ee(a,t,r){return r!==void 0&&t.top>a.top-r?r+t.top:void 0}function te(a,t,r){if(r!==void 0&&t.bottom<a.bottom+r){var e=window.innerHeight-t.bottom;return r+e}}var $=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],Q=[];function de(){return Q}function ve(a,t){if(!a)return;var r=Q.find(function(e){return e.target===a});r?r.affixList.push(t):(r={target:a,affixList:[t],eventHandlers:{}},Q.push(r),$.forEach(function(e){r.eventHandlers[e]=Object(_.a)(a,e,function(){r.affixList.forEach(function(n){n.lazyUpdatePosition()})})}))}function me(a){var t=Q.find(function(r){var e=r.affixList.some(function(n){return n===a});return e&&(r.affixList=r.affixList.filter(function(n){return n!==a})),e});t&&t.affixList.length===0&&(Q=Q.filter(function(r){return r!==t}),$.forEach(function(r){var e=t.eventHandlers[r];e&&e.remove&&e.remove()}))}var he=function(a,t,r,e){var n=arguments.length,i=n<3?t:e===null?e=Object.getOwnPropertyDescriptor(t,r):e,d;if((typeof Reflect=="undefined"?"undefined":q()(Reflect))==="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(a,t,r,e);else for(var s=a.length-1;s>=0;s--)(d=a[s])&&(i=(n<3?d(i):n>3?d(t,r,i):d(t,r))||i);return n>3&&i&&Object.defineProperty(t,r,i),i};function Re(){return typeof window!="undefined"?window:null}var V;(function(a){a[a.None=0]="None",a[a.Prepare=1]="Prepare"})(V||(V={}));var le=function(a){H()(r,a);var t=X()(r);function r(){var e;return G()(this,r),e=t.apply(this,arguments),e.state={status:V.None,lastAffix:!1,prevTarget:null},e.getOffsetTop=function(){var n=e.props.offsetBottom,i=e.props.offsetTop;return n===void 0&&i===void 0&&(i=0),i},e.getOffsetBottom=function(){return e.props.offsetBottom},e.savePlaceholderNode=function(n){e.placeholderNode=n},e.saveFixedNode=function(n){e.fixedNode=n},e.measure=function(){var n=e.state,i=n.status,d=n.lastAffix,s=e.props.onChange,f=e.getTargetFunc();if(i!==V.Prepare||!e.fixedNode||!e.placeholderNode||!f)return;var v=e.getOffsetTop(),p=e.getOffsetBottom(),P=f();if(!P)return;var m={status:V.None},E=C(P),b=C(e.placeholderNode),T=ee(b,E,v),S=te(b,E,p);T!==void 0?(m.affixStyle={position:"fixed",top:T,width:b.width,height:b.height},m.placeholderStyle={width:b.width,height:b.height}):S!==void 0&&(m.affixStyle={position:"fixed",bottom:S,width:b.width,height:b.height},m.placeholderStyle={width:b.width,height:b.height}),m.lastAffix=!!m.affixStyle,s&&d!==m.lastAffix&&s(m.lastAffix),e.setState(m)},e.prepareMeasure=function(){if(e.setState({status:V.Prepare,affixStyle:void 0,placeholderStyle:void 0}),!1)var n},e.render=function(){var n=e.context.getPrefixCls,i=e.state,d=i.affixStyle,s=i.placeholderStyle,f=e.props,v=f.prefixCls,p=f.children,P=g()(B()({},n("affix",v),d)),m=Object(O.a)(e.props,["prefixCls","offsetTop","offsetBottom","target","onChange"]);return l.createElement(N.a,{onResize:function(){e.updatePosition()}},l.createElement("div",y()({},m,{ref:e.savePlaceholderNode}),d&&l.createElement("div",{style:s,"aria-hidden":"true"}),l.createElement("div",{className:P,ref:e.saveFixedNode,style:d},l.createElement(N.a,{onResize:function(){e.updatePosition()}},p))))},e}return W()(r,[{key:"getTargetFunc",value:function(){var n=this.context.getTargetContainer,i=this.props.target;return i!==void 0?i:n||Re}},{key:"componentDidMount",value:function(){var n=this,i=this.getTargetFunc();i&&(this.timeout=setTimeout(function(){ve(i(),n),n.updatePosition()}))}},{key:"componentDidUpdate",value:function(n){var i=this.state.prevTarget,d=this.getTargetFunc(),s=null;d&&(s=d()||null),i!==s&&(me(this),s&&(ve(s,this),this.updatePosition()),this.setState({prevTarget:s})),(n.offsetTop!==this.props.offsetTop||n.offsetBottom!==this.props.offsetBottom)&&this.updatePosition(),this.measure()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout),me(this),this.updatePosition.cancel(),this.lazyUpdatePosition.cancel()}},{key:"updatePosition",value:function(){this.prepareMeasure()}},{key:"lazyUpdatePosition",value:function(){var n=this.getTargetFunc(),i=this.state.affixStyle;if(n&&i){var d=this.getOffsetTop(),s=this.getOffsetBottom(),f=n();if(f&&this.placeholderNode){var v=C(f),p=C(this.placeholderNode),P=ee(p,v,d),m=te(p,v,s);if(P!==void 0&&i.top===P||m!==void 0&&i.bottom===m)return}}this.prepareMeasure()}}]),r}(l.Component);le.contextType=D.b,he([ie()],le.prototype,"updatePosition",null),he([ie()],le.prototype,"lazyUpdatePosition",null);var Ne=le,Ot=o("GNNt"),je=o("wEI+"),Pt=o("YV/h"),Et=o("AOa7"),Ct=o("lUTK"),bt=o("qVdP"),xt=o("Telt"),Be=o("J4zp"),De=o.n(Be),Me=o("h4NZ"),Ae=o.n(Me),Ie=o("/hEp"),Se=o.n(Ie),Le=o("Zm9Q"),He=o("HQEm"),Ke=o.n(He),We=o("XBQK"),Ue=function(a,t){var r={};for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&t.indexOf(e)<0&&(r[e]=a[e]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(a);n<e.length;n++)t.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(a,e[n])&&(r[e[n]]=a[e[n]]);return r},ge=function(t){var r=t.prefixCls,e=t.separator,n=e===void 0?"/":e,i=t.children,d=t.overlay,s=t.dropdownProps,f=Ue(t,["prefixCls","separator","children","overlay","dropdownProps"]),v=l.useContext(D.b),p=v.getPrefixCls,P=p("breadcrumb",r),m=function(T){return d?l.createElement(We.a,y()({overlay:d,placement:"bottomCenter"},s),l.createElement("span",{className:"".concat(P,"-overlay-link")},T,l.createElement(Ke.a,null))):T},E;return"href"in f?E=l.createElement("a",y()({className:"".concat(P,"-link")},f),i):E=l.createElement("span",y()({className:"".concat(P,"-link")},f),i),E=m(E),i?l.createElement("span",null,E,n&&n!==""&&l.createElement("span",{className:"".concat(P,"-separator")},n)):null};ge.__ANT_BREADCRUMB_ITEM=!0;var pe=ge,ye=function(t){var r=t.children,e=l.useContext(D.b),n=e.getPrefixCls,i=n("breadcrumb");return l.createElement("span",{className:"".concat(i,"-separator")},r||"/")};ye.__ANT_BREADCRUMB_SEPARATOR=!0;var we=ye,Oe=o("BvKs"),Fe=o("uaoM"),ze=o("0n0R"),$e=function(a,t){var r={};for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&t.indexOf(e)<0&&(r[e]=a[e]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(a);n<e.length;n++)t.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(a,e[n])&&(r[e[n]]=a[e[n]]);return r};function Qe(a,t){if(!a.breadcrumbName)return null;var r=Object.keys(t).join("|"),e=a.breadcrumbName.replace(new RegExp(":(".concat(r,")"),"g"),function(n,i){return t[i]||n});return e}function Ge(a,t,r,e){var n=r.indexOf(a)===r.length-1,i=Qe(a,t);return n?l.createElement("span",null,i):l.createElement("a",{href:"#/".concat(e.join("/"))},i)}var Pe=function(t,r){return t=(t||"").replace(/^\//,""),Object.keys(r).forEach(function(e){t=t.replace(":".concat(e),r[e])}),t},Ye=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",e=arguments.length>2?arguments[2]:void 0,n=ae()(t),i=Pe(r,e);return i&&n.push(i),n},ue=function(t){var r=t.prefixCls,e=t.separator,n=e===void 0?"/":e,i=t.style,d=t.className,s=t.routes,f=t.children,v=t.itemRender,p=v===void 0?Ge:v,P=t.params,m=P===void 0?{}:P,E=$e(t,["prefixCls","separator","style","className","routes","children","itemRender","params"]),b=l.useContext(D.b),T=b.getPrefixCls,S=b.direction,w,J=T("breadcrumb",r);if(s&&s.length>0){var L=[];w=s.map(function(M){var re=Pe(M.path,m);re&&L.push(re);var Te;return M.children&&M.children.length&&(Te=l.createElement(Oe.a,null,M.children.map(function(ce){return l.createElement(Oe.a.Item,{key:ce.path||ce.breadcrumbName},p(ce,m,s,Ye(L,ce.path,m)))}))),l.createElement(pe,{overlay:Te,separator:n,key:re||M.breadcrumbName},p(M,m,s,L))})}else f&&(w=Object(Le.a)(f).map(function(M,re){return M&&(Object(Fe.a)(M.type&&(M.type.__ANT_BREADCRUMB_ITEM===!0||M.type.__ANT_BREADCRUMB_SEPARATOR===!0),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),Object(ze.a)(M,{separator:n,key:re}))}));var se=g()(J,B()({},"".concat(J,"-rtl"),S==="rtl"),d);return l.createElement("div",y()({className:se,style:i},E),w)};ue.Item=pe,ue.Separator=we;var Ve=ue,Ze=Ve,Je=o("Tckk"),Ee=o("4IlW"),Xe=function(a,t){var r={};for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&t.indexOf(e)<0&&(r[e]=a[e]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(a);n<e.length;n++)t.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(a,e[n])&&(r[e[n]]=a[e[n]]);return r},ke={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},qe=l.forwardRef(function(a,t){var r=function(p){var P=p.keyCode;P===Ee.a.ENTER&&p.preventDefault()},e=function(p){var P=p.keyCode,m=a.onClick;P===Ee.a.ENTER&&m&&m()},n=a.style,i=a.noStyle,d=a.disabled,s=Xe(a,["style","noStyle","disabled"]),f={};return i||(f=y()({},ke)),d&&(f.pointerEvents="none"),f=y()(y()({},f),n),l.createElement("div",y()({role:"button",tabIndex:0,ref:t},s,{onKeyDown:r,onKeyUp:e,style:f}))}),_e=qe,et=o("YMnH"),tt=function(t,r,e){return!r||!e?null:l.createElement(et.a,{componentName:"PageHeader"},function(n){var i=n.back;return l.createElement("div",{className:"".concat(t,"-back")},l.createElement(_e,{onClick:function(s){e&&e(s)},className:"".concat(t,"-back-button"),"aria-label":i},r))})},rt=function(t){return l.createElement(Ze,t)},nt=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"ltr";return t.backIcon!==void 0?t.backIcon:r==="rtl"?l.createElement(Se.a,null):l.createElement(Ae.a,null)},at=function(t,r){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"ltr",n=r.title,i=r.avatar,d=r.subTitle,s=r.tags,f=r.extra,v=r.onBack,p="".concat(t,"-heading"),P=n||d||s||f;if(!P)return null;var m=nt(r,e),E=tt(t,m,v),b=E||i||P;return l.createElement("div",{className:p},b&&l.createElement("div",{className:"".concat(p,"-left")},E,i&&l.createElement(Je.a,i),n&&l.createElement("span",{className:"".concat(p,"-title"),title:typeof n=="string"?n:void 0},n),d&&l.createElement("span",{className:"".concat(p,"-sub-title"),title:typeof d=="string"?d:void 0},d),s&&l.createElement("span",{className:"".concat(p,"-tags")},s)),f&&l.createElement("span",{className:"".concat(p,"-extra")},f))},ot=function(t,r){return r?l.createElement("div",{className:"".concat(t,"-footer")},r):null},it=function(t,r){return l.createElement("div",{className:"".concat(t,"-content")},r)},lt=function(t){var r=l.useState(!1),e=De()(r,2),n=e[0],i=e[1],d=function(f){var v=f.width;i(v<768)};return l.createElement(D.a,null,function(s){var f,v=s.getPrefixCls,p=s.pageHeader,P=s.direction,m=t.prefixCls,E=t.style,b=t.footer,T=t.children,S=t.breadcrumb,w=t.className,J=!0;"ghost"in t?J=t.ghost:p&&"ghost"in p&&(J=p.ghost);var L=v("page-header",m),se=S&&S.routes?rt(S):null,M=g()(L,w,(f={"has-breadcrumb":se,"has-footer":b},B()(f,"".concat(L,"-ghost"),J),B()(f,"".concat(L,"-rtl"),P==="rtl"),B()(f,"".concat(L,"-compact"),n),f));return l.createElement(N.a,{onResize:d},l.createElement("div",{className:M,style:E},se,at(L,t,P),T&&it(L,T),ot(L,b)))})},st=lt,Tt=o("Znn+"),Ce=o("ZTPi"),ct=o("jYQm"),ft=o("FRQA"),dt=o("jRje"),Rt=o("u/V1"),ut=o("95SA");function be(a,t){var r=Object.keys(a);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(a);t&&(e=e.filter(function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable})),r.push.apply(r,e)}return r}function U(a){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?be(Object(r),!0).forEach(function(e){xe(a,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(r)):be(Object(r)).forEach(function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(r,e))})}return a}function xe(a,t,r){return t in a?Object.defineProperty(a,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):a[t]=r,a}function vt(a,t){if(a==null)return{};var r=mt(a,t),e,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(n=0;n<i.length;n++){if(e=i[n],t.indexOf(e)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(a,e))continue;r[e]=a[e]}}return r}function mt(a,t){if(a==null)return{};var r={},e=Object.keys(a),n,i;for(i=0;i<e.length;i++){if(n=e[i],t.indexOf(n)>=0)continue;r[n]=a[n]}return r}function Z(){return Z=Object.assign||function(a){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(a[e]=r[e])}return a},Z.apply(this,arguments)}var ht=function(t){var r=t.tabList,e=t.tabActiveKey,n=t.onTabChange,i=t.tabBarExtraContent,d=t.tabProps,s=t.prefixedClassName;return r&&r.length?c.a.createElement(Ce.a,Z({className:"".concat(s,"-tabs"),activeKey:e,onChange:function(v){n&&n(v)},tabBarExtraContent:i},d),r.map(function(f,v){return c.a.createElement(Ce.a.TabPane,Z({},f,{tab:f.tab,key:f.key||v}))})):null},gt=function(t,r,e){return!t&&!r?null:c.a.createElement("div",{className:"".concat(e,"-detail")},c.a.createElement("div",{className:"".concat(e,"-main")},c.a.createElement("div",{className:"".concat(e,"-row")},t&&c.a.createElement("div",{className:"".concat(e,"-content")},t),r&&c.a.createElement("div",{className:"".concat(e,"-extraContent")},r))))},pt=function(t,r){var e,n,i,d=t.title,s=t.content,f=t.pageHeaderRender,v=t.header,p=t.extraContent,P=t.style,m=t.prefixCls,E=vt(t,["title","content","pageHeaderRender","header","extraContent","style","prefixCls"]);if(f===!1)return null;if(f)return f(U(U({},t),r));var b=d;!d&&d!==!1&&(b=r.title);var T=U(U(U({},r),{},{title:b},E),{},{footer:ht(U(U({},E),{},{prefixedClassName:r.prefixedClassName}))},v);return!T.title&&!T.subTitle&&!((e=T.breadcrumb)===null||e===void 0?void 0:e.itemRender)&&!((n=T.breadcrumb)===null||n===void 0||((i=n.routes)===null||i===void 0)?void 0:i.length)&&!T.extra&&!T.tags&&!T.footer&&!T.avatar&&!T.backIcon?null:c.a.createElement(st,Z({},T,{prefixCls:m}),(v==null?void 0:v.children)||gt(s,p,r.prefixedClassName))},yt=function(t){var r=t.children,e=t.loading,n=t.style,i=t.footer,d=t.affixProps,s=t.ghost,f=t.fixedHeader,v=Object(l.useContext)(ct.a),p=Object(l.useContext)(je.a.ConfigContext),P=p.getPrefixCls,m=t.prefixCls||P("pro"),E="".concat(m,"-page-container"),b=g()(E,t.className,xe({},"".concat(m,"-page-container-ghost"),s)),T=r?c.a.createElement("div",null,c.a.createElement("div",{className:"".concat(E,"-children-content")},r),v.hasFooterToolbar&&c.a.createElement("div",{style:{height:48,marginTop:24}})):null,S=pt(t,U(U({},v),{},{prefixCls:void 0,prefixedClassName:E})),w=S?c.a.createElement("div",{className:"".concat(E,"-warp")},S):null;return c.a.createElement("div",{style:n,className:b},f&&w?c.a.createElement(Ne,Z({offsetTop:v.hasHeader&&v.fixedHeader?v.headerHeight:0},d),w):w,c.a.createElement(ft.a,null,e?c.a.createElement(ut.a,null):T),i&&c.a.createElement(dt.a,{prefixCls:m},i))},Nt=u.a=yt},"u/V1":function(j,u,o){}}]);