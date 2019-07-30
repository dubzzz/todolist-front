import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { withAuthentificated } from './hoc/Authentificated';
import { AuthentificationProvider } from './context/AuthentificationContext';
import LoginPage from './component/login/LoginPage';

const ListPage = React.lazy(() => import('./component/list/ListPage'));

const App: React.FC = () => {
  return (
    <div className="App">
      <AuthentificationProvider>
        <Router>
          <Route exact path="/" component={withAuthentificated(ListPage)} />
          <Route exact path="/login" component={LoginPage} />
        </Router>
      </AuthentificationProvider>
    </div>
  );
};

export default App;
