import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Acrepair from '../assets/Acrepair.png';
import service from '../assets/service.png';
import gas from '../assets/gas.jpg';
import install from '../assets/install.jpg';
import Offer from '../assets/Offer.png';
// import Image2 from "../assets/BackArrow.png";
import Ionicons from 'react-native-vector-icons/Ionicons';

const ServiceDetails = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* <TouchableOpacity style={styles.backArrowContainer} onPress={() => navigation.navigate("Home")}>
        <Image source={Image2} style={styles.backArrow} />
      </TouchableOpacity> */}
       <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={28} color="black" />
      </TouchableOpacity>

      <Image source={Acrepair} style={styles.image} />
      <View style={styles.header}>
        <Text style={styles.headerText}>AC Service & Repair</Text>
        <Text style={styles.ratingText}>
          {'\u2605'} 4.5 (5.1 M bookings)
        </Text>
      </View>
      
      <View style={styles.squareRow}>
        <TouchableOpacity
          style={styles.square}
          onPress={() => navigation.navigate('')}>
          <Image source={service} style={styles.squareImage} />
          <Text style={styles.squareText}>Service</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.square}
          onPress={() => navigation.navigate('')}>
          <Image source={gas} style={styles.squareImage} />
          <Text style={styles.squareText}>Repair & Gas Refill</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.square}
          onPress={() => navigation.navigate('')}>
          <Image source={install} style={styles.squareImage} />
          <Text style={styles.squareText}>Install & Uninstall</Text>
        </TouchableOpacity>
      </View>

      <Image source={Offer} style={styles.offerImage} />
      <Text style={styles.offerText}>Service</Text>

      <Text style={styles.warrantyText}>30-DAY WARRANTY</Text>
      <Text style={styles.ratingText1}>
        {'\u2605'} 4.5 (84.2k reviews)
      </Text>
      <Text style={styles.prize}>
        Starts at ₹1000.
      </Text>
      <Text style={styles.point}>
        AC service with advanced foam-jet technology.
      </Text>
      <Text style={styles.offerText}>Repair & Gas Refill</Text>

      <Text style={styles.warrantyText}>30-DAY WARRANTY</Text>
      <Text style={styles.ratingText1}>
        {'\u2605'} 4.9 (80.2k reviews)
      </Text>
      <Text style={styles.prize}>
        Starts at ₹1500.
      </Text>
      <Text style={styles.point}>
        AC service with advanced foam-jet technology.
      </Text>
      
      <Text style={styles.offerText}>Installing</Text>

<Text style={styles.warrantyText}>30-DAY WARRANTY</Text>
<Text style={styles.ratingText1}>
  {'\u2605'} 4.3 (70.2k reviews)
</Text>
<Text style={styles.prize}>
  Starts at ₹900.
</Text>
<Text style={styles.point}>
  AC service with advanced foam-jet technology.
</Text>

<Text style={styles.offerText}>Uninstalling</Text>

<Text style={styles.warrantyText}>30-DAY WARRANTY</Text>
<Text style={styles.ratingText1}>
  {'\u2605'} 4.7 (79.2k reviews)
</Text>
<Text style={styles.prize}>
  Starts at ₹700.
</Text>
<Text style={styles.point}>
  AC service with advanced foam-jet technology.
</Text>

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
    
    justifyContent:'flex-start',
    right:160,
  },

  backArrowContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
  backArrow: {
    height: 30,
    width: 30,
    tintColor: '#dff516',
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
  squareRow: {
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
});

export default ServiceDetails;
