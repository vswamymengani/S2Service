import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Modal, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const Form = () => {
  const [userType, setUserType] = useState('customer');
  const [formData, setFormData] = useState({
    fullname: '',
    gender: '',
    email: '',
    mobile: '',
    presentaddress: '',
    password: '',
    confirmpassword: '',
    workExperience: ''
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
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.password) errors.password = 'Password is required';
    if (formData.password !== formData.confirmpassword) errors.confirmpassword = 'Passwords do not match';

    if (userType === 'customer' || userType === 'technician') {
      if (!formData.fullname) errors.fullname = 'Full Name is required';
      if (!formData.gender) errors.gender = 'Gender is required';
      if (!formData.mobile) errors.mobile = 'Phone Number is required';
      if (!formData.presentaddress) errors.presentaddress = 'Address is required';
    }

    if (userType === 'technician' && !formData.workExperience) {
      errors.workExperience = 'Work Experience is required';
    }

    return errors;
  };

  const handleRegister = async () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const apiUrl = userType === 'customer' ? 'http://10.0.2.2:3000/registercustomer' :
                       userType === 'technician' ? 'http://10.0.2.2:3000/registertechnician' :
                       'http://10.0.2.2:3000/registeradmin';
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

  const clearError = (field) => {
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      delete newErrors[field];
      return newErrors;
    });
  };

  const renderFields = () => {
    return (
      <>
        {userType !== 'admin' && (
          <>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your name"
              value={formData.fullname}
              onChangeText={(text) => handleInputChange('fullname', text)}
            />
            {errors.fullname && <Text style={styles.errorText}>{errors.fullname}</Text>}

            <Text style={styles.label}>Gender</Text>
            <Picker
              selectedValue={formData.gender}
              onValueChange={(itemValue) => handleInputChange('gender', itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Select Gender" value="" />
              <Picker.Item label="Male" value="male" />
              <Picker.Item label="Female" value="female" />
              <Picker.Item label="Other" value="other" />
            </Picker>
            {errors.gender && <Text style={styles.errorText}>{errors.gender}</Text>}

            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your phone number"
              value={formData.mobile}
               keyboardType="phone-pad"
              onChangeText={(text) => handleInputChange('mobile', text)}
            />
            {errors.mobile && <Text style={styles.errorText}>{errors.mobile}</Text>}

            <Text style={styles.label}>Address</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your address"
              value={formData.presentaddress}
              onChangeText={(text) => handleInputChange('presentaddress', text)}
            />
            {errors.presentaddress && <Text style={styles.errorText}>{errors.presentaddress}</Text>}
          </>
        )}

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={formData.email}
          onChangeText={(text) => handleInputChange('email', text)}
        />
        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry
          value={formData.password}
          onChangeText={(text) => handleInputChange('password', text)}
        />
        {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirm your password"
          secureTextEntry
          value={formData.confirmpassword}
          onChangeText={(text) => handleInputChange('confirmpassword', text)}
        />
        {errors.confirmpassword && <Text style={styles.errorText}>{errors.confirmpassword}</Text>}

        {userType === 'technician' && (
          <>
            <Text style={styles.label}>Work Experience</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your work experience"
              value={formData.workExperience}
              onChangeText={(text) => handleInputChange('workExperience', text)}
            />
            {errors.workExperience && <Text style={styles.errorText}>{errors.workExperience}</Text>}
          </>
        )}
      </>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerText}>Create an account</Text>
      <Text style={styles.t1}>Connect with our S2services today!</Text>
      <Text style={styles.label}>Select User Type:</Text>
      <Picker
        selectedValue={userType}
        onValueChange={(itemValue) => setUserType(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Customer" value="customer" />
        <Picker.Item label="Technician" value="technician" />
        <Picker.Item label="Admin" value="admin" />
      </Picker>

      {renderFields()}

      <TouchableOpacity onPress={handleRegister} style={styles.button}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>OR</Text>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.signupText}>Already have an account? Login</Text>
      </TouchableOpacity>

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
                if (userType === 'customer') {
                  navigation.navigate('Login');
                } else if (userType === 'technician') {
                  navigation.navigate('LoginTech');
                } else if (userType === 'admin') {
                  navigation.navigate('LoginAdmin');
                }
              }}
            />
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
  },
  t1: {
    fontSize: 16,
    marginBottom: 0,
   
    bottom: 20,
    left: 70,
    color: 'blue',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    left: 90,
    color:'blue',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  orText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    fontWeight:'bold'
  },
  signupText: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 16,
    color: 'blue',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  successMessage: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default Form;
