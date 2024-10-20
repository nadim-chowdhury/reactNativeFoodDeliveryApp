import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

// Demo data for order history
const demoOrders = [
  {
    id: '123456',
    status: 'Delivered',
    total: 59.99,
    items: [
      { name: 'Pizza Margherita', price: 14.99 },
      { name: 'Caesar Salad', price: 9.99 },
    ],
  },
  {
    id: '123457',
    status: 'In Progress',
    total: 29.99,
    items: [
      { name: 'Burger', price: 9.99 },
      { name: 'Fries', price: 4.99 },
    ],
  },
];

const OrderHistoryScreen = ({ navigation }) => {
  const [orders, setOrders] = useState(demoOrders);

  const reorder = (order) => {
    navigation.navigate('Tracking', { orderId: order.id });
  };

  const viewOrderDetails = (order) => {
    navigation.navigate('OrderDetails', { order });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.orderItem}>
            <Text style={styles.orderId}>Order ID: {item.id}</Text>
            <Text>Status: {item.status}</Text>
            <Text>Total: ${item.total.toFixed(2)}</Text>

            <View style={styles.buttonContainer}>
              <Button title="Reorder" onPress={() => reorder(item)} />
              <Button
                title="View Details"
                onPress={() => viewOrderDetails(item)}
                color="#007BFF"
              />
            </View>
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
    backgroundColor: '#f8f8f8',
  },
  orderItem: {
    padding: 20,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  orderId: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  list: {
    padding: 20,
  },
});

export default OrderHistoryScreen;
