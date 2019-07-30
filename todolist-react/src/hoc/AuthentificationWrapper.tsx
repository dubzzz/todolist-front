import React, { Suspense } from 'react';
import { useAuthentification, AuthentificationState } from '../context/AuthentificationContext';

type Props = { children: JSX.Element[] | JSX.Element };

export default function AuthentificationWrapper(props: Props) {
  const { state } = useAuthentification();
  switch (state) {
    case AuthentificationState.OnGoingAuthentification:
      return <div>Please wait...</div>;
    case AuthentificationState.NonAuthentificated:
      return <div>Redirecting to login page</div>;
    case AuthentificationState.Authentificated:
      return <Suspense fallback={<div>loading</div>}>{props.children}</Suspense>;
  }
}
