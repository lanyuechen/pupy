(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{MZhU:function(U,E,a){U.exports={container:"container___3DGcF",lang:"lang___18BEt",content:"content___24x6E",top:"top___Kmd6o",header:"header___1kD8J",logo:"logo___2Fmyt",title:"title___3pcso",desc:"desc___2QZoR",main:"main___3ipCw",icon:"icon___P3cg6",other:"other___3uIfA",register:"register___3Mz8E",prefixIcon:"prefixIcon___Tvd5H"}},Z1IU:function(U,E,a){"use strict";a.r(E);var oe=a("DYRE"),y=a("zeV3"),e=a("nKUr"),ce=a.n(e),le=a("Znn+"),h=a("ZTPi"),de=a("miYZ"),f=a("tsqr"),W=a("o0o1"),l=a.n(W),m=a("VTBJ"),O=a("HaE+"),M=a("ODXe"),pe=a("fOrg"),S=a("+KLJ"),N=a("cJ7L"),F=a("MGYb"),z=a("FQ2w"),Z=a("cGnJ"),G=a("Y0UT"),J=a("80zm"),$=a("CZrw"),x=a("q1tI"),_e=a.n(x),V=a("VMEa"),j=a("Qurx"),Y=a("/aGu"),H=a("tneF"),d=a("9kvl"),Q=a("uYtH"),X=a("CwrG"),D=a("63rs"),w=a("MZhU"),s=a.n(w),b=function(u){var p=u.content;return Object(e.jsx)(S.a,{style:{marginBottom:24},message:p,type:"error",showIcon:!0,"data-inspector-line":"22","data-inspector-column":"2","data-inspector-relative-path":"src/pages/User/login/index.tsx"})},k=function(){if(!d.b)return;setTimeout(function(){var u=d.b.location.query,p=u,P=p.redirect;d.b.push(P||"/")},10)},q=function(){var u=Object(x.useState)(!1),p=Object(M.a)(u,2),P=p[0],I=p[1],ee=Object(x.useState)({}),T=Object(M.a)(ee,2),L=T[0],ae=T[1],te=Object(x.useState)("account"),C=Object(M.a)(te,2),v=C[0],se=C[1],A=Object(d.f)("@@initialState"),g=A.initialState,ne=A.setInitialState,o=Object(d.e)(),re=function(){var c=Object(O.a)(l.a.mark(function n(){var r,i;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g==null||((r=g.fetchUserInfo)===null||r===void 0)?void 0:r.call(g);case 2:i=t.sent,i&&ne(Object(m.a)(Object(m.a)({},g),{},{currentUser:i}));case 4:case"end":return t.stop()}},n)}));return function(){return c.apply(this,arguments)}}(),ie=function(){var c=Object(O.a)(l.a.mark(function n(r){var i;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return I(!0),t.prev=1,t.next=4,Object(D.a)(Object(m.a)(Object(m.a)({},r),{},{type:v}));case 4:if(i=t.sent,!(i.status==="ok")){t.next=11;break}return f.default.success("\u767B\u5F55\u6210\u529F\uFF01"),t.next=9,re();case 9:return k(),t.abrupt("return");case 11:ae(i),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(1),f.default.error("\u767B\u5F55\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\uFF01");case 17:I(!1);case 18:case"end":return t.stop()}},n,null,[[1,14]])}));return function(r){return c.apply(this,arguments)}}(),K=L.status,R=L.type;return Object(e.jsxs)("div",{className:s.a.container,"data-inspector-line":"85","data-inspector-column":"4","data-inspector-relative-path":"src/pages/User/login/index.tsx",children:[Object(e.jsx)("div",{className:s.a.lang,"data-inspector-line":"86","data-inspector-column":"6","data-inspector-relative-path":"src/pages/User/login/index.tsx",children:d.a&&Object(e.jsx)(d.a,{"data-inspector-line":"86","data-inspector-column":"50","data-inspector-relative-path":"src/pages/User/login/index.tsx"})}),Object(e.jsxs)("div",{className:s.a.content,"data-inspector-line":"87","data-inspector-column":"6","data-inspector-relative-path":"src/pages/User/login/index.tsx",children:[Object(e.jsxs)("div",{className:s.a.top,"data-inspector-line":"88","data-inspector-column":"8","data-inspector-relative-path":"src/pages/User/login/index.tsx",children:[Object(e.jsx)("div",{className:s.a.header,"data-inspector-line":"89","data-inspector-column":"10","data-inspector-relative-path":"src/pages/User/login/index.tsx",children:Object(e.jsxs)(Q.a,{to:"/","data-inspector-line":"90","data-inspector-column":"12","data-inspector-relative-path":"src/pages/User/login/index.tsx",children:[Object(e.jsx)("img",{alt:"logo",className:s.a.logo,src:"/logo.svg","data-inspector-line":"91","data-inspector-column":"14","data-inspector-relative-path":"src/pages/User/login/index.tsx"}),Object(e.jsx)("span",{className:s.a.title,"data-inspector-line":"92","data-inspector-column":"14","data-inspector-relative-path":"src/pages/User/login/index.tsx",children:"Ant Design"})]})}),Object(e.jsx)("div",{className:s.a.desc,"data-inspector-line":"95","data-inspector-column":"10","data-inspector-relative-path":"src/pages/User/login/index.tsx",children:"Ant Design \u662F\u897F\u6E56\u533A\u6700\u5177\u5F71\u54CD\u529B\u7684 Web \u8BBE\u8BA1\u89C4\u8303"})]}),Object(e.jsxs)("div",{className:s.a.main,"data-inspector-line":"98","data-inspector-column":"8","data-inspector-relative-path":"src/pages/User/login/index.tsx",children:[Object(e.jsxs)(V.a,{initialValues:{autoLogin:!0},submitter:{searchConfig:{submitText:o.formatMessage({id:"pages.login.submit",defaultMessage:"\u767B\u5F55"})},render:function(n,r){return r.pop()},submitButtonProps:{loading:P,size:"large",style:{width:"100%"}}},onFinish:function(){var c=Object(O.a)(l.a.mark(function n(r){return l.a.wrap(function(_){for(;;)switch(_.prev=_.next){case 0:ie(r);case 1:case"end":return _.stop()}},n)}));return function(n){return c.apply(this,arguments)}}(),"data-inspector-line":"99","data-inspector-column":"10","data-inspector-relative-path":"src/pages/User/login/index.tsx",children:[Object(e.jsxs)(h.a,{activeKey:v,onChange:se,"data-inspector-line":"123","data-inspector-column":"12","data-inspector-relative-path":"src/pages/User/login/index.tsx",children:[Object(e.jsx)(h.a.TabPane,{tab:o.formatMessage({id:"pages.login.accountLogin.tab",defaultMessage:"\u8D26\u6237\u5BC6\u7801\u767B\u5F55"}),"data-inspector-line":"124","data-inspector-column":"14","data-inspector-relative-path":"src/pages/User/login/index.tsx"},"account"),Object(e.jsx)(h.a.TabPane,{tab:o.formatMessage({id:"pages.login.phoneLogin.tab",defaultMessage:"\u624B\u673A\u53F7\u767B\u5F55"}),"data-inspector-line":"131","data-inspector-column":"14","data-inspector-relative-path":"src/pages/User/login/index.tsx"},"mobile")]}),K==="error"&&R==="account"&&Object(e.jsx)(b,{content:o.formatMessage({id:"pages.login.accountLogin.errorMessage",defaultMessage:"\u8D26\u6237\u6216\u5BC6\u7801\u9519\u8BEF\uFF08admin/ant.design)"}),"data-inspector-line":"141","data-inspector-column":"14","data-inspector-relative-path":"src/pages/User/login/index.tsx"}),v==="account"&&Object(e.jsxs)(e.Fragment,{children:[Object(e.jsx)(j.a,{name:"username",fieldProps:{size:"large",prefix:Object(e.jsx)(N.a,{className:s.a.prefixIcon,"data-inspector-line":"154","data-inspector-column":"28","data-inspector-relative-path":"src/pages/User/login/index.tsx"})},placeholder:o.formatMessage({id:"pages.login.username.placeholder",defaultMessage:"\u7528\u6237\u540D: admin or user"}),rules:[{required:!0,message:"\u7528\u6237\u540D\u662F\u5FC5\u586B\u9879\uFF01"}],"data-inspector-line":"150","data-inspector-column":"16","data-inspector-relative-path":"src/pages/User/login/index.tsx"}),Object(e.jsx)(j.a.Password,{name:"password",fieldProps:{size:"large",prefix:Object(e.jsx)(F.a,{className:s.a.prefixIcon,"data-inspector-line":"171","data-inspector-column":"28","data-inspector-relative-path":"src/pages/User/login/index.tsx"})},placeholder:o.formatMessage({id:"pages.login.password.placeholder",defaultMessage:"\u5BC6\u7801: ant.design"}),rules:[{required:!0,message:"\u5BC6\u7801\u662F\u5FC5\u586B\u9879\uFF01"}],"data-inspector-line":"167","data-inspector-column":"16","data-inspector-relative-path":"src/pages/User/login/index.tsx"})]}),K==="error"&&R==="mobile"&&Object(e.jsx)(b,{content:"\u9A8C\u8BC1\u7801\u9519\u8BEF","data-inspector-line":"187","data-inspector-column":"61","data-inspector-relative-path":"src/pages/User/login/index.tsx"}),v==="mobile"&&Object(e.jsxs)(e.Fragment,{children:[Object(e.jsx)(j.a,{fieldProps:{size:"large",prefix:Object(e.jsx)(z.a,{className:s.a.prefixIcon,"data-inspector-line":"193","data-inspector-column":"28","data-inspector-relative-path":"src/pages/User/login/index.tsx"})},name:"mobile",placeholder:o.formatMessage({id:"pages.login.phoneNumber.placeholder",defaultMessage:"\u624B\u673A\u53F7"}),rules:[{required:!0,message:"\u624B\u673A\u53F7\u662F\u5FC5\u586B\u9879\uFF01"},{pattern:/^1\d{10}$/,message:"\u4E0D\u5408\u6CD5\u7684\u624B\u673A\u53F7\uFF01"}],"data-inspector-line":"190","data-inspector-column":"16","data-inspector-relative-path":"src/pages/User/login/index.tsx"}),Object(e.jsx)(Y.a,{fieldProps:{size:"large",prefix:Object(e.jsx)(Z.a,{className:s.a.prefixIcon,"data-inspector-line":"214","data-inspector-column":"28","data-inspector-relative-path":"src/pages/User/login/index.tsx"})},captchaProps:{size:"large"},placeholder:o.formatMessage({id:"pages.login.captcha.placeholder",defaultMessage:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"}),captchaTextRender:function(n,r){return n?"".concat(r," ").concat(o.formatMessage({id:"pages.getCaptchaSecondText",defaultMessage:"\u83B7\u53D6\u9A8C\u8BC1\u7801"})):o.formatMessage({id:"pages.login.phoneLogin.getVerificationCode",defaultMessage:"\u83B7\u53D6\u9A8C\u8BC1\u7801"})},name:"captcha",rules:[{required:!0,message:"\u9A8C\u8BC1\u7801\u662F\u5FC5\u586B\u9879\uFF01"}],onGetCaptcha:function(){var c=Object(O.a)(l.a.mark(function n(r){var i;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(D.b)(r);case 2:if(i=t.sent,!(i===!1)){t.next=5;break}return t.abrupt("return");case 5:f.default.success("\u83B7\u53D6\u9A8C\u8BC1\u7801\u6210\u529F\uFF01\u9A8C\u8BC1\u7801\u4E3A\uFF1A1234");case 6:case"end":return t.stop()}},n)}));return function(n){return c.apply(this,arguments)}}(),"data-inspector-line":"211","data-inspector-column":"16","data-inspector-relative-path":"src/pages/User/login/index.tsx"})]}),Object(e.jsxs)("div",{style:{marginBottom:24},"data-inspector-line":"255","data-inspector-column":"12","data-inspector-relative-path":"src/pages/User/login/index.tsx",children:[Object(e.jsx)(H.a,{noStyle:!0,name:"autoLogin","data-inspector-line":"260","data-inspector-column":"14","data-inspector-relative-path":"src/pages/User/login/index.tsx",children:"\u81EA\u52A8\u767B\u5F55"}),Object(e.jsx)("a",{style:{float:"right"},"data-inspector-line":"263","data-inspector-column":"14","data-inspector-relative-path":"src/pages/User/login/index.tsx",children:"\u5FD8\u8BB0\u5BC6\u7801 ?"})]})]}),Object(e.jsxs)(y.b,{className:s.a.other,"data-inspector-line":"272","data-inspector-column":"10","data-inspector-relative-path":"src/pages/User/login/index.tsx",children:["\u5176\u4ED6\u767B\u5F55\u65B9\u5F0F :",Object(e.jsx)(G.a,{className:s.a.icon,"data-inspector-line":"274","data-inspector-column":"12","data-inspector-relative-path":"src/pages/User/login/index.tsx"}),Object(e.jsx)(J.a,{className:s.a.icon,"data-inspector-line":"275","data-inspector-column":"12","data-inspector-relative-path":"src/pages/User/login/index.tsx"}),Object(e.jsx)($.a,{className:s.a.icon,"data-inspector-line":"276","data-inspector-column":"12","data-inspector-relative-path":"src/pages/User/login/index.tsx"})]})]})]}),Object(e.jsx)(X.a,{"data-inspector-line":"280","data-inspector-column":"6","data-inspector-relative-path":"src/pages/User/login/index.tsx"})]})};E.default=q}}]);