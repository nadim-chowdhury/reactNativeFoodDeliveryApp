import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const UserActivityReportsScreen = () => {
  const [userActivities, setUserActivities] = useState([]);

  useEffect(() => {
    const fetchUserActivities = async () => {
      const activitiesSnapshot = await firestore()
        .collection('user_activities')
        .get();
      setUserActivities(
        activitiesSnapshot.docs.map(doc => ({id: doc.id, ...doc.data()})),
      );
    };
    fetchUserActivities();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={userActivities}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.report}>
            <Text>User: {item.userId}</Text>
            <Text>Activity: {item.activity}</Text>
            <Text>Date: {item.date}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  report: {
    marginBottom: 20,
  },
});

export default UserActivityReportsScreen;
