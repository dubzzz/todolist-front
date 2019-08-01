import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import { withAuthentificated } from './hoc/Authentificated';
import { AuthentificationProvider } from './context/AuthentificationContext';
import LoginPage from './component/login/LoginPage';

const loadAppPage = () => import('./component/app/AppPage');
const AppPage = React.lazy(loadAppPage);

const App: React.FC = () => {
  useEffect(() => {
    loadAppPage();
  }, []);
  return (
    <div className="App">
      <AuthentificationProvider>
        <Router>
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <Route component={withAuthentificated(AppPage)} />
          </Switch>
        </Router>
      </AuthentificationProvider>
    </div>
  );
};

export default App;
