import React, { Suspense } from 'react';
import { useAuthentication, AuthenticationState } from '../context/AuthenticationContext';
import { Redirect, withRouter, RouteComponentProps } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';

type Props = { children: JSX.Element | JSX.Element[] } & RouteComponentProps;

function AuthenticationWrapper(props: Props) {
  const { state } = useAuthentication();
  switch (state) {
    case AuthenticationState.OnGoingAuthentication:
    case AuthenticationState.NonAuthenticated:
      return (
        <Redirect
          to={{
            pathname: '/login',
            search: `?redirect=${encodeURIComponent(props.location.pathname)}`
          }}
        />
      );
    case AuthenticationState.Authenticated:
      return <Suspense fallback={<CircularProgress />}>{props.children}</Suspense>;
  }
}

export function withAuthenticated<P>(WrappedComponent: React.ComponentType<P>): React.ComponentType<P> {
  const Wrapper = withRouter(AuthenticationWrapper);
  return (props: P) => (
    <Wrapper>
      <WrappedComponent {...props} />
    </Wrapper>
  );
}
