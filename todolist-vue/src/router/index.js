import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import { AuthenticationStatus } from "../store/modules/authentication";

const AuthenticatedPage = () => import("../components/AuthenticatedPage.vue");
const LoginPage = () => import("../components/LoginPage.vue");

Vue.use(VueRouter);

const router = new VueRouter({
  base: process.env.NODE_ENV === "production" ? "/todolist-vue/" : "/",
  mode: "hash",
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

router.onReady(() => {
  store.dispatch("authentication/loginByToken");
});

router.beforeEach((to, from, next) => {
  const isAuthenticated =
    store.state.authentication.status === AuthenticationStatus.Authenticated;
  if (to.path !== "/login") {
    if (!isAuthenticated) {
      next({ path: "/login", query: { redirect: to.fullPath } });
    }
  } else if (isAuthenticated) {
    next(to.query.redirect || "/");
  }
  next();
});

export default router;
