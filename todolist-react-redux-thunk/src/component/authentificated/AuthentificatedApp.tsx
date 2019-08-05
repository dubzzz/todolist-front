import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AuthentificatedHeader from './AuthentificatedHeader';
import AppMenu from './AuthentificatedMenu';
import { Switch, Route } from 'react-router-dom';
import { ReduxState } from '../../redux/reducers';
import { requestTodolistUpdates, stopTodolistUpdates } from '../../redux/actions/todolist';

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

export default function AuthentificatedApp(props: Props) {
  const classes = useStyles();
  const ref = useRef(Symbol());
  const [drawerOpened, setDrawerOpened] = useState(false);
  const token = useSelector((state: ReduxState) => state.authentication.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestTodolistUpdates(token, ref));
    return () => {
      dispatch(stopTodolistUpdates(ref));
    };
  }, [token, dispatch]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AuthentificatedHeader drawerOpened={drawerOpened} toggleDrawer={() => setDrawerOpened(s => !s)} />
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
