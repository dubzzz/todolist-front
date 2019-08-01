(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{132:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return m}),n.d(t,"c",function(){return p});var a,r=n(57),i=n(134),o=n(135),c=n(27),u=n(0),d=n.n(u),l=n(21);!function(e){e.Noop="noop",e.Add="add",e.Edit="edit",e.Remove="remove"}(a||(a={}));var s={},f=Object(u.createContext)(s);function m(e){var t=Object(u.useState)(!1),n=Object(c.a)(t,2),s=n[0],m=n[1],p=Object(u.useState)([]),g=Object(c.a)(p,2),w=g[0],b=g[1];Object(u.useEffect)(function(){var e=l.b(function(e){m(!0),b(function(t){var n=t.filter(function(e){return e.state===a.Add}).reduce(function(e,t){return Object(o.a)({},e,Object(i.a)({},t.data.guid,t.data))},{}),r=t.filter(function(e){return e.state===a.Edit}).reduce(function(e,t){return Object(o.a)({},e,Object(i.a)({},t.data.guid,t.data))},{}),c=t.filter(function(e){return e.state===a.Remove}).reduce(function(e,t){return Object(o.a)({},e,Object(i.a)({},t.data.guid,t.data))},{});return e.filter(function(e){return void 0===n[e.guid]}).map(function(e){return r[e.guid]?{state:a.Edit,data:r[e.guid]}:c[e.guid]?{state:a.Remove,data:c[e.guid]}:{state:a.Noop,data:e}}).concat(t.filter(function(e){return e.state===a.Add}))})});return function(){return l.i(e)}},[]);return d.a.createElement(f.Provider,Object.assign({value:{ready:s,todos:w,addTodo:function(e){var t=Math.random().toString(16).substr(2),n={guid:t,task:e,done:!1};b(function(e){return[].concat(Object(r.a)(e),[{state:a.Add,data:n}])}),l.a(n).then(function(e){e?b(function(e){return e.map(function(e){return e.data.guid===t?{state:a.Noop,data:n}:e})}):(console.error("Failed to add todo:",n),b(function(e){return e.filter(function(e){return e.data.guid!==t})}))})},toggleTodo:function(e){var t=w.find(function(t){return t.data.guid===e&&t.state===a.Noop});if(!t)throw new Error("No todo available for modification given guid ".concat(e));var n=Object(o.a)({},t.data,{done:!t.data.done});b(function(t){return t.map(function(t){return t.data.guid===e?{state:a.Edit,data:n}:t})}),l.e(n).then(function(r){r?b(function(t){return t.map(function(t){return t.data.guid===e?{state:a.Noop,data:n}:t})}):(console.error("Failed to edit todo:",n),b(function(n){return n.map(function(n){return n.data.guid===e?t:n})}))})},removeTodo:function(e){var t=w.find(function(t){return t.data.guid===e&&t.state===a.Noop});if(!t)throw new Error("No todo available for modification given guid ".concat(e));b(function(n){return n.map(function(n){return n.data.guid===e?{state:a.Remove,data:t.data}:n})}),l.h(t.data).then(function(n){n?b(function(t){return t.filter(function(t){return t.data.guid!==e})}):(console.error("Failed to remove todo:",t.data),b(function(n){return n.map(function(n){return n.data.guid===e?t:n})}))})}}},e))}function p(){var e=Object(u.useContext)(f);if(e===s)throw new Error("useTodoList must be used within a TodoListProvider");return e}},173:function(e,t,n){"use strict";n.r(t);var a=n(27),r=n(0),i=n.n(r),o=n(118),c=n(168),u=n(3),d=n(16),l=n(160),s=n(161),f=n(122),m=n(138),p=n.n(m),g=n(139),w=n.n(g),b=n(162),E=n(136),h=n.n(E),v=n(132),O=n(163),j=Object(o.a)(function(e){return{appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButtonHidden:{display:"none"},title:{flexGrow:1}}});function S(e){var t=j(),n=Object(d.c)(),a=n.username,r=n.logout,o=Object(v.c)(),c=o.ready,m=o.todos;return i.a.createElement(l.a,{position:"absolute",className:Object(u.a)(t.appBar,e.drawerOpened&&t.appBarShift)},i.a.createElement(s.a,null,i.a.createElement(b.a,{edge:"start",color:"inherit","aria-label":"Toggle drawer",onClick:function(){return e.toggleDrawer()},className:Object(u.a)(e.drawerOpened&&t.menuButtonHidden)},i.a.createElement(h.a,null)),i.a.createElement(f.a,{variant:"h6",className:t.title},"Welcome ",a),i.a.createElement(b.a,null,i.a.createElement(O.a,{badgeContent:c?"".concat(m.filter(function(e){return e.state!==v.b.Remove}).length):"?",color:"primary"},i.a.createElement(p.a,null))),i.a.createElement(b.a,{onClick:function(){r()}},i.a.createElement(w.a,null))))}var N=n(134),x=n(135),y=n(141),C=n.n(y),k=n(142),B=n.n(k),T=n(143),z=n.n(T),L=n(172),P=n(164),F=n(125),I=n(165),R=n(166),A=n(167),D=n(174),H=n(26);var G=240,J=Object(o.a)(function(e){return{toolbarIcon:Object(x.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),drawerPaper:{position:"relative",whiteSpace:"nowrap",width:G,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(N.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),drawerSmallScreenSpacer:{width:e.spacing(7)},drawerSmallScreen:{position:"absolute"}}});var W=Object(H.g)(function(e){var t=J(),n=function(t){return e.drawerOpened?i.a.createElement(i.a.Fragment,null,t.children):i.a.createElement(D.a,{title:t.title,placement:"right"},t.children)},o=function(){var e=function(){return{width:window.innerWidth,height:window.innerHeight}},t=Object(r.useState)(function(){return e()}),n=Object(a.a)(t,2),i=n[0],o=n[1];return Object(r.useEffect)(function(){var t=function(){o(e())};return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}},[]),i}().width<2*G;return i.a.createElement(i.a.Fragment,null,o&&i.a.createElement("div",{className:t.drawerSmallScreenSpacer}),i.a.createElement(L.a,{variant:"permanent",classes:{paper:Object(u.a)(t.drawerPaper,!e.drawerOpened&&t.drawerPaperClose,o&&t.drawerSmallScreen)},open:e.drawerOpened},i.a.createElement("div",{className:t.toolbarIcon},i.a.createElement(b.a,{onClick:function(){return e.toggleDrawer()}},i.a.createElement(C.a,null))),i.a.createElement(P.a,null),i.a.createElement(F.a,null,i.a.createElement(n,{title:"Todos"},i.a.createElement(I.a,{button:!0,onClick:function(){return e.history.push("/")}},i.a.createElement(R.a,null,i.a.createElement(B.a,null)),i.a.createElement(A.a,{primary:"Todos"}))),i.a.createElement(n,{title:"Learn more"},i.a.createElement(I.a,{button:!0,onClick:function(){return e.history.push("/learn-more")}},i.a.createElement(R.a,null,i.a.createElement(z.a,null)),i.a.createElement(A.a,{primary:"Learn more"}))))))});n.d(t,"default",function(){return Q});var M=i.a.lazy(function(){return n.e(6).then(n.bind(null,169))}),X=i.a.lazy(function(){return n.e(5).then(n.bind(null,171))}),q=i.a.lazy(function(){return n.e(7).then(n.bind(null,170))}),K=Object(o.a)(function(e){return{root:{display:"flex"},appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,overflow:"auto",height:"100vh",padding:"2em"}}});function Q(e){var t=K(),n=Object(r.useState)(!1),o=Object(a.a)(n,2),u=o[0],d=o[1];return i.a.createElement("div",{className:t.root},i.a.createElement(v.a,null,i.a.createElement(c.a,null),i.a.createElement(S,{drawerOpened:u,toggleDrawer:function(){return d(function(e){return!e})}}),i.a.createElement(W,{drawerOpened:u,toggleDrawer:function(){return d(function(e){return!e})}}),i.a.createElement("main",{className:t.content},i.a.createElement("div",{className:t.appBarSpacer}),i.a.createElement(H.d,null,i.a.createElement(H.b,{exact:!0,path:"/",component:X}),i.a.createElement(H.b,{exact:!0,path:"/learn-more",component:M}),i.a.createElement(H.b,{component:q})))))}}}]);
//# sourceMappingURL=4.1d9c9984.chunk.js.map