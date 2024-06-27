import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import firebase from '../firebaseConfig';
import CallKeep from 'react-native-callkeep';

const TrackingScreen = ({route}) => {
  const {orderId} = route.params;
  const [orderStatus, setOrderStatus] = useState({});
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const callRider = () => {
    // Assuming you have the rider's phone number
    const riderPhoneNumber = '1234567890';
    CallKeep.setup({}).then(() => {
      CallKeep.startCall('callUUID', riderPhoneNumber, riderPhoneNumber);
    });
  };

  useEffect(() => {
    const orderRef = firebase.database().ref(`orders/${orderId}`);
    orderRef.on('value', snapshot => {
      const data = snapshot.val();
      if (data) {
        setOrderStatus(data);
        setRegion({
          latitude: data.location.lat,
          longitude: data.location.lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      }
    });

    return () => orderRef.off();
  }, [orderId]);

  return (
    <View style={{flex: 1}}>
      <MapView style={{flex: 1}} region={region}>
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
      <View style={{padding: 20}}>
        <Text>Order ID: {orderId}</Text>
        <Text>Status: {orderStatus.status}</Text>
        <Text>
          Estimated Delivery Time: {orderStatus.estimatedDeliveryTime}
        </Text>
      </View>
    </View>
  );
};

export default TrackingScreen;

// import React, { useEffect, useState } from 'react';
//  import { View, Text, Button } from 'react-native';
//  import MapView, { Marker } from 'react-native-maps';
//  import firebase from '../firebaseConfig';

//  const TrackingScreen = ({ route, navigation }) => {
//    const { orderId } = route.params;
//    const [orderStatus, setOrderStatus] = useState({});
//    const [region, setRegion] = useState({
//      latitude: 37.78825,
//      longitude: -122.4324,
//      latitudeDelta: 0.0922,
//      longitudeDelta: 0.0421,
//    });

//    useEffect(() => {
//      const orderRef = firebase.database().ref(`orders/${orderId}`);
//      orderRef.on('value', snapshot => {
//        const data = snapshot.val();
//        if (data) {
//          setOrderStatus(data);
//          setRegion({
//            latitude: data.location.lat,
//            longitude: data.location.lng,
//            latitudeDelta: 0.0922,
//            longitudeDelta: 0.0421,
//          });
//        }
//      });

//      return () => orderRef.off();
//    }, [orderId]);

//    const callRider = () => {
//      // Implement call functionality
//    };

//    const messageRider = () => {
//      navigation.navigate('Chat', { orderId });
//    };

//    return (
//      <View style={{ flex: 1 }}>
//        <MapView style={{ flex: 1 }} region={region}>
//          {orderStatus.location && (
//            <Marker
//              coordinate={{
//                latitude: orderStatus.location.lat,
//                longitude: orderStatus.location.lng,
//              }}
//              title="Delivery Location"
//              description="Your order is here"
//            />
//          )}
//        </MapView>
//        <View style={{ padding: 20 }}>
//          <Text>Order ID: {orderId}</Text>
//          <Text>Status: {orderStatus.status}</Text>
//          <Text>Estimated Delivery Time: {orderStatus.estimatedDeliveryTime}</Text>
//          <Button title="Call Rider" onPress={callRider} />
//          <Button title="Message Rider" onPress={messageRider} />
//        </View>
//      </View>
//    );
//  };

//  export default TrackingScreen;
