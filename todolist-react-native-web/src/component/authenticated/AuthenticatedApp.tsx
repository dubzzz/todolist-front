import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AuthenticatedHeader from './AuthenticatedHeader';
import { TodoListProvider } from '../../context/TodoListContext';
import AppMenu from './AuthenticatedMenu';
import { Switch, Route } from 'react-router-dom';

const LearnMorePage = React.lazy(() => import('./learn-more/LearnMorePage'));
const ListPage = React.lazy(() => import('./list/ListPage'));
const NotFoundPage = React.lazy(() => import('./not-found/NotFoundPage'));

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    overflow: 'auto',
    height: '100vh',
    padding: '2em'
  }
}));

type Props = {};

export default function AuthenticatedApp(props: Props) {
  const classes = useStyles();
  const [drawerOpened, setDrawerOpened] = useState(false);

  return (
    <div className={classes.root}>
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
    </div>
  );
}
