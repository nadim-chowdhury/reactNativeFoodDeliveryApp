import React, {useState, useEffect} from 'react';
import {View, Button, FlatList, StyleSheet} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const OrdersManagementScreen = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const ordersSnapshot = await firestore().collection('orders').get();
      setOrders(ordersSnapshot.docs.map(doc => ({id: doc.id, ...doc.data()})));
    };
    fetchOrders();
  }, []);

  const updateOrderStatus = async (id, status) => {
    await firestore().collection('orders').doc(id).update({status});
    fetchOrders();
  };

  const fetchOrders = async () => {
    const ordersSnapshot = await firestore().collection('orders').get();
    setOrders(ordersSnapshot.docs.map(doc => ({id: doc.id, ...doc.data()})));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.order}>
            <Text>Order ID: {item.id}</Text>
            <Text>Items: {item.items.join(', ')}</Text>
            <Text>Status: {item.status}</Text>
            <Button
              title="Mark as Completed"
              onPress={() => updateOrderStatus(item.id, 'Completed')}
            />
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
  order: {
    marginBottom: 20,
  },
});

export default OrdersManagementScreen;
