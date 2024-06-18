import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const PlusMembershipScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header with Back Button and Title */}
      

      {/* Content */}
      <View style={styles.content}>
        <Image
          source={require('../assets/sad.png')} // Ensure this image path is correct
          style={styles.image}
        />
        <Text style={styles.title}>No Active Subscriptions</Text>
        <Text style={styles.message}>
          Looks like you have not purchased any subscription plan.
        </Text>
      </View>
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
    backgroundColor: 'black',
    padding: 16,
  },
  backButton: {
    padding: 8,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 16,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
  },
});

export default PlusMembershipScreen;