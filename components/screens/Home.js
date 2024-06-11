import React, { useState } from 'react';

import {View,Text,Image,StyleSheet, ScrollView, TouchableOpacity,TextInput} from 'react-native';
import Image20 from '../assets/welcomeBox.png';
import TV from '../assets/TV.png';
import AC from '../assets/AC.png';
import Face from '../assets/Face.png';
import Head from '../assets/Head.png';
import Hair from '../assets/Hair.png';
import Electrical from '../assets/Electrical.png';
import Clean from '../assets/Clean.png';
import Repair from '../assets/Repair.png';
import Paint from '../assets/Paint.png';
import Pest from '../assets/Pest.png';
import Salonewomen from '../assets/Salonewomen.png';
import Spawomen from '../assets/Spawomen.png';
import HairSkin from '../assets/HairSkin.png';
import Salonemen from '../assets/Salonemen.png';
import Massagemen from '../assets/Massagemen.png';

const allServices = [
  { name: 'AC Repair', image: AC },
  { name: 'TV Installing', image: TV },
  { name: 'Bleach & Detan', image: Face },
  { name: 'Head Massage', image: Head },
  { name: 'Hair Care', image: Hair },
  { name: 'Electrical Plumbing', image: Electrical },
  { name: 'Cleaning', image: Clean },
  { name: 'Home Repairs', image: Repair },
  { name: 'Home Painting', image: Paint },
  { name: 'Pest Control', image: Pest },
  { name: 'Salon For Women', image: Salonewomen },
  { name: 'Spa For Women', image: Spawomen },
  { name: 'Hair & Skin', image: HairSkin },
  { name: 'Salon For Men', image: Salonemen },
  { name: 'Massage For Men', image: Massagemen },
];


const Homescreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredServices, setFilteredServices] = useState(allServices);

  const handleSearch = () => {
    const filtered = allServices.filter(service =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredServices(filtered);
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Search bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search For Services"
        />
      </View>

      <Text style={styles.headingText1}>
        {'\u2605'} Save 15% on Every Service
      </Text>
      <View style={styles.welcomeBox}>
        <Image source={Image20} style={styles.Image} />
      </View>

      <Text style={styles.headingText2}>Trending Services</Text>
      <View style={styles.squareRow}>
        <TouchableOpacity
          style={styles.square}
          onPress={() => navigation.navigate('ServiceDetails')}>
          <Image source={AC} style={styles.squareImage} />
          <Text style={styles.loginButtonText}>AC Repair</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.square}
          onPress={() => navigation.navigate('')}>
          <Image source={TV} style={styles.squareImage} />
          <Text style={styles.loginButtonText}>TV Installing</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.square}
          onPress={() => navigation.navigate('')}>
          <Image source={Face} style={styles.squareImage} />
          <Text style={styles.loginButtonText}>Bleach & Detan</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.square}
          onPress={() => navigation.navigate('')}>
          <Image source={Head} style={styles.squareImage} />
          <Text style={styles.loginButtonText}>Head Massage</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.square}
          onPress={() => navigation.navigate('')}>
          <Image source={Hair} style={styles.squareImage} />
          <Text style={styles.loginButtonText}>Hair Care</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.headingText3}>Home Services</Text>
      <View style={styles.squareRow1}>
        <TouchableOpacity
          style={styles.square}
          onPress={() => navigation.navigate('')}>
          <Image source={Electrical} style={styles.squareImage} />
          <Text style={styles.loginButtonText}>Electrical Plumbing</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.square}
          onPress={() => navigation.navigate('')}>
          <Image source={Clean} style={styles.squareImage} />
          <Text style={styles.loginButtonText}>Cleaning</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.square}
          onPress={() => navigation.navigate('')}>
          <Image source={Repair} style={styles.squareImage} />
          <Text style={styles.loginButtonText}>Home Repairs</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.square}
          onPress={() => navigation.navigate('')}>
          <Image source={Paint} style={styles.squareImage} />
          <Text style={styles.loginButtonText}>Home Painting</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.square}
          onPress={() => navigation.navigate('')}>
          <Image source={Pest} style={styles.squareImage} />
          <Text style={styles.loginButtonText}>Pest Control</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.headingText4}>Personal Services</Text>
      <View style={styles.squareRow2}>
        <TouchableOpacity
          style={styles.square}
          onPress={() => navigation.navigate('')}>
          <Image source={Salonewomen} style={styles.squareImage} />
          <Text style={styles.loginButtonText}>Salon For Women</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.square}
          onPress={() => navigation.navigate('')}>
          <Image source={Spawomen} style={styles.squareImage} />
          <Text style={styles.loginButtonText}>Spa For Women</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.square}
          onPress={() => navigation.navigate('')}>
          <Image source={HairSkin} style={styles.squareImage} />
          <Text style={styles.loginButtonText}>Hair & Skin</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.square}
          onPress={() => navigation.navigate('')}>
          <Image source={Salonemen} style={styles.squareImage} />
          <Text style={styles.loginButtonText}>Salon For Men</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.square}
          onPress={() => navigation.navigate('')}>
          <Image source={Massagemen} style={styles.squareImage} />
          <Text style={styles.loginButtonText}>Massage For Men</Text>
        </TouchableOpacity>
      </View>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F4F6',
  },
  headingText1: {
    fontSize: 20,
    fontWeight: 'bold',
    top: 20,
    textAlign: 'center',
    left: -40,
    marginTop: 120,
    marginBottom: 20,
    color: 'blue',
  },
  searchContainer: {
    position: 'absolute',
    top: 50,
    left: 20,
    width: 350,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 40,
    marginTop: 20,
  },
  searchInput: {
    width: '100%',
    height: '100%',
    color: 'black',
    fontSize: 16,
    paddingHorizontal: 10,
  },
  welcomeBox: {
    marginLeft: 0,
    borderRadius: 12,
    borderWidth: 0,
    padding: 10,
    bottom: 80,
    marginBottom: 100,
    marginTop: 100,
  },
  headingText2: {
    fontSize: 23,
    fontWeight: 'bold',
    bottom: 150,
    right: 100,
    color: 'black',
  },
  headingText3: {
    fontSize: 23,
    fontWeight: 'bold',
    bottom: 80,
    right: 110,
    color: 'black',
  },
  headingText4: {
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 20,
    right: 110,
    color: 'black',
  },
  squareRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: 120,
    marginBottom: 20,
  },
  squareRow1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: 50,
  },
  squareRow2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: 0,
  },
  loginButtonText: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  },
  square: {
    width: 60,
    height: 80,
    marginHorizontal: 10,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  squareImage: {
    width: 60,
    height: 60,
  },
});

export default Homescreen;
