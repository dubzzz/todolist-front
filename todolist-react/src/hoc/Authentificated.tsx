import React, { Suspense } from 'react';
import { useAuthentification, AuthentificationState } from '../context/AuthentificationContext';
import { Redirect, withRouter, RouteComponentProps } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';

type Props = { children: JSX.Element | JSX.Element[] } & RouteComponentProps;

function AuthentificationWrapper(props: Props) {
  const { state } = useAuthentification();
  switch (state) {
    case AuthentificationState.OnGoingAuthentification:
    case AuthentificationState.NonAuthentificated:
      return (
        <Redirect
          to={{
            pathname: '/login',
            state: { redirect: props.location }
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
