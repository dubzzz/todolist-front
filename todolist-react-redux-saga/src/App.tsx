import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './redux/store';

import { withAuthentificated } from './hoc/Authentificated';
import { AuthentificationProvider } from './context/AuthentificationContext';
import { NotificationProvider } from './context/NotificationContext';
import LoginPage from './component/login/LoginPage';

const loadAuthentificatedApp = () => import('./component/authentificated/AuthentificatedApp');
const AuthentificatedApp = React.lazy(loadAuthentificatedApp);

const App: React.FC = () => {
  useEffect(() => {
    loadAuthentificatedApp();
  }, []);
  return (
    <div className="App">
      <Provider store={store}>
        <NotificationProvider maxNotifications={3}>
          <AuthentificationProvider>
            <Router>
              <Switch>
                <Route exact path="/login" component={LoginPage} />
                <Route component={withAuthentificated(AuthentificatedApp)} />
              </Switch>
            </Router>
          </AuthentificationProvider>
        </NotificationProvider>
      </Provider>
    </div>
  );
};

export default App;
