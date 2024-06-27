import React from 'react';
import {View, Text, Button} from 'react-native';

const OrderDetailsScreen = ({route}) => {
  const {order} = route.params;

  return (
    <View style={{flex: 1, padding: 20}}>
      <Text>Order ID: {order.id}</Text>
      <Text>Status: {order.status}</Text>
      <Text>Total: ${order.total}</Text>
      <Text>Items:</Text>
      {order.items.map((item, index) => (
        <Text key={index}>
          {item.name} - ${item.price}
        </Text>
      ))}
    </View>
  );
};

export default OrderDetailsScreen;
