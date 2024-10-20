import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const NotificationPreferencesScreen = () => {
  const [orderUpdates, setOrderUpdates] = useState(true);
  const [promotions, setPromotions] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notification Preferences</Text>

      <View style={styles.preference}>
        <Text style={styles.preferenceText}>Order Updates</Text>
        <Switch
          value={orderUpdates}
          onValueChange={setOrderUpdates}
          trackColor={{ false: '#767577', true: '#34C759' }}
          thumbColor={orderUpdates ? '#fff' : '#f4f3f4'}
        />
      </View>

      <View style={styles.preference}>
        <Text style={styles.preferenceText}>Promotions and Offers</Text>
        <Switch
          value={promotions}
          onValueChange={setPromotions}
          trackColor={{ false: '#767577', true: '#34C759' }}
          thumbColor={promotions ? '#fff' : '#f4f3f4'}
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
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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

export default NotificationPreferencesScreen;
