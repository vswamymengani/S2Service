import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import axios from 'axios';
import DropDownPicker from 'react-native-dropdown-picker';

const Form = ({ navigation }) => {
  const [usertype, setUsertype] = useState(null);
  const [gender, setGender] = useState(null);
  const [fullname, setFullname] = useState('');
  const [mobile, setMobile] = useState('');  // Changed from phoneNumber to mobile
  const [email, setEmail] = useState('');
  const [presentaddress, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  const [usertypeOpen, setUsertypeOpen] = useState(false);
  const [genderOpen, setGenderOpen] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!usertype) {
      newErrors.usertype = 'Select Type Of User is required';
    }
    if (!fullname.trim()) {
      newErrors.fullname = 'Full Name is required';
    }
    if (!gender) {
      newErrors.gender = 'Gender is required';
    }
    if (!mobile.trim()) {  // Changed from phoneNumber to mobile
      newErrors.mobile = 'Phone Number is required';
    }
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    }
    if (!presentaddress.trim()) {
      newErrors.address = 'Address is required';
    }
    if (!password.trim()) {
      newErrors.password = 'Password is required';
    }
    if (!confirmpassword.trim()) {
      newErrors.confirmpassword = 'Confirm Password is required';
    } else if (password !== confirmpassword) {
      newErrors.confirmpassword = 'Passwords do not match';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleRegister = async () => {
    if (validateForm()) {
      axios.post('http://10.0.2.2:3000/register', {
        usertype,
        fullname,
        gender,
        mobile,  // Changed from phoneNumber to mobile
        email,
        presentaddress,
        password,
        confirmpassword,
      })
        .then(response => {
          if (response.status === 200) {
            togglePopup();
          } else {
            console.error('Failed to register:', response.status);
          }
        })
        .catch(error => {
          console.error('Axios Error:', error);
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

  const LabelWithStar = ({ label }) => (
    <View style={styles.labelContainer}>
      <Text style={styles.label}>{label}<Text style={styles.star}>*</Text></Text>
    </View>
  );

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView contentContainerStyle={styles.formContainer}>
        <Text style={styles.headerText}>Create an account</Text>
        <Text style={styles.t1}>Connect with our S2services today!</Text>

        <LabelWithStar label="Select Type of User" />
        <DropDownPicker
          open={usertypeOpen}
          value={usertype}
          items={[
            { label: 'Customer', value: 'Customer' },
            { label: 'Technician', value: 'Technician' },
            { label: 'Admin', value: 'Admin' },
          ]}
          setOpen={setUsertypeOpen}
          setValue={setUsertype}
          setItems={() => {}}
          placeholder="Select Type of User"
          style={styles.dropdown}
        />
        {errors.usertype && <Text style={styles.error}>{errors.usertype}</Text>}

        <LabelWithStar label="Full Name" />
        <TextInput
          style={styles.input}
          placeholder="Enter your fullname...."
          value={fullname}
          onChangeText={(text) => { setFullname(text); clearError('fullname'); }}
        />
        {errors.fullname && <Text style={styles.error}>{errors.fullname}</Text>}

        <LabelWithStar label="Select Gender" />
        <DropDownPicker
          open={genderOpen}
          value={gender}
          items={[
            { label: 'Male', value: 'Male' },
            { label: 'Female', value: 'Female' },
            { label: 'Other', value: 'Other' },
          ]}
          setOpen={setGenderOpen}
          setValue={setGender}
          setItems={() => {}}
          placeholder="Select Gender"
          style={styles.dropdown}
        />
        {errors.gender && <Text style={styles.error}>{errors.gender}</Text>}

        <LabelWithStar label="Email" />
        <TextInput
          style={styles.input}
          placeholder="Enter your email...."
          value={email}
          onChangeText={(text) => { setEmail(text); clearError('email'); }}
        />
        {errors.email && <Text style={styles.error}>{errors.email}</Text>}

        <LabelWithStar label="Phone Number" />
        <TextInput
          style={styles.input}
          placeholder="Enter your Phone number"
          value={mobile}  // Changed from phoneNumber to mobile
          onChangeText={(text) => { setMobile(text); clearError('mobile'); }}  // Changed from setPhoneNumber to setMobile
        />
        {errors.mobile && <Text style={styles.error}>{errors.mobile}</Text>}

        <LabelWithStar label="Address" />
        <TextInput
          style={styles.input}
          placeholder="H.No-12, Hyderabad"
          value={presentaddress}
          onChangeText={(text) => { setAddress(text); clearError('address'); }}
        />
        {errors.address && <Text style={styles.error}>{errors.address}</Text>}

        <LabelWithStar label="Password" />
        <TextInput
          style={styles.input}
          placeholder="Enter your password...."
          secureTextEntry
          value={password}
          onChangeText={(text) => { setPassword(text); clearError('password'); }}
        />
        {errors.password && <Text style={styles.error}>{errors.password}</Text>}

        <LabelWithStar label="Confirm Password" />
        <TextInput
          style={styles.input}
          placeholder="Enter your password...."
          secureTextEntry
          value={confirmpassword}
          onChangeText={(text) => { setConfirmpassword(text); clearError('confirmpassword'); }}
        />
        {errors.confirmpassword && <Text style={styles.error}>{errors.confirmpassword}</Text>}

        <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
          <Text style={styles.loginButtonText}>Register</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>OR</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.signupText}>Already have an account? Login</Text>
        </TouchableOpacity>
      </ScrollView>

      <Modal
        visible={showPopup}
        animationType="slide"
        transparent={true}
        onRequestClose={togglePopup}
      >
        <View style={styles.popup}>
          <Text style={styles.popupText}>Registration successful!</Text>
          <TouchableOpacity
            onPress={() => {
              togglePopup();
              navigation.navigate('Login');
            }}
            style={styles.closeButton}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  t1: {
    fontSize: 16,
    marginBottom: 0,
    fontWeight: 'bold',
    bottom: 20,
    left: 50,
  },
  headerText: {
    fontSize: 30,
    marginBottom: 20,
    fontWeight: 'bold',
    color: 'blue',
    bottom: 10,
    left: 50,
  },
  formContainer: {
    alignItems: 'flex-start',
    top: 10,
    width: '100%',
    paddingHorizontal: 20,
  },
  labelContainer: {
    width: '100%',
  },
  label: {
    textAlign: 'left',
    marginBottom: 5,
    fontSize: 16,
    color: 'black',
  },
  star: {
    color: 'red',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#6C7278',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  dropdown: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#6C7278',
    borderRadius: 5,
    marginBottom: 10,
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    top:15,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
  },
  orText: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 16,
    color: 'black',
    fontWeight:'bold',
    left:165,
  },
  signupText: {
    textAlign: 'center',
    color: 'blue',
    fontSize: 16,
    bottom:0,
    left:50,
    marginBottom:30,
  },
  popup: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  popupText: {
    fontSize: 20,
    marginBottom: 20,
    color: 'white',
  },
  closeButton: {
    backgroundColor: '#28a745',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default Form;
