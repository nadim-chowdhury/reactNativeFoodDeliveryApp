import React, {useState, useEffect} from 'react';
import {View, Text, Button, FlatList, StyleSheet} from 'react-native';
import Contacts from 'react-native-contacts';

const AddressBookScreen = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    Contacts.getAll().then(contacts => {
      setContacts(contacts);
    });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        keyExtractor={item => item.recordID}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text>
              {item.givenName} {item.familyName}
            </Text>
            <Text>{item.phoneNumbers[0]?.number}</Text>
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
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default AddressBookScreen;

// import React, { useState, useEffect } from 'react';
// import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
// import Contacts from 'react-native-contacts';

// const AddressBookScreen = () => {
//   const [contacts, setContacts] = useState([]);

//   useEffect(() => {
//     Contacts.getAll().then(contacts => {
//       setContacts(contacts);
//     });
//   }, []);

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={contacts}
//         keyExtractor={(item) => item.recordID}
//         renderItem={({ item }) => (
//           <View style={styles.item}>
//             <Text>{item.givenName} {item.familyName}</Text>
//             <Text>{item.phoneNumbers[0]?.number}</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   item: {
//     padding: 10,
//     borderBottomWidth

// : 1,
//     borderBottomColor: '#ccc',
//   },
// });

// export default AddressBookScreen;
