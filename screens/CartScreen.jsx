import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';
import {cartItems, addresses, paymentMethods} from '../data/cart';

const CartScreen = ({navigation}) => {
  const [coupon, setCoupon] = useState('');
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  const handleApplyCoupon = () => {
    // Apply coupon logic here
    alert('Coupon applied');
  };

  const handlePlaceOrder = () => {
    if (!selectedAddress || !selectedPaymentMethod) {
      alert('Please select address and payment method');
      return;
    }
    // Place order logic here
    alert('Order placed');
    navigation.navigate('OrderConfirmation');
  };

  const renderCartItem = ({item}) => (
    <View style={styles.cartItem}>
      <Text style={styles.cartItemName}>{item.name}</Text>
      <Text style={styles.cartItemPrice}>
        ${item.price} x {item.quantity}
      </Text>
      <Text style={styles.cartItemTotal}>
        Total: ${item.price * item.quantity}
      </Text>
    </View>
  );

  const renderAddress = ({item}) => (
    <TouchableOpacity
      style={[
        styles.addressItem,
        selectedAddress === item && styles.selectedItem,
      ]}
      onPress={() => setSelectedAddress(item)}>
      <Text style={styles.addressText}>{item.address}</Text>
    </TouchableOpacity>
  );

  const renderPaymentMethod = ({item}) => (
    <TouchableOpacity
      style={[
        styles.paymentMethodItem,
        selectedPaymentMethod === item && styles.selectedItem,
      ]}
      onPress={() => setSelectedPaymentMethod(item)}>
      <Text style={styles.paymentMethodText}>{item.method}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Cart Summary</Text>
      <FlatList
        data={cartItems}
        keyExtractor={item => item.id.toString()}
        renderItem={renderCartItem}
      />

      <TextInput
        style={styles.couponInput}
        placeholder="Enter coupon code"
        value={coupon}
        onChangeText={setCoupon}
      />
      <Button title="Apply Coupon" onPress={handleApplyCoupon} />

      <Text style={styles.sectionTitle}>Delivery Address</Text>
      <FlatList
        data={addresses}
        keyExtractor={item => item.id.toString()}
        renderItem={renderAddress}
      />

      <Text style={styles.sectionTitle}>Payment Options</Text>
      <FlatList
        data={paymentMethods}
        keyExtractor={item => item.id.toString()}
        renderItem={renderPaymentMethod}
      />

      <Button title="Place Order" onPress={handlePlaceOrder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  cartItem: {
    marginBottom: 10,
  },
  cartItemName: {
    fontSize: 18,
  },
  cartItemPrice: {
    fontSize: 16,
  },
  cartItemTotal: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  couponInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  addressItem: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginBottom: 10,
  },
  selectedItem: {
    backgroundColor: '#ddd',
  },
  addressText: {
    fontSize: 16,
  },
  paymentMethodItem: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginBottom: 10,
  },
  paymentMethodText: {
    fontSize: 16,
  },
});

export default CartScreen;

//  import React, { useState, useCallback, useEffect } from 'react';
//  import { GiftedChat } from 'react-native-gifted-chat';
//  import firebase from '../firebaseConfig';

//  const ChatScreen = ({ route }) => {
//    const { orderId } = route.params;
//    const [messages, setMessages] = useState([]);

//    useEffect(() => {
//      const messagesRef = firebase.firestore().collection('orders').doc(orderId).collection('messages');
//      const unsubscribe = messagesRef.orderBy('createdAt', 'desc').onSnapshot(snapshot => {
//        const messagesFirestore = snapshot.docs.map(doc => {
//          const message = doc.data();
//          return { ...message, createdAt: message.createdAt.toDate() };
//        });
//        setMessages(messagesFirestore);
//      });
//      return () => unsubscribe();
//    }, []);

//    const onSend = useCallback((messages = []) => {
//      const messagesRef = firebase.firestore().collection('orders').doc(orderId).collection('messages');
//      messages.forEach(message => {
//        messagesRef.add({ ...message, createdAt: firebase.firestore.FieldValue.serverTimestamp() });
//      });
//    }, []);

//    return (
//      <GiftedChat
//        messages={messages}
//        onSend={messages => onSend(messages)}
//        user={{
//          _id: 1,
//          name: 'Customer',
//        }}
//      />
//    );
//  };

//  export default ChatScreen;
