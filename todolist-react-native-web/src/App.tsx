import React from 'react';
import { Text, View } from 'react-native';
/*import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import { withAuthenticated } from './hoc/Authenticated';
import { AuthenticationProvider } from './context/AuthenticationContext';
import { NotificationProvider } from './context/NotificationContext';
import LoginPage from './component/login/LoginPage';

const loadAuthenticatedApp = () => import('./component/authenticated/AuthenticatedApp');
const AuthenticatedApp = React.lazy(loadAuthenticatedApp);*/

const App: React.FC = () => {
  /*useEffect(() => {
    loadAuthenticatedApp();
  }, []);*/
  return (
    <View>
      <Text>Welcome to App</Text>
    </View>
  );
  /*<div className="App">
      <NotificationProvider maxNotifications={3}>
        <AuthenticationProvider>
          <Router>
            <Switch>
              <Route exact path="/login" component={LoginPage} />
              <Route component={withAuthenticated(AuthenticatedApp)} />
            </Switch>
          </Router>
        </AuthenticationProvider>
      </NotificationProvider>
  </div>*/
};

export default App;
