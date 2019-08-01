import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useAuthentification } from '../../context/AuthentificationContext';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import IconButton from '@material-ui/core/IconButton';
import { useTodoList } from '../../context/TodoListContext';
import Badge from '@material-ui/core/Badge';

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1
  }
}));

type Props = { drawerOpened: boolean; toggleDrawer: () => void };

export default function AppHeader(props: Props) {
  const classes = useStyles();
  const { username, logout } = useAuthentification();
  const { ready, todos } = useTodoList();

  return (
    <AppBar position="absolute">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Welcome {username}
        </Typography>
        <IconButton>
          <Badge badgeContent={ready ? `${todos.length}` : '?'} color="primary">
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
