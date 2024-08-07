import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet } from 'react-native';

import Homeicon from './components/assets/Homeicon.png';
import bookingicon from './components/assets/bookingicon.png';
import ssicon from './components/assets/ssicon.png';
import rewardsicon from './components/assets/rewardsicon.png';
import accounticon from './components/assets/accounticon.png';
import Welcome from './components/screens/Welcome';
import Login from './components/screens/Login';
import LoginTech from './components/screens/LoginTech';
import LoginAdmin from './components/screens/LoginAdmin';
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
import Accountscreen from './components/screens/Accountscreen';
import TvInstallScreen from './components/screens/TvInstallScreen';
import WashingScreen from './components/screens/WashingScreen';
import Bleach from './components/screens/Bleach';
import GettingStartedScreen from './components/screens/GettingStartedScreen';
import SafetyMeasuresScreen from './components/screens/SafetyMeasuresScreen';
import ChangePhoneNumberScreen from './components/screens/ChangePhoneNumberScreen';
import WarrantyScreen from './components/screens/WarrantyScreen';
import AC from './components/screens/AC';
import Chimneyservice from './components/screens/Chimneyservice';
import GastoveService from './components/screens/GastoveService';
import ACandAppliance from './components/screens/ACandAppliance';
import GeyserService from './components/screens/GeyserService';
import InverterService from './components/screens/InverterService';
import WaterPurifier from './components/screens/WaterPurifier';
import LaptopService from './components/screens/LaptopService';
import MicrowaveService from './components/screens/MicrowaveService';
import MixerService from './components/screens/MixerService';
import RefrigeratorService from './components/screens/RefrigeratorService';
import TVService from './components/screens/TVService';
import WashingMachineService from './components/screens/WashingMachineService';
import HomeRepair from './components/screens/HomeRepair';
import Electrician from './components/screens/Electrician';
import PlumberService from './components/screens/PlumberService';
import CarpenterService from './components/screens/CarpenterService';
import CleaningService from './components/screens/CleaningService';
import HomeCleaningService from './components/screens/HomeCleaningService';
import KitchenCleanigService from './components/screens/KitchenCleanigService';
import SofaCleaningService from './components/screens/SofaCleaningService';
import PestControlService from './components/screens/PestControlService';
import Cockroachcontrol from './components/screens/Cockroachcontrol';
import TermiteControl from './components/screens/TermiteControl';
import BedBugsControl from './components/screens/BedBugsControl';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs({ route }) {
  const { email } = route.params || {};

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
        initialParams={{ email }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="LoginTech" component={LoginTech} options={{ headerShown: false }} />
        <Stack.Screen name="LoginAdmin" component={LoginAdmin} options={{ headerShown: false }} />
        <Stack.Screen name="Form" component={Form} options={{ headerShown: false }} />
        <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
        <Stack.Screen name="Forgott" component={Forgott} options={{ headerShown: false }} />
        <Stack.Screen name="Forgott1" component={Forgott1} options={{ headerShown: false }} />
        <Stack.Screen name="Forgott2" component={Forgott2} options={{ headerShown: false }} />
        <Stack.Screen name="ServiceDetails" component={ServiceDetails} options={{ headerShown: false }} />
        <Stack.Screen name="HelpScreen" component={HelpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }} />
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
        <Stack.Screen name="Accountscreen" component={Accountscreen} options={{ headerShown: false }} />
        <Stack.Screen name="TvInstallScreen" component={TvInstallScreen} options={{ headerShown: false }} />
        <Stack.Screen name="WashingScreen" component={WashingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Bleach" component={Bleach} options={{ headerShown: false }} />
        <Stack.Screen name="GettingStartedScreen" component={GettingStartedScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SafetyMeasuresScreen" component={SafetyMeasuresScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ChangePhoneNumberScreen" component={ChangePhoneNumberScreen} options={{ headerShown: false }} />
        <Stack.Screen name="WarrantyScreen" component={WarrantyScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ACandAppliance" component={ACandAppliance} options={{ headerShown: false }} />
        <Stack.Screen name="AC" component={AC} options={{ headerShown: false }} />
        <Stack.Screen name="Chimneyservice" component={Chimneyservice} options={{ headerShown: false }} />
        <Stack.Screen name="GastoveService" component={GastoveService} options={{ headerShown: false }} />
        <Stack.Screen name="GeyserService" component={GeyserService} options={{ headerShown: false }} />
        <Stack.Screen name="InverterService" component={InverterService} options={{ headerShown: false }} />
        <Stack.Screen name="WaterPurifier" component={WaterPurifier} options={{ headerShown: false }} />
        <Stack.Screen name="LaptopService" component={LaptopService} options={{ headerShown: false }} />
        <Stack.Screen name="MicrowaveService" component={MicrowaveService} options={{ headerShown: false }} />
        <Stack.Screen name="MixerService" component={MixerService} options={{ headerShown: false }} />
        <Stack.Screen name="RefrigeratorService" component={RefrigeratorService} options={{ headerShown: false }} />
        <Stack.Screen name="TVService" component={TVService} options={{ headerShown: false }} />
        <Stack.Screen name="WashingMachineService" component={WashingMachineService} options={{ headerShown: false }} />
        <Stack.Screen name="HomeRepair" component={HomeRepair} options={{ headerShown: false }} />
        <Stack.Screen name="Electrician" component={Electrician} options={{ headerShown: false }} />
        <Stack.Screen name="PlumberService" component={PlumberService} options={{ headerShown: false }} />
        <Stack.Screen name="CarpenterService" component={CarpenterService} options={{ headerShown: false }} />
        <Stack.Screen name="CleaningService" component={CleaningService} options={{ headerShown: false }} />
        <Stack.Screen name="HomeCleaningService" component={HomeCleaningService} options={{ headerShown: false }} />
        <Stack.Screen name="KitchenCleanigService" component={KitchenCleanigService} options={{ headerShown: false }} />
        <Stack.Screen name="SofaCleaningService" component={SofaCleaningService} options={{ headerShown: false }} />
        <Stack.Screen name="PestControlService" component={PestControlService} options={{ headerShown: false }} />
        <Stack.Screen name="Cockroachcontrol" component={Cockroachcontrol} options={{ headerShown: false }} />
        <Stack.Screen name="TermiteControl" component={TermiteControl} options={{ headerShown: false }} />
        <Stack.Screen name="BedBugsControl" component={BedBugsControl} options={{ headerShown: false }} />
        
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
