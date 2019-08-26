(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5648c77a"],{"17d5":function(t,o,e){"use strict";var n=e("1a7e"),s=e.n(n);s.a},"1a7e":function(t,o,e){},"60f0":function(t,o,e){"use strict";e.r(o);var n=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("TodoListNewItem",{attrs:{ready:t.ready}}),e("TodoListList",{attrs:{todos:t.todos}})],1)},s=[],a=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"add-new-task"}},[e("md-field",{attrs:{id:"add-new-task-field"}},[e("label",[t._v("Add a new todo")]),e("md-input",{model:{value:t.taskName,callback:function(o){t.taskName=o},expression:"taskName"}})],1),t.ready?t._e():e("md-button",[e("md-icon",[t._v("refresh")])],1),e("md-button",{attrs:{disabled:!t.canAddTodo},on:{click:function(o){return t.addTodo()}}},[t._v("Add")])],1)},d=[],i={name:"TodoListNewItem",props:{ready:Boolean},data:function(){return{taskName:""}},computed:{canAddTodo:function(){return this.taskName.length>0}},methods:{addTodo:function(){var t=this.$store.state.authentication.token;this.$store.dispatch("todolist/tryAddTodoAction",{token:t,task:this.taskName}),this.taskName=""}}},r=i,c=(e("17d5"),e("2877")),u=Object(c["a"])(r,a,d,!1,null,"3adf3da8",null),l=u.exports,m=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",t._l(t.todos,function(t){return e("TodoListListEntry",{key:t.data.guid,attrs:{syncState:t.state,content:t.data}})}),1)},h=[],f=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("md-card",[e("md-card-content",{staticClass:"todo-wrapper"},[e("md-checkbox",{attrs:{value:!t.content.done,disabled:!t.canEdit},on:{"update:value":function(o){return t.$set(!t.content,"done",o)},change:function(o){return t.toggleTodo()}}}),e("span",{staticClass:"todo-label",class:{remove:t.onGoingRemoval,noaction:!t.canEdit}},[t._v(t._s(t.content.task))]),t.canEdit?t._e():e("md-button",[e("md-icon",[t._v("refresh")])],1),e("md-button",{on:{click:function(o){return t.removeTodo()}}},[e("md-icon",[t._v("delete")])],1)],1)],1)},p=[],v=e("7787"),k={name:"TodoListListEntry",props:{syncState:String,content:Object},computed:{canEdit:function(){return this.syncState===v["a"].Noop},onGoingRemoval:function(){return this.syncState===v["a"].Remove}},methods:{toggleTodo:function(){var t=this.$store.state.authentication.token;this.$store.dispatch("todolist/tryToggleTodoAction",{token:t,guid:this.content.guid})},removeTodo:function(){var t=this.$store.state.authentication.token;this.$store.dispatch("todolist/tryRemoveTodoAction",{token:t,guid:this.content.guid})}}},b=k,T=(e("6d14"),Object(c["a"])(b,f,p,!1,null,"b7530254",null)),y=T.exports,_={name:"TodoListList",components:{TodoListListEntry:y},props:{todos:Array}},g=_,L=Object(c["a"])(g,m,h,!1,null,"2bcbcb23",null),$=L.exports,w={name:"TodoListPage",components:{TodoListNewItem:l,TodoListList:$},computed:{ready:function(){return this.$store.state.todolist.ready},todos:function(){return this.$store.state.todolist.todos}},mounted:function(){var t=this.$store.state.authentication.token;this.$store.dispatch("todolist/requestTodolistUpdates",{token:t,requester:this})},destroyed:function(){this.$store.dispatch("todolist/stopTodolistUpdates",{requester:this})}},E=w,N=Object(c["a"])(E,n,s,!1,null,"1515bb2d",null);o["default"]=N.exports},"6d14":function(t,o,e){"use strict";var n=e("ab11"),s=e.n(n);s.a},ab11:function(t,o,e){}}]);
//# sourceMappingURL=chunk-5648c77a.f4f9b6ef.js.map