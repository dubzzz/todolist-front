import React, { createContext, useContext, useState, useEffect } from 'react';
import * as Api from '../api';

export enum AuthenticationState {
  NonAuthenticated = 'NonAuthenticated',
  OnGoingAuthentication = 'OnGoingAuthentication',
  Authenticated = 'Authenticated'
}

export type AuthenticationContextType = {
  username: string;
  token: string;
  state: AuthenticationState;
  login: (user: string, pass: string) => void;
  logout: (silent?: boolean) => void;
};

const defaultAuthentication = {} as AuthenticationContextType;
const AuthenticationContext = createContext(defaultAuthentication);

export function AuthenticationProvider<TProps>(props: TProps) {
  const [username, setUsername] = useState(() => Api.readStorage('AuthenticationProvider', 'username'));
  const [token, setToken] = useState(() => Api.readStorage('AuthenticationProvider', 'token'));
  const [authState, setAuthState] = useState(AuthenticationState.OnGoingAuthentication);

  useEffect(() => {
    const checkToken = async () => {
      const validToken = token !== '' && (await Api.checkToken(token));
      if (validToken) {
        Api.writeStorage('AuthenticationProvider', 'username', username);
        Api.writeStorage('AuthenticationProvider', 'token', token);
        setAuthState(AuthenticationState.Authenticated);
      } else setAuthState(AuthenticationState.NonAuthenticated);
    };
    if (authState !== AuthenticationState.Authenticated) checkToken();
  }, [username, token, authState]);

  const login = async (user: string, pass: string) => {
    if (authState !== AuthenticationState.NonAuthenticated) {
      console.error(`Unable to login, current state is ${authState} for user ${username}`);
      return;
    }

    setUsername(user);
    setAuthState(AuthenticationState.OnGoingAuthentication);
    try {
      const tokens = await Api.login(user, pass);
      setToken(tokens.token);
      setAuthState(AuthenticationState.Authenticated);
    } catch (err) {
      setAuthState(AuthenticationState.NonAuthenticated);
    }
  };

  const logout = () => {
    setToken('');
    setAuthState(AuthenticationState.NonAuthenticated);

    Api.clearStorage('AuthenticationProvider', 'username');
    Api.clearStorage('AuthenticationProvider', 'token');
  };

  return <AuthenticationContext.Provider value={{ username, token, state: authState, login, logout }} {...props} />;
}

export function useAuthentication() {
  const context = useContext(AuthenticationContext);
  if (context === defaultAuthentication) {
    throw new Error(`useAuthentication must be used within a AuthenticationProvider`);
  }
  return context;
}
