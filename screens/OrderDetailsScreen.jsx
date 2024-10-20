import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Demo order data (for testing purposes)
const demoOrder = {
  id: '123456',
  status: 'Delivered',
  total: 59.99,
  items: [
    { name: 'Pizza Margherita', price: 14.99 },
    { name: 'Caesar Salad', price: 9.99 },
    { name: 'Cheesecake', price: 7.99 },
    { name: 'Coke', price: 2.50 },
  ],
};

const OrderDetailsScreen = ({ route }) => {
  const { order = demoOrder } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Order Details</Text>
      <Text style={styles.detailText}>Order ID: {order.id}</Text>
      <Text style={styles.detailText}>Status: {order.status}</Text>
      <Text style={styles.detailText}>Total: ${order.total.toFixed(2)}</Text>

      <Text style={styles.itemsHeader}>Items:</Text>
      {order.items.map((item, index) => (
        <Text key={index} style={styles.itemText}>
          {item.name} - ${item.price.toFixed(2)}
        </Text>
      ))}
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
    color: '#333',
  },
  detailText: {
    fontSize: 18,
    marginBottom: 10,
    color: '#666',
  },
  itemsHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#333',
  },
  itemText: {
    fontSize: 16,
    marginBottom: 5,
    color: '#666',
  },
});

export default OrderDetailsScreen;
