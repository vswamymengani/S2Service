import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Image6 from '../assets/slogo.png';
import Image7 from '../assets/Fb.png';
import Image8 from '../assets/Gb.png';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

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
    if (validateForm()) {
      axios.post('http://10.0.2.2:3000/login', {
        email,
        password,
      })
        .then(response => {
          if (response.data.Status === "Success") {
            // Successfully logged in
            navigation.push('MainTabs');
          } else {
            // Handle error responses from the server
            console.error('Failed to login:', response.data.Error);
            setErrors({ general: response.data.Error });
          }
        })
        .catch(error => {
          // Handle network errors
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
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={Image6} style={styles.image6} />
      <View style={styles.header}>
        <Text style={styles.headerText}></Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.heading}>Login</Text>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Email</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="example@gmail.com"
          value={email}
          onChangeText={(text) => { setEmail(text); clearError('email'); }}
        />
        {errors.email && <Text style={styles.error}>{errors.email}</Text>}
        <View style={styles.labelContainer}>
          <Text style={styles.label}>Password</Text>
        </View>
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
      <TouchableOpacity style={styles.rememberme}>
        <Text style={styles.remembermeText}>Remember Me</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Forgott')}>
        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orwith}>Or With</Text>
        <View style={styles.line} />
      </View>
      <TouchableOpacity>
        <Image source={Image7} style={styles.image7} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={Image8} style={styles.image8} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Form')}>
        <Text style={styles.signupText}>
          Don't have an account? <Text style={styles.signupLink}>Signup</Text>
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  image6: {
    width: '80%',
    height: '10%',
    top:50,
  },
  image7: {
    width: 230,
    height: 50,
    marginTop: 21,
  },
  image8: {
    width: 230,
    height: 50,
    marginTop: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 20,
    marginBottom: 30,
  },
  header: {
    marginTop: 0,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  formContainer: {
    alignItems: 'flex-start',
    marginTop: 20,
    width: '80%',
  },
  labelContainer: {
    width: '100%',
  },
  label: {
    textAlign: 'left',
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 16,
    color: 'black',
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    marginTop: 5,
  },
  loginButton: {
    width: '60%',
    height: 50,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 0,
    marginTop: -10,
  },
  loginButtonText: {
    fontSize: 18,
    color: 'white',
  },
  forgotPasswordText: {
    color: 'black',
    marginBottom: 20,
    fontWeight: 'bold',
    left: 100,
    bottom: 28,
  },
  rememberme: {
    marginBottom: 15,
  },
  remembermeText: {
    color: 'black',
    fontWeight: 'bold',
    right: 100,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
  },
  orwith: {
    textAlign: 'center',
    marginHorizontal: 10,
    fontSize: 18,
    color: 'black',
  },
  signupText: {
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 50,
    marginTop: 25,
  },
  signupLink: {
    color: '#1DBBFF',
    textDecorationLine: 'underline',
  },
  error: {
    color: 'red',
    marginBottom: 5,
    marginTop: -15,
  },
});

export default Login;
