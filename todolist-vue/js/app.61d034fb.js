(function(e){function n(n){for(var r,o,i=n[0],c=n[1],s=n[2],l=0,d=[];l<i.length;l++)o=i[l],u[o]&&d.push(u[o][0]),u[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(n);while(d.length)d.shift()();return a.push.apply(a,s||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],r=!0,o=1;o<t.length;o++){var i=t[o];0!==u[i]&&(r=!1)}r&&(a.splice(n--,1),e=c(c.s=t[0]))}return e}var r={},o={app:0},u={app:0},a=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2d0cedba":"2873fc48","chunk-2d0f041d":"173a90c8","chunk-47c8287a":"46d31a00","chunk-51df7564":"9a3ddd0c","chunk-9a7981a0":"e2f3a4e6","chunk-e51c98d0":"a07b0f14"}[e]+".js"}function c(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t={"chunk-47c8287a":1,"chunk-9a7981a0":1,"chunk-e51c98d0":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise(function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0cedba":"31d6cfe0","chunk-2d0f041d":"31d6cfe0","chunk-47c8287a":"792bb18a","chunk-51df7564":"31d6cfe0","chunk-9a7981a0":"5bc09494","chunk-e51c98d0":"91f32a73"}[e]+".css",u=c.p+r,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var s=a[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===u))return n()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){s=d[i],l=s.getAttribute("data-href");if(l===r||l===u)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var r=n&&n.target&&n.target.src||u,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],f.parentNode.removeChild(f),t(a)},f.href=u;var h=document.getElementsByTagName("head")[0];h.appendChild(f)}).then(function(){o[e]=0}));var r=u[e];if(0!==r)if(r)n.push(r[2]);else{var a=new Promise(function(n,t){r=u[e]=[n,t]});n.push(r[2]=a);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e),s=function(n){l.onerror=l.onload=null,clearTimeout(d);var t=u[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src,a=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");a.type=r,a.request=o,t[1](a)}u[e]=void 0}};var d=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(n)},c.m=e,c.c=r,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)c.d(t,r,function(n){return e[n]}.bind(null,r));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="https://dubzzz.github.io/todolist-front/todolist-vue/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var d=0;d<s.length;d++)n(s[d]);var f=l;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"0f23":function(e,n,t){"use strict";t("96cf");var r=t("3b8d"),o=(t("75fc"),"password"),u=function(){var e=window.validToken||"w€lc0Me";return window.validToken=e,e},a=function(e,n){return n!==o?f(500):d({username:e,token:u()},500)},i=function(e){return e!==u()?d(!1,500):d(!0,500)},c=function(e,n){return localStorage.getItem("".concat(e,"::").concat(n))||""},s=function(e,n,t){return localStorage.setItem("".concat(e,"::").concat(n),t)},l=function(e,n){return localStorage.removeItem("".concat(e,"::").concat(n))},d=function(e,n){return new Promise(function(t){setTimeout(function(){return t(e)},n)})},f=function(e){return new Promise(function(n,t){setTimeout(function(){return t()},e)})};t.d(n,"a",function(){return h});var h={NonAuthenticated:"NonAuthenticated",OnGoingAuthentication:"OnGoingAuthentication",Authenticated:"Authenticated"},p={username:"",token:"",status:h.NonAuthenticated},m=function(e,n){s("AuthenticationProvider","username",e),s("AuthenticationProvider","token",n)},g={},v={loginByToken:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(n){var t,r,o,u;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t=n.commit,r=c("AuthenticationProvider","username"),o=c("AuthenticationProvider","token"),""!==o){e.next=5;break}return e.abrupt("return");case 5:return t("loginOnGoing"),e.next=8,i(o);case 8:u=e.sent,u?(m(r,o),t("loginSuccess",{username:r,token:o})):t("loginFailure");case 10:case"end":return e.stop()}},e)}));function n(n){return e.apply(this,arguments)}return n}(),loginByCreds:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(n,t){var r,o,u,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=n.commit,o=t.username,u=t.password,r("loginOnGoing"),e.prev=3,e.next=6,a(o,u);case 6:i=e.sent,m(i.username,i.token),r("loginSuccess",{username:i.username,token:i.token}),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](3),r("loginFailure");case 14:case"end":return e.stop()}},e,null,[[3,11]])}));function n(n,t){return e.apply(this,arguments)}return n}(),logout:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(n){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t=n.commit,l("AuthenticationProvider","username"),l("AuthenticationProvider","token"),t("loginFailure");case 4:case"end":return e.stop()}},e)}));function n(n){return e.apply(this,arguments)}return n}()},k={loginSuccess:function(e,n){var t=n.username,r=n.token;e.username=t,e.token=r,e.status=h.Authenticated},loginOnGoing:function(e){e.status=h.OnGoingAuthentication},loginFailure:function(e){e.status=h.NonAuthenticated}};n["b"]={namespaced:!0,state:p,getters:g,actions:v,mutations:k}},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("f751"),t("097d");var r=t("2b0e"),o=t("2f62"),u=t("0f23");r["default"].use(o["a"]);var a=!1,i=new o["a"].Store({modules:{authentication:u["b"]},strict:a,plugins:[]}),c=(t("51de"),t("e094"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view",{staticClass:"view"})],1)}),s=[],l={name:"app",components:{}},d=l,f=t("2877"),h=Object(f["a"])(d,c,s,!1,null,"f495d8e0",null),p=h.exports,m=t("8c4f"),g=function(){return Promise.all([t.e("chunk-2d0f041d"),t.e("chunk-9a7981a0")]).then(t.bind(null,"067f"))},v=function(){return t.e("chunk-2d0cedba").then(t.bind(null,"60f0"))},k=function(){return Promise.all([t.e("chunk-2d0f041d"),t.e("chunk-51df7564")]).then(t.bind(null,"c29a"))},b=function(){return Promise.all([t.e("chunk-2d0f041d"),t.e("chunk-e51c98d0")]).then(t.bind(null,"1638"))},w=function(){return Promise.all([t.e("chunk-2d0f041d"),t.e("chunk-47c8287a")]).then(t.bind(null,"2147"))};r["default"].use(m["a"]);var y=new m["a"]({base:"/todolist-front/todolist-vue/",mode:"hash",routes:[{path:"/login",name:"login",component:w,props:function(e){return{redirect:e.query.redirect||"/"}}},{path:"/",name:"home",component:g,children:[{path:"learn-more",name:"learn-more",component:k},{path:"",name:"todolist",component:v},{path:"*",name:"not-found",component:b}]}]});y.onReady(function(){i.dispatch("authentication/loginByToken")}),y.beforeEach(function(e,n,t){var r=i.state.authentication.status===u["a"].Authenticated;"/login"!==e.path?r||t({path:"/login",query:{redirect:e.fullPath}}):r&&t(e.query.redirect||"/"),t()});var A=y;r["default"].config.productionTip=!1,r["default"].config.devtools=!0,new r["default"]({router:A,store:i,render:function(e){return e(p)}}).$mount("#app")}});
//# sourceMappingURL=app.61d034fb.js.map