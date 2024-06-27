import React, {useEffect, useState} from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import firebase from '../firebaseConfig';

const OrderHistoryScreen = ({navigation}) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const user = firebase.auth().currentUser;
      if (user) {
        const ordersRef = firebase
          .firestore()
          .collection('orders')
          .where('userId', '==', user.uid);
        const snapshot = await ordersRef.get();
        const ordersList = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setOrders(ordersList);
      }
    };

    fetchOrders();
  }, []);

  const reorder = order => {
    navigation.navigate('Tracking', {orderId: order.id});
  };

  const viewOrderDetails = order => {
    navigation.navigate('OrderDetails', {order});
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={orders}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View
            style={{
              padding: 20,
              borderBottomWidth: 1,
              borderBottomColor: '#ccc',
            }}>
            <Text>Order ID: {item.id}</Text>
            <Text>Status: {item.status}</Text>
            <Text>Total: ${item.total}</Text>
            <Button title="Reorder" onPress={() => reorder(item)} />
            <Button
              title="View Details"
              onPress={() => viewOrderDetails(item)}
            />
          </View>
        )}
      />
    </View>
  );
};

export default OrderHistoryScreen;
