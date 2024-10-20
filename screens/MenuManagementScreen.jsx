import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const MenuManagementScreen = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [newPrice, setNewPrice] = useState('');

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const menu = await firestore().collection('menu').get();
    setMenuItems(menu.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  const addItem = async () => {
    if (newItem && newPrice) {
      await firestore().collection('menu').add({
        item: newItem,
        price: newPrice,
      });
      setNewItem('');
      setNewPrice('');
      fetchMenu();
    } else {
      alert('Please enter both item and price');
    }
  };

  const deleteItem = async id => {
    await firestore().collection('menu').doc(id).delete();
    fetchMenu();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Menu Management</Text>

      <TextInput
        value={newItem}
        onChangeText={setNewItem}
        placeholder="New Item"
        style={styles.input}
      />
      <TextInput
        value={newPrice}
        onChangeText={setNewPrice}
        placeholder="Price"
        style={styles.input}
        keyboardType="numeric"
      />
      <Button title="Add Item" onPress={addItem} />

      <FlatList
        data={menuItems}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>
              {item.item} - ${item.price}
            </Text>
            <TouchableOpacity
              onPress={() => deleteItem(item.id)}
              style={styles.deleteButton}
            >
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
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
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
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
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  itemText: {
    fontSize: 18,
    color: '#333',
  },
  deleteButton: {
    backgroundColor: '#ff4444',
    borderRadius: 5,
    padding: 8,
  },
  deleteButtonText: {
    color: '#fff',
  },
  list: {
    marginTop: 20,
  },
});

export default MenuManagementScreen;
