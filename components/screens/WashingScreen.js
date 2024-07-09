import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import WashingMachineRepair from '../assets/washingMachineRepair.jpg';
import WashingRepair from '../assets/WashingRepair.jpg';
import WashingInstallation from '../assets/WashingInstallation.jpg';
import WashingMachineUnstallation from '../assets/WashingUninstallation.jpg';
import Offer from '../assets/Offer.png';
import Ionicons from 'react-native-vector-icons/Ionicons';

const WashingScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={28} color="black" />
      </TouchableOpacity>

      <Image source={WashingMachineRepair} style={styles.image} />
      <View style={styles.header}>
        <Text style={styles.headerText}>Washing Machine Repair</Text>
        <Text style={styles.ratingText}>
          {'\u2605'} 4.5 (5.1 M bookings)
        </Text>
      </View>
      
      <View style={styles.sectionsContainer}>
        {/* TV Repair Section */}
        <TouchableOpacity
          style={styles.square}
          onPress={() => navigation.navigate('ServiceDetails', { serviceName: 'Repair' })}>
          <Image source={WashingRepair} style={styles.squareImage} />
          <Text style={styles.squareText}>Repair</Text>
        </TouchableOpacity>

        {/* Installation Section */}
        <TouchableOpacity
          style={styles.square}
          onPress={() => navigation.navigate('ServiceDetails', { serviceName: 'Installation' })}>
          <Image source={WashingInstallation} style={styles.squareImage} />
          <Text style={styles.squareText}>Installation</Text>
        </TouchableOpacity>

        {/* Uninstallation Section */}
        <TouchableOpacity
          style={styles.square}
          onPress={() => navigation.navigate('ServiceDetails', { serviceName: 'Uninstallation' })}>
          <Image source={WashingMachineUnstallation} style={styles.squareImage} />
          <Text style={styles.squareText}>Uninstallation</Text>
        </TouchableOpacity>
      </View>

      <Image source={Offer} style={styles.offerImage} />
      <Text style={[styles.offerText, styles.heading]}>Repair</Text>

      {/* Additional Details for Repair */}
      <View style={styles.serviceDetails}>
      <Text style={styles.offerText}>Top load(fully automatic)checkup</Text>
        <Text style={styles.warrantyText}>30-DAY WARRANTY</Text>
        <Text style={styles.ratingText1}>
          {'\u2605'} 4.5 (84.2k reviews)
        </Text>
        <Text style={styles.prize}>
          Starts at ₹1000.
        </Text>
        <Text style={styles.point}>
          Washing Machine repair with advanced technology.
        </Text>
      </View>
      <View style={styles.serviceDetails}>
      <Text style={styles.offerText}>Semi - automatic checkup</Text>
        <Text style={styles.warrantyText}>30-DAY WARRANTY</Text>
        <Text style={styles.ratingText1}>
          {'\u2605'} 4.5 (84.2k reviews)
        </Text>
        <Text style={styles.prize}>
          Starts at ₹1000.
        </Text>
        <Text style={styles.point}>
          Washing Machine repair with advanced technology.
        </Text>
      </View>

      {/* Additional Details for Installation */}
      <View style={styles.serviceDetails}>
        <Text style={[styles.offerText, styles.heading]}>Installation</Text>
        <Text style={styles.offerText}>Washing Machine Installation</Text>
        <Text style={styles.warrantyText}>30-DAY WARRANTY</Text>
        <Text style={styles.ratingText1}>
          {'\u2605'} 4.9 (80.2k reviews)
        </Text>
        <Text style={styles.prize}>
          Starts at ₹1500.
        </Text>
      </View>

      {/* Additional Details for Uninstallation */}
      <View style={styles.serviceDetails}>
        <Text style={[styles.offerText, styles.heading]}>Uninstallation</Text>
        <Text style={styles.offerText}>Washing Machine Uninstallation</Text>
        <Text style={styles.warrantyText}>30-DAY WARRANTY</Text>
        <Text style={styles.ratingText1}>
          {'\u2605'} 4.9 (80.2k reviews)
        </Text>
        <Text style={styles.prize}>
          Starts at ₹1500.
        </Text>
      </View>

      <TouchableOpacity style={styles.bookButton} onPress={() => navigation.navigate('Scheduler')}>
        <Text style={styles.bookbuttonText}>Book</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingBottom: 20,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
  image: {
    width: '100%',
    height: 180,
    marginBottom: 45,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'blue',
  },
  ratingText: {
    fontSize: 18,
    color: 'black',
  },
  sectionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    width: '100%',
  },
  square: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  squareImage: {
    width: 85,
    height: 65,
    marginBottom: 10,
  },
  squareText: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  offerImage: {
    width: '100%',
    height: 140,
    marginBottom: 20,
  },
  offerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  serviceDetails: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  warrantyText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
    marginVertical: 10,
  },
  ratingText1: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    marginBottom: 10,
  },
  prize: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  point: {
    fontSize: 18,
    color: '#ed2fd1',
    textAlign: 'center',
    marginBottom: 20,
  },
  bookButton: {
    width: '80%',
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  bookbuttonText: {
    color: 'white',
    fontSize: 18,
  },
  heading: {
    marginLeft: -190,  // Adjust this value to increase or decrease the margin
    marginBottom: 20, // Optional: Add bottom margin for separation
    fontSize: 24,    // Optional: Adjust font size if needed
    fontWeight: 'bold', // Optional: Adjust font weight if needed
    color: 'black', // Optional: Adjust color if needed
  },
});

export default WashingScreen;
