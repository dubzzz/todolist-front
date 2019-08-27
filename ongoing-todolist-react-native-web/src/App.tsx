import React, { useEffect } from 'react';
import { View } from 'react-native';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import { withAuthenticated } from './hoc/Authenticated';
import { AuthenticationProvider } from './context/AuthenticationContext';
import LoginPage from './component/login/LoginPage';

const loadAuthenticatedApp = () => import('./component/authenticated/AuthenticatedApp');
const AuthenticatedApp = React.lazy(loadAuthenticatedApp);

const App: React.FC = () => {
  useEffect(() => {
    loadAuthenticatedApp();
  }, []);
  return (
    <View>
      <AuthenticationProvider>
        <Router>
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <Route component={withAuthenticated(AuthenticatedApp)} />
          </Switch>
        </Router>
      </AuthenticationProvider>
    </View>
  );
};

export default App;
