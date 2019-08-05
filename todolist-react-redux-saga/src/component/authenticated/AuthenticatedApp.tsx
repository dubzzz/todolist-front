import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AuthenticatedHeader from './AuthenticatedHeader';
import AppMenu from './AuthenticatedMenu';
import { Switch, Route } from 'react-router-dom';
import * as Api from '../../api';
import { NotificationLevel } from '../../redux/reducers/notification';
import { notifyAction } from '../../redux/actions/notification';
import { tryLogoutAction } from '../../redux/actions/authentication';
import { ReduxState } from '../../redux/reducers';
import { refreshTodosAction } from '../../redux/actions/todolist';

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
  const token = useSelector((state: ReduxState) => state.authentication.token);
  const dispatch = useDispatch();

  useEffect(() => {
    const handle = Api.addTodoListener(
      token,
      todos => dispatch(refreshTodosAction(todos)),
      () => {
        dispatch(notifyAction('Revoked token, connection lost', NotificationLevel.Error));
        dispatch(tryLogoutAction(true));
      }
    );
    return () => Api.removeTodoListener(handle);
  }, [token, dispatch]);

  return (
    <div className={classes.root}>
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
    </div>
  );
}
