import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './navigation/AuthStack'; // Ensure this is the correct path to your navigation stack
import {
  requestUserPermission,
  notificationListener,
} from './firebase-messaging'; // Ensure these functions are correctly set up in your Firebase messaging

const App = () => {
  useEffect(() => {
    // Request user permission for push notifications and set up listener for notifications
    requestUserPermission();
    notificationListener();
  }, []);

  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default App;
