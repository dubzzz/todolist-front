(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{159:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return p}),n.d(t,"c",function(){return g});var a,r=n(75),i=n(161),o=n(162),c=n(35),u=n(0),d=n.n(u),l=n(26),s=n(43);!function(e){e.Noop="noop",e.Add="add",e.Edit="edit",e.Remove="remove"}(a||(a={}));var f={},m=Object(u.createContext)(f);function p(e){var t=Object(s.b)().error,n=Object(u.useState)(!1),f=Object(c.a)(n,2),p=f[0],g=f[1],b=Object(u.useState)([]),w=Object(c.a)(b,2),v=w[0],E=w[1];Object(u.useEffect)(function(){var e=l.b(function(e){g(!0),E(function(t){var n=t.filter(function(e){return e.state===a.Add}).reduce(function(e,t){return Object(o.a)({},e,Object(i.a)({},t.data.guid,t.data))},{}),r=t.filter(function(e){return e.state===a.Edit}).reduce(function(e,t){return Object(o.a)({},e,Object(i.a)({},t.data.guid,t.data))},{}),c=t.filter(function(e){return e.state===a.Remove}).reduce(function(e,t){return Object(o.a)({},e,Object(i.a)({},t.data.guid,t.data))},{});return e.filter(function(e){return void 0===n[e.guid]}).map(function(e){return r[e.guid]?{state:a.Edit,data:r[e.guid]}:c[e.guid]?{state:a.Remove,data:c[e.guid]}:{state:a.Noop,data:e}}).concat(t.filter(function(e){return e.state===a.Add}))})});return function(){return l.i(e)}},[]);return d.a.createElement(m.Provider,Object.assign({value:{ready:p,todos:v,addTodo:function(e){var n=Math.random().toString(16).substr(2),i={guid:n,task:e,done:!1};E(function(e){return[].concat(Object(r.a)(e),[{state:a.Add,data:i}])}),l.a(i).then(function(e){e?E(function(e){return e.map(function(e){return e.data.guid===n?{state:a.Noop,data:i}:e})}):(t("Failed to add todo: ".concat(i.task)),E(function(e){return e.filter(function(e){return e.data.guid!==n})}))})},toggleTodo:function(e){var n=v.find(function(t){return t.data.guid===e&&t.state===a.Noop});if(n){var r=Object(o.a)({},n.data,{done:!n.data.done});E(function(t){return t.map(function(t){return t.data.guid===e?{state:a.Edit,data:r}:t})}),l.e(r).then(function(i){i?E(function(t){return t.map(function(t){return t.data.guid===e?{state:a.Noop,data:r}:t})}):(t("Failed to edit todo: ".concat(n.data.task)),E(function(t){return t.map(function(t){return t.data.guid===e?n:t})}))})}else t("No todo available for modification given guid ".concat(e))},removeTodo:function(e){var n=v.find(function(t){return t.data.guid===e&&t.state===a.Noop});n?(E(function(t){return t.map(function(t){return t.data.guid===e?{state:a.Remove,data:n.data}:t})}),l.h(n.data).then(function(a){a?E(function(t){return t.filter(function(t){return t.data.guid!==e})}):(t("Failed to remove todo: ".concat(n.data.task)),E(function(t){return t.map(function(t){return t.data.guid===e?n:t})}))})):t("No todo available for modification given guid ".concat(e))}}},e))}function g(){var e=Object(u.useContext)(m);if(e===f)throw new Error("useTodoList must be used within a TodoListProvider");return e}},198:function(e,t,n){"use strict";n.r(t);var a=n(35),r=n(0),i=n.n(r),o=n(70),c=n(194),u=n(3),d=n(18),l=n(186),s=n(187),f=n(112),m=n(165),p=n.n(m),g=n(166),b=n.n(g),w=n(188),v=n(163),E=n.n(v),h=n(159),O=n(189),j=Object(o.a)(function(e){return{appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButtonHidden:{display:"none"},title:{flexGrow:1}}});function S(e){var t=j(),n=Object(d.c)(),a=n.username,r=n.logout,o=Object(h.c)(),c=o.ready,m=o.todos;return i.a.createElement(l.a,{position:"absolute",className:Object(u.a)(t.appBar,e.drawerOpened&&t.appBarShift)},i.a.createElement(s.a,null,i.a.createElement(w.a,{edge:"start",color:"inherit","aria-label":"Toggle drawer",onClick:function(){return e.toggleDrawer()},className:Object(u.a)(e.drawerOpened&&t.menuButtonHidden)},i.a.createElement(E.a,null)),i.a.createElement(f.a,{variant:"h6",className:t.title},"Welcome ",a),i.a.createElement(w.a,null,i.a.createElement(O.a,{badgeContent:c?"".concat(m.filter(function(e){return e.state!==h.b.Remove}).length):"?",color:"primary"},i.a.createElement(p.a,null))),i.a.createElement(w.a,{onClick:function(){r()}},i.a.createElement(b.a,null))))}var N=n(161),x=n(162),y=n(168),k=n.n(y),C=n(169),B=n.n(C),T=n(170),z=n.n(T),L=n(199),P=n(190),F=n(152),I=n(191),R=n(192),A=n(193),D=n(200),H=n(34);var G=240,J=Object(o.a)(function(e){return{toolbarIcon:Object(x.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),drawerPaper:{position:"relative",whiteSpace:"nowrap",width:G,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(N.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),drawerSmallScreenSpacer:{width:e.spacing(7)},drawerSmallScreen:{position:"absolute"}}});var W=Object(H.g)(function(e){var t=J(),n=function(t){return e.drawerOpened?i.a.createElement(i.a.Fragment,null,t.children):i.a.createElement(D.a,{title:t.title,placement:"right"},t.children)},o=function(){var e=function(){return{width:window.innerWidth,height:window.innerHeight}},t=Object(r.useState)(function(){return e()}),n=Object(a.a)(t,2),i=n[0],o=n[1];return Object(r.useEffect)(function(){var t=function(){o(e())};return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}},[]),i}().width<2*G;return i.a.createElement(i.a.Fragment,null,o&&i.a.createElement("div",{className:t.drawerSmallScreenSpacer}),i.a.createElement(L.a,{variant:"permanent",classes:{paper:Object(u.a)(t.drawerPaper,!e.drawerOpened&&t.drawerPaperClose,o&&t.drawerSmallScreen)},open:e.drawerOpened},i.a.createElement("div",{className:t.toolbarIcon},i.a.createElement(w.a,{onClick:function(){return e.toggleDrawer()}},i.a.createElement(k.a,null))),i.a.createElement(P.a,null),i.a.createElement(F.a,null,i.a.createElement(n,{title:"Todos"},i.a.createElement(I.a,{button:!0,onClick:function(){return e.history.push("/")}},i.a.createElement(R.a,null,i.a.createElement(B.a,null)),i.a.createElement(A.a,{primary:"Todos"}))),i.a.createElement(n,{title:"Learn more"},i.a.createElement(I.a,{button:!0,onClick:function(){return e.history.push("/learn-more")}},i.a.createElement(R.a,null,i.a.createElement(z.a,null)),i.a.createElement(A.a,{primary:"Learn more"}))))))});n.d(t,"default",function(){return Q});var M=i.a.lazy(function(){return n.e(6).then(n.bind(null,195))}),X=i.a.lazy(function(){return n.e(5).then(n.bind(null,197))}),q=i.a.lazy(function(){return n.e(7).then(n.bind(null,196))}),K=Object(o.a)(function(e){return{root:{display:"flex"},appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,overflow:"auto",height:"100vh",padding:"2em"}}});function Q(e){var t=K(),n=Object(r.useState)(!1),o=Object(a.a)(n,2),u=o[0],d=o[1];return i.a.createElement("div",{className:t.root},i.a.createElement(h.a,null,i.a.createElement(c.a,null),i.a.createElement(S,{drawerOpened:u,toggleDrawer:function(){return d(function(e){return!e})}}),i.a.createElement(W,{drawerOpened:u,toggleDrawer:function(){return d(function(e){return!e})}}),i.a.createElement("main",{className:t.content},i.a.createElement("div",{className:t.appBarSpacer}),i.a.createElement(H.d,null,i.a.createElement(H.b,{exact:!0,path:"/",component:X}),i.a.createElement(H.b,{exact:!0,path:"/learn-more",component:M}),i.a.createElement(H.b,{component:q})))))}}}]);
//# sourceMappingURL=4.ffa89de0.chunk.js.map