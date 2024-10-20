import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { auth } from '../firebaseConfig';

// Demo user data
const demoUser = {
  email: 'demo@example.com',
};

const ProfileScreen = ({ navigation }) => {
  const user = demoUser; // Replace with `auth().currentUser` for real authentication

  const handleSignOut = () => {
    // Uncomment this to use real Firebase sign out
    // auth().signOut().then(() => {
    //   navigation.navigate('SignIn');
    // });
    alert('Sign out successful (demo)');
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
      {user ? (
        <View>
          <Text style={styles.emailText}>Email: {user.email}</Text>
          <Button title="Sign Out" onPress={handleSignOut} />
        </View>
      ) : (
        <Text style={styles.noUserText}>No user logged in</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  emailText: {
    fontSize: 18,
    marginBottom: 20,
    color: '#333',
  },
  noUserText: {
    fontSize: 16,
    color: '#666',
  },
});

export default ProfileScreen;
