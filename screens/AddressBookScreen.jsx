import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
// Uncomment the line below to use actual contacts from the device
// import Contacts from 'react-native-contacts';

const AddressBookScreen = () => {
  const [contacts, setContacts] = useState([]);

  // Demo data for showing sample contacts
  const demoContacts = [
    {
      recordID: '1',
      givenName: 'John',
      familyName: 'Doe',
      phoneNumbers: [{ label: 'mobile', number: '(555) 123-4567' }],
    },
    {
      recordID: '2',
      givenName: 'Jane',
      familyName: 'Smith',
      phoneNumbers: [{ label: 'home', number: '(555) 987-6543' }],
    },
    {
      recordID: '3',
      givenName: 'Michael',
      familyName: 'Brown',
      phoneNumbers: [{ label: 'work', number: '(555) 555-5555' }],
    },
  ];

  useEffect(() => {
    // Uncomment this code to use actual contacts from the device
    // Contacts.getAll().then(contacts => {
    //   setContacts(contacts);
    // });

    // For demo purposes, we will use demo data
    setContacts(demoContacts);
  }, []);

  const renderContact = ({ item }) => (
    <View style={styles.contactItem}>
      <Text style={styles.nameText}>
        {item.givenName} {item.familyName}
      </Text>
      <Text style={styles.phoneText}>
        {item.phoneNumbers[0]?.number}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Contacts</Text>
      <FlatList
        data={contacts}
        keyExtractor={item => item.recordID}
        renderItem={renderContact}
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
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  contactItem: {
    padding: 15,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  nameText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  phoneText: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
});

export default AddressBookScreen;
