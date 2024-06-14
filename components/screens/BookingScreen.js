import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import Ionicons from react-native-vector-icons

const BookingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.header}>Bookings & plans</Text>
        <TouchableOpacity style={styles.helpButton} onPress={() => navigation.navigate('HelpScreen')}>
          <Text style={styles.helpText}>Help</Text>
        </TouchableOpacity>
      </View>
      {/* Additional content of your MainScreen */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50, // Adjust top padding for header content
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'flex-start', // Adjusted justify content to start
  },
  header: {
    fontSize: 20,
    marginLeft: 5,
    color:'red', // Adjusted margin to reduce space between arrow and text
  },
  helpButton: {
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    padding: 10,
    marginLeft: 'auto', // Pushes help button to the rightmost
  },
  helpText: {
    color: '#6200ea',
    fontSize: 16,
  },
  backButton: {
    padding: 10,
  },
});

export default BookingScreen;