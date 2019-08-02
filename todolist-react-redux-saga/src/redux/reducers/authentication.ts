import {
  Actions,
  AUTHENTICATION_LOGIN_SUCCESS,
  AUTHENTICATION_LOGIN_FAILURE,
  AUTHENTICATION_LOGIN_ON_GOING
} from '../actions/authentication';

export enum AuthentificationState {
  NonAuthentificated = 'NonAuthentificated',
  OnGoingAuthentification = 'OnGoingAuthentification',
  Authentificated = 'Authentificated'
}

export type AuthenticationState = {
  username: string;
  token: string;
  state: AuthentificationState;
};
const initialState: AuthenticationState = {
  username: '',
  token: '',
  state: AuthentificationState.NonAuthentificated
};

export default function(state = initialState, action: Actions) {
  switch (action.type) {
    case AUTHENTICATION_LOGIN_SUCCESS: {
      const { username, token } = action.payload;
      return { ...state, username, token, authState: AuthentificationState.Authentificated };
    }
    case AUTHENTICATION_LOGIN_FAILURE: {
      return { ...state, authState: AuthentificationState.NonAuthentificated };
    }
    case AUTHENTICATION_LOGIN_ON_GOING: {
      return { ...state, authState: AuthentificationState.OnGoingAuthentification };
    }
    default:
      return state;
  }
}
