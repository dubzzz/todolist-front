import React, { Suspense } from 'react';
import { Redirect, withRouter, RouteComponentProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import { AuthenticationStatus } from '../redux/reducers/authentication';
import { ReduxState } from '../redux/reducers';

type Props = { children: JSX.Element | JSX.Element[] } & RouteComponentProps;

function AuthenticationWrapper(props: Props) {
  const status = useSelector((state: ReduxState) => state.authentication.status);
  switch (status) {
    case AuthenticationStatus.OnGoingAuthentication:
    case AuthenticationStatus.NonAuthenticated:
      return (
        <Redirect
          to={{
            pathname: '/login',
            search: `?redirect=${encodeURIComponent(props.location.pathname)}`
          }}
        />
      );
    case AuthenticationStatus.Authenticated:
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
