import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import { withAuthentificated } from './hoc/Authentificated';
import { AuthentificationProvider } from './context/AuthentificationContext';
import LoginPage from './component/login/LoginPage';

const loadAuthentificatedApp = () => import('./component/authentificated/AuthentificatedApp');
const AuthentificatedApp = React.lazy(loadAuthentificatedApp);

const App: React.FC = () => {
  useEffect(() => {
    loadAuthentificatedApp();
  }, []);
  return (
    <div className="App">
      <AuthentificationProvider>
        <Router>
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <Route component={withAuthentificated(AuthentificatedApp)} />
          </Switch>
        </Router>
      </AuthentificationProvider>
    </div>
  );
};

export default App;
