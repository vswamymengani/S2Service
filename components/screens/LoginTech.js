import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Image6 from '../assets/slogo.png';
import fblogo from '../assets/Fblogo.jpg';
import glogo from '../assets/Glogo.jpg';

const LoginTech = () => {
  const MainTabs = ({ route }) => {
    const { email } = route.params;
  
    // Rest of your component code
  };
  
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

  const handleLogin1 = () => {
    if (validateForm()) {
      axios.post('http://10.0.2.2:3000/logintechnician', {
        email,
        password,
      })
        .then(response => {
          if (response.data.Status === "Success") {
            // Successfully logged in
            navigation.push('MainTabs', { email }); // Pass email to MainTabs screen
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
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
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
        <View style={styles.rememberMeContainer}>
          <TouchableOpacity onPress={() => setRememberMe(!rememberMe)}>
            <Text style={styles.rememberMeText}>{rememberMe ? "☑" : "☐"} Remember Me</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Forgott')}>
            <Text style={styles.forgotPasswordText}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin1}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.orContainer}>
          <View style={styles.line} />
          <Text style={styles.orwith}>Or With</Text>
          <View style={styles.line} />
        </View>
        <TouchableOpacity style={styles.facebookButton} onPress={''}>
          <Image source={fblogo} style={styles.socialLogo} />
          <Text style={styles.loginButtonText}>Login with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.googleButton} onPress={''}>
          <Image source={glogo} style={styles.socialLogo} />
          <Text style={styles.loginButtonText}>Login with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Form')}>
          <Text style={styles.signupText}>
            Don't have an account? <Text style={styles.signupLink}>Signup</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
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
    height: 75,
    marginTop: 30,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  header: {
    marginTop: -10,
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
  },
  loginButton: {
    width: '60%',
    height: 50,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  loginButtonText: {
    fontSize: 18,
    color: 'white',
  },
  forgotPasswordText: {
    color: 'black',
    fontWeight: 'bold',
  },
  rememberMeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  rememberMeText: {
    color: 'black',
    fontWeight: 'bold',
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
  socialLogo: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  facebookButton: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '60%',
    height: 50,
    backgroundColor: '#3b5998',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '60%',
    height: 50,
    backgroundColor: '#db4a39',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  signupText: {
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 50,
    fontSize: 14,
  },
  signupLink: {
    color: '#1DBBFF',
    textDecorationLine: 'underline',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default LoginTech;
