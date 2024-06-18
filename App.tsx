import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';


import Homeicon from './components/assets/Homeicon.png';
import bookingicon from './components/assets/bookingicon.png';
import ssicon from './components/assets/ssicon.png';
import rewardsicon from './components/assets/rewardsicon.png';
import accounticon from './components/assets/accounticon.png';
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
import HelpScreen from './components/screens/HelpScreen';
import EditProfile from './components/screens/EditProfile';
import HelpAccountScreen from './components/screens/HelpAccountScreen ';
import BookingScreen from './components/screens/BookingScreen';
import Scheduler from './components/screens/Scheduler';
import PaymentSummary from './components/screens/PaymentSummary';
import PaymentMethod from './components/screens/PaymentMethod';
import AboutScreen from './components/screens/AboutScreen';
import GettingStarted from './components/screens/GettingStarted';
import ManageAddress from './components/screens/ManageAddress';
import ManagePayment from './components/screens/ManagePayment';
import NativeDevice from './components/screens/NativeDevice';
import PlusMembershipScreen from './components/screens/PlusMembershipScreen';
import RatingScreen from './components/screens/RatingScreen';
//import WarrantyScreen from './components/screens/WarrantyScreen';


// Create Stack Navigator
const Stack = createNativeStackNavigator();
const onSelect = (country: any) => {
  console.log(country);
};

// Create Tab Navigator
const Tab = createBottomTabNavigator();

// MainTabs component for the bottom tab navigation
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
          height: 20,
          width: 70,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={Homeicon} style={styles.Homeicon} />
          ),
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="Bookings"
        component={Bookings}
        options={{
         
          tabBarIcon: ({ color, size }) => (
            <Image source={bookingicon} style={styles.Homeicon} />
            ),
          tabBarLabel: 'Bookings',
        }}
      />
      <Tab.Screen
        name="My Subscriptions"
        component={SSPlus}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={ssicon} style={styles.Homeicon} />
          ),
          tabBarLabel: 'SS Plus',
        }}
      />
      <Tab.Screen
        name="Rewards"
        component={Rewards}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={rewardsicon} style={styles.Homeicon} />
          ),
          tabBarLabel: 'Rewards',
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={accounticon} style={styles.Homeicon} />
          ),
          tabBarLabel: 'Account',
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
        <Stack.Screen name="HelpScreen" component={HelpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }} />
        <Stack.Screen name="HelpAccountScreen" component={HelpAccountScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Scheduler" component={Scheduler} options={{ headerShown: false }} />
        <Stack.Screen name="PaymentSummary" component={PaymentSummary} options={{ headerShown: false }} />
        <Stack.Screen name="PaymentMethod" component={PaymentMethod} options={{ headerShown: false }} />
        <Stack.Screen name="AboutScreen" component={AboutScreen} options={{ headerShown: false }} />
        <Stack.Screen name="GettingStarted" component={GettingStarted} options={{ headerShown: false }} />
        <Stack.Screen name="ManageAddress" component={ManageAddress} options={{ headerShown: false }} />
        <Stack.Screen name="ManagePayment" component={ManagePayment} options={{ headerShown: false }} />
        <Stack.Screen name="NativeDevice" component={NativeDevice} options={{ headerShown: false }} />
        <Stack.Screen name="PlusMembershipScreen" component={PlusMembershipScreen} options={{ headerShown: false }} />
        <Stack.Screen name="RatingScreen" component={RatingScreen} options={{ headerShown: false }} />
        {/* <Stack.Screen name="WarrantyScreen" component={WarrantyScreen} options={{ headerShown: false }} />
         */}
        <Stack.Screen 
          name="BookingScreen" 
          component={BookingScreen} 
          options={({ navigation }) => ({
           
            headerShown: true,
          })}
        />
        <Stack.Screen 
          name="SSPlus" 
          component={SSPlus} 
          options={({ navigation }) => ({
           
            headerShown: true,
          })}
        />
        <Stack.Screen 
          name="Rewards" 
          component={Rewards} 
          options={({ navigation }) => ({
          
            headerShown: true,
          })}
        />
        <Stack.Screen 
          name="Account" 
          component={Account} 
          options={({ navigation }) => ({
        
            headerShown: true,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  Homeicon: {
    width: 26,
    height: 26,
  },
});

export default App;
