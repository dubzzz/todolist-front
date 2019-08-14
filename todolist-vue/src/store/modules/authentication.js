import router from "../../router";
import * as Api from "../../api";

export const AuthenticationStatus = {
  NonAuthenticated: "NonAuthenticated",
  OnGoingAuthentication: "OnGoingAuthentication",
  Authenticated: "Authenticated"
};

const state = {
  username: "",
  token: "",
  status: AuthenticationStatus.NonAuthenticated
};

const persistTokens = (username, token) => {
  Api.writeStorage("AuthenticationProvider", "username", username);
  Api.writeStorage("AuthenticationProvider", "token", token);
};

const getters = {};

const actions = {
  async loginByToken({ commit }) {
    const username = Api.readStorage("AuthenticationProvider", "username");
    const token = Api.readStorage("AuthenticationProvider", "token");
    if (token === "") return;

    commit("loginOnGoing");
    const success = await Api.checkToken(token);
    if (success) {
      persistTokens(username, token);
      commit("loginSuccess", { username, token });
    } else commit("loginFailure");
  },
  async loginByCreds({ commit }, { username, password }) {
    commit("loginOnGoing");
    try {
      const tokens = await Api.login(username, password);
      persistTokens(tokens.username, tokens.token);
      commit("loginSuccess", {
        username: tokens.username,
        token: tokens.token
      });
    } catch (err) {
      commit("loginFailure");
    }
  },
  async logout({ commit }) {
    Api.clearStorage("AuthenticationProvider", "username");
    Api.clearStorage("AuthenticationProvider", "token");
    commit("loginFailure");
    router.push({
      path: "/login",
      query: { redirect: router.currentRoute.fullPath }
    });
  }
};

const mutations = {
  loginSuccess(state, { username, token }) {
    state.username = username;
    state.token = token;
    state.status = AuthenticationStatus.Authenticated;
  },
  loginOnGoing(state) {
    state.status = AuthenticationStatus.OnGoingAuthentication;
  },
  loginFailure(state) {
    state.status = AuthenticationStatus.NonAuthenticated;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
