import React from 'react';
import { View, Text, Button, StyleSheet, Linking } from 'react-native';

const ContactSupportScreen = () => {
  const emailSupport = () => {
    Linking.openURL('mailto:support@demoapp.com');
  };

  const callSupport = () => {
    Linking.openURL('tel:18001234567');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Contact Support</Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Chat with Support"
          onPress={() => {
            /* Navigate to chat screen */
            alert('Navigating to chat screen...');
          }}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Email Support" onPress={emailSupport} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Call Support" onPress={callSupport} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  buttonContainer: {
    marginBottom: 15,
  },
});

export default ContactSupportScreen;
