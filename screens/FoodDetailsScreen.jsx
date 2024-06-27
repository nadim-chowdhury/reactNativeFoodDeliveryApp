import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Button,
} from 'react-native';
import {foodDetails} from '../data/foodDetails';

const FoodDetailsScreen = () => {
  const {name, description, price, addOns} = foodDetails;
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  const handleAddOnPress = addOn => {
    setSelectedAddOns(prevSelectedAddOns => {
      if (prevSelectedAddOns.includes(addOn)) {
        return prevSelectedAddOns.filter(item => item !== addOn);
      } else {
        return [...prevSelectedAddOns, addOn];
      }
    });
  };

  const renderAddOn = ({item}) => (
    <TouchableOpacity
      style={[
        styles.addOnItem,
        selectedAddOns.includes(item) && styles.addOnItemSelected,
      ]}
      onPress={() => handleAddOnPress(item)}>
      <Text style={styles.addOnItemText}>{item.name}</Text>
      <Text style={styles.addOnItemPrice}>{item.price}</Text>
    </TouchableOpacity>
  );

  const handleAddToCart = () => {
    // Add to cart logic here
    alert('Item added to cart');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>{price}</Text>

      <Text style={styles.sectionTitle}>Add-ons / Customizations</Text>
      <FlatList
        data={addOns}
        keyExtractor={item => item.id.toString()}
        renderItem={renderAddOn}
      />

      <Button title="Add to Cart" onPress={handleAddToCart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginVertical: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  addOnItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
    borderRadius: 5,
  },
  addOnItemSelected: {
    backgroundColor: '#ddd',
  },
  addOnItemText: {
    fontSize: 16,
  },
  addOnItemPrice: {
    fontSize: 16,
  },
});

export default FoodDetailsScreen;

// import React, { useState } from 'react';
// import { View, Text, FlatList, TouchableOpacity, StyleSheet, Button } from 'react-native';
// import { foodDetails } from '../data/foodDetails';

// const FoodDetailsScreen = ({ navigation }) => {
//   const { name, description, price, addOns } = foodDetails;
//   const [selectedAddOns, setSelectedAddOns] = useState([]);

//   const handleAddOnPress = (addOn) => {
//     setSelectedAddOns((prevSelectedAddOns) => {
//       if (prevSelectedAddOns.includes(addOn)) {
//         return prevSelectedAddOns.filter((item) => item !== addOn);
//       } else {
//         return [...prevSelectedAddOns, addOn];
//       }
//     });
//   };

//   const renderAddOn = ({ item }) => (
//     <TouchableOpacity
//       style={[styles.addOnItem, selectedAddOns.includes(item) && styles.addOnItemSelected]}
//       onPress={() => handleAddOnPress(item)}
//     >
//       <Text style={styles.addOnItemText}>{item.name}</Text>
//       <Text style={styles.addOnItemPrice}>{item.price}</Text>
//     </TouchableOpacity>
//   );

//   const handleAddToCart = () => {
//     // Add to cart logic here

//     alert('Item added to cart');
//     navigation.navigate('Cart');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.name}>{name}</Text>
//       <Text style={styles.description}>{description}</Text>
//       <Text style={styles.price}>{price}</Text>

//       <Text style={styles.sectionTitle}>Add-ons / Customizations</Text>
//       <FlatList
//         data={addOns}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={renderAddOn}
//       />

//       <Button title="Add to Cart" onPress={handleAddToCart} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   name: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   description: {
//     fontSize: 16,
//     marginVertical: 10,
//   },
//   price: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   addOnItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 10,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     marginBottom: 10,
//     borderRadius: 5,
//   },
//   addOnItemSelected: {
//     backgroundColor: '#ddd',
//   },
//   addOnItemText: {
//     fontSize: 16,
//   },
//   addOnItemPrice: {
//     fontSize: 16,
//   },
// });

// export default FoodDetailsScreen;
