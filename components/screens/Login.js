import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Login = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Function to handle login button press
  const handleLogin = () => {
    // Validate form inputs
    if (validateForm()) {
      setLoading(true); // Start loading indicator

      // Simulate login API call
      axios.post('http://10.0.2.2:3000/login', {
        email,
        password,
      })
        .then(response => {
          setLoading(false); // Stop loading indicator
          if (response.data.Status === "Success") {
            navigation.push('MainTabs', { email }); // Navigate on successful login
          } else {
            setErrors({ general: response.data.Error }); // Handle server-side errors
          }
        })
        .catch(error => {
          setLoading(false); // Stop loading indicator on error
          setErrors({ general: 'An error occurred. Please try again.' }); // Handle network errors
        });
    }
  };

  // Function to validate form inputs
  const validateForm = () => {
    const newErrors = {};
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    }
    if (!password.trim()) {
      newErrors.password = 'Password is required';
    }
    setErrors(newErrors); // Set errors state
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  // Function to clear specific error
  const clearError = (field) => {
    setErrors(prevErrors => {
      const newErrors = { ...prevErrors };
      delete newErrors[field];
      return newErrors;
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
      >
        <LinearGradient colors={['#2567E8', '#1CE6DA']} style={styles.container}>
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
          >
            {/* Logo Container */}
            <View style={styles.logoContainer}>
              <Image source={require('../assets/company-logo.png')} style={styles.logo} />
            </View>

            {/* Inner Container */}
            <View style={styles.innerContainer}>
              <Text style={styles.signInText}>Login</Text>

              {/* Email input field */}
              <TextInput
                style={[styles.input, errors.email && styles.inputError]}
                placeholder="Email"
                placeholderTextColor="#888"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                onFocus={() => clearError('email')}
              />
              {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

              {/* Password input field */}
              <View style={styles.passwordContainer}>
                <TextInput
                  style={[styles.passwordInput, errors.password && styles.inputError]}
                  placeholder="Password"
                  placeholderTextColor="#888"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  onFocus={() => clearError('password')}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
                  <Icon name={showPassword ? 'eye-off' : 'eye'} size={24} color="#888" />
                </TouchableOpacity>
              </View>
              {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

              {/* Remember me and forgot password section */}
              <View style={styles.rememberMeContainer}>
                <TouchableOpacity onPress={() => setRememberMe(!rememberMe)} style={styles.checkboxContainer}>
                  <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]} />
                  <Text style={styles.rememberMeText}>Remember me</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                  <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                </TouchableOpacity>
              </View>

              {/* Login button */}
              <TouchableOpacity style={styles.loginButton} onPress={handleLogin} disabled={loading}>
                {loading ? (
                  <ActivityIndicator color="#fff" />
                ) : (
                  <Text style={styles.loginButtonText}>Log In</Text>
                )}
              </TouchableOpacity>

              {/* Or text */}
              <Text style={styles.orText}>Or</Text>

              {/* Social login buttons */}
              <View style={styles.socialButtonsContainer}>
                <TouchableOpacity style={styles.socialButton}>
                  <Image source={require('../assets/google.png')} style={styles.socialIcon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                  <Image source={require('../assets/facebook.png')} style={styles.socialIcon} />
                </TouchableOpacity>
              </View>

              {/* Sign up section */}
              <TouchableOpacity onPress={() => navigation.navigate('Form')}>
                <Text style={styles.signUpText}>
                  Don’t have an account? <Text style={styles.signUpLink}>Sign Up</Text>
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </LinearGradient>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%', // Ensure gradient fills the entire width
    height: '100%', // Ensure gradient fills the entire height
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    marginTop: 50,
  },
  logo: {
    width: 250,
    height: 80,
    resizeMode: 'contain',
  },
  innerContainer: {
    backgroundColor: '#FFFFFF',
    width: '95%',
    paddingHorizontal: 24,
    paddingVertical: 80, // Increase top and bottom padding
    borderRadius: 12,
    opacity: 1,
    alignItems: 'center', // Center content horizontally
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    justifyContent: 'center', // Center content vertically
    marginTop: 10, // Increased margin top to move inner container down

  },
  signInText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    color: '#000',
  },
  passwordContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  passwordInput: {
    flex: 1,
    height: 50,
    paddingHorizontal: 10,
    color: '#000',
  },
  eyeIcon: {
    padding: 10,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '100%',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    width: 14,
    height: 14,
    backgroundColor: '#007BFF',
  },
  rememberMeText: {
    color: '#000',
    marginLeft: 5,
  },
  forgotPasswordText: {
    color: '#007BFF',
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  orText: {
    marginVertical: 20,
    fontSize: 16,
    color: '#888',
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  socialButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    elevation: 3,
  },
  socialIcon: {
    width: 30,
    height: 30,
  },
  signUpText: {
    color: '#000',
  },
  signUpLink: {
    color: '#007BFF',
  },
  errorText: {
    color: 'red',
    marginBottom: 5,
    alignSelf: 'flex-start',
  },
  inputError: {
    borderColor: 'red',
  },
});

export default Login;
