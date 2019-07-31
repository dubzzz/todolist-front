/* Login API */

type LoginSuccess = {
  username: string;
  token: string;
};
const validPassword = 'password';
const validToken = 'w€lc0Me';

export const login = (username: string, password: string): Promise<LoginSuccess> => {
  if (password !== validPassword) return failure(500);
  return success({ username, token: validToken }, 500);
};

export const checkToken = (token: string): Promise<boolean> => {
  if (token !== validToken) return success(false, 500);
  return success(true, 500);
};

/* Storage API */

export const readStorage = (fn: Function, keyName: string) => {
  return localStorage.getItem(`${fn.name}::${keyName}`) || '';
};

export const writeStorage = (fn: Function, keyName: string, value: string) => {
  return localStorage.setItem(`${fn.name}::${keyName}`, value);
};

export const clearStorage = (fn: Function, keyName: string) => {
  return localStorage.removeItem(`${fn.name}::${keyName}`);
};

/* Helpers */

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
