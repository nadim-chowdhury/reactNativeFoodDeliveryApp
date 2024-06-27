/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './navigation/AuthStack';
// import AuthStack from './navigation/AuthStack';

import {
  requestUserPermission,
  notificationListener,
} from './firebase-messaging';

const App = () => {
  React.useEffect(() => {
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

// import React from 'react';
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen from './screens/HomeScreen';
// import TrackingScreen from './screens/TrackingScreen';
// import ChatScreen from './screens/ChatScreen';
// import OrderHistoryScreen from './screens/OrderHistoryScreen';
// import OrderDetailsScreen from './screens/OrderDetailsScreen';
// import SettingsScreen from './screens/SettingsScreen';
// import NotificationPreferencesScreen from './screens/NotificationPreferencesScreen';
// import PaymentMethodsScreen from './screens/PaymentMethodsScreen';
// import AddressBookScreen from './screens/AddressBookScreen';
// import PrivacySettingsScreen from './screens/PrivacySettingsScreen';
// import FAQScreen from './screens/FAQScreen';
// import ContactSupportScreen from './screens/ContactSupportScreen';
// import firebase from '@react-native-firebase/app';
// import messaging from '@react-native-firebase/messaging';
// import PushNotification from 'react-native-push-notification';

// const Stack = createStackNavigator();

// const App = () => {
//   React.useEffect(() => {
//     const unsubscribe = messaging().onMessage(async remoteMessage => {
//       PushNotification.localNotification({
//         title: remoteMessage.notification.title,
//         message: remoteMessage.notification.body,
//       });
//     });

//     return unsubscribe;
//   }, []);

//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Tracking" component={TrackingScreen} />
//         <Stack.Screen name="Chat" component={ChatScreen} />
//         <Stack.Screen name="OrderHistory" component={OrderHistoryScreen} />
//         <Stack.Screen name="OrderDetails" component={OrderDetailsScreen} />
//         <Stack.Screen name="Settings" component={SettingsScreen} />
//         <Stack.Screen name="NotificationPreferences" component={NotificationPreferencesScreen} />
//         <Stack.Screen name="PaymentMethods" component={PaymentMethodsScreen} />
//         <Stack.Screen name="AddressBook" component={AddressBookScreen} />
//         <Stack.Screen name="PrivacySettings" component={PrivacySettingsScreen} />
//         <Stack.Screen name="FAQ" component={FAQScreen} />
//         <Stack.Screen name="ContactSupport" component={ContactSupportScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import {Provider as PaperProvider} from 'react-native-paper';
// import HomeScreen from './screens/HomeScreen';
// import RestaurantDetailsScreen from './screens/RestaurantDetailsScreen';
// import MenuManagementScreen from './screens/MenuManagementScreen';
// import OrdersManagementScreen from './screens/OrdersManagementScreen';
// import SalesReportsScreen from './screens/SalesReportsScreen';
// import UserActivityReportsScreen from './screens/UserActivityReportsScreen';
// import firebase from '@react-native-firebase/app';

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <PaperProvider>
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName="Home">
//           <Stack.Screen name="Home" component={HomeScreen} />
//           <Stack.Screen
//             name="RestaurantDetails"
//             component={RestaurantDetailsScreen}
//           />
//           <Stack.Screen
//             name="MenuManagement"
//             component={MenuManagementScreen}
//           />
//           <Stack.Screen
//             name="OrdersManagement"
//             component={OrdersManagementScreen}
//           />
//           <Stack.Screen name="SalesReports" component={SalesReportsScreen} />
//           <Stack.Screen
//             name="UserActivityReports"
//             component={UserActivityReportsScreen}
//           />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </PaperProvider>
//   );
// };

// export default App;
