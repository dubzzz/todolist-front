import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppHeader from './AppHeader';
import { TodoListProvider } from '../../context/TodoListContext';
import AppMenu from './AppMenu';

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

type Props = { children: JSX.Element | JSX.Element[] };

export default function AppPage(props: Props) {
  const classes = useStyles();
  const [drawerOpened, setDrawerOpened] = useState(false);

  return (
    <div className={classes.root}>
      <TodoListProvider>
        <CssBaseline />
        <AppHeader drawerOpened={drawerOpened} toggleDrawer={() => setDrawerOpened(s => !s)} />
        <AppMenu drawerOpened={drawerOpened} toggleDrawer={() => setDrawerOpened(s => !s)} />
        <main className={classes.content}>
          <div className={classes.appBarSpacer}></div>
          {props.children}
        </main>
      </TodoListProvider>
    </div>
  );
}
