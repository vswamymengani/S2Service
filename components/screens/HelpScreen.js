import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; 

const HelpScreen = ({ navigation,route }) => {
  // const email = route.params.email;
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  // useEffect(() => {
  //   const fetchProfile = async () => {
  //     try {
  //       const response = await axios.get(`http://10.0.2.2:3000/profile?email=${email}`);
        
  //       console.log('API Response:', response.data); // Debug log

  //       if (response.data.success) {
  //         setProfile(response.data.profile);
  //       } else {
  //         console.error('API Error:', response.data.message);
  //       }
  //     } catch (error) {
  //       console.error('Error fetching user profile:', error);
  //     }
  //   };

  //   fetchProfile();
  // }, [email]);


  return (
    <View style={styles.container}>
      <Text style={styles.header}>How can we help you?</Text>
      <ScrollView contentContainerStyle={styles.content}>
        <HelpItem icon="person-outline" text="Account" onPress={() => navigateToScreen('Accountscreen')} />
        <HelpItem icon="gift-outline" text="Getting started with S2-SERVICES" onPress={() => navigateToScreen('GettingStarted')} />
        <HelpItem icon="card-outline" text="Payment & Credits" onPress={() => navigateToScreen('Payment')} />
        <HelpItem icon="medal-outline" text="S2-SERVICES Plus Membership" onPress={() => navigateToScreen('PlusMembershipScreen')} />
        <HelpItem icon="shield-outline" text="S2-SERVICES Safety" onPress={() => navigateToScreen('SafetyMeasuresScreen')} />
        <HelpItem icon="shield-checkmark-outline" text="Warranty" onPress={() => navigateToScreen('WarrantyScreen')} />
      </ScrollView>
    </View>
  );
};

const HelpItem = ({ icon, text, onPress }) => (
  <TouchableOpacity style={styles.item} onPress={onPress}>
    <Ionicons name={icon} size={24} color="#333" />
    <Text style={styles.itemText}>{text}</Text>
    <MaterialIcons name="keyboard-arrow-right" size={24} color="#333" style={styles.rightIcon} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
    textAlign: 'center',
    color: '#333',
  },
  content: {
    paddingVertical: 8,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemText: {
    fontSize: 18,
    marginLeft: 16,
    flex: 1,
    color: '#333',
  },
  rightIcon: {
    marginLeft: 'auto',
  },
});

export default HelpScreen;