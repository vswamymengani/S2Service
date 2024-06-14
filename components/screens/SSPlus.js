import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Assuming you want to use Ionicons for the back button
import sub from '../assets/sub.png';
const SSPlus = ({ navigation }) => {
  return (
    <View style={styles.container}>
      
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Image source={sub} style={styles.sub} />
        <Text style={styles.heading}>No Active Subscriptions</Text>
        <Text style={styles.heading1}>Looks like you have not purchased any subscription plan</Text>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  backButton: {
    padding: 10,
    justifyContent:'flex-end',
    bottom:170,
    right:160,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'blue',
    bottom:110,
  
  },
  heading1: {
    fontSize: 18,
    bottom: 100,
    color: 'red',
    textAlign: 'center',
    paddingHorizontal: 20, // Add horizontal padding to prevent text from touching the edges
    lineHeight: 24,
    
  },
  sub:{
    height:'30%',
    width:'50%',
    bottom:140,
  }
});

export default SSPlus;
