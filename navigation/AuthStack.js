import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HomeScreen from '../screens/HomeScreen';
import RestaurantDetailsScreen from '../screens/RestaurantDetailsScreen';
import FoodDetailsScreen from '../screens/FoodDetailsScreen';
import CartScreen from '../screens/CartScreen';
import OrderConfirmationScreen from '../screens/OrderConfirmationScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="RestaurantDetails"
        component={RestaurantDetailsScreen}
      />
      <Stack.Screen name="FoodDetails" component={FoodDetailsScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen
        name="OrderConfirmation"
        component={OrderConfirmationScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
