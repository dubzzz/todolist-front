export enum AuthenticationStatus {
  NonAuthenticated = 'NonAuthenticated',
  OnGoingAuthentication = 'OnGoingAuthentication',
  Authenticated = 'Authenticated'
}

export interface AuthenticationStateModel {
  token: string;
  username: string;
  status: AuthenticationStatus;
}
