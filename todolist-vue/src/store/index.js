import Vue from "vue";
import Vuex from "vuex";
import authentication from "./modules/authentication";
import todolist from "./modules/todolist";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    authentication,
    todolist
  },
  strict: debug,
  plugins: []
});
