import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/fire

store';

const SalesReportsScreen = () => {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const fetchSales = async () => {
      const salesSnapshot = await firestore().collection('sales').get();
      setSales(salesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchSales();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={sales}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.report}>
            <Text>Date: {item.date}</Text>
            <Text>Sales: {item.sales}</Text>
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
  report: {
    marginBottom: 20,
  },
});

export default SalesReportsScreen;
