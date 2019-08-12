import Vue from "vue";
import VueRouter from "vue-router";
import store from "./store";

import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

import App from "./App.vue";

const AuthenticatedPage = () => import("./components/AuthenticatedPage.vue");
const LoginPage = () => import("./components/LoginPage.vue");

Vue.use(VueRouter);
Vue.config.productionTip = false;
Vue.config.devtools = true;

const router = new VueRouter({
  base: process.env.NODE_ENV === "production" ? "/todolist-vue/" : "/",
  mode: "history",
  routes: [
    {
      path: "/login",
      name: "login",
      component: LoginPage,
      props: route => ({ redirect: route.query.redirect || "/" })
    },
    { path: "*", name: "home", component: AuthenticatedPage }
  ]
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
