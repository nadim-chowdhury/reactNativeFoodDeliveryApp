import React, {useState} from 'react';
import {View, TextInput, Button, Text} from 'react-native';
import {auth} from '../firebaseConfig';

const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('Profile');
      })
      .catch(error => setError(error.message));
  };

  // const handleSignUp = () => {
  //   auth()
  //     .createUserWithEmailAndPassword(email, password)
  //     .then(() => {
  //       navigation.navigate('Home');
  //     })
  //     .catch(error => setError(error.message));
  // };

  return (
    <View>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {error ? <Text>{error}</Text> : null}
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
};

export default SignUpScreen;
