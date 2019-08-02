import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { withAuthentificated } from './hoc/Authentificated';
import { NotificationProvider } from './context/NotificationContext';
import LoginPage from './component/login/LoginPage';
import { tryLoginByTokenAction } from './redux/actions/authentication';

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
      <NotificationProvider maxNotifications={3}>
        <Router>
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <Route component={withAuthentificated(AuthentificatedApp)} />
          </Switch>
        </Router>
      </NotificationProvider>
    </div>
  );
};

export default App;
