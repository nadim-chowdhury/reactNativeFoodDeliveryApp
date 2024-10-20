import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import CallKeep from 'react-native-callkeep';

// Demo order data for tracking
const demoOrderStatus = {
  status: 'On the way',
  location: { lat: 37.78825, lng: -122.4324 },
  estimatedDeliveryTime: '30 mins',
};

const TrackingScreen = ({ route }) => {
  const { orderId } = route.params;
  const [orderStatus, setOrderStatus] = useState(demoOrderStatus);
  const [region, setRegion] = useState({
    latitude: demoOrderStatus.location.lat,
    longitude: demoOrderStatus.location.lng,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const callRider = () => {
    const riderPhoneNumber = '1234567890';
    CallKeep.setup({}).then(() => {
      CallKeep.startCall('callUUID', riderPhoneNumber, riderPhoneNumber);
    });
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={region}>
        {orderStatus.location && (
          <Marker
            coordinate={{
              latitude: orderStatus.location.lat,
              longitude: orderStatus.location.lng,
            }}
            title="Delivery Location"
            description="Your order is here"
          />
        )}
      </MapView>
      <View style={styles.details}>
        <Text style={styles.text}>Order ID: {orderId}</Text>
        <Text style={styles.text}>Status: {orderStatus.status}</Text>
        <Text style={styles.text}>
          Estimated Delivery Time: {orderStatus.estimatedDeliveryTime}
        </Text>
        <Button title="Call Rider" onPress={callRider} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  details: {
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default TrackingScreen;
