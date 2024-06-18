// BookingScreen.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const BookingScreen = ({ navigation }) => {
  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleHelpPress = () => {
    navigation.navigate('Help'); // Navigate to HelpScreen
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.header}>Bookings & Plans</Text>
        <TouchableOpacity style={styles.helpButton} onPress={handleHelpPress}>
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
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingTop: 50,
  },
  backButton: {
    padding: 10,
  },
  header: {
    fontSize: 20,
    marginLeft: 10,
    fontWeight: 'bold',
    color: 'black',
  },
  helpButton: {
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginLeft: 'auto',
  },
  helpText: {
    fontSize: 16,
    color: '#6200ea',
  },
});

export default BookingScreen;
