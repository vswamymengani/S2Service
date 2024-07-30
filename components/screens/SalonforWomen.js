// Import necessary modules from React Native and other libraries
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

// Functional component for Women's Salon & Spa
const SalonforWomen = () => {
  // State to hold services data, loading state, and error state
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Navigation hook to navigate between screens
  const navigation = useNavigation();

  // Function to fetch services data from backend API
  useEffect(() => {
    const fetchServices = async () => {
      try {
        // Replace with your actual backend API endpoint
        const response = await axios.get('http://10.0.2.2:3000/services');
        
        // Check if response is not ok (HTTP status not in 200-299 range)
        if (response.status < 200 || response.status >= 300) {
          throw new Error('Network response was not ok');
        }
        
        // Assuming your API returns an array of services
        setServices(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching services:', error);
        setError('Failed to fetch services. Please try again later.');
        setLoading(false);
      }
    };

    fetchServices();
  }, []); // Empty dependency array ensures this runs once on component mount

  // Function to handle press on a service item
  const handleServicePress = (screenName) => {
    navigation.navigate(screenName);
  };

  // Render loading indicator while fetching data
  if (loading) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  // Render error message if there's an error
  if (error) {
    return (
      <View style={[styles.container, styles.errorContainer]}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  // Render UI once data is fetched
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={28} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.closeButton}>
        <Ionicons name="close-outline" size={28} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>Women's Salon & Spa</Text>
      <View style={styles.servicesContainer}>
        {services.map(service => (
          <TouchableOpacity key={service.id} style={styles.serviceItem} onPress={() => handleServicePress(service.screen_name)}>
            <Image source={{ uri: service.image_url }} style={styles.serviceImage} />
            <Text style={styles.serviceText}>{service.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

// Styles for the component
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: screenHeight / 2,
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 20,
    zIndex: 1,
  },
  closeButton: {
    position: 'absolute',
    top: 0,
    right: 20,
    zIndex: 0,
    color: 'red',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  servicesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  serviceItem: {
    alignItems: 'center',
    margin: 10,
    width: 100,
  },
  serviceImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  serviceText: {
    textAlign: 'center',
  },
});

export default SalonforWomen;
