import React, { createContext, useContext, useState, useEffect } from 'react';
import * as Api from '../api';

export enum AuthentificationState {
  NonAuthentificated = 'NonAuthentificated',
  OnGoingAuthentification = 'OnGoingAuthentification',
  Authentificated = 'Authentificated'
}

export type AuthentificationContextType = {
  username: string;
  token: string;
  state: AuthentificationState;
  login: (user: string, pass: string) => void;
  logout: () => void;
};

const defaultAuthentification = {} as AuthentificationContextType;
const AuthentificationContext = createContext(defaultAuthentification);

export function AuthentificationProvider<TProps>(props: TProps) {
  const [username, setUsername] = useState(() => Api.readStorage('AuthentificationProvider', 'username'));
  const [token, setToken] = useState(() => Api.readStorage('AuthentificationProvider', 'token'));
  const [authState, setAuthState] = useState(AuthentificationState.OnGoingAuthentification);

  useEffect(() => {
    const checkToken = async () => {
      const validToken = token !== '' && (await Api.checkToken(token));
      if (validToken) {
        Api.writeStorage('AuthentificationProvider', 'username', username);
        Api.writeStorage('AuthentificationProvider', 'token', token);
        setAuthState(AuthentificationState.Authentificated);
      } else setAuthState(AuthentificationState.NonAuthentificated);
    };
    if (authState !== AuthentificationState.Authentificated) checkToken();
  }, [username, token, authState]);

  const login = async (user: string, pass: string) => {
    if (authState !== AuthentificationState.NonAuthentificated) {
      console.error(`Unable to login, current state is ${authState} for user ${username}`);
      return;
    }

    setUsername(user);
    setAuthState(AuthentificationState.OnGoingAuthentification);
    try {
      const tokens = await Api.login(user, pass);
      setToken(tokens.token);
      setAuthState(AuthentificationState.Authentificated);
    } catch (err) {
      setAuthState(AuthentificationState.NonAuthentificated);
    }
  };

  const logout = () => {
    setToken('');
    setAuthState(AuthentificationState.NonAuthentificated);

    Api.clearStorage('AuthentificationProvider', 'username');
    Api.clearStorage('AuthentificationProvider', 'token');
  };

  return <AuthentificationContext.Provider value={{ username, token, state: authState, login, logout }} {...props} />;
}

export function useAuthentification() {
  const context = useContext(AuthentificationContext);
  if (context === defaultAuthentification) {
    throw new Error(`useAuthentification must be used within a AuthentificationProvider`);
  }
  return context;
}
