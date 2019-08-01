import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useAuthentification } from '../context/AuthentificationContext';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import IconButton from '@material-ui/core/IconButton';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useTodoList } from '../context/TodoListContext';
import Badge from '@material-ui/core/Badge';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    padding: '2em'
  }
}));

type Props = { children: JSX.Element | JSX.Element[] };

export default function PageLayout(props: Props) {
  const classes = useStyles();
  const { username, logout } = useAuthentification();
  const { ready, todos } = useTodoList();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="static">
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
      <main className={classes.content}>{props.children}</main>
    </div>
  );
}
