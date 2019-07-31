import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useAuthentification } from '../../context/AuthentificationContext';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import IconButton from '@material-ui/core/IconButton';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

type Props = {};

export default function ListPage(props: Props) {
  const classes = useStyles();
  const { username, logout } = useAuthentification();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Welcome {username}
          </Typography>
          <IconButton
            onClick={() => {
              logout();
            }}
          >
            <PowerSettingsNewIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
