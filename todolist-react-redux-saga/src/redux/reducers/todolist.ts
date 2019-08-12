import { TODOLIST_ADD_OR_EDIT_TODO, TODOLIST_REMOVE_TODO, TODOLIST_REFRESH_TODOS } from '../actions/todolist';
import * as Api from '../../api';
import { Actions } from '../actions/todolist';

export enum TodoState {
  Noop = 'noop',
  Add = 'add',
  Edit = 'edit',
  Remove = 'remove'
}
export type TodoType = {
  data: Api.Todo;
  state: TodoState;
};
export type TodolistState = {
  ready: boolean;
  todos: TodoType[];
};
const initialState: TodolistState = {
  ready: false,
  todos: []
};

export default (state = initialState, action: Actions): typeof state => {
  switch (action.type) {
    case TODOLIST_ADD_OR_EDIT_TODO: {
      const { todo, state: todoState } = action.payload;

      const newTodos = [] as TodoType[];
      let foundTodo = false;
      for (const t of state.todos) {
        if (t.data.guid === todo.guid) {
          foundTodo = true;
          newTodos.push({ data: todo, state: todoState });
        } else newTodos.push(t);
      }
      if (!foundTodo) newTodos.push({ data: todo, state: todoState });
      return { ...state, todos: newTodos };
    }
    case TODOLIST_REMOVE_TODO: {
      const { guid } = action.payload;
      return { ...state, todos: state.todos.filter(t => t.data.guid !== guid) };
    }
    case TODOLIST_REFRESH_TODOS: {
      const { todos } = action.payload;
      const todosBeingAdded: { [guid: string]: Api.Todo } = state.todos
        .filter(t => t.state === TodoState.Add)
        .reduce((acc, t) => ({ ...acc, [t.data.guid]: t.data }), {});
      const todosBeingEdited: { [guid: string]: Api.Todo } = state.todos
        .filter(t => t.state === TodoState.Edit)
        .reduce((acc, t) => ({ ...acc, [t.data.guid]: t.data }), {});
      const todosBeingRemoved: { [guid: string]: Api.Todo } = state.todos
        .filter(t => t.state === TodoState.Remove)
        .reduce((acc, t) => ({ ...acc, [t.data.guid]: t.data }), {});

      return {
        ...state,
        ready: true,
        todos: todos
          .filter(t => todosBeingAdded[t.guid] === undefined)
          .map(t => {
            // Remove, Edit and Noop
            if (todosBeingEdited[t.guid]) return { state: TodoState.Edit, data: todosBeingEdited[t.guid] };
            if (todosBeingRemoved[t.guid]) return { state: TodoState.Remove, data: todosBeingRemoved[t.guid] };
            return { state: TodoState.Noop, data: t };
          })
          .concat(state.todos.filter(t => t.state === TodoState.Add)) // Add
      };
    }
    default:
      return state;
  }
};
