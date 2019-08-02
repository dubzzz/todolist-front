import React, { Suspense } from 'react';
import { Redirect, withRouter, RouteComponentProps } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import { AuthentificationState } from '../redux/reducers/authentication';
import { ReduxState } from '../redux/reducers';

type Props = { children: JSX.Element | JSX.Element[] } & RouteComponentProps;

function AuthentificationWrapper(props: Props) {
  const state = useSelector((state: ReduxState) => state.authentication.state);
  switch (state) {
    case AuthentificationState.OnGoingAuthentification:
    case AuthentificationState.NonAuthentificated:
      return (
        <Redirect
          to={{
            pathname: '/login',
            search: `?redirect=${encodeURIComponent(props.location.pathname)}`
          }}
        />
      );
    case AuthentificationState.Authentificated:
      return <Suspense fallback={<CircularProgress />}>{props.children}</Suspense>;
  }
}

export function withAuthentificated<P>(WrappedComponent: React.ComponentType<P>): React.ComponentType<P> {
  const Wrapper = withRouter(AuthentificationWrapper);
  return (props: P) => (
    <Wrapper>
      <WrappedComponent {...props} />
    </Wrapper>
  );
}
