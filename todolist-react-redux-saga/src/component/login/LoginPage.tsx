import React, { useState } from 'react';
import { withRouter, RouteComponentProps, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import { ReduxState } from '../../redux/reducers';
import { AuthenticationStatus } from '../../redux/reducers/authentication';
import { tryLoginByCredsAction } from '../../redux/actions/authentication';

const useStyles = makeStyles({
  cardContainer: {
    padding: 20,
    textAlign: 'center'
  },
  card: {
    display: 'inline-block',
    maxWidth: 345
  },
  hint: {
    fontSize: 12
  },
  media: {
    height: 140
  }
});

type Props = {} & RouteComponentProps;

function LoginPage(props: Props) {
  const classes = useStyles();
  const status = useSelector((state: ReduxState) => state.authentication.status);
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const canLogin = status === AuthenticationStatus.NonAuthenticated && username && password;
  const onGoingLogin = status === AuthenticationStatus.OnGoingAuthentication;

  if (status === AuthenticationStatus.Authenticated) {
    const params = new URLSearchParams(props.location.search);
    const redirect = params.get('redirect') || '/';
    return <Redirect to={redirect} />;
  }
  return (
    <div className={classes.cardContainer}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="https://upload.wikimedia.org/wikipedia/commons/f/f6/Eiffel_Tower_and_the_Trocadero%2C_Exposition_Universal%2C_1900%2C_Paris%2C_France.jpg"
          title="Eiffel Tower"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Welcome to TodoList React with redux-saga
          </Typography>
          <Typography className={classes.hint} color="textSecondary" gutterBottom>
            Try with password: “password”
          </Typography>
          <TextField
            label="Username"
            value={username}
            onChange={p => setUsername(p.currentTarget.value)}
            onKeyPress={ev => {
              if (ev.which === 13 && canLogin) {
                dispatch(tryLoginByCredsAction(username, password));
                ev.preventDefault();
              }
            }}
          />
          <br />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={p => setPassword(p.currentTarget.value)}
            onKeyPress={ev => {
              if (ev.which === 13 && canLogin) {
                dispatch(tryLoginByCredsAction(username, password));
                ev.preventDefault();
              }
            }}
          />
        </CardContent>
        <CardActions>
          <Button
            color="primary"
            disabled={!canLogin}
            onClick={() => dispatch(tryLoginByCredsAction(username, password))}
          >
            Login
          </Button>
          {onGoingLogin ? <CircularProgress size={24} /> : <></>}
        </CardActions>
      </Card>
    </div>
  );
}

export default withRouter(LoginPage);
