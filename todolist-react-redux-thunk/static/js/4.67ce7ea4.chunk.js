(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{181:function(e,t,a){"use strict";var n=a(170);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a(0)),o=(0,n(a(171)).default)(c.default.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.default=o},207:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(48),r=a(168),l=a(1),d=a(2),i=(a(4),a(3)),u=a(8),s=a(29),b=a(5),m=a(198),p=c.a.forwardRef(function(e,t){var a=e.autoFocus,n=e.checked,o=e.checkedIcon,r=e.classes,b=e.className,p=e.defaultChecked,h=e.disabled,f=e.icon,v=e.id,k=e.inputProps,O=e.inputRef,y=e.name,g=e.onBlur,j=e.onChange,E=e.onFocus,C=e.readOnly,x=e.required,w=e.tabIndex,I=e.type,B=e.value,P=Object(d.a)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),z=c.a.useRef(null!=n).current,F=c.a.useState(Boolean(p)),H=Object(u.a)(F,2),M=H[0],N=H[1],R=Object(s.a)(),V=h;R&&"undefined"===typeof V&&(V=R.disabled);var S=z?n:M,$="checkbox"===I||"radio"===I;return c.a.createElement(m.a,Object(l.a)({component:"span",className:Object(i.a)(r.root,b,S&&r.checked,V&&r.disabled),disabled:V,tabIndex:null,role:void 0,onFocus:function(e){E&&E(e),R&&R.onFocus&&R.onFocus(e)},onBlur:function(e){g&&g(e),R&&R.onBlur&&R.onBlur(e)},ref:t},P),S?o:f,c.a.createElement("input",Object(l.a)({autoFocus:a,checked:n,defaultChecked:p,className:r.input,disabled:V,id:$&&v,name:y,onChange:function(e){var t=e.target.checked;z||N(t),j&&j(e,t)},readOnly:C,ref:O,required:x,tabIndex:w,type:I,value:B},k)))}),h=Object(b.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0}},{name:"PrivateSwitchBase"})(p),f=a(72),v=Object(f.a)(c.a.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),k=Object(f.a)(c.a.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),O=a(17),y=Object(f.a)(c.a.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),g=a(9),j=c.a.createElement(k,null),E=c.a.createElement(v,null),C=c.a.createElement(y,null),x=c.a.forwardRef(function(e,t){var a=e.checkedIcon,n=void 0===a?j:a,o=e.classes,r=e.color,u=void 0===r?"secondary":r,s=e.icon,b=void 0===s?E:s,m=e.indeterminate,p=void 0!==m&&m,f=e.indeterminateIcon,v=void 0===f?C:f,k=e.inputProps,O=Object(d.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps"]);return c.a.createElement(h,Object(l.a)({type:"checkbox",checkedIcon:p?v:n,classes:{root:Object(i.a)(o.root,o["color".concat(Object(g.a)(u))],p&&o.indeterminate),checked:o.checked,disabled:o.disabled},color:u,inputProps:Object(l.a)({"data-indeterminate":p},k),icon:p?v:b,ref:t},O))}),w=Object(b.a)(function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(O.d)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(O.d)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}},{name:"MuiCheckbox"})(x),I=a(158),B=a(181),P=a.n(B),z=a(79),F=a(92),H=a(33),M=Object(z.a)(function(e){return{paper:{padding:e.spacing(2),margin:"auto",display:"flex",alignItems:"center"}}});function N(e){var t=M(),a=e.todo.state!==H.a.Noop;return c.a.createElement(F.a,{className:t.paper},c.a.createElement(w,{disabled:a,checked:e.todo.data.done,onChange:function(){return e.toggle()},inputProps:{"aria-label":"primary checkbox"}}),c.a.createElement("span",{style:{textDecoration:e.todo.state===H.a.Remove?"line-through":"none",color:a?"grey":"black",flexGrow:1}},e.todo.data.task),c.a.createElement(I.a,{style:{margin:"1em",visibility:e.todo.state===H.a.Noop?"hidden":"visible"},size:12}),c.a.createElement(m.a,{"aria-label":"delete",disabled:a,onClick:function(){return e.remove()}},c.a.createElement(P.a,null)))}var R=a(167),V=a(23),S=a(52);function $(e){var t=Object(V.c)(function(e){return e.authentication.token}),a=Object(V.c)(function(e){return e.todolist.ready}),l=Object(V.c)(function(e){return e.todolist.todos}),d=Object(V.b)(),i=Object(n.useState)(""),u=Object(o.a)(i,2),s=u[0],b=u[1];return c.a.createElement("div",null,c.a.createElement("div",{style:{display:"flex",marginBottom:"1em"}},c.a.createElement(r.a,{label:"Add a new todo",value:s,onChange:function(e){return b(e.currentTarget.value)},onKeyPress:function(e){13===e.which&&""!==s&&(d(Object(S.e)(t,s)),b(""),e.preventDefault())},style:{flexGrow:1}}),c.a.createElement(R.a,{disabled:""===s,onClick:function(){d(Object(S.e)(t,s)),b("")}},"Add")),a?c.a.createElement("div",null,l.map(function(e){return c.a.createElement(N,{key:e.data.guid,todo:e,toggle:function(){return d(Object(S.g)(t,e.data.guid))},remove:function(){return d(Object(S.f)(t,e.data.guid))}})})):c.a.createElement(I.a,null))}function q(e){return c.a.createElement($,null)}a.d(t,"default",function(){return q})}}]);
//# sourceMappingURL=4.67ce7ea4.chunk.js.map