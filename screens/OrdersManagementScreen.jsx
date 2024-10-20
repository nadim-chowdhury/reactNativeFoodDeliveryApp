import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';

// Demo data for orders
const demoOrders = [
  {
    id: '12345',
    items: ['Pizza', 'Burger', 'Soda'],
    status: 'Pending',
  },
  {
    id: '12346',
    items: ['Pasta', 'Salad', 'Juice'],
    status: 'Completed',
  },
];

const OrdersManagementScreen = () => {
  const [orders, setOrders] = useState(demoOrders);

  useEffect(() => {
    // Uncomment this to fetch real orders from Firestore
    // fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const ordersSnapshot = await firestore().collection('orders').get();
    setOrders(ordersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  const updateOrderStatus = async (id, status) => {
    await firestore().collection('orders').doc(id).update({ status });
    // Refresh orders after updating status
    fetchOrders();
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.order}>
            <Text style={styles.orderText}>Order ID: {item.id}</Text>
            <Text style={styles.orderText}>Items: {item.items.join(', ')}</Text>
            <Text style={styles.orderText}>Status: {item.status}</Text>
            <Button
              title="Mark as Completed"
              onPress={() => updateOrderStatus(item.id, 'Completed')}
              disabled={item.status === 'Completed'}
            />
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
  order: {
    padding: 20,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  orderText: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
});

export default OrdersManagementScreen;
