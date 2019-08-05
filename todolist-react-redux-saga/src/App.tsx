import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { withAuthenticated } from './hoc/Authenticated';
import LoginPage from './component/login/LoginPage';
import { tryLoginByTokenAction } from './redux/actions/authentication';
import Notifier from './component/Notifier';
import { SnackbarProvider } from 'notistack';

const loadAuthenticatedApp = () => import('./component/authenticated/AuthenticatedApp');
const AuthenticatedApp = React.lazy(loadAuthenticatedApp);

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    loadAuthenticatedApp();
  }, []);

  useEffect(() => {
    dispatch(tryLoginByTokenAction());
  }, [dispatch]);

  return (
    <div className="App">
      <SnackbarProvider maxSnack={3}>
        <Notifier />
        <Router>
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <Route component={withAuthenticated(AuthenticatedApp)} />
          </Switch>
        </Router>
      </SnackbarProvider>
    </div>
  );
};

export default App;
