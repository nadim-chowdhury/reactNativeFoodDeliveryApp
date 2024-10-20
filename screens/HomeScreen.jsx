import React, { useState } from 'react';
import {
  View,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { SearchBar } from 'react-native-elements';

// Demo restaurant data
const restaurants = [
  {
    id: 1,
    name: 'Pizza Palace',
    category: 'Pizza',
    location: '123 Main St',
    image: 'https://via.placeholder.com/100',
  },
  {
    id: 2,
    name: 'Sushi World',
    category: 'Sushi',
    location: '456 Ocean Blvd',
    image: 'https://via.placeholder.com/100',
  },
  {
    id: 3,
    name: 'Burger Bonanza',
    category: 'Burgers',
    location: '789 Burger Ave',
    image: 'https://via.placeholder.com/100',
  },
  {
    id: 4,
    name: 'Pizza Land',
    category: 'Pizza',
    location: '1011 Pine St',
    image: 'https://via.placeholder.com/100',
  },
];

const HomeScreen = () => {
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState(restaurants);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Pizza', 'Sushi', 'Burgers'];

  const handleSearch = (text) => {
    setSearch(text);
    if (text) {
      const newData = restaurants.filter((item) => {
        const itemData = `${item.name.toUpperCase()} ${item.category.toUpperCase()}`;
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
    } else {
      setFilteredData(restaurants);
    }
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredData(restaurants);
    } else {
      const newData = restaurants.filter((item) => item.category === category);
      setFilteredData(newData);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.restaurantItem}>
      <Image source={{ uri: item.image }} style={styles.restaurantImage} />
      <View style={styles.restaurantInfo}>
        <Text style={styles.restaurantName}>{item.name}</Text>
        <Text style={styles.restaurantLocation}>{item.location}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search Restaurants or Foods..."
        onChangeText={handleSearch}
        value={search}
        lightTheme
        round
        containerStyle={styles.searchBarContainer}
        inputContainerStyle={styles.searchInput}
      />

      <View style={styles.categoryContainer}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            onPress={() => handleCategorySelect(category)}
            style={[
              styles.categoryItem,
              selectedCategory === category && styles.selectedCategory,
            ]}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === category && styles.selectedCategoryText,
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.restaurantList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 20,
  },
  searchBarContainer: {
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    padding: 0,
  },
  searchInput: {
    backgroundColor: '#e0e0e0',
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  categoryItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  selectedCategory: {
    backgroundColor: '#333',
  },
  categoryText: {
    color: '#333',
  },
  selectedCategoryText: {
    color: '#fff',
  },
  restaurantList: {
    marginTop: 10,
  },
  restaurantItem: {
    flexDirection: 'row',
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  restaurantImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  restaurantInfo: {
    flex: 1,
    paddingLeft: 15,
    justifyContent: 'center',
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  restaurantLocation: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});

export default HomeScreen;
