import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Welcome from './components/screens/Welcome';
import Login from './components/screens/Login';
import Form from './components/screens/Form';
import Forgott from './components/screens/Forgott';
import Forgott1 from './components/screens/Forgott1';
import Forgott2 from './components/screens/Forgott2';
import ServiceDetails from './components/screens/ServiceDetails';
import Home from './components/screens/Home';
import Bookings from './components/screens/Bookings';
import SSPlus from './components/screens/SSPlus';
import Rewards from './components/screens/Rewards';
import Account from './components/screens/Account';
import AccountScreen from './components/screens/AccountScreen';
import EditProfile from './components/screens/EditProfile';
import BookingScreen from './components/screens/BookingScreen';
import HelpScreen from './components/screens/HelpScreen';
import NativeDeviceScreen from './components/screens/NativeDeviceScreen';
import Wallet from './components/screens/Wallet';
import PlusMembershipScreen from './components/screens/PlusMembershipScreen';
import RatingScreen from './components/screens/RatingScreen';
import ManageAddressesScreen from './components/screens/ManageAddressScreen';
import ManagePaymentScreen from './components/screens/ManagePaymentScreen';
import  SettingsScreen from './components/screens/SettingsScreen';
import ScheduledBookingsScreen from './components/screens/ScheduledBookingScreen';
import AboutScreen from './components/screens/AboutScreen';
import HelpAccountScreen from './components/screens/HelpAccountScreen';
import SafetyMeasuresScreen from './components/screens/S2Safety';
import WarrantyScreen from './components/screens/WarrantyScreen';
import GettingStartedScreen from './components/screens/GettingStarted';
import ChangePhoneNumberScreen from './components/screens/changePhoneNO';

// Create Stack Navigator
const Stack = createNativeStackNavigator();

// Create Tab Navigator
const Tab = createBottomTabNavigator();

// MainTabs component for the bottom tab navigation
function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size}  />
          ),
        }} 
      />
      <Tab.Screen 
        name="Bookings" 
        component={Bookings} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="calendar" color={color} size={size} />
          ),
        }} 
      />
      <Tab.Screen 
        name="SS Plus" 
        component={SSPlus} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="plus" color={color} size={size} />
          ),
        }} 
      />
      <Tab.Screen 
        name="Rewards" 
        component={Rewards} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="gift" color={color} size={size} />
          ),
        }} 
      />
      <Tab.Screen 
        name="Account" 
        component={Account} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }} 
      />
    </Tab.Navigator>
  );
}

// Main App component
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Form" component={Form} options={{ headerShown: false }} />
        <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
        <Stack.Screen name="Forgott" component={Forgott} options={{ headerShown: false }} />
        <Stack.Screen name="Forgott1" component={Forgott1} options={{ headerShown: false }} />
        <Stack.Screen name="Forgott2" component={Forgott2} options={{ headerShown: false }} />
        <Stack.Screen name="ServiceDetails" component={ServiceDetails} options={{ headerShown: false }} />
        <Stack.Screen name="Account" component={AccountScreen} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="Booking" component={BookingScreen} />
        <Stack.Screen name="Help" component={HelpScreen} />
        <Stack.Screen name="NativeDevice" component={NativeDeviceScreen} />
        <Stack.Screen name="Wallet" component={Wallet} />
        <Stack.Screen name="PlusMembership" component={PlusMembershipScreen} />
        <Stack.Screen name="Rating" component={RatingScreen} />
        <Stack.Screen name="ManageAddresses" component={ManageAddressesScreen} />
        <Stack.Screen name="ManagePayment" component={ManagePaymentScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="ScheduledBookings" component={ScheduledBookingsScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="HelpAccount" component={HelpAccountScreen} />
        <Stack.Screen name="SafetyMeasures" component={SafetyMeasuresScreen} />
        <Stack.Screen name="Warranty" component={WarrantyScreen} />
        <Stack.Screen name="GettingStarted" component={GettingStartedScreen} />
        <Stack.Screen name="ChangePhoneNumber" component={ChangePhoneNumberScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
