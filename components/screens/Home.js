import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
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

const Home = ({ navigation }) => {
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
          value={searchQuery}
          onChangeText={text => {
            setSearchQuery(text);
            handleSearch();
          }}
        />
      </View>

      <Text style={styles.headingText1}>
        {'\u2605'} Save 15% on Every Service
      </Text>
      <View style={styles.welcomeBox}>
        <Image source={Image20} style={styles.Image} />
      </View>

      <Text style={styles.headingText2}>Trending Services</Text>
      <View style={styles.serviceContainer}>
        {filteredServices.map((service, index) => (
          <TouchableOpacity
            key={index}
            style={styles.square}
            onPress={() => navigation.navigate('ServiceDetails', { serviceName: service.name })}>
            <Image source={service.image} style={styles.squareImage} />
            <Text style={styles.loginButtonText}>{service.name}</Text>
          </TouchableOpacity>
          
        ))}
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
  serviceContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    bottom: 120,
    marginBottom: 20,
  },
  loginButtonText: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
  },
  square: {
    width: 100,
    height: 120,
    margin: 10,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',

    padding: 0,
 
  },
  squareImage: {
    width: 80,
    height: 80,
  },
});

export default Home;
