import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

// Demo data for restaurant details
const restaurantDetails = {
  name: 'Pizza Palace',
  rating: 4.5,
  address: '123 Main St, Springfield',
  operatingHours: '10 AM - 10 PM',
  menu: [
    {
      id: 1,
      name: 'Margherita Pizza',
      price: '$12.99',
      description: 'Classic cheese pizza with fresh mozzarella and basil.',
    },
    {
      id: 2,
      name: 'Pepperoni Pizza',
      price: '$14.99',
      description: 'Pepperoni pizza with spicy pepperoni slices.',
    },
    {
      id: 3,
      name: 'Veggie Pizza',
      price: '$13.99',
      description: 'Loaded with fresh vegetables.',
    },
  ],
  reviews: [
    {
      id: 1,
      user: 'John Doe',
      rating: 5,
      comment: 'Amazing pizza! Best in town.',
    },
    {
      id: 2,
      user: 'Jane Smith',
      rating: 4,
      comment: 'Great service and tasty pizza.',
    },
  ],
};

const RestaurantDetailsScreen = () => {
  const { name, rating, address, operatingHours, menu, reviews } =
    restaurantDetails;

  const renderMenuItem = ({ item }) => (
    <View style={styles.menuItem}>
      <Text style={styles.menuItemName}>{item.name}</Text>
      <Text style={styles.menuItemPrice}>{item.price}</Text>
      <Text style={styles.menuItemDescription}>{item.description}</Text>
    </View>
  );

  const renderReviewItem = ({ item }) => (
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
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderMenuItem}
        contentContainerStyle={styles.list}
      />

      <Text style={styles.sectionTitle}>Reviews</Text>
      <FlatList
        data={reviews}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderReviewItem}
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
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  rating: {
    fontSize: 18,
    color: '#666',
    marginBottom: 5,
  },
  address: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  operatingHours: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#333',
  },
  menuItem: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  menuItemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  menuItemPrice: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  menuItemDescription: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
  reviewItem: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  reviewUser: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  reviewRating: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  reviewComment: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
  list: {
    paddingBottom: 20,
  },
});

export default RestaurantDetailsScreen;
