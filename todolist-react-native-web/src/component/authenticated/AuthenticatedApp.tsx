import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { TodoListProvider } from '../../context/TodoListContext';
import { Switch, Route } from 'react-router-dom';

const LearnMorePage = React.lazy(() => import('./learn-more/LearnMorePage'));
const ListPage = React.lazy(() => import('./list/ListPage'));
const NotFoundPage = React.lazy(() => import('./not-found/NotFoundPage'));

type Props = {};

export default function AuthenticatedApp(props: Props) {
  const [drawerOpened, setDrawerOpened] = useState(false);

  return (
    <View>
      <Text>Welcome to AuthenticatedApp</Text>
    </View>
  );
  /*<div className={classes.root}>
      <TodoListProvider>
        <CssBaseline />
        <AuthenticatedHeader drawerOpened={drawerOpened} toggleDrawer={() => setDrawerOpened(s => !s)} />
        <AppMenu drawerOpened={drawerOpened} toggleDrawer={() => setDrawerOpened(s => !s)} />
        <main className={classes.content}>
          <div className={classes.appBarSpacer}></div>
          <Switch>
            <Route exact path="/" component={ListPage} />
            <Route exact path="/learn-more" component={LearnMorePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </TodoListProvider>
    </div>*/
}
