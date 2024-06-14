import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Reward from '../assets/rewardicon.png';

const Rewards = () => {
  return (
    <View style={styles.container}>
    
        <Text style={styles.heading} numberOfLines={2}>Great Job! You're a good person, so you deserve a reward</Text>
        <Image source={Reward} style={styles.sub} />
        
        <Text style={styles.heading1} numberOfLines={3}>
  By the way, this is one of the many 
  rewards you can earn. Just be good, and you'll be rewarded
</Text>

        <TouchableOpacity style={styles.loginButton} onPress={() => {}}>
          <Text style={styles.loginButtonText}>Learn More</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily:'fantasy',
    color: 'black',
    bottom: 110,
    textAlign: 'center',
    paddingHorizontal: 20, // Add horizontal padding to prevent text from touching the edges
    lineHeight: 24, 
  },
  heading1: {
    fontSize: 18,
    top: 0,
    color: '#9c0b17',
    textAlign: 'center',
    paddingHorizontal: 20, // Add horizontal padding to prevent text from touching the edges
    lineHeight: 24, // Set the line height to control the spacing between lines
  },
  
  sub: {
    height: '30%',
    width: '50%',
    bottom: 50,
  },
  loginButton: {
    width: '60%',
    height: 50,
    backgroundColor: '#cb1ed4',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 0,
    marginTop: -10,
    top: 60,
  },
  loginButtonText: {
    fontSize: 18,
    color: 'white',
  },
});

export default Rewards;
