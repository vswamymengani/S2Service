import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Image6 from '../assets/slogo.png';
import fblogo from '../assets/Fblogo.jpg';
import glogo from '../assets/Glogo.jpg';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [rememberMe, setRememberMe] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    }
    if (!password.trim()) {
      newErrors.password = 'Password is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = () => {
    console.log('Login button pressed');
    if (validateForm()) {
      axios.post('http://10.0.2.2:3000/logincustomer', {
        email,
        password,
      })
        .then(response => {
          if (response.data.Status === "Success") {
            navigation.navigate('MainTabs', { email });
          } else {
            setErrors({ general: response.data.Error });
          }
        })
        .catch(error => {
          console.error('Axios Error:', error);
          setErrors({ general: 'An error occurred. Please try again.' });
        });
    }
  };

  const clearError = (field) => {
    setErrors((prevErrors) => {
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
              secureTextEntry={true}
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
          <TouchableOpacity style={styles.socialButton} onPress={''}>
            <Image source={fblogo} style={styles.socialLogo} />
            <Text style={styles.socialButtonText}>Login with Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton} onPress={''}>
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
    paddingHorizontal: 20,
  },
  logo: {
    width: '80%',
    height: 75,
    marginVertical: 20,
  },
  innerContainer: {
    width: '100%',
    maxWidth: 400,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#344055',
    marginBottom: 20,
    textAlign: 'center',
  },
  formContainer: {
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 15,
    height: 50,
    fontSize: 16,
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
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  error: {
    color: '#e74c3c',
    fontSize: 14,
    marginBottom: 10,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  rememberMeText: {
    fontSize: 16,
    color: '#7d869c',
  },
  forgotPasswordText: {
    fontSize: 16,
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
    fontSize: 16,
    color: '#7d869c',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 20,
    width: '100%',
    maxWidth: 400,
  },
  socialLogo: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  socialButtonText: {
    fontSize: 16,
    color: '#333',
  },
  signupText: {
    fontSize: 16,
    color: '#7d869c',
    textAlign: 'center',
  },
  signupLink: {
    color: '#007BFF',
  },
});

export default Login;
