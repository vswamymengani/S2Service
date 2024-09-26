import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Image1 from "../assets/Forgot1.png";

const Forgott = () => {
  const navigation = useNavigation();
  const [inputValue, setInputValue] = useState('');

  const handleSendVerificationCode = async () => {
    try {
      const response = await axios.post('http://localhost:3000/sendVerificationCode', {
        identifier: inputValue,
      });

      if (response.data.success) {
        navigation.navigate('Forgott1');
      } else {
        Alert.alert('Error', response.data.message || 'Failed to send verification code');
      }
    } catch (error) {
      console.error('Error sending verification code:', error);
      Alert.alert('Error', 'Something went wrong. Please try again.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Reset Your Password</Text>
      <Image source={Image1} style={styles.image} />
      <Text style={styles.instructionText}>
        Please enter your registered phone number or email address. We will send you a verification code to reset your password.
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter phone number or email"
          value={inputValue}
          onChangeText={setInputValue}
          keyboardType="default"
        />
      </View>
      
      <TouchableOpacity style={styles.button} onPress={handleSendVerificationCode}>
        <Text style={styles.buttonText}>Send Verification Code</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F7F7F7',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  image: {
    width: '50%',
    height: undefined,
    aspectRatio: 1,
    alignSelf: 'center',
    marginBottom: 30,
  },
  instructionText: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 16,
    color: '#555',
    lineHeight: 22,
  },
  inputContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  input: {
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#3F1175',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default Forgott;
