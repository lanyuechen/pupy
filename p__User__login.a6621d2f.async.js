(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{MZhU:function(P,v,a){P.exports={container:"container___3DGcF",lang:"lang___18BEt",content:"content___24x6E",top:"top___Kmd6o",header:"header___1kD8J",logo:"logo___2Fmyt",title:"title___3pcso",desc:"desc___2QZoR",main:"main___3ipCw",icon:"icon___P3cg6",other:"other___3uIfA",register:"register___3Mz8E",prefixIcon:"prefixIcon___Tvd5H"}},Z1IU:function(P,v,a){"use strict";a.r(v);var oe=a("DYRE"),R=a("zeV3"),e=a("nKUr"),ce=a.n(e),le=a("Znn+"),E=a("ZTPi"),de=a("miYZ"),j=a("tsqr"),W=a("o0o1"),d=a.n(W),m=a("VTBJ"),x=a("HaE+"),f=a("ODXe"),pe=a("fOrg"),y=a("+KLJ"),S=a("cJ7L"),N=a("MGYb"),z=a("FQ2w"),Z=a("cGnJ"),G=a("Y0UT"),J=a("80zm"),$=a("CZrw"),O=a("q1tI"),ue=a.n(O),V=a("VMEa"),M=a("Qurx"),Y=a("/aGu"),H=a("tneF"),n=a("9kvl"),Q=a("uYtH"),X=a("CwrG"),D=a("63rs"),w=a("MZhU"),s=a.n(w),b=function(_){var p=_.content;return Object(e.jsx)(y.a,{style:{marginBottom:24},message:p,type:"error",showIcon:!0,"data-inspector-line":"23","data-inspector-column":"2","data-inspector-relative-path":"src/pages/User/login/index.tsx"})},k=function(){if(!n.c)return;setTimeout(function(){var _=n.c.location.query,p=_,U=p.redirect;n.c.push(U||"/")},10)},q=function(){var _=Object(O.useState)(!1),p=Object(f.a)(_,2),U=p[0],C=p[1],ee=Object(O.useState)({}),I=Object(f.a)(ee,2),T=I[0],ae=I[1],te=Object(O.useState)("account"),L=Object(f.a)(te,2),h=L[0],se=L[1],A=Object(n.g)("@@initialState"),g=A.initialState,ne=A.setInitialState,c=Object(n.f)(),re=function(){var l=Object(x.a)(d.a.mark(function r(){var i,o;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g==null||((i=g.fetchUserInfo)===null||i===void 0)?void 0:i.call(g);case 2:o=t.sent,o&&ne(Object(m.a)(Object(m.a)({},g),{},{currentUser:o}));case 4:case"end":return t.stop()}},r)}));return function(){return l.apply(this,arguments)}}(),ie=function(){var l=Object(x.a)(d.a.mark(function r(i){var o;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return C(!0),t.prev=1,t.next=4,Object(D.a)(Object(m.a)(Object(m.a)({},i),{},{type:h}));case 4:if(o=t.sent,!(o.status==="ok")){t.next=11;break}return j.default.success("\u767B\u5F55\u6210\u529F\uFF01"),t.next=9,re();case 9:return k(),t.abrupt("return");case 11:ae(o),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(1),j.default.error("\u767B\u5F55\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\uFF01");case 17:C(!1);case 18:case"end":return t.stop()}},r,null,[[1,14]])}));return function(i){return l.apply(this,arguments)}}(),F=T.status,K=T.type;return Object(e.jsxs)("div",{className:s.a.container,"data-inspector-line":"84","data-inspector-column":"4","data-inspector-relative-path":"src/pages/User/login/index.tsx",children:[Object(e.jsx)("div",{className:s.a.lang,"data-inspector-line":"85","data-inspector-column":"6","data-inspector-relative-path":"src/pages/User/login/index.tsx",children:n.b&&Object(e.jsx)(n.b,{"data-inspector-line":"85","data-inspector-column":"50","data-inspector-relative-path":"src/pages/User/login/index.tsx"})}),Object(e.jsxs)("div",{className:s.a.content,"data-inspector-line":"86","data-inspector-column":"6","data-inspector-relative-path":"src/pages/User/login/index.tsx",children:[Object(e.jsxs)("div",{className:s.a.top,"data-inspector-line":"87","data-inspector-column":"8","data-inspector-relative-path":"src/pages/User/login/index.tsx",children:[Object(e.jsx)("div",{className:s.a.header,"data-inspector-line":"88","data-inspector-column":"10","data-inspector-relative-path":"src/pages/User/login/index.tsx",children:Object(e.jsxs)(Q.a,{to:"/","data-inspector-line":"89","data-inspector-column":"12","data-inspector-relative-path":"src/pages/User/login/index.tsx",children:[Object(e.jsx)("img",{alt:"logo",className:s.a.logo,src:"/logo.svg","data-inspector-line":"90","data-inspector-column":"14","data-inspector-relative-path":"src/pages/User/login/index.tsx"}),Object(e.jsx)("span",{className:s.a.title,"data-inspector-line":"91","data-inspector-column":"14","data-inspector-relative-path":"src/pages/User/login/index.tsx",children:"Ant Design"})]})}),Object(e.jsx)("div",{className:s.a.desc,"data-inspector-line":"94","data-inspector-column":"10","data-inspector-relative-path":"src/pages/User/login/index.tsx",children:"Ant Design \u662F\u897F\u6E56\u533A\u6700\u5177\u5F71\u54CD\u529B\u7684 Web \u8BBE\u8BA1\u89C4\u8303"})]}),Object(e.jsxs)("div",{className:s.a.main,"data-inspector-line":"97","data-inspector-column":"8","data-inspector-relative-path":"src/pages/User/login/index.tsx",children:[Object(e.jsxs)(V.a,{initialValues:{autoLogin:!0},submitter:{searchConfig:{submitText:c.formatMessage({id:"pages.login.submit",defaultMessage:"\u767B\u5F55"})},render:function(r,i){return i.pop()},submitButtonProps:{loading:U,size:"large",style:{width:"100%"}}},onFinish:function(){var l=Object(x.a)(d.a.mark(function r(i){return d.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:ie(i);case 1:case"end":return u.stop()}},r)}));return function(r){return l.apply(this,arguments)}}(),"data-inspector-line":"98","data-inspector-column":"10","data-inspector-relative-path":"src/pages/User/login/index.tsx",children:[Object(e.jsxs)(E.a,{activeKey:h,onChange:se,"data-inspector-line":"122","data-inspector-column":"12","data-inspector-relative-path":"src/pages/User/login/index.tsx",children:[Object(e.jsx)(E.a.TabPane,{tab:c.formatMessage({id:"pages.login.accountLogin.tab",defaultMessage:"\u8D26\u6237\u5BC6\u7801\u767B\u5F55"}),"data-inspector-line":"123","data-inspector-column":"14","data-inspector-relative-path":"src/pages/User/login/index.tsx"},"account"),Object(e.jsx)(E.a.TabPane,{tab:c.formatMessage({id:"pages.login.phoneLogin.tab",defaultMessage:"\u624B\u673A\u53F7\u767B\u5F55"}),"data-inspector-line":"130","data-inspector-column":"14","data-inspector-relative-path":"src/pages/User/login/index.tsx"},"mobile")]}),F==="error"&&K==="account"&&Object(e.jsx)(b,{content:c.formatMessage({id:"pages.login.accountLogin.errorMessage",defaultMessage:"\u8D26\u6237\u6216\u5BC6\u7801\u9519\u8BEF\uFF08admin/ant.design)"}),"data-inspector-line":"140","data-inspector-column":"14","data-inspector-relative-path":"src/pages/User/login/index.tsx"}),h==="account"&&Object(e.jsxs)(e.Fragment,{children:[Object(e.jsx)(M.a,{name:"username",fieldProps:{size:"large",prefix:Object(e.jsx)(S.a,{className:s.a.prefixIcon,"data-inspector-line":"153","data-inspector-column":"28","data-inspector-relative-path":"src/pages/User/login/index.tsx"})},placeholder:c.formatMessage({id:"pages.login.username.placeholder",defaultMessage:"\u7528\u6237\u540D: admin or user"}),rules:[{required:!0,message:Object(e.jsx)(n.a,{id:"pages.login.username.required",defaultMessage:"\u8BF7\u8F93\u5165\u7528\u6237\u540D!","data-inspector-line":"163","data-inspector-column":"24","data-inspector-relative-path":"src/pages/User/login/index.tsx"})}],"data-inspector-line":"149","data-inspector-column":"16","data-inspector-relative-path":"src/pages/User/login/index.tsx"}),Object(e.jsx)(M.a.Password,{name:"password",fieldProps:{size:"large",prefix:Object(e.jsx)(N.a,{className:s.a.prefixIcon,"data-inspector-line":"175","data-inspector-column":"28","data-inspector-relative-path":"src/pages/User/login/index.tsx"})},placeholder:c.formatMessage({id:"pages.login.password.placeholder",defaultMessage:"\u5BC6\u7801: ant.design"}),rules:[{required:!0,message:Object(e.jsx)(n.a,{id:"pages.login.password.required",defaultMessage:"\u8BF7\u8F93\u5165\u5BC6\u7801\uFF01","data-inspector-line":"185","data-inspector-column":"24","data-inspector-relative-path":"src/pages/User/login/index.tsx"})}],"data-inspector-line":"171","data-inspector-column":"16","data-inspector-relative-path":"src/pages/User/login/index.tsx"})]}),F==="error"&&K==="mobile"&&Object(e.jsx)(b,{content:"\u9A8C\u8BC1\u7801\u9519\u8BEF","data-inspector-line":"196","data-inspector-column":"61","data-inspector-relative-path":"src/pages/User/login/index.tsx"}),h==="mobile"&&Object(e.jsxs)(e.Fragment,{children:[Object(e.jsx)(M.a,{fieldProps:{size:"large",prefix:Object(e.jsx)(z.a,{className:s.a.prefixIcon,"data-inspector-line":"202","data-inspector-column":"28","data-inspector-relative-path":"src/pages/User/login/index.tsx"})},name:"mobile",placeholder:c.formatMessage({id:"pages.login.phoneNumber.placeholder",defaultMessage:"\u624B\u673A\u53F7"}),rules:[{required:!0,message:Object(e.jsx)(n.a,{id:"pages.login.phoneNumber.required",defaultMessage:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7\uFF01","data-inspector-line":"213","data-inspector-column":"24","data-inspector-relative-path":"src/pages/User/login/index.tsx"})},{pattern:/^1\d{10}$/,message:Object(e.jsx)(n.a,{id:"pages.login.phoneNumber.invalid",defaultMessage:"\u624B\u673A\u53F7\u683C\u5F0F\u9519\u8BEF\uFF01","data-inspector-line":"222","data-inspector-column":"24","data-inspector-relative-path":"src/pages/User/login/index.tsx"})}],"data-inspector-line":"199","data-inspector-column":"16","data-inspector-relative-path":"src/pages/User/login/index.tsx"}),Object(e.jsx)(Y.a,{fieldProps:{size:"large",prefix:Object(e.jsx)(Z.a,{className:s.a.prefixIcon,"data-inspector-line":"233","data-inspector-column":"28","data-inspector-relative-path":"src/pages/User/login/index.tsx"})},captchaProps:{size:"large"},placeholder:c.formatMessage({id:"pages.login.captcha.placeholder",defaultMessage:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"}),captchaTextRender:function(r,i){return r?"".concat(i," ").concat(c.formatMessage({id:"pages.getCaptchaSecondText",defaultMessage:"\u83B7\u53D6\u9A8C\u8BC1\u7801"})):c.formatMessage({id:"pages.login.phoneLogin.getVerificationCode",defaultMessage:"\u83B7\u53D6\u9A8C\u8BC1\u7801"})},name:"captcha",rules:[{required:!0,message:Object(e.jsx)(n.a,{id:"pages.login.captcha.required",defaultMessage:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801\uFF01","data-inspector-line":"259","data-inspector-column":"24","data-inspector-relative-path":"src/pages/User/login/index.tsx"})}],onGetCaptcha:function(){var l=Object(x.a)(d.a.mark(function r(i){var o;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(D.b)(i);case 2:if(o=t.sent,!(o===!1)){t.next=5;break}return t.abrupt("return");case 5:j.default.success("\u83B7\u53D6\u9A8C\u8BC1\u7801\u6210\u529F\uFF01\u9A8C\u8BC1\u7801\u4E3A\uFF1A1234");case 6:case"end":return t.stop()}},r)}));return function(r){return l.apply(this,arguments)}}(),"data-inspector-line":"230","data-inspector-column":"16","data-inspector-relative-path":"src/pages/User/login/index.tsx"})]}),Object(e.jsxs)("div",{style:{marginBottom:24},"data-inspector-line":"276","data-inspector-column":"12","data-inspector-relative-path":"src/pages/User/login/index.tsx",children:[Object(e.jsx)(H.a,{noStyle:!0,name:"autoLogin","data-inspector-line":"281","data-inspector-column":"14","data-inspector-relative-path":"src/pages/User/login/index.tsx",children:Object(e.jsx)(n.a,{id:"pages.login.rememberMe",defaultMessage:"\u81EA\u52A8\u767B\u5F55","data-inspector-line":"282","data-inspector-column":"16","data-inspector-relative-path":"src/pages/User/login/index.tsx"})}),Object(e.jsx)("a",{style:{float:"right"},"data-inspector-line":"284","data-inspector-column":"14","data-inspector-relative-path":"src/pages/User/login/index.tsx",children:Object(e.jsx)(n.a,{id:"pages.login.forgotPassword",defaultMessage:"\u5FD8\u8BB0\u5BC6\u7801","data-inspector-line":"289","data-inspector-column":"16","data-inspector-relative-path":"src/pages/User/login/index.tsx"})})]})]}),Object(e.jsxs)(R.b,{className:s.a.other,"data-inspector-line":"293","data-inspector-column":"10","data-inspector-relative-path":"src/pages/User/login/index.tsx",children:[Object(e.jsx)(n.a,{id:"pages.login.loginWith",defaultMessage:"\u5176\u4ED6\u767B\u5F55\u65B9\u5F0F","data-inspector-line":"294","data-inspector-column":"12","data-inspector-relative-path":"src/pages/User/login/index.tsx"}),Object(e.jsx)(G.a,{className:s.a.icon,"data-inspector-line":"295","data-inspector-column":"12","data-inspector-relative-path":"src/pages/User/login/index.tsx"}),Object(e.jsx)(J.a,{className:s.a.icon,"data-inspector-line":"296","data-inspector-column":"12","data-inspector-relative-path":"src/pages/User/login/index.tsx"}),Object(e.jsx)($.a,{className:s.a.icon,"data-inspector-line":"297","data-inspector-column":"12","data-inspector-relative-path":"src/pages/User/login/index.tsx"})]})]})]}),Object(e.jsx)(X.a,{"data-inspector-line":"301","data-inspector-column":"6","data-inspector-relative-path":"src/pages/User/login/index.tsx"})]})};v.default=q}}]);
