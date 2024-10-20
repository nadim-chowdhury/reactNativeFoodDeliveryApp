import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

// Demo user activity data
const demoUserActivities = [
  { id: '1', userId: 'user123', activity: 'Logged in', date: '2024-10-01' },
  { id: '2', userId: 'user456', activity: 'Placed an order', date: '2024-10-02' },
  { id: '3', userId: 'user789', activity: 'Logged out', date: '2024-10-03' },
];

const UserActivityReportsScreen = () => {
  const [userActivities, setUserActivities] = useState(demoUserActivities);

  useEffect(() => {
    // Uncomment below to fetch real data from Firestore
    // const fetchUserActivities = async () => {
    //   const activitiesSnapshot = await firestore().collection('user_activities').get();
    //   setUserActivities(activitiesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    // };
    // fetchUserActivities();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={userActivities}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.report}>
            <Text style={styles.text}>User: {item.userId}</Text>
            <Text style={styles.text}>Activity: {item.activity}</Text>
            <Text style={styles.text}>Date: {item.date}</Text>
          </View>
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  list: {
    paddingBottom: 20,
  },
  report: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
});

export default UserActivityReportsScreen;
