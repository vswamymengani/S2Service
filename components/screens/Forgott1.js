import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const Forgott1 = () => {
  const navigation = useNavigation();
  const [code, setCode] = useState(['', '', '', '']);

  const handleCodeChange = (index, value) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 3) {
      const nextField = index + 1;
      if (codeInputs[nextField]) {
        codeInputs[nextField].focus();
      }
    }
  };

  const codeInputs = [];

  const handleVerifyCode = async () => {
    try {
      const verificationCode = code.join('');
      const response = await axios.post('http://localhost:3000/verifyCode', {
        code: verificationCode,
      });

      if (response.data.success) {
        navigation.navigate('Forgott2');
      } else {
        Alert.alert('Error', response.data.message || 'Verification failed');
      }
    } catch (error) {
      console.error('Error verifying code:', error);
      Alert.alert('Error', 'Something went wrong. Please try again.');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.innerContainer}>
        <Text style={styles.headerTitle}>Reset Your Password</Text>
        <Text style={styles.verifyTitle}>Verify Code</Text>
        <Text style={styles.instructionText}>Enter the 4-digit code we sent to your email address</Text>

        <View style={styles.codeInputContainer}>
          {code.map((digit, index) => (
            <TextInput
              key={index}
              ref={(input) => (codeInputs[index] = input)}
              style={styles.codeInput}
              keyboardType="number-pad"
              maxLength={1}
              value={digit}
              onChangeText={(value) => handleCodeChange(index, value)}
            />
          ))}
        </View>

        <TouchableOpacity onPress={() => { /* Add resend code logic here */ }}>
          <Text style={styles.resendLink}>Resend Code</Text>
        </TouchableOpacity>

        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBar, styles.progressBarActive]} />
          <View style={[styles.progressBar, styles.progressBarInactive]} />
        </View>

        <TouchableOpacity style={styles.verifyButton} onPress={handleVerifyCode}>
          <Text style={styles.verifyButtonText}>Verify</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  innerContainer: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#344055',
    marginBottom: 20,
    textAlign: 'center',
  },
  verifyTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#7d869c',
    marginBottom: 10,
    textAlign: 'center',
  },
  instructionText: {
    fontSize: 16,
    color: '#7d869c',
    textAlign: 'center',
    marginBottom: 25,
    lineHeight: 22,
  },
  codeInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  codeInput: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    textAlign: 'center',
    fontSize: 24,
    borderRadius: 8,
    color: '#333',
    marginHorizontal: 5,
  },
  resendLink: {
    color: '#007BFF',
    textAlign: 'center',
    marginBottom: 30,
    fontSize: 16,
  },
  progressBarContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  progressBar: {
    height: 5,
    borderRadius: 2.5,
    flex: 1,
    marginHorizontal: 5,
  },
  progressBarActive: {
    backgroundColor: '#007BFF',
  },
  progressBarInactive: {
    backgroundColor: '#ccc',
  },
  verifyButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    width: '100%',
    maxWidth: 300,
  },
  verifyButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Forgott1;
