/* Login API */

type LoginSuccess = {
  username: string;
  token: string;
};
const validPassword = 'password';

const getValidToken = () => {
  const token = (window as any).validToken || 'w€lc0Me';
  (window as any).validToken = token;
  return token;
};

export const login = (username: string, password: string): Promise<LoginSuccess> => {
  if (password !== validPassword) return failure(500);
  return success({ username, token: getValidToken() }, 500);
};

export const checkToken = (token: string): Promise<boolean> => {
  if (token !== getValidToken()) return success(false, 500);
  return success(true, 500);
};

/* Storage API */

export const readStorage = (space: string, keyName: string) => {
  return localStorage.getItem(`${space}::${keyName}`) || '';
};

export const writeStorage = (space: string, keyName: string, value: string) => {
  return localStorage.setItem(`${space}::${keyName}`, value);
};

export const clearStorage = (space: string, keyName: string) => {
  return localStorage.removeItem(`${space}::${keyName}`);
};

/* Todolist */

export type Todo = {
  guid: string;
  task: string;
  done: boolean;
};
export type TodoListenerHandle = {
  _i: {
    _handleId?: NodeJS.Timeout;
    _data?: Todo[];
  };
};

const readTodos = (): Todo[] => {
  const raw = readStorage('Todos', 'data');
  if (!raw) return [];
  return JSON.parse(raw);
};

export const addTodoListener = (
  token: string,
  fn: (todos: Todo[]) => void,
  connectionLost: () => void
): TodoListenerHandle => {
  const handle: TodoListenerHandle = { _i: {} };

  const changeDetected = (newData: Todo[]) => {
    if (handle._i._data === undefined) return true;
    if (handle._i._data.length !== newData.length) return true;

    const sameTodo = (t1: Todo, t2: Todo) => t1.guid === t2.guid && t1.task === t2.task && t1.done === t2.done;
    if (handle._i._data.some((p, idx) => !sameTodo(p, newData[idx]))) return true;

    return false;
  };
  const detectChanges = () => {
    if (token !== getValidToken()) {
      handle._i._handleId = undefined;
      connectionLost();
      return;
    }
    const newData = readTodos();
    if (changeDetected(newData)) {
      handle._i._data = newData;
      fn(newData);
    }
    handle._i._handleId = setTimeout(() => detectChanges(), 500);
  };

  handle._i._handleId = setTimeout(() => detectChanges(), 500);
  return handle;
};

export const removeTodoListener = (handle: TodoListenerHandle): void => {
  if (handle._i._handleId) {
    clearTimeout(handle._i._handleId);
  }
};

export const addTodo = async (token: string, todo: Todo): Promise<boolean> => {
  await delay(500);
  if (token !== getValidToken()) return false;

  const data = readTodos();
  if (data.some(t => t.guid === todo.guid)) return false;

  writeStorage('Todos', 'data', JSON.stringify([...data, todo]));
  return true;
};

export const editTodo = async (token: string, todo: Todo): Promise<boolean> => {
  await delay(500);
  if (token !== getValidToken()) return false;

  const data = readTodos();
  if (!data.some(t => t.guid === todo.guid)) return false;

  writeStorage('Todos', 'data', JSON.stringify(data.map(t => (t.guid === todo.guid ? todo : t))));
  return true;
};

export const removeTodo = async (token: string, todo: Todo): Promise<boolean> => {
  await delay(500);
  if (token !== getValidToken()) return false;

  const data = readTodos();
  if (!data.some(t => t.guid === todo.guid)) return false;

  writeStorage('Todos', 'data', JSON.stringify(data.filter(t => t.guid !== todo.guid)));
  return true;
};

/* Helpers */

const delay = (ms: number): Promise<void> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), ms);
  });
};

const success = <T>(out: T, ms: number): Promise<T> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(out), ms);
  });
};

const failure = <T>(ms: number): Promise<T> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(), ms);
  });
};
