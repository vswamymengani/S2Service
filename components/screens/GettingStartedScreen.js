import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const GettingStartedScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.sectionTitle}>About us</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.question}>What is S2-SERVICES?</Text>
      </TouchableOpacity>
      
        <Text style={styles.sectionTitle}>Bookings</Text>
   
      <TouchableOpacity style={styles.item}>
        <Text style={styles.question}>How to place a booking?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.question}>Can I re-book the same professional if I like their service?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.question}>How to book my preferred professional?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.question}>Do I have to order a minimum value of services before I can place the booking?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.question}>Does S2-SERVICES charge any cancellation fee?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#333',
  },
  icon: {
    marginRight: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 16,
    color: '#333',
  },
  question: {
    fontSize: 16,
    marginVertical: 8,
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    color: '#333',
  },
  rightIcon: {
    marginLeft: 'auto',
  },
});

export default GettingStartedScreen;