import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { auth } from '../firebaseConfig';

// For demo purposes (mock authentication)
const demoSignIn = (email, password) => {
  if (email === 'demo@example.com' && password === 'password123') {
    return Promise.resolve();
  } else {
    return Promise.reject(new Error('Invalid email or password'));
  }
};

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = () => {
    demoSignIn(email, password)
      .then(() => {
        navigation.navigate('Profile');
      })
      .catch((error) => setError(error.message));
  };

  const handlePasswordReset = () => {
    if (email) {
      alert('Password reset email sent!');
    } else {
      setError('Please enter your email address');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <Button title="Sign In" onPress={handleSignIn} />
      <Button
        title="Sign Up"
        onPress={() => navigation.navigate('SignUp')}
      />
      <Button title="Forgot Password?" onPress={handlePasswordReset} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  errorText: {
    color: 'red',
    marginBottom: 20,
  },
});

export default SignInScreen;
