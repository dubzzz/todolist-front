import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import { AuthenticationStatus } from "../store/models/authentication";

const AuthenticatedPage = () =>
  import("../components/authenticated/AuthenticatedPage.vue");
const TodoListPage = () =>
  import("../components/authenticated/list/TodoListPage.vue");
const LearnMorePage = () =>
  import("../components/authenticated/learn-more/LearnMorePage.vue");
const NotFoundPage = () =>
  import("../components/authenticated/not-found/NotFoundPage.vue");
const LoginPage = () => import("../components/login/LoginPage.vue");

Vue.use(VueRouter);

const router = new VueRouter({
  base:
    process.env.NODE_ENV === "production"
      ? "/todolist-front/todolist-vue/"
      : "/",
  mode: "hash",
  routes: [
    {
      path: "/login",
      name: "login",
      component: LoginPage,
      props: route => ({ redirect: route.query.redirect || "/" })
    },
    {
      path: "/",
      component: AuthenticatedPage,
      children: [
        {
          path: "learn-more",
          name: "learn-more",
          component: LearnMorePage
        },
        {
          path: "",
          name: "todolist",
          component: TodoListPage
        },
        {
          path: "*",
          name: "not-found",
          component: NotFoundPage
        }
      ]
    }
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
