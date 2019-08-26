const state = {
  ready: false,
  // todos: [],
  todos: [
    { data: { guid: "guid", task: "task", done: false }, state: "state" },
    { data: { guid: "guid", task: "task", done: false }, state: "state" }
  ],
  handle: null,
  requesters: []
};

const getters = {};

const actions = {};

const mutations = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
