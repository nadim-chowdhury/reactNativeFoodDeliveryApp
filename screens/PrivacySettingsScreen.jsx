import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const PrivacySettingsScreen = () => {
  const [locationAccess, setLocationAccess] = useState(false);
  const [dataSharing, setDataSharing] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Privacy Settings</Text>

      <View style={styles.preference}>
        <Text style={styles.preferenceText}>Location Access</Text>
        <Switch
          value={locationAccess}
          onValueChange={setLocationAccess}
          trackColor={{ false: '#767577', true: '#34C759' }}
          thumbColor={locationAccess ? '#fff' : '#f4f3f4'}
        />
      </View>

      <View style={styles.preference}>
        <Text style={styles.preferenceText}>Data Sharing</Text>
        <Switch
          value={dataSharing}
          onValueChange={setDataSharing}
          trackColor={{ false: '#767577', true: '#34C759' }}
          thumbColor={dataSharing ? '#fff' : '#f4f3f4'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  preferenceText: {
    fontSize: 18,
    color: '#333',
  },
});

export default PrivacySettingsScreen;
