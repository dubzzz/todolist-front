import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { useAuthentication } from '../../context/AuthenticationContext';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useTodoList, TodoState } from '../../context/TodoListContext';
import Badge from '@material-ui/core/Badge';

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },

  menuButtonHidden: {
    display: 'none'
  },
  title: {
    flexGrow: 1
  }
}));

type Props = { drawerOpened: boolean; toggleDrawer: () => void };

export default function AuthenticatedHeader(props: Props) {
  const classes = useStyles();
  const { username, logout } = useAuthentication();
  const { ready, todos } = useTodoList();

  return (
    <AppBar position="absolute" className={clsx(classes.appBar, props.drawerOpened && classes.appBarShift)}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="Toggle drawer"
          onClick={() => props.toggleDrawer()}
          className={clsx(props.drawerOpened && classes.menuButtonHidden)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Welcome {username}
        </Typography>
        <IconButton>
          <Badge
            badgeContent={ready ? `${todos.filter(t => t.state !== TodoState.Remove).length}` : '?'}
            color="primary"
          >
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <IconButton
          onClick={() => {
            logout();
          }}
        >
          <PowerSettingsNewIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
