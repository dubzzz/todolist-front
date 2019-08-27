import React, { useState } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View, ActivityIndicator } from 'react-native';
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
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          style={styles.header}
          source={{
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/f/f6/Eiffel_Tower_and_the_Trocadero%2C_Exposition_Universal%2C_1900%2C_Paris%2C_France.jpg'
          }}
        />
        <Text>Welcome to TodoList React</Text>
        <Text>Try with password: “password”</Text>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={u => setUsername(u)}
          onKeyPress={ev => {
            if (ev.nativeEvent.key === 'Enter') {
              login(username, password);
            }
          }}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={p => setPassword(p)}
          onKeyPress={ev => {
            if (ev.nativeEvent.key === 'Enter') {
              login(username, password);
            }
          }}
          style={styles.input}
        />
        <Button disabled={!canLogin} onPress={() => login(username, password)} title="Login" />
        {onGoingLogin ? <ActivityIndicator size={24} /> : <></>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    width: 320,
    paddingTop: 20
  },
  header: { width: '100%', height: 150, marginBottom: 10 },
  input: { height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 5, marginBottom: 5 }
});

export default withRouter(LoginPage);
