import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Image1 from "../assets/Forgot1.png";
import Image2 from "../assets/chat.png";
import Image3 from "../assets/mail.png";
import Image4 from "../assets/HomeIndicator.png";

const Forgott = () => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Forgot Password ?</Text>
      <Image source={Image1} style={styles.image} />
      <Text style={styles.instructionText}>Where would you like to receive a Verification Code?</Text>

      <View style={styles.inputContainer}>
        <Image source={Image2} style={styles.icon} />
        <Text style={styles.inputLabel}>via SMS</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter phone number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
        />
      </View>
      <Text style={styles.or}>OR</Text>
       
      <View style={styles.inputContainer}>
        <Image source={Image3} style={styles.icon} />
        <Text style={styles.inputLabel}>via Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Forgott1')}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: "red",
    bottom:20,
  },
  image: {
    width: '70%',
    height: '40%',
    alignSelf: 'center',
    marginBottom: 0,
    bottom:25,
  },
  
  instructionText: {
    textAlign: 'center',
    marginBottom: 0,
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    bottom:20,
  },
  or: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#3F1175',
    borderRadius: 20,
    marginBottom: 10,
    padding: 25,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  inputLabel: {
    flex: 1,
    fontSize: 16,
  },
  input: {
    flex: 2,
    borderBottomWidth: 1,
    borderColor: '#3F1175',
    paddingVertical: 5,
  },
  button: {
    backgroundColor: '#3F1175',
    padding: 20,
    borderRadius: 40,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Forgott;
