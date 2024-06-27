import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {restaurantDetails} from '../data/restaurantDetails';

const RestaurantDetailsScreen = () => {
  const {name, rating, address, operatingHours, menu, reviews} =
    restaurantDetails;

  const renderMenuItem = ({item}) => (
    <View style={styles.menuItem}>
      <Text style={styles.menuItemName}>{item.name}</Text>
      <Text style={styles.menuItemPrice}>{item.price}</Text>
      <Text style={styles.menuItemDescription}>{item.description}</Text>
    </View>
  );

  const renderReviewItem = ({item}) => (
    <View style={styles.reviewItem}>
      <Text style={styles.reviewUser}>{item.user}</Text>
      <Text style={styles.reviewRating}>Rating: {item.rating}</Text>
      <Text style={styles.reviewComment}>{item.comment}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.rating}>Rating: {rating}</Text>
      <Text style={styles.address}>{address}</Text>
      <Text style={styles.operatingHours}>Hours: {operatingHours}</Text>

      <Text style={styles.sectionTitle}>Menu</Text>
      <FlatList
        data={menu}
        keyExtractor={item => item.id.toString()}
        renderItem={renderMenuItem}
      />

      <Text style={styles.sectionTitle}>Reviews</Text>
      <FlatList
        data={reviews}
        keyExtractor={item => item.id.toString()}
        renderItem={renderReviewItem}
      />
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
  rating: {
    fontSize: 18,
    marginVertical: 5,
  },
  address: {
    fontSize: 16,
    marginVertical: 5,
  },
  operatingHours: {
    fontSize: 16,
    marginVertical: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  menuItem: {
    marginBottom: 10,
  },
  menuItemName: {
    fontSize: 18,
  },
  menuItemPrice: {
    fontSize: 16,
  },
  menuItemDescription: {
    fontSize: 14,
    color: 'gray',
  },
  reviewItem: {
    marginBottom: 10,
  },
  reviewUser: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  reviewRating: {
    fontSize: 14,
  },
  reviewComment: {
    fontSize: 14,
    color: 'gray',
  },
});

export default RestaurantDetailsScreen;

// import React from 'react';
// import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
// import { restaurantDetails } from '../data/restaurantDetails';

// const RestaurantDetailsScreen = ({ navigation }) => {
//   const { name, rating, address, operatingHours, menu, reviews } = restaurantDetails;

//   const renderMenuItem = ({ item }) => (
//     <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('FoodDetails')}>
//       <Text style={styles.menuItemName}>{item.name}</Text>
//       <Text style={styles.menuItemPrice}>{item.price}</Text>
//       <Text style={styles.menuItemDescription}>{item.description}</Text>
//     </TouchableOpacity>
//   );

//   const renderReviewItem = ({ item }) => (
//     <View style={styles.reviewItem}>
//       <Text style={styles.reviewUser}>{item.user}</Text>
//       <Text style={styles.reviewRating}>Rating: {item.rating}</Text>
//       <Text style={styles.reviewComment}>{item.comment}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.name}>{name}</Text>
//       <Text style={styles.rating}>Rating: {rating}</Text>
//       <Text style={styles.address}>{address}</Text>
//       <Text style={styles.operatingHours}>Hours: {operatingHours}</Text>

//       <Text style={styles.sectionTitle}>Menu</Text>
//       <FlatList
//         data={menu}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={renderMenuItem}
//       />

//       <Text style={styles.sectionTitle}>Reviews</Text>
//       <FlatList
//         data={reviews}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={renderReviewItem}
//       />
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
//   rating: {
//     fontSize: 18,
//     marginVertical: 5,
//   },
//   address: {
//     fontSize: 16,
//     marginVertical: 5,
//   },
//   operatingHours: {
//     fontSize: 16,
//     marginVertical: 5,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginVertical: 10,
//   },
//   menuItem: {
//     marginBottom: 10,
//   },
//   menuItemName: {
//     fontSize: 18,
//   },
//   menuItemPrice: {
//     fontSize: 16,
//   },
//   menuItemDescription: {
//     fontSize: 14,
//     color: 'gray',
//   },
//   reviewItem: {
//     marginBottom: 10,
//   },
//   reviewUser: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   reviewRating: {
//     fontSize: 14,
//   },
//   reviewComment: {
//     fontSize: 14,
//     color: 'gray',
//   },
// });

// export default RestaurantDetailsScreen;

// import React, { useState, useEffect } from 'react';
// import { View, TextInput, Button, StyleSheet } from 'react-native';
// import firestore from '@react-native-firebase/firestore';

// const RestaurantDetailsScreen = () => {
//   const [name, setName] = useState('');
//   const [address, setAddress] = useState('');
//   const [contact, setContact] = useState('');

//   useEffect(() => {
//     const fetchDetails = async () => {
//       const doc = await firestore().collection('restaurant').doc('details').get();
//       if (doc.exists) {
//         const data = doc.data();
//         setName(data.name);
//         setAddress(data.address);
//         setContact(data.contact);
//       }
//     };
//     fetchDetails();
//   }, []);

//   const updateDetails = async () => {
//     await firestore().collection('restaurant').doc('details').set({
//       name,
//       address,
//       contact,
//     });
//     alert('Details updated');
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         value={name}
//         onChangeText={setName}
//         placeholder="Name"
//         style={styles.input}
//       />
//       <TextInput
//         value={address}
//         onChangeText={setAddress}
//         placeholder="Address"
//         style={styles.input}
//       />
//       <TextInput
//         value={contact}
//         onChangeText={setContact}
//         placeholder="Contact"
//         style={styles.input}
//       />
//       <Button title="Update Details" onPress={updateDetails} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 20,
//     paddingHorizontal: 10,
//   },
// });

// export default RestaurantDetailsScreen;
