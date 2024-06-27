import React, {useState} from 'react';
import {
  View,
  FlatList,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import {restaurants} from '../data/restaurants';
import {SearchBar} from 'react-native-elements';

const HomeScreen = () => {
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState(restaurants);
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = ['All', 'Pizza', 'Sushi', 'Burgers'];

  const handleSearch = text => {
    setSearch(text);
    if (text) {
      const newData = restaurants.filter(item => {
        const itemData = `${item.name.toUpperCase()} ${item.category.toUpperCase()}`;
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
    } else {
      setFilteredData(restaurants);
    }
  };

  const handleCategorySelect = category => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredData(restaurants);
    } else {
      const newData = restaurants.filter(item => item.category === category);
      setFilteredData(newData);
    }
  };

  const renderItem = ({item}) => (
    <TouchableOpacity style={{marginBottom: 20}}>
      <Image source={{uri: item.image}} style={{width: 100, height: 100}} />
      <Text>{item.name}</Text>
      <Text>{item.location}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{flex: 1, padding: 20}}>
      <SearchBar
        placeholder="Search Restaurants or Foods..."
        onChangeText={text => handleSearch(text)}
        value={search}
        lightTheme
        round
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginVertical: 10,
        }}>
        {categories.map(category => (
          <TouchableOpacity
            key={category}
            onPress={() => handleCategorySelect(category)}
            style={{
              padding: 10,
              backgroundColor: selectedCategory === category ? 'grey' : 'white',
              borderRadius: 20,
            }}>
            <Text
              style={{
                color: selectedCategory === category ? 'white' : 'black',
              }}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={filteredData}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default HomeScreen;

// import React, { useState } from 'react';
// import { View, FlatList, TextInput, Image, Text, TouchableOpacity } from 'react-native';
// import { restaurants } from '../data/restaurants';
// import { SearchBar } from 'react-native-elements';

// const HomeScreen = ({ navigation }) => {
//   const [search, setSearch] = useState('');
//   const [filteredData, setFilteredData] = useState(restaurants);
//   const [selectedCategory, setSelectedCategory] = useState('');

//   const categories = ['All', 'Pizza', 'Sushi', 'Burgers'];

//   const handleSearch = (text) => {
//     setSearch(text);
//     if (text) {
//       const newData = restaurants.filter((item) => {
//         const itemData = `${item.name.toUpperCase()} ${item.category.toUpperCase()}`;
//         const textData = text.toUpperCase();
//         return itemData.indexOf(textData) > -1;
//       });
//       setFilteredData(newData);
//     } else {
//       setFilteredData(restaurants);
//     }
//   };

//   const handleCategorySelect = (category) => {
//     setSelectedCategory(category);
//     if (category === 'All') {
//       setFilteredData(restaurants);
//     } else {
//       const newData = restaurants.filter(item => item.category === category);
//       setFilteredData(newData);
//     }
//   };

//   const renderItem = ({ item }) => (
//     <TouchableOpacity style={{ marginBottom: 20 }} onPress={() => navigation.navigate('RestaurantDetails')}>
//       <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />
//       <Text>{item.name}</Text>
//       <Text>{item.location}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={{ flex: 1, padding: 20 }}>
//       <SearchBar
//         placeholder="Search Restaurants or Foods..."
//         onChangeText={(text) => handleSearch(text)}
//         value={search}
//         lightTheme
//         round
//       />
//       <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 }}>
//         {categories.map(category => (
//           <TouchableOpacity
//             key={category}
//             onPress={() => handleCategorySelect(category)}
//             style={{ padding: 10, backgroundColor: selectedCategory === category ? 'grey' : 'white', borderRadius: 20 }}
//           >
//             <Text style={{ color: selectedCategory === category ? 'white' : 'black' }}>{category}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//       <FlatList
//         data={filteredData}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={renderItem}
//       />
//     </View>
//   );
// };

// export default HomeScreen;

//  import React, { useState } from 'react';
//    import { View, Text, Button, TextInput } from 'react-native';
//    import firebase from '../firebaseConfig';

//    const HomeScreen = ({ navigation }) => {
//      const [orderId, setOrderId] = useState('');

//      const trackOrder = () => {
//        navigation.navigate('Tracking', { orderId });
//      };

//      return (
//        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//          <Text>Enter Order ID:</Text>
//          <TextInput
//            value={orderId}
//            onChangeText={setOrderId}
//            style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
//          />
//          <Button title="Track Order" onPress={trackOrder} />
//        </View>
//      );
//    };

//    export default HomeScreen;

//  import React, { useState } from 'react';
//    import { View, Text, Button, TextInput } from 'react-native';

//    const HomeScreen = ({ navigation }) => {
//      const [orderId, setOrderId] = useState('');

//      const trackOrder = () => {
//        navigation.navigate('Tracking', { orderId });
//      };

//      return (
//        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//          <Text>Enter Order ID:</Text>
//          <TextInput
//            value={orderId}
//            onChangeText={setOrderId}
//            style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
//          />
//          <Button title="Track Order" onPress={trackOrder} />
//        </View>
//      );
//    };

//    export default HomeScreen;

//  import React, { useState } from 'react';
//    import { View, Text, Button, TextInput } from 'react-native';

//    const HomeScreen = ({ navigation }) => {
//      const [orderId, setOrderId] = useState('');

//      const trackOrder = () => {
//        navigation.navigate('Tracking', { orderId });
//      };

//      const viewOrderHistory = () => {
//        navigation.navigate('OrderHistory');
//      };

//      return (
//        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//          <Text>Enter Order ID:</Text>
//          <TextInput
//            value={orderId}
//            onChangeText={setOrderId}
//            style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
//          />
//          <Button title="Track Order" onPress={trackOrder} />
//          <Button title="View Order History" onPress={viewOrderHistory} />
//        </View>
//      );
//    };

//    export default HomeScreen;

// import React, { useState } from 'react';
// import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

// const HomeScreen = ({ navigation }) => {
//   const [orderId, setOrderId] = useState('');

//   const trackOrder = () => {
//     navigation.navigate('Tracking', { orderId });
//   };

//   const viewOrderHistory = () => {
//     navigation.navigate('OrderHistory');
//   };

//   const openSettings = () => {
//     navigation.navigate('Settings');
//   };

//   return (
//     <View style={styles.container}>
//       <Text>Enter Order ID:</Text>
//       <TextInput
//         value={orderId}
//         onChangeText={setOrderId}
//         style={styles.input}
//       />
//       <Button title="Track Order" onPress={trackOrder} />
//       <Button title="View Order History" onPress={viewOrderHistory} />
//       <Button title="Settings" onPress={openSettings} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
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

// export default HomeScreen;

// import React from 'react';
// import { View, Button, StyleSheet } from 'react-native';

// const HomeScreen = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <Button title="Restaurant Details" onPress={() => navigation.navigate('RestaurantDetails')} />
//       <Button title="Manage Menu" onPress={() => navigation.navigate('MenuManagement')} />
//       <Button title="Manage Orders" onPress={() => navigation.navigate('OrdersManagement')} />
//       <Button title="Sales Reports" onPress={() => navigation.navigate('SalesReports')} />
//       <Button title="User Activity Reports" onPress={() => navigation.navigate('UserActivityReports')} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//   },
// });

// export default HomeScreen;
