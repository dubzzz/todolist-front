(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(t,e,n){t.exports=n(127)},127:function(t,e,n){"use strict";n.r(e);var r,a=n(0),c=n.n(a),u=n(11),o=n.n(u),i=n(29),s=n(37),d=n(96),f=n(21),l=n(17);!function(t){t.NonAuthentificated="NonAuthentificated",t.OnGoingAuthentification="OnGoingAuthentification",t.Authentificated="Authentificated"}(r||(r={}));var b={username:"",token:"",state:r.NonAuthentificated},O=n(20),p=n(38),v=Object(s.c)({authentication:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case l.c:var n=e.payload,a=n.username,c=n.token;return Object(f.a)({},t,{username:a,token:c,state:r.Authentificated});case l.a:return Object(f.a)({},t,{state:r.NonAuthentificated});case l.b:return Object(f.a)({},t,{state:r.OnGoingAuthentification});default:return t}},notification:O.b,todolist:p.b}),m=n(13),j=n.n(m),g=n(9),h=n(27),x=n(25),k=j.a.mark(_),y=j.a.mark(N),E=j.a.mark(A),w=j.a.mark(I);function T(t,e){h.j("AuthentificationProvider","username",t),h.j("AuthentificationProvider","token",e)}function _(t){var e,n,r,a;return j.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return e=t.payload,n=e.username,r=e.password,c.next=3,Object(g.b)(Object(l.h)());case 3:return c.prev=3,c.next=6,Object(g.a)(function(){return h.f(n,r)});case 6:return T((a=c.sent).username,a.token),c.next=10,Object(g.b)(Object(l.i)(a.username,a.token));case 10:return c.next=12,Object(g.b)(Object(x.c)("Login successful",O.a.Success));case 12:c.next=20;break;case 14:return c.prev=14,c.t0=c.catch(3),c.next=18,Object(g.b)(Object(l.g)());case 18:return c.next=20,Object(g.b)(Object(x.c)("Login failure",O.a.Error));case 20:case"end":return c.stop()}},k,null,[[3,14]])}function N(t){var e,n;return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=h.g("AuthentificationProvider","username"),""!==(n=h.g("AuthentificationProvider","token"))){t.next=4;break}return t.abrupt("return");case 4:return t.next=6,Object(g.b)(Object(l.h)());case 6:return t.next=8,Object(g.a)(function(){return h.c(n)});case 8:if(!t.sent){t.next=17;break}return T(e,n),t.next=13,Object(g.b)(Object(l.i)(e,n));case 13:return t.next=15,Object(g.b)(Object(x.c)("Login successful",O.a.Success));case 15:t.next=19;break;case 17:return t.next=19,Object(g.b)(Object(l.g)());case 19:case"end":return t.stop()}},y)}function A(t){var e;return j.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.payload.silent,h.d("AuthentificationProvider","username"),h.d("AuthentificationProvider","token"),n.next=5,Object(g.b)(Object(l.g)());case 5:if(e){n.next=8;break}return n.next=8,Object(g.b)(Object(x.c)("Logout successful",O.a.Success));case 8:case"end":return n.stop()}},E)}function I(){return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(g.d)(l.e,_);case 2:return t.next=4,Object(g.d)(l.f,N);case 4:return t.next=6,Object(g.d)(l.d,A);case 6:case"end":return t.stop()}},w)}var S=n(22),L=j.a.mark(P),D=j.a.mark(G),C=j.a.mark(U),R=j.a.mark(F);function P(t){var e,n,r,a,c;return j.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return e=t.payload,n=e.token,r=e.guid,a=e.task,c={guid:r,task:a,done:!1},u.next=4,Object(g.b)(Object(S.g)(c,p.a.Add));case 4:return u.prev=4,u.next=7,Object(g.a)(function(){return h.a(n,c)});case 7:if(u.sent){u.next=15;break}return u.next=11,Object(g.b)(Object(x.c)("Failed to add todo: ".concat(c.task),O.a.Error));case 11:return u.next=13,Object(g.b)(Object(S.i)(c.guid));case 13:u.next=17;break;case 15:return u.next=17,Object(g.b)(Object(S.g)(c,p.a.Noop));case 17:u.next=21;break;case 19:u.prev=19,u.t0=u.catch(4);case 21:case"end":return u.stop()}},L,null,[[4,19]])}function G(t){var e,n,r,a,c,u;return j.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return e=t.payload,n=e.token,r=e.guid,o.next=3,Object(g.c)(function(t){return t.todolist.todos});case 3:if(a=o.sent,c=a.find(function(t){return t.data.guid===r&&t.state===p.a.Noop})){o.next=9;break}return o.next=8,Object(g.b)(Object(x.c)("No todo available for modification given guid ".concat(r),O.a.Error));case 8:return o.abrupt("return");case 9:return u=Object(f.a)({},c.data,{done:!c.data.done}),o.next=12,Object(g.b)(Object(S.g)(u,p.a.Edit));case 12:return o.prev=12,o.next=15,Object(g.a)(function(){return h.e(n,c.data)});case 15:if(o.sent){o.next=23;break}return o.next=19,Object(g.b)(Object(x.c)("Failed to edit todo: ".concat(c.data.task),O.a.Error));case 19:return o.next=21,Object(g.b)(Object(S.g)(c.data,c.state));case 21:o.next=25;break;case 23:return o.next=25,Object(g.b)(Object(S.g)(u,p.a.Noop));case 25:o.next=29;break;case 27:o.prev=27,o.t0=o.catch(12);case 29:case"end":return o.stop()}},D,null,[[12,27]])}function U(t){var e,n,r,a,c;return j.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return e=t.payload,n=e.token,r=e.guid,u.next=3,Object(g.c)(function(t){return t.todolist.todos});case 3:if(a=u.sent,c=a.find(function(t){return t.data.guid===r&&t.state===p.a.Noop})){u.next=9;break}return u.next=8,Object(g.b)(Object(x.c)("No todo available for modification given guid ".concat(r),O.a.Error));case 8:return u.abrupt("return");case 9:return u.next=11,Object(g.b)(Object(S.g)(c.data,p.a.Remove));case 11:return u.prev=11,u.next=14,Object(g.a)(function(){return h.h(n,c.data)});case 14:if(u.sent){u.next=22;break}return u.next=18,Object(g.b)(Object(x.c)("Failed to remove todo: ".concat(c.data.task),O.a.Error));case 18:return u.next=20,Object(g.b)(Object(S.g)(c.data,c.state));case 20:u.next=24;break;case 22:return u.next=24,Object(g.b)(Object(S.i)(c.data.guid));case 24:u.next=28;break;case 26:u.prev=26,u.t0=u.catch(11);case 28:case"end":return u.stop()}},C,null,[[11,26]])}function F(){return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(g.d)(S.d,P);case 2:return t.next=4,Object(g.d)(S.f,G);case 4:return t.next=6,Object(g.d)(S.e,U);case 6:case"end":return t.stop()}},R)}var Y=j.a.mark(H);function H(){return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.delegateYield(I(),"t0",1);case 1:return t.delegateYield(F(),"t1",2);case 2:case"end":return t.stop()}},Y)}var M=Object(d.a)(),W=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,B=Object(s.e)(v,W(Object(s.a)(M)));M.run(H);var J=n(56),V=n(47),z=n(164);function K(t){switch(Object(i.c)(function(t){return t.authentication.state})){case r.OnGoingAuthentification:case r.NonAuthentificated:return c.a.createElement(V.a,{to:{pathname:"/login",search:"?redirect=".concat(encodeURIComponent(t.location.pathname))}});case r.Authentificated:return c.a.createElement(a.Suspense,{fallback:c.a.createElement(z.a,null)},t.children)}}function X(t){var e=Object(V.g)(K);return function(n){return c.a.createElement(e,null,c.a.createElement(t,n))}}var q=n(53),$=n(85),Q=n(173),Z=n(174),tt=n(166),et=n(172),nt=n(168),rt=n(131),at=n(167),ct=Object($.a)({cardContainer:{padding:20,textAlign:"center"},card:{display:"inline-block",maxWidth:345},hint:{fontSize:12},media:{height:140}});var ut=Object(V.g)(function(t){var e=ct(),n=Object(i.c)(function(t){return t.authentication.state}),u=Object(i.b)(),o=Object(a.useState)(""),s=Object(q.a)(o,2),d=s[0],f=s[1],b=Object(a.useState)(""),O=Object(q.a)(b,2),p=O[0],v=O[1],m=n===r.NonAuthentificated&&d&&p,j=n===r.OnGoingAuthentification;if(n===r.Authentificated){var g=new URLSearchParams(t.location.search).get("redirect")||"/";return c.a.createElement(V.a,{to:g})}return c.a.createElement("div",{className:e.cardContainer},c.a.createElement(tt.a,{className:e.card},c.a.createElement(at.a,{className:e.media,image:"https://upload.wikimedia.org/wikipedia/commons/f/f6/Eiffel_Tower_and_the_Trocadero%2C_Exposition_Universal%2C_1900%2C_Paris%2C_France.jpg",title:"Eiffel Tower"}),c.a.createElement(nt.a,null,c.a.createElement(rt.a,{gutterBottom:!0,variant:"h5",component:"h2"},"Welcome to TodoList React with redux-saga"),c.a.createElement(rt.a,{className:e.hint,color:"textSecondary",gutterBottom:!0},"Try with password: \u201cpassword\u201d"),c.a.createElement(Z.a,{label:"Username",value:d,onChange:function(t){return f(t.currentTarget.value)},onKeyPress:function(t){13===t.which&&m&&(u(Object(l.j)(d,p)),t.preventDefault())}}),c.a.createElement("br",null),c.a.createElement(Z.a,{label:"Password",type:"password",value:p,onChange:function(t){return v(t.currentTarget.value)},onKeyPress:function(t){13===t.which&&m&&(u(Object(l.j)(d,p)),t.preventDefault())}})),c.a.createElement(et.a,null,c.a.createElement(Q.a,{color:"primary",disabled:!m,onClick:function(){return u(Object(l.j)(d,p))}},"Login"),j?c.a.createElement(z.a,{size:24}):c.a.createElement(c.a.Fragment,null))))}),ot=n(97),it=n(42),st=n(66);function dt(t){var e=function(t,e){if("object"!==typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===typeof e?e:String(e)}var ft=Object(st.withSnackbar)(function(t){var e=t.enqueueSnackbar,n=Object(a.useState)({}),r=Object(q.a)(n,2),c=r[0],u=r[1],o=Object(i.c)(function(t){return t.notification.notifications}),s=Object(i.b)();return Object(a.useEffect)(function(){var t=function(t){switch(t){case O.a.Success:return"success";case O.a.Info:return"info";case O.a.Warn:return"warning";case O.a.Error:return"error";case O.a.Log:default:return"default"}},n=!0,r=!1,a=void 0;try{for(var i,d=function(){var n=i.value;if(c[n.id])return"continue";u(function(t){return Object(f.a)({},t,Object(it.a)({},n.id,!0))}),e(n.message,{variant:t(n.level),onClose:function(){u(function(t){var e=n.id;return t[e],Object(ot.a)(t,[e].map(dt))})}}),s(Object(x.d)(n.id))},l=o[Symbol.iterator]();!(n=(i=l.next()).done);n=!0)d()}catch(b){r=!0,a=b}finally{try{n||null==l.return||l.return()}finally{if(r)throw a}}},[o,c,s,e]),null}),lt=function(){return Promise.all([n.e(3),n.e(5)]).then(n.bind(null,214))},bt=c.a.lazy(lt),Ot=function(){var t=Object(i.b)();return Object(a.useEffect)(function(){lt()},[]),Object(a.useEffect)(function(){t(Object(l.k)())},[t]),c.a.createElement("div",{className:"App"},c.a.createElement(st.SnackbarProvider,{maxSnack:3},c.a.createElement(ft,null),c.a.createElement(J.a,null,c.a.createElement(V.d,null,c.a.createElement(V.b,{exact:!0,path:"/login",component:ut}),c.a.createElement(V.b,{component:X(bt)})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(i.a,{store:B},c.a.createElement(Ot,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},17:function(t,e,n){"use strict";n.d(e,"f",function(){return r}),n.d(e,"e",function(){return a}),n.d(e,"c",function(){return c}),n.d(e,"a",function(){return u}),n.d(e,"b",function(){return o}),n.d(e,"d",function(){return i}),n.d(e,"k",function(){return s}),n.d(e,"j",function(){return d}),n.d(e,"l",function(){return f}),n.d(e,"i",function(){return l}),n.d(e,"g",function(){return b}),n.d(e,"h",function(){return O});var r="AUTHENTICATION_TRY_LOGIN_BY_TOKEN",a="AUTHENTICATION_TRY_LOGIN_BY_CREDS",c="AUTHENTICATION_LOGIN_SUCCESS",u="AUTHENTICATION_LOGIN_FAILURE",o="AUTHENTICATION_LOGIN_ON_GOING",i="AUTHENTICATION_LOGOUT",s=function(){return{type:r,payload:{}}},d=function(t,e){return{type:a,payload:{username:t,password:e}}},f=function(t){return{type:i,payload:{silent:t}}},l=function(t,e){return{type:c,payload:{username:t,token:e}}},b=function(){return{type:u,payload:{}}},O=function(){return{type:o,payload:{}}}},20:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r,a=n(67),c=n(21),u=n(25);!function(t){t.Log="Log",t.Success="Success",t.Info="Info",t.Warn="Warn",t.Error="Error"}(r||(r={}));var o={notifications:[]};e.b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case u.a:var n=e.payload,r=n.id,i=n.message,s=n.level;return Object(c.a)({},t,{notifications:[].concat(Object(a.a)(t.notifications),[{id:r,message:i,level:s}])});case u.b:var d=e.payload.id;return Object(c.a)({},t,{notifications:t.notifications.filter(function(t){return t.id!==d})});default:return t}}},22:function(t,e,n){"use strict";n.d(e,"d",function(){return r}),n.d(e,"f",function(){return a}),n.d(e,"e",function(){return c}),n.d(e,"a",function(){return u}),n.d(e,"c",function(){return o}),n.d(e,"b",function(){return i}),n.d(e,"j",function(){return s}),n.d(e,"l",function(){return d}),n.d(e,"k",function(){return f}),n.d(e,"g",function(){return l}),n.d(e,"i",function(){return b}),n.d(e,"h",function(){return O});var r="TODOLIST_TRY_ADD_TODO",a="TODOLIST_TRY_TOGGLE_TODO",c="TODOLIST_TRY_REMOVE_TODO",u="TODOLIST_ADD_OR_EDIT_TODO",o="TODOLIST_REMOVE_TODO",i="TODOLIST_REFRESH_TODOS",s=function(t,e){return{type:r,payload:{token:t,guid:Math.random().toString(16).substr(2),task:e}}},d=function(t,e){return{type:a,payload:{token:t,guid:e}}},f=function(t,e){return{type:c,payload:{token:t,guid:e}}},l=function(t,e){return{type:u,payload:{todo:t,state:e}}},b=function(t){return{type:o,payload:{guid:t}}},O=function(t){return{type:i,payload:{todos:t}}}},25:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return a}),n.d(e,"c",function(){return c}),n.d(e,"d",function(){return u});var r="NOTIFICATION_ADD",a="NOTIFICATION_REMOVE",c=function(t,e){return{type:r,payload:{id:Math.random().toString(16).substr(2),message:t,level:e}}},u=function(t){return{type:a,payload:{id:t}}}},27:function(t,e,n){"use strict";n.d(e,"f",function(){return i}),n.d(e,"c",function(){return s}),n.d(e,"g",function(){return d}),n.d(e,"j",function(){return f}),n.d(e,"d",function(){return l}),n.d(e,"b",function(){return O}),n.d(e,"i",function(){return p}),n.d(e,"a",function(){return v}),n.d(e,"e",function(){return m}),n.d(e,"h",function(){return j});var r=n(13),a=n.n(r),c=n(67),u=n(68),o=function(){var t=window.validToken||"w\u20aclc0Me";return window.validToken=t,t},i=function(t,e){return"password"!==e?x(500):h({username:t,token:o()},500)},s=function(t){return t!==o()?h(!1,500):h(!0,500)},d=function(t,e){return localStorage.getItem("".concat(t,"::").concat(e))||""},f=function(t,e,n){return localStorage.setItem("".concat(t,"::").concat(e),n)},l=function(t,e){return localStorage.removeItem("".concat(t,"::").concat(e))},b=function(){var t=d("Todos","data");return t?JSON.parse(t):[]},O=function(t,e,n){var r={_i:{}},a=function a(){if(t!==o())return r._i._handleId=void 0,void n();var c=b();(function(t){if(void 0===r._i._data)return!0;if(r._i._data.length!==t.length)return!0;return!!r._i._data.some(function(e,n){return r=e,a=t[n],!(r.guid===a.guid&&r.task===a.task&&r.done===a.done);var r,a})})(c)&&(r._i._data=c,e(c)),r._i._handleId=setTimeout(function(){return a()},500)};return r._i._handleId=setTimeout(function(){return a()},500),r},p=function(t){t._i._handleId&&clearTimeout(t._i._handleId)},v=function(){var t=Object(u.a)(a.a.mark(function t(e,n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(500);case 2:if(e===o()){t.next=4;break}return t.abrupt("return",!1);case 4:if(!(r=b()).some(function(t){return t.guid===n.guid})){t.next=7;break}return t.abrupt("return",!1);case 7:return f("Todos","data",JSON.stringify([].concat(Object(c.a)(r),[n]))),t.abrupt("return",!0);case 9:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}(),m=function(){var t=Object(u.a)(a.a.mark(function t(e,n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(500);case 2:if(e===o()){t.next=4;break}return t.abrupt("return",!1);case 4:if((r=b()).some(function(t){return t.guid===n.guid})){t.next=7;break}return t.abrupt("return",!1);case 7:return f("Todos","data",JSON.stringify(r.map(function(t){return t.guid===n.guid?n:t}))),t.abrupt("return",!0);case 9:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}(),j=function(){var t=Object(u.a)(a.a.mark(function t(e,n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(500);case 2:if(e===o()){t.next=4;break}return t.abrupt("return",!1);case 4:if((r=b()).some(function(t){return t.guid===n.guid})){t.next=7;break}return t.abrupt("return",!1);case 7:return f("Todos","data",JSON.stringify(r.filter(function(t){return t.guid!==n.guid}))),t.abrupt("return",!0);case 9:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}(),g=function(t){return new Promise(function(e,n){setTimeout(function(){return e()},t)})},h=function(t,e){return new Promise(function(n,r){setTimeout(function(){return n(t)},e)})},x=function(t){return new Promise(function(e,n){setTimeout(function(){return n()},t)})}},38:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r,a=n(42),c=n(21),u=n(22);!function(t){t.Noop="noop",t.Add="add",t.Edit="edit",t.Remove="remove"}(r||(r={}));var o={ready:!1,todos:[]};e.b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case u.a:var n=e.payload,i=n.todo,s=n.state,d=[],f=!1,l=!0,b=!1,O=void 0;try{for(var p,v=t.todos[Symbol.iterator]();!(l=(p=v.next()).done);l=!0){var m=p.value;m.data.guid===i.guid?(f=!0,d.push({data:i,state:s})):d.push(m)}}catch(y){b=!0,O=y}finally{try{l||null==v.return||v.return()}finally{if(b)throw O}}return f||d.push({data:i,state:s}),Object(c.a)({},t,{todos:d});case u.c:var j=e.payload.guid;return Object(c.a)({},t,{todos:t.todos.filter(function(t){return t.data.guid!==j})});case u.b:var g=e.payload.todos,h=t.todos.filter(function(t){return t.state===r.Add}).reduce(function(t,e){return Object(c.a)({},t,Object(a.a)({},e.data.guid,e.data))},{}),x=t.todos.filter(function(t){return t.state===r.Edit}).reduce(function(t,e){return Object(c.a)({},t,Object(a.a)({},e.data.guid,e.data))},{}),k=t.todos.filter(function(t){return t.state===r.Remove}).reduce(function(t,e){return Object(c.a)({},t,Object(a.a)({},e.data.guid,e.data))},{});return Object(c.a)({},t,{ready:!0,todos:g.filter(function(t){return void 0===h[t.guid]}).map(function(t){return x[t.guid]?{state:r.Edit,data:x[t.guid]}:k[t.guid]?{state:r.Remove,data:k[t.guid]}:{state:r.Noop,data:t}}).concat(t.todos.filter(function(t){return t.state===r.Add}))});default:return t}}}},[[105,1,2]]]);
//# sourceMappingURL=main.4410643d.chunk.js.map