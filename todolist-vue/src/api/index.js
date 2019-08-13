/* Login API */

const validPassword = "password";

const getValidToken = () => {
  const token = window.validToken || "w€lc0Me";
  window.validToken = token;
  return token;
};

export const login = (username, password) => {
  if (password !== validPassword) return failure(500);
  return success({ username, token: getValidToken() }, 500);
};

export const checkToken = token => {
  if (token !== getValidToken()) return success(false, 500);
  return success(true, 500);
};

/* Storage API */

export const readStorage = (space, keyName) => {
  return localStorage.getItem(`${space}::${keyName}`) || "";
};

export const writeStorage = (space, keyName, value) => {
  return localStorage.setItem(`${space}::${keyName}`, value);
};

export const clearStorage = (space, keyName) => {
  return localStorage.removeItem(`${space}::${keyName}`);
};

const readTodos = () => {
  const raw = readStorage("Todos", "data");
  if (!raw) return [];
  return JSON.parse(raw);
};

export const addTodoListener = (token, fn, connectionLost) => {
  const handle = { _i: {} };
  const changeDetected = newData => {
    if (handle._i._data === undefined) return true;
    if (handle._i._data.length !== newData.length) return true;
    const sameTodo = (t1, t2) =>
      t1.guid === t2.guid && t1.task === t2.task && t1.done === t2.done;
    if (handle._i._data.some((p, idx) => !sameTodo(p, newData[idx])))
      return true;
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

export const removeTodoListener = handle => {
  if (handle._i._handleId) {
    clearTimeout(handle._i._handleId);
  }
};

export const addTodo = async (token, todo) => {
  await delay(500);
  if (token !== getValidToken()) return false;
  const data = readTodos();
  if (data.some(t => t.guid === todo.guid)) return false;
  writeStorage("Todos", "data", JSON.stringify([...data, todo]));
  return true;
};

export const editTodo = async (token, todo) => {
  await delay(500);
  if (token !== getValidToken()) return false;
  const data = readTodos();
  if (!data.some(t => t.guid === todo.guid)) return false;
  writeStorage(
    "Todos",
    "data",
    JSON.stringify(data.map(t => (t.guid === todo.guid ? todo : t)))
  );
  return true;
};

export const removeTodo = async (token, todo) => {
  await delay(500);
  if (token !== getValidToken()) return false;
  const data = readTodos();
  if (!data.some(t => t.guid === todo.guid)) return false;
  writeStorage(
    "Todos",
    "data",
    JSON.stringify(data.filter(t => t.guid !== todo.guid))
  );
  return true;
};

/* Helpers */

const delay = ms => {
  return new Promise(resolve => {
    setTimeout(() => resolve(), ms);
  });
};

const success = (out, ms) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(out), ms);
  });
};

const failure = ms => {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(), ms);
  });
};
