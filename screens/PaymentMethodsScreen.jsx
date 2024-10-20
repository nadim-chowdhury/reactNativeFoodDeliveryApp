import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import Keychain from 'react-native-keychain';

// Demo data for payment methods
const demoPaymentMethods = ['Visa **** 1234', 'MasterCard **** 5678'];

const PaymentMethodsScreen = () => {
  const [paymentMethods, setPaymentMethods] = useState(demoPaymentMethods);
  const [newPaymentMethod, setNewPaymentMethod] = useState('');

  useEffect(() => {
    // Uncomment this to load payment methods from Keychain
    // loadPaymentMethods();
  }, []);

  const loadPaymentMethods = async () => {
    const credentials = await Keychain.getGenericPassword();
    if (credentials) {
      setPaymentMethods(JSON.parse(credentials.password));
    }
  };

  const addPaymentMethod = async () => {
    if (newPaymentMethod) {
      const updatedMethods = [...paymentMethods, newPaymentMethod];
      await Keychain.setGenericPassword('paymentMethods', JSON.stringify(updatedMethods));
      setPaymentMethods(updatedMethods);
      setNewPaymentMethod('');
    } else {
      alert('Please enter a valid payment method');
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={paymentMethods}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.paymentText}>{item}</Text>
          </View>
        )}
        contentContainerStyle={styles.list}
      />
      <TextInput
        value={newPaymentMethod}
        onChangeText={setNewPaymentMethod}
        placeholder="Add new payment method"
        style={styles.input}
      />
      <Button title="Add" onPress={addPaymentMethod} />
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
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  paymentText: {
    fontSize: 16,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
});

export default PaymentMethodsScreen;
