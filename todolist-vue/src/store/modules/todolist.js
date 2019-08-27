import * as Api from "../../api";
import { TodoState } from "../models/todolist";

const state = {
  ready: false,
  todos: [],
  numRequesters: 0
};

let handle = null;

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
  },
  async tryToggleTodoAction({ commit, state }, { token, guid }) {
    const todos = state.todos;
    const prevTodo = todos.find(
      t => t.data.guid === guid && t.state === TodoState.Noop
    );
    if (!prevTodo) {
      return;
    }
    const todo = { ...prevTodo.data, done: !prevTodo.data.done };
    commit("addOrEditTodoAction", { todo, todoState: TodoState.Edit });

    try {
      const r = await Api.editTodo(token, prevTodo.data);
      if (!r) {
        commit("addOrEditTodoAction", {
          todo: prevTodo.data,
          todoState: prevTodo.state
        });
      } else {
        // We apply the modification
        commit("addOrEditTodoAction", { todo, todoState: TodoState.Noop });
      }
    } catch (err) {
      // ignore
    }
  },
  async tryRemoveTodoAction({ commit, state }, { token, guid }) {
    const todos = state.todos;
    const prevTodo = todos.find(
      t => t.data.guid === guid && t.state === TodoState.Noop
    );
    if (!prevTodo) {
      return;
    }
    commit("addOrEditTodoAction", {
      todo: prevTodo.data,
      todoState: TodoState.Remove
    });

    try {
      const r = await Api.removeTodo(token, prevTodo.data);
      if (!r) {
        commit("addOrEditTodoAction", {
          todo: prevTodo.data,
          todoState: prevTodo.state
        });
      } else {
        // We apply the modification
        commit("removeTodoAction", { guid: prevTodo.data.guid });
      }
    } catch (err) {
      // ignore
    }
  },
  async requestTodolistUpdates({ commit, dispatch }, { token }) {
    if (!handle) {
      handle = Api.addTodoListener(
        token,
        todos => commit("refreshTodosAction", { todos }),
        () => {
          dispatch("authentication/logout", null, { root: true });
        }
      );
    }
    commit("addRequesterAction");
  },
  async stopTodolistUpdates({ commit, state }) {
    const { numRequesters } = state;
    if (numRequesters <= 1) {
      Api.removeTodoListener(handle);
      handle = null;
      commit("removeRequesterAction");
    } else {
      commit("removeRequesterAction");
    }
  }
};

const mutations = {
  addOrEditTodoAction(state, { todo, todoState }) {
    const foundTodo = state.todos.find(t => t.data.guid === todo.guid);
    if (foundTodo) {
      foundTodo.data = todo;
      foundTodo.state = todoState;
    } else state.todos.push({ data: todo, state: todoState });
  },
  removeTodoAction(state, { guid }) {
    state.todos = state.todos.filter(t => t.data.guid !== guid);
  },
  refreshTodosAction(state, { todos }) {
    const todosBeingAdded = state.todos
      .filter(t => t.state === TodoState.Add)
      .reduce((acc, t) => ({ ...acc, [t.data.guid]: t.data }), {});
    const todosBeingEdited = state.todos
      .filter(t => t.state === TodoState.Edit)
      .reduce((acc, t) => ({ ...acc, [t.data.guid]: t.data }), {});
    const todosBeingRemoved = state.todos
      .filter(t => t.state === TodoState.Remove)
      .reduce((acc, t) => ({ ...acc, [t.data.guid]: t.data }), {});

    state.ready = true;
    state.todos = todos
      .filter(t => todosBeingAdded[t.guid] === undefined)
      .map(t => {
        // Remove, Edit and Noop
        if (todosBeingEdited[t.guid])
          return { state: TodoState.Edit, data: todosBeingEdited[t.guid] };
        if (todosBeingRemoved[t.guid])
          return { state: TodoState.Remove, data: todosBeingRemoved[t.guid] };
        return { state: TodoState.Noop, data: t };
      })
      .concat(state.todos.filter(t => t.state === TodoState.Add)); // Add
  },
  addRequesterAction(state) {
    state.numRequesters += 1;
  },
  removeRequesterAction(state) {
    state.numRequesters -= 1;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
