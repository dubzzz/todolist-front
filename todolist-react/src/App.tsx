import React from 'react';
import AuthentificationWrapper from './hoc/AuthentificationWrapper';
import { AuthentificationProvider } from './context/AuthentificationContext';

const ListPage = React.lazy(() => import('./component/list/ListPage'));

const App: React.FC = () => {
  return (
    <div className="App">
      <AuthentificationProvider>
        <AuthentificationWrapper>
          <ListPage />
        </AuthentificationWrapper>
      </AuthentificationProvider>
    </div>
  );
};

export default App;
