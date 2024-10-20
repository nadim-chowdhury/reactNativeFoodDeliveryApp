import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Button,
} from 'react-native';

// Demo data for food details
const foodDetails = {
  name: 'Deluxe Burger',
  description: 'A juicy, flavorful burger with all the fixings.',
  price: 12.99,
  addOns: [
    { id: 1, name: 'Extra Cheese', price: 1.5 },
    { id: 2, name: 'Bacon', price: 2.0 },
    { id: 3, name: 'Avocado', price: 2.5 },
    { id: 4, name: 'Fried Egg', price: 1.75 },
  ],
};

const FoodDetailsScreen = () => {
  const { name, description, price, addOns } = foodDetails;
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  const handleAddOnPress = (addOn) => {
    setSelectedAddOns((prevSelectedAddOns) => {
      if (prevSelectedAddOns.includes(addOn)) {
        return prevSelectedAddOns.filter((item) => item !== addOn);
      } else {
        return [...prevSelectedAddOns, addOn];
      }
    });
  };

  const renderAddOn = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.addOnItem,
        selectedAddOns.includes(item) && styles.addOnItemSelected,
      ]}
      onPress={() => handleAddOnPress(item)}
    >
      <Text style={styles.addOnItemText}>{item.name}</Text>
      <Text style={styles.addOnItemPrice}>+${item.price.toFixed(2)}</Text>
    </TouchableOpacity>
  );

  const calculateTotalPrice = () => {
    const addOnsTotal = selectedAddOns.reduce((acc, addOn) => acc + addOn.price, 0);
    return (price + addOnsTotal).toFixed(2);
  };

  const handleAddToCart = () => {
    // Add to cart logic here
    alert('Item added to cart');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>Base Price: ${price.toFixed(2)}</Text>

      <Text style={styles.sectionTitle}>Add-ons / Customizations</Text>
      <FlatList
        data={addOns}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderAddOn}
        style={styles.addOnsList}
      />

      <Text style={styles.totalPrice}>Total Price: ${calculateTotalPrice()}</Text>

      <Button title="Add to Cart" onPress={handleAddToCart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    color: '#666',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  addOnItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  addOnItemSelected: {
    backgroundColor: '#e0e0e0',
  },
  addOnItemText: {
    fontSize: 16,
    color: '#333',
  },
  addOnItemPrice: {
    fontSize: 16,
    color: '#666',
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
    color: '#333',
  },
  addOnsList: {
    marginBottom: 20,
  },
});

export default FoodDetailsScreen;
