import * as Api from "../../api";
import { TodoState } from "../models/todolist";

const state = {
  ready: false,
  todos: [],
  handle: null,
  requesters: []
};

const getters = {};

const actions = {
  async tryAddTodoAction({ commit }, { token, task }) {
    const guid = Math.random()
      .toString(16)
      .substr(2);
    const todo = { guid, task, done: false };
    commit("addOrEditTodoAction", { todo, todoState: TodoState.Add });
    try {
      const r = await Api.addTodo(token, todo);
      if (!r) {
        commit("removeTodoAction", { guid });
      } else {
        // We apply the modification
        commit("addOrEditTodoAction", { todo, todoState: TodoState.Noop });
      }
    } catch (err) {
      // ignore
    }
  }
};

const mutations = {
  addOrEditTodoAction(state, { todo, todoState }) {
    const foundTodo = state.todos.find(t => t.data.guid === todo.guid);
    if (foundTodo) foundTodo.state = todoState;
    else state.todos.push({ data: todo, state: todoState });
  },
  removeTodoAction(state, { guid }) {
    state.todos = state.todos.filter(t => t.data.guid !== guid);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
