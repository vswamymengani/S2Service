import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, KeyboardAvoidingView, Platform, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Image6 from '../assets/slogo.png';
import fblogo from '../assets/Fblogo.jpg';
import glogo from '../assets/Glogo.jpg';

const { width, height } = Dimensions.get('window');

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [rememberMe, setRememberMe] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!email.trim()) newErrors.email = 'Email is required';
    if (!password.trim()) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = () => {
    if (validateForm()) {
      axios.post('http://10.0.2.2:3000/logincustomer', { email, password })
        .then(response => {
          if (response.data.Status === "Success") {
            navigation.navigate('MainTabs', { email });
          } else {
            setErrors({ general: response.data.Error });
          }
        })
        .catch(() => setErrors({ general: 'An error occurred. Please try again.' }));
    }
  };

  const clearError = (field) => {
    setErrors(prevErrors => {
      const newErrors = { ...prevErrors };
      delete newErrors[field];
      return newErrors;
    });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={Image6} style={styles.logo} />
        <View style={styles.innerContainer}>
          <Text style={styles.headerTitle}>Login</Text>
          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder="example@gmail.com"
              value={email}
              onChangeText={(text) => { setEmail(text); clearError('email'); }}
            />
            {errors.email && <Text style={styles.error}>{errors.email}</Text>}
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              secureTextEntry
              value={password}
              onChangeText={(text) => { setPassword(text); clearError('password'); }}
            />
            {errors.password && <Text style={styles.error}>{errors.password}</Text>}
          </View>
          {errors.general && <Text style={styles.error}>{errors.general}</Text>}
          <View style={styles.rememberMeContainer}>
            <TouchableOpacity onPress={() => setRememberMe(!rememberMe)}>
              <Text style={styles.rememberMeText}>{rememberMe ? "☑" : "☐"} Remember Me</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Forgott')}>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          <View style={styles.orContainer}>
            <View style={styles.line} />
            <Text style={styles.orText}>Or With</Text>
            <View style={styles.line} />
          </View>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={fblogo} style={styles.socialLogo} />
            <Text style={styles.socialButtonText}>Login with Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={glogo} style={styles.socialLogo} />
            <Text style={styles.socialButtonText}>Login with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Form')}>
            <Text style={styles.signupText}>
              Don't have an account? <Text style={styles.signupLink}>Sign Up</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '5%',
  },
  logo: {
    width: width * 0.7, 
    height: height * 0.2, 
    resizeMode: 'contain', 
    marginVertical: 20,
  },
  innerContainer: {
    width: '100%',
    maxWidth: '90%',
  },
  headerTitle: {
    fontSize: width * 0.08,
    fontWeight: 'bold',
    color: '#344055',
    marginBottom: 20,
    textAlign: 'center',
  },
  formContainer: {
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 15,
    height: 50,
    fontSize: width * 0.045,
    color: '#333',
    marginBottom: 20,
    elevation: 3,
  },
  loginButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    width: '100%',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: width * 0.05,
    fontWeight: 'bold',
  },
  error: {
    color: '#e74c3c',
    fontSize: width * 0.04,
    marginBottom: 10,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  rememberMeText: {
    fontSize: width * 0.045,
    color: '#7d869c',
  },
  forgotPasswordText: {
    fontSize: width * 0.045,
    color: '#007BFF',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    height: 1,
    backgroundColor: '#ccc',
    flex: 1,
  },
  orText: {
    marginHorizontal: 10,
    fontSize: width * 0.045,
    color: '#7d869c',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 20,
    width: '100%',
  },
  socialLogo: {
    width: width * 0.08, 
    height: width * 0.08,
    resizeMode: 'contain', 
    marginRight: 10,
  },
  socialButtonText: {
    fontSize: width * 0.045,
    color: '#333',
  },
  signupText: {
    fontSize: width * 0.045,
    color: '#7d869c',
    textAlign: 'center',
  },
  signupLink: {
    color: '#007BFF',
  },
});


export default Login;
