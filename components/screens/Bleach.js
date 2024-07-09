import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import bleachdetan from '../assets/bleachdetan.jpg';
import bleach from '../assets/bleach.jpg';
import bestseller from '../assets/bestseller.jpg';
import threadingface from '../assets/threadingface.jpg';
import Offer from '../assets/Offer.png';
import waxing from '../assets/waxing.jpg';
import manicure from '../assets/manicure.jpg';
import pedicure from '../assets/pedicure.jpg';
import facialandcleanup from '../assets/facialandcleanup.jpg';
import haircare from '../assets/haircare.jpg';
import makeyourpackage from '../assets/makeyourpackage.jpg'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Bleach = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={28} color="black" />
      </TouchableOpacity>

      <Image source={bleachdetan} style={styles.image} />
      <View style={styles.header}>
        <Text style={styles.headerText}>Salon</Text>
        <Text style={styles.ratingText}>
          {'\u2605'} 4.5 (5.1 M bookings)
        </Text>
      </View>
      
      <View style={styles.sectionsContainer}>
        {/* First Row */}
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.square}
            onPress={() => navigation.navigate('ServiceDetails', { serviceName: 'Bleach & Detan' })}>
            <Image source={bleach} style={styles.squareImage} />
            <Text style={styles.squareText}>Bleach</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.square}
            onPress={() => navigation.navigate('ServiceDetails', { serviceName: 'Bestseller' })}>
            <Image source={bestseller} style={styles.squareImage} />
            <Text style={styles.squareText}>Bestseller</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.square}
            onPress={() => navigation.navigate('ServiceDetails', { serviceName: 'Make your Package' })}>
            <Image source={makeyourpackage} style={styles.squareImage} />
            <Text style={styles.squareText}>Make your Package</Text>
          </TouchableOpacity>
        </View>

        {/* Second Row */}
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.square}
            onPress={() => navigation.navigate('ServiceDetails', { serviceName: 'Waxing' })}>
            <Image source={waxing} style={styles.squareImage} />
            <Text style={styles.squareText}>Waxing</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.square}
            onPress={() => navigation.navigate('ServiceDetails', { serviceName: 'Pedicure' })}>
            <Image source={pedicure} style={styles.squareImage} />
            <Text style={styles.squareText}>Pedicure</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.square}
            onPress={() => navigation.navigate('ServiceDetails', { serviceName: 'Manicure' })}>
            <Image source={manicure} style={styles.squareImage} />
            <Text style={styles.squareText}>Manicure</Text>
          </TouchableOpacity>
        </View>

        {/* Third Row */}
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.square}
            onPress={() => navigation.navigate('ServiceDetails', { serviceName: 'Facial & Cleanup' })}>
            <Image source={facialandcleanup} style={styles.squareImage} />
            <Text style={styles.squareText}>Facial & Cleanup</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.square}
            onPress={() => navigation.navigate('ServiceDetails', { serviceName: 'Hair Care' })}>
            <Image source={haircare} style={styles.squareImage} />
            <Text style={styles.squareText}>Hair Care</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.square}
            onPress={() => navigation.navigate('ServiceDetails', { serviceName: 'Threading & Face waxing' })}>
            <Image source={threadingface} style={styles.squareImage} />
            <Text style={styles.squareText}>Threading & Face waxing</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Image source={Offer} style={styles.offerImage} />
      <Text style={[styles.offerText, styles.heading]}>Bleach & Detan</Text>
      {/* Additional Details for Bleach & Detan */}
      <View style={styles.serviceDetails}>
        <Text style={styles.offerText}>Detan</Text>
        <Text style={styles.warrantyText}>30-DAY WARRANTY</Text>
        <Text style={styles.ratingText1}>
          {'\u2605'} 4.5 (84.2k reviews)
        </Text>
        <Text style={styles.prize}>
          Starts at ₹1000.
        </Text>
        <Text style={styles.point}>
          RAAGA detan pack infused with milk, honey, and fruit extracts to remove tan
        </Text>
      </View>
      <View style={styles.serviceDetails}>
        <Text style={styles.offerText}>Bleach</Text>
        <Text style={styles.warrantyText}>30-DAY WARRANTY</Text>
        <Text style={styles.ratingText1}>
          {'\u2605'} 4.5 (84.2k reviews)
        </Text>
        <Text style={styles.prize}>
          Starts at ₹1000.
        </Text>
        <Text style={styles.point}>
         Oilivia bleach to remove dark sports, tan,pigmentation, blemishes..
        </Text>
      </View>

      {/* Additional Details for Installation */}
      <View style={styles.serviceDetails}>
        <Text style={[styles.offerText, styles.heading]}>Waxing</Text>
        <Text style={styles.offerText}>Full arms + Full legs + underarms waxing</Text>
        <Text style={styles.warrantyText}>30-DAY WARRANTY</Text>
        <Text style={styles.ratingText1}>
          {'\u2605'} 4.9 (80.2k reviews)
        </Text>
        <Text style={styles.prize}>
          Starts at ₹1500.
        </Text>
        <Text style={styles.point}>
       Full arms (including underarms) (chocklate roll-on)+Full Legs chocklate roll-on
        </Text>
        
        <Text style={styles.offerText}>Full arms + underarms waxing</Text>
        <Text style={styles.warrantyText}>30-DAY WARRANTY</Text>
        <Text style={styles.ratingText1}>
          {'\u2605'} 4.3 (70.2k reviews)
        </Text>
        <Text style={styles.prize}>
          Starts at ₹900.
        </Text>

        <Text style={styles.point}>
        
        </Text>

        
        <Text style={styles.point}>
          
        </Text><Text style={styles.offerText}>Complete honey waxing</Text>
        <Text style={styles.warrantyText}>30-DAY WARRANTY</Text>
        <Text style={styles.ratingText1}>
          {'\u2605'} 4.7 (79.2k reviews)
        </Text>
        <Text style={styles.prize}>
          Starts at ₹700.
        </Text>
        <Text style={styles.point}>
         waxing: Full arms (including Underarms), Full legs(No bikini and no brazilian).
        </Text>
        <Text style={styles.point}>
         Facial hair removal: Threading: Eyebrow, Threading: Upper lip
        </Text>
        <Text style={styles.offerText}>Wax & glow</Text>
        <Text style={styles.warrantyText}>30-DAY WARRANTY</Text>
        <Text style={styles.ratingText1}>
          {'\u2605'} 4.7 (79.2k reviews)
        </Text>
        <Text style={styles.prize}>
          Starts at ₹700.
          
        </Text>

        <Text style={styles.point}>
        Waxing:Full arm
        </Text>
        <Text style={styles.offerText}>Wax & hair care</Text>
        <Text style={styles.warrantyText}>30-DAY WARRANTY</Text>
        <Text style={styles.ratingText1}>
          {'\u2605'} 4.7 (79.2k reviews)
        </Text>
        <Text style={styles.prize}>
          Starts at ₹700.
        </Text>
        <Text style={styles.point}>
          .Waxing: Full arm-Chocklate Roll on, Full legs-Chocklate Roll on
        </Text>

      </View>

      {/* Additional Details for Uninstallation */}
      <View style={styles.serviceDetails}>
        <Text style={[styles.offerText, styles.heading]}>Make your Package</Text>
        <Text style={styles.offerText}>Make your own package-roll on special</Text>
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
    marginBottom: 15,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
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
    width: '100%',
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
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
    marginBottom: 5,
  },
  squareText: {
    fontSize: 14,
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
    fontSize: 24,
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
    marginVertical: 5,
  },
  ratingText1: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    marginBottom: 5,
  },
  prize: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  point: {
    fontSize: 18,
    color: '#ed2fd1',
    textAlign: 'center',
    marginBottom: 10,
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
    marginBottom: 10,
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Bleach;
