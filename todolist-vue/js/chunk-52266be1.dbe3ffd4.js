(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-52266be1"],{"067f":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-container"},[n("md-app",[n("md-app-toolbar",{staticClass:"md-primary",attrs:{"md-elevation":"0"}},[t.expandedMenu?t._e():n("md-button",{staticClass:"md-icon-button",on:{click:function(e){return t.toggleMenu()}}},[n("md-icon",[t._v("menu")])],1),n("h3",{staticClass:"md-title",attrs:{id:"toolbar-label"}},[t._v("Welcome "+t._s(t.username))]),n("md-badge",{attrs:{"md-content":t.numTodos}},[n("md-button",{staticClass:"md-icon-button"},[n("md-icon",[t._v("shopping_cart")])],1)],1),n("md-button",{staticClass:"md-icon-button",on:{click:function(e){return t.logout()}}},[n("md-icon",[t._v("power_settings_new")])],1)],1),n("md-app-drawer",{attrs:{"md-active":t.expandedMenu,"md-persistent":"mini"},on:{"update:mdActive":function(e){t.expandedMenu=e},"update:md-active":function(e){t.expandedMenu=e}}},[n("md-toolbar",{staticClass:"md-transparent",attrs:{"md-elevation":"0"}},[n("span",[t._v("Menu")]),n("div",{staticClass:"md-toolbar-section-end"},[n("md-button",{staticClass:"md-icon-button md-dense",on:{click:function(e){return t.toggleMenu()}}},[n("md-icon",[t._v("keyboard_arrow_left")])],1)],1)]),n("md-list",[n("md-list-item",{attrs:{to:"/"}},[n("md-icon",[t._v("dashboard")]),n("span",{staticClass:"md-list-item-text"},[t._v("Todos")])],1),n("md-list-item",{attrs:{to:"/learn-more"}},[n("md-icon",[t._v("help")]),n("span",{staticClass:"md-list-item-text"},[t._v("Learn more")])],1)],1)],1),n("md-app-content",[n("router-view")],1)],1)],1)},s=[],a=n("8e13"),i={name:"AuthenticatedPage",data:function(){return{expandedMenu:!1}},computed:{username:function(){return this.$store.state.authentication.username},isLogged:function(){return this.$store.state.authentication.status===a["a"].Authenticated},numTodos:function(){return this.$store.state.todolist.todos.length}},methods:{toggleMenu:function(){this.expandedMenu=!this.expandedMenu},logout:function(){this.$store.dispatch("authentication/logout")}},watch:{isLogged:{immediate:!0,handler:function(){this.isLogged||this.$router.push({path:"/login",query:{redirect:this.$router.currentRoute.fullPath}})}}},mounted:function(){var t=this.$store.state.authentication.token;this.$store.dispatch("todolist/requestTodolistUpdates",{token:t,requester:this})},destroyed:function(){this.$store.dispatch("todolist/stopTodolistUpdates",{requester:this})}},d=i,u=(n("8692"),n("2877")),r=Object(u["a"])(d,o,s,!1,null,"69745c8e",null);e["default"]=r.exports},8692:function(t,e,n){"use strict";var o=n("ca17"),s=n.n(o);s.a},ca17:function(t,e,n){}}]);
//# sourceMappingURL=chunk-52266be1.dbe3ffd4.js.map