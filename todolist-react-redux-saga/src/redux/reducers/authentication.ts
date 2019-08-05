import {
  Actions,
  AUTHENTICATION_LOGIN_SUCCESS,
  AUTHENTICATION_LOGIN_FAILURE,
  AUTHENTICATION_LOGIN_ON_GOING
} from '../actions/authentication';

export enum AuthenticationStatus {
  NonAuthenticated = 'NonAuthenticated',
  OnGoingAuthentication = 'OnGoingAuthentication',
  Authenticated = 'Authenticated'
}

export type AuthenticationState = {
  username: string;
  token: string;
  status: AuthenticationStatus;
};
const initialState: AuthenticationState = {
  username: '',
  token: '',
  status: AuthenticationStatus.NonAuthenticated
};

export default function(state = initialState, action: Actions) {
  switch (action.type) {
    case AUTHENTICATION_LOGIN_SUCCESS: {
      const { username, token } = action.payload;
      return { ...state, username, token, state: AuthenticationStatus.Authenticated };
    }
    case AUTHENTICATION_LOGIN_FAILURE: {
      return { ...state, state: AuthenticationStatus.NonAuthenticated };
    }
    case AUTHENTICATION_LOGIN_ON_GOING: {
      return { ...state, state: AuthenticationStatus.OnGoingAuthentication };
    }
    default:
      return state;
  }
}
