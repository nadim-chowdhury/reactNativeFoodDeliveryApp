import React, {useState, useEffect} from 'react';
import {View, TextInput, Button, FlatList, StyleSheet} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const MenuManagementScreen = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [newPrice, setNewPrice] = useState('');

  useEffect(() => {
    const fetchMenu = async () => {
      const menu = await firestore().collection('menu').get();
      setMenuItems(menu.docs.map(doc => ({id: doc.id, ...doc.data()})));
    };
    fetchMenu();
  }, []);

  const addItem = async () => {
    await firestore().collection('menu').add({
      item: newItem,
      price: newPrice,
    });
    setNewItem('');
    setNewPrice('');
    fetchMenu();
  };

  const deleteItem = async id => {
    await firestore().collection('menu').doc(id).delete();
    fetchMenu();
  };

  const fetchMenu = async () => {
    const menu = await firestore().collection('menu').get();
    setMenuItems(menu.docs.map(doc => ({id: doc.id, ...doc.data()})));
  };

  return (
    <View style={styles.container}>
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
      />
      <Button title="Add Item" onPress={addItem} />
      <FlatList
        data={menuItems}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text>
              {item.item} - ${item.price}
            </Text>
            <Button title="Delete" onPress={() => deleteItem(item.id)} />
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

export default MenuManagementScreen;
