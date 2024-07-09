import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Accountscreen = ({ navigation,route  }) => {
  // const email = route.params.email;
  const navigateToChangePhoneNumber = () => {
    navigation.navigate('ChangePhoneNumberScreen'); // Navigate to ChangePhoneNumberScreen
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
      <ScrollView contentContainerStyle={styles.content}>
        <TouchableOpacity style={styles.item} onPress={navigateToChangePhoneNumber}>
          <Text style={styles.itemText}>I want to change my phone number</Text>
          <Ionicons name="chevron-forward" size={24} color="black" style={styles.rightIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => {/* Handle navigation or action */}}>
          <Text style={styles.itemText}>Where can I check my saved addresses?</Text>
          <Ionicons name="chevron-forward" size={24} color="black" style={styles.rightIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => {/* Handle navigation or action */}}>
          <Text style={styles.itemText}>I want to change my email address</Text>
          <Ionicons name="chevron-forward" size={24} color="black" style={styles.rightIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => {/* Handle navigation or action */}}>
          <Text style={styles.itemText}>Where can I see my saved payment details?</Text>
          <Ionicons name="chevron-forward" size={24} color="black" style={styles.rightIcon} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
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
    flex: 1,
    color: 'black', // Ensure text color is set to black
  },
  rightIcon: {
    marginLeft: 'auto',
  },
});

export default Accountscreen;