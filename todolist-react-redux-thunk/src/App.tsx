import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { withAuthentificated } from './hoc/Authentificated';
import LoginPage from './component/login/LoginPage';
import { tryLoginByTokenAction } from './redux/actions/authentication';
import Notifier from './component/Notifier';
import { SnackbarProvider } from 'notistack';

const loadAuthentificatedApp = () => import('./component/authentificated/AuthentificatedApp');
const AuthentificatedApp = React.lazy(loadAuthentificatedApp);

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    loadAuthentificatedApp();
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
            <Route component={withAuthentificated(AuthentificatedApp)} />
          </Switch>
        </Router>
      </SnackbarProvider>
    </div>
  );
};

export default App;
