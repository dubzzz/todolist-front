import React, { createContext, useContext, useState, useEffect } from 'react';
import * as Api from '../api';

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
export type TodoListContextType = {
  ready: boolean;
  todos: TodoType[];
  addTodo: (task: string) => void;
  toggleTodo: (guid: string) => void;
  removeTodo: (guid: string) => void;
};

const defaultTodoList = {} as TodoListContextType;
const TodoListContext = createContext(defaultTodoList);

export function TodoListProvider<TProps>(props: TProps) {
  const [ready, setReady] = useState(false);
  const [todos, setTodos] = useState([] as TodoType[]);

  useEffect(() => {
    const listener = (newTodos: Api.Todo[]) => {
      setReady(true);
      setTodos(ts => {
        const todosBeingAdded: { [guid: string]: Api.Todo } = ts
          .filter(t => t.state === TodoState.Add)
          .reduce((acc, t) => ({ ...acc, [t.data.guid]: t.data }), {});
        const todosBeingEdited: { [guid: string]: Api.Todo } = ts
          .filter(t => t.state === TodoState.Edit)
          .reduce((acc, t) => ({ ...acc, [t.data.guid]: t.data }), {});
        const todosBeingRemoved: { [guid: string]: Api.Todo } = ts
          .filter(t => t.state === TodoState.Remove)
          .reduce((acc, t) => ({ ...acc, [t.data.guid]: t.data }), {});

        return newTodos
          .filter(t => todosBeingAdded[t.guid] === undefined)
          .map(t => {
            // Remove, Edit and Noop
            if (todosBeingEdited[t.guid]) return { state: TodoState.Edit, data: todosBeingEdited[t.guid] };
            if (todosBeingRemoved[t.guid]) return { state: TodoState.Remove, data: todosBeingRemoved[t.guid] };
            return { state: TodoState.Noop, data: t };
          })
          .concat(ts.filter(t => t.state === TodoState.Add)); // Add
      });
    };
    const handle = Api.addTodoListener(listener);
    return () => Api.removeTodoListener(handle);
  }, []);

  const addTodo = (task: string) => {
    const guid = Math.random()
      .toString(16)
      .substr(2);
    const todo = { guid, task, done: false };

    setTodos(ts => [...ts, { state: TodoState.Add, data: todo }]);
    Api.addTodo(todo).then(r => {
      if (!r) {
        console.error('Failed to add todo:', todo);
        setTodos(ts => ts.filter(t => t.data.guid !== guid));
      } else {
        // We apply the modification
        setTodos(ts => ts.map(t => (t.data.guid === guid ? { state: TodoState.Noop, data: todo } : t)));
      }
    });
  };

  const toggleTodo = (guid: string) => {
    const prevTodo = todos.find(t => t.data.guid === guid && t.state === TodoState.Noop);
    if (!prevTodo) throw new Error(`No todo available for modification given guid ${guid}`);

    const todo = { ...prevTodo.data, done: !prevTodo.data.done };

    setTodos(ts => ts.map(t => (t.data.guid === guid ? { state: TodoState.Edit, data: todo } : t)));
    Api.editTodo(todo).then(r => {
      if (!r) {
        console.error('Failed to edit todo:', todo);
        setTodos(ts => ts.map(t => (t.data.guid === guid ? prevTodo : t)));
      } else {
        // We apply the modification
        setTodos(ts => ts.map(t => (t.data.guid === guid ? { state: TodoState.Noop, data: todo } : t)));
      }
    });
  };

  const removeTodo = (guid: string) => {
    const prevTodo = todos.find(t => t.data.guid === guid && t.state === TodoState.Noop);
    if (!prevTodo) throw new Error(`No todo available for modification given guid ${guid}`);

    setTodos(ts => ts.map(t => (t.data.guid === guid ? { state: TodoState.Remove, data: prevTodo.data } : t)));
    Api.removeTodo(prevTodo.data).then(r => {
      if (!r) {
        console.error('Failed to remove todo:', prevTodo.data);
        setTodos(ts => ts.map(t => (t.data.guid === guid ? prevTodo : t)));
      } else {
        // We apply the modification
        setTodos(ts => ts.filter(t => t.data.guid !== guid));
      }
    });
  };

  return <TodoListContext.Provider value={{ ready, todos, addTodo, toggleTodo, removeTodo }} {...props} />;
}

export function useTodoList() {
  const context = useContext(TodoListContext);
  if (context === defaultTodoList) {
    throw new Error(`useTodoList must be used within a TodoListProvider`);
  }
  return context;
}
