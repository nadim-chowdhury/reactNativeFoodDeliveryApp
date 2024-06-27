import React, {useState} from 'react';
import {View, TextInput, Button, Text} from 'react-native';
import {auth} from '../firebaseConfig';

const SignInScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('Profile');
      })
      .catch(error => setError(error.message));
  };

  const handlePasswordReset = () => {
    if (email) {
      auth()
        .sendPasswordResetEmail(email)
        .then(() => {
          alert('Password reset email sent!');
        })
        .catch(error => setError(error.message));
    } else {
      setError('Please enter your email address');
    }
  };

  // const handleSignIn = () => {
  //   auth()
  //     .signInWithEmailAndPassword(email, password)
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
      <Button title="Sign In" onPress={handleSignIn} />
      <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />

      <Button title="Forgot Password?" onPress={handlePasswordReset} />
    </View>
  );
};

export default SignInScreen;

// import React from 'react';
// import { View, Button, StyleSheet } from 'react-native';

// const SettingsScreen = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <Button title="Notification Preferences" onPress={() => navigation.navigate('NotificationPreferences')} />
//       <Button title="Manage Payment Methods" onPress={() => navigation.navigate('PaymentMethods')} />
//       <Button title="Address Book" onPress={() => navigation.navigate('AddressBook')} />
//       <Button title="Privacy Settings" onPress={() => navigation.navigate('PrivacySettings')} />
//       <Button title="FAQ" onPress={() => navigation.navigate('FAQ')} />
//       <Button title="Contact Support" onPress={() => navigation.navigate('ContactSupport')} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//   },
// });

// export default SettingsScreen;
