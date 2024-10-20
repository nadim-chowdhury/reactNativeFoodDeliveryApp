import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';

// Demo sales data
const demoSales = [
  { id: '1', date: '2024-10-01', sales: 150.25 },
  { id: '2', date: '2024-10-02', sales: 210.75 },
  { id: '3', date: '2024-10-03', sales: 300.50 },
];

const SalesReportsScreen = () => {
  const [sales, setSales] = useState(demoSales);

  useEffect(() => {
    // Uncomment below to fetch sales from Firestore
    // const fetchSales = async () => {
    //   const salesSnapshot = await firestore().collection('sales').get();
    //   setSales(salesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    // };
    // fetchSales();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={sales}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.report}>
            <Text style={styles.reportText}>Date: {item.date}</Text>
            <Text style={styles.reportText}>Sales: ${item.sales.toFixed(2)}</Text>
          </View>
        )}
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
  list: {
    paddingBottom: 20,
  },
  report: {
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
  reportText: {
    fontSize: 16,
    color: '#333',
  },
});

export default SalesReportsScreen;
