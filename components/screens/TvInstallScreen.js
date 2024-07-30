import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import TelevisionRepair from '../assets/TelevisionRepair.jpg';
import repair1 from '../assets/repair1.jpg';
import Tvinstallation from '../assets/Tvinstallation.jpg';
import TvUnstallation from '../assets/TvUnstallation.jpg';
import Offer from '../assets/Offer.png';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TvInstallScreen = ({ navigation }) => { 
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={28} color="black" />
      </TouchableOpacity>

      <Image source={TelevisionRepair} style={styles.image} />
      <View style={styles.header}>
        <Text style={styles.headerText}>Television Repair</Text>
        <Text style={styles.ratingText}>
          {'\u2605'} 4.5 (5.1 M bookings)
        </Text>
      </View>
      
      <View style={styles.sectionsContainer}>
        {/* TV Repair Section */}
        <TouchableOpacity
          style={styles.square}
          onPress={() => navigation.navigate('ServiceDetails', { serviceName: 'Repair' })}>
          <Image source={repair1} style={styles.squareImage} />
          <Text style={styles.squareText}>Repair</Text>
        </TouchableOpacity>

        {/* Installation Section */}
        <TouchableOpacity
          style={styles.square}
          onPress={() => navigation.navigate('ServiceDetails', { serviceName: 'Installation' })}>
          <Image source={Tvinstallation} style={styles.squareImage} />
          <Text style={styles.squareText}>Installation</Text>
        </TouchableOpacity>

        {/* Uninstallation Section */} 
        <TouchableOpacity
          style={styles.square}
          onPress={() => navigation.navigate('ServiceDetails', { serviceName: 'Uninstallation' })}>
          <Image source={TvUnstallation} style={styles.squareImage} />
          <Text style={styles.squareText}>Uninstallation</Text>
        </TouchableOpacity>
      </View>

      <Image source={Offer} style={styles.offerImage} />
      <Text style={[styles.offerText, styles.heading]}>Repair</Text>

      {/* Additional Details for Repair */}
      <View style={styles.serviceDetails}>
      <Text style={styles.offerText}>TV Repair</Text>
        <Text style={styles.warrantyText}>30-DAY WARRANTY</Text>
        <Text style={styles.ratingText1}>
          {'\u2605'} 4.5 (84.2k reviews)
        </Text>
        <Text style={styles.prize}>
          Starts at ₹1000.
        </Text>
        <Text style={styles.point}>
          TV repair with advanced technology.
        </Text>
      </View>

      {/* Additional Details for Installation */}
      <View style={styles.serviceDetails}>
        <Text style={[styles.offerText, styles.heading]}>Installation</Text>
        <Text style={styles.offerText}>Installation - Wall Mount 24" - 32"</Text>
        <Text style={styles.warrantyText}>30-DAY WARRANTY</Text>
        <Text style={styles.ratingText1}>
          {'\u2605'} 4.9 (80.2k reviews)
        </Text>
        <Text style={styles.prize}>
          Starts at ₹1500.
        </Text>
        <Text style={styles.point}>
          Installation of TV sizes 24" - 32".
        </Text>
        
        <Text style={styles.offerText}>Installation - 32" - 43"</Text>
        <Text style={styles.warrantyText}>30-DAY WARRANTY</Text>
        <Text style={styles.ratingText1}>
          {'\u2605'} 4.3 (70.2k reviews)
        </Text>
        <Text style={styles.prize}>
          Starts at ₹900.
        </Text>
        <Text style={styles.point}>
          Installation of TV sizes 32" - 43".
        </Text>

        <Text style={styles.offerText}>Installation - 55" - 65"</Text>
        <Text style={styles.warrantyText}>30-DAY WARRANTY</Text>
        <Text style={styles.ratingText1}>
          {'\u2605'} 4.7 (79.2k reviews)
        </Text>
        <Text style={styles.prize}>
          Starts at ₹700.
        </Text>
        <Text style={styles.point}>
          Installation of TV sizes 55" - 65".
        </Text>
      </View>

      {/* Additional Details for Uninstallation */}
      <View style={styles.serviceDetails}>
        <Text style={[styles.offerText, styles.heading]}>Uninstallation</Text>
        <Text style={styles.offerText}>Uninstallation - Wall Mount 24" - 32"</Text>
        <Text style={styles.warrantyText}>30-DAY WARRANTY</Text>
        <Text style={styles.ratingText1}>
          {'\u2605'} 4.9 (80.2k reviews)
        </Text>
        <Text style={styles.prize}>
          Starts at ₹1500.
        </Text>
        <Text style={styles.point}>
          Uninstallation of TV sizes 24" - 32".
        </Text>
        
        <Text style={styles.offerText}>Uninstallation - 32" - 43"</Text>
        <Text style={styles.warrantyText}>30-DAY WARRANTY</Text>
        <Text style={styles.ratingText1}>
          {'\u2605'} 4.3 (70.2k reviews)
        </Text>
        <Text style={styles.prize}>
          Starts at ₹900.
        </Text>
        <Text style={styles.point}>
          Uninstallation of TV sizes 32" - 43".
        </Text>

        <Text style={styles.offerText}>Uninstallation - 55" - 65"</Text>
        <Text style={styles.warrantyText}>30-DAY WARRANTY</Text>
        <Text style={styles.ratingText1}>
          {'\u2605'} 4.7 (79.2k reviews)
        </Text>
        <Text style={styles.prize}>
          Starts at ₹700.
        </Text>
        <Text style={styles.point}>
          Uninstallation of TV sizes 55" - 65".
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

export default TvInstallScreen;
