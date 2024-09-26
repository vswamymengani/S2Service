import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  Modal,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    gender: '',
    email: '',
    mobile: '',
    presentaddress: '',
    password: '',
    confirmpassword: '',
  });
  const [errors, setErrors] = useState({});
  const [isSuccessModalVisible, setSuccessModalVisible] = useState(false);
  const navigation = useNavigation();

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.fullname) errors.fullname = 'Full Name is required';
    if (!formData.gender) errors.gender = 'Gender is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.mobile) errors.mobile = 'Phone Number is required';
    if (!formData.presentaddress) errors.presentaddress = 'Address is required';
    if (!formData.password) errors.password = 'Password is required';
    if (formData.password !== formData.confirmpassword) errors.confirmpassword = 'Passwords do not match';
    return errors;
  };

  const handleRegister = async () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const apiUrl = 'http://10.0.2.2:3000/registercustomer'; // Update if necessary
        const response = await axios.post(apiUrl, formData);
        if (response.status === 200) {
          setSuccessModalVisible(true);
        } else {
          console.error('Failed to register:', response.status);
        }
      } catch (error) {
        console.error('Axios Error:', error);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.headerTitle}>Create an Account</Text>
        <Text style={styles.subheader}>Register for our services!</Text>

        {/* Full Name */}
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={formData.fullname}
          onChangeText={(text) => handleInputChange('fullname', text)}
        />
        {errors.fullname && <Text style={styles.errorText}>{errors.fullname}</Text>}

        {/* Gender */}
        <Text style={styles.label}>Gender</Text>
        <Picker
          selectedValue={formData.gender}
          style={styles.picker}
          onValueChange={(itemValue) => handleInputChange('gender', itemValue)}
        >
          <Picker.Item label="Select Gender" value="" />
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
          <Picker.Item label="Other" value="other" />
        </Picker>
        {errors.gender && <Text style={styles.errorText}>{errors.gender}</Text>}

        {/* Mobile */}
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your phone number"
          value={formData.mobile}
          keyboardType="phone-pad"
          onChangeText={(text) => handleInputChange('mobile', text)}
        />
        {errors.mobile && <Text style={styles.errorText}>{errors.mobile}</Text>}

        {/* Address */}
        <Text style={styles.label}>Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your address"
          value={formData.presentaddress}
          onChangeText={(text) => handleInputChange('presentaddress', text)}
        />
        {errors.presentaddress && <Text style={styles.errorText}>{errors.presentaddress}</Text>}

        {/* Email */}
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={formData.email}
          onChangeText={(text) => handleInputChange('email', text)}
        />
        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

        {/* Password */}
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry
          value={formData.password}
          onChangeText={(text) => handleInputChange('password', text)}
        />
        {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

        {/* Confirm Password */}
        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirm your password"
          secureTextEntry
          value={formData.confirmpassword}
          onChangeText={(text) => handleInputChange('confirmpassword', text)}
        />
        {errors.confirmpassword && <Text style={styles.errorText}>{errors.confirmpassword}</Text>}

        {/* Register Button */}
        <TouchableOpacity onPress={handleRegister} style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

        {/* Login Link */}
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.signupText}>
            Already have an account? <Text style={styles.signupLink}>Login</Text>
          </Text>
        </TouchableOpacity>

        {/* Success Modal */}
        <Modal
          visible={isSuccessModalVisible}
          transparent={true}
          animationType="slide"
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.successMessage}>Registration Successful!</Text>
              <Button
                title="OK"
                onPress={() => {
                  setSuccessModalVisible(false);
                  navigation.navigate('Login');
                }}
              />
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: width * 0.08,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  subheader: {
    fontSize: width * 0.045,
    color: '#555',
    marginBottom: 30,
    textAlign: 'center',
  },
  label: {
    fontSize: width * 0.045,
    color: '#333',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 15,
    height: 50,
    fontSize: width * 0.045,
    color: '#333',
    marginBottom: 20,
  },
  picker: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    height: 50,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: width * 0.045,
    fontWeight: 'bold',
  },
  errorText: {
    color: '#e74c3c',
    fontSize: width * 0.04,
    marginBottom: 10,
  },
  signupText: {
    textAlign: 'center',
    color: '#555',
    fontSize: width * 0.045,
  },
  signupLink: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  successMessage: {
    fontSize: width * 0.05,
    marginBottom: 20,
    fontWeight: 'bold',
  },
});

export default RegisterForm;
