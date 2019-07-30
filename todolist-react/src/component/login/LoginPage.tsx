import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

import { useAuthentification, AuthentificationState } from '../../context/AuthentificationContext';

const useStyles = makeStyles({
  cardContainer: {
    textAlign: 'center'
  },
  card: {
    display: 'inline-block',
    maxWidth: 345
  }
});

type Props = {
  redirect?: string;
};

export default function LoginPage(props: Props) {
  const classes = useStyles();
  const { state, login } = useAuthentification();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const canLogin = state === AuthentificationState.NonAuthentificated && username && password;
  const onGoingLogin = state === AuthentificationState.OnGoingAuthentification;
  return (
    <div className={classes.cardContainer}>
      <Card className={classes.card}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Welcome to TodoList React
          </Typography>
          <TextField label="Username" value={username} onChange={p => setUsername(p.currentTarget.value)} />
          <br />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={p => setPassword(p.currentTarget.value)}
          />
        </CardContent>
        <CardActions>
          <Button color="primary" disabled={!canLogin} onClick={() => login(username, password)}>
            Login
          </Button>
          {onGoingLogin ? <CircularProgress size={24} /> : <></>}
        </CardActions>
      </Card>
    </div>
  );
}
