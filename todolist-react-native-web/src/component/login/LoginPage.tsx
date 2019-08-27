import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { withRouter, RouteComponentProps, Redirect } from 'react-router-dom';

import { useAuthentication, AuthenticationState } from '../../context/AuthenticationContext';

type Props = {} & RouteComponentProps;

function LoginPage(props: Props) {
  const { state, login } = useAuthentication();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const canLogin = state === AuthenticationState.NonAuthenticated && username && password;
  const onGoingLogin = state === AuthenticationState.OnGoingAuthentication;

  if (state === AuthenticationState.Authenticated) {
    const params = new URLSearchParams(props.location.search);
    const redirect = params.get('redirect') || '/';
    return <Redirect to={redirect} />;
  }
  return (
    <View>
      <Text>Welcome to Login</Text>
    </View>
  );
  /*<div className={classes.cardContainer}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="https://upload.wikimedia.org/wikipedia/commons/f/f6/Eiffel_Tower_and_the_Trocadero%2C_Exposition_Universal%2C_1900%2C_Paris%2C_France.jpg"
          title="Eiffel Tower"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Welcome to TodoList React
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
                login(username, password);
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
                login(username, password);
                ev.preventDefault();
              }
            }}
          />
        </CardContent>
        <CardActions>
          <Button color="primary" disabled={!canLogin} onClick={() => login(username, password)}>
            Login
          </Button>
          {onGoingLogin ? <CircularProgress size={24} /> : <></>}
        </CardActions>
      </Card>
    </div>*/
}

export default withRouter(LoginPage);
