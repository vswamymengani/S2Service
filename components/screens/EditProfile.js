import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import axios from 'axios';

const EditProfile = ({ navigation, route }) => {
  const email = route.params.email; // Get the email from route params
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [userEmail, setUserEmail] = useState(''); // Renamed to avoid confusion with the email parameter
  const [countryCode, setCountryCode] = useState('IN');
  const [callingCode, setCallingCode] = useState('91');
  const [modalVisible, setModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [profile, setProfile] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`http://10.0.2.2:3000/profile?email=${email}`);
        
        console.log('API Response:', response.data); // Debug log

        if (response.data.success) {
          setProfile(response.data.profile);
          setName(response.data.profile.fullname);
          setUserEmail(response.data.profile.email);
          setPhone(response.data.profile.mobile);
        } else {
          console.error('API Error:', response.data.message);
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchProfile();
  }, [email]);

  const handleUpdate = async () => {
    if (!name) {
      setErrorMessage('Full Name is required.');
      return;
    }
    if (!userEmail || !validateEmail(userEmail)) {
      setErrorMessage('A valid Email Address is required.');
      return;
    }
    if (!phone || !validatePhone(phone)) {
      setErrorMessage('A valid Phone Number is required.');
      return;
    }
  
    setErrorMessage('');
  
    try {
      const response = await axios.put('http://10.0.2.2:3000/updateProfile', {
        email,
        name,
        userEmail,
        phone,
        countryCode,
        callingCode
      });
  
      if (response.data.success) {
        console.log('Profile updated successfully');
        setModalVisible(true); // Show the modal after updating
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      setErrorMessage('Failed to update profile. Please try again.');
    }
  };
  

  const handleCloseModal = () => {
    setModalVisible(false);
    navigation.navigate('Account',{email}); // Go back to the previous screen after updating and closing the modal
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>
      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
      <Text style={styles.label}>Full Name</Text>
            
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
      />
      <Text style={styles.label}>Email</Text>
            
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={userEmail}
        onChangeText={setUserEmail}
        keyboardType="email-address"
      />
      <Text style={styles.label}>Phone</Text>
            
      <View style={styles.phoneContainer}>
        <Text style={styles.callingCode}>+{callingCode}</Text>
        <TextInput
          style={[styles.input, styles.phoneInput]}
          placeholder="Phone"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
        
      </View>
      <TouchableOpacity style={styles.button} onPress={handleUpdate}>
        <Text style={styles.buttonText}>Update Now</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>Profile updated successfully!</Text>
            <TouchableOpacity style={styles.modalButton} onPress={handleCloseModal}>
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'#a30b9e',
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    color:'black',
    fontWeight:'450'
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    color:'black',
    fontWeight:'bold'
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  callingCode: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 16,
  },
  phoneInput: {
    flex: 1,
  },
  button: {
    backgroundColor: '#8c53e0',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginBottom: 20,
    fontWeight:'bold',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#6200ee',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EditProfile;
