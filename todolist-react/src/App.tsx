import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import { withAuthentificated } from './hoc/Authentificated';
import { AuthentificationProvider } from './context/AuthentificationContext';
import LoginPage from './component/login/LoginPage';

const LearnMorePage = React.lazy(() => import('./component/learn-more/LearnMorePage'));
const ListPage = React.lazy(() => import('./component/list/ListPage'));
const NotFoundPage = React.lazy(() => import('./component/not-found/NotFoundPage'));

const App: React.FC = () => {
  return (
    <div className="App">
      <AuthentificationProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={withAuthentificated(ListPage)} />
            <Route exact path="/learn-more" component={withAuthentificated(LearnMorePage)} />
            <Route exact path="/login" component={LoginPage} />
            <Route component={withAuthentificated(NotFoundPage)} />
          </Switch>
        </Router>
      </AuthentificationProvider>
    </div>
  );
};

export default App;
