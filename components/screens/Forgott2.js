import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, Modal, StyleSheet, KeyboardAvoidingView, Platform, Alert, Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const { width } = Dimensions.get('window');

const Forgott2 = () => {
  const navigation = useNavigation();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (newPassword === confirmPassword) {
      setLoading(true);
      try {
        const response = await axios.post('http://localhost:3000/resetPassword', {
          newPassword,
          identifier: 'user@example.com', // Replace with actual identifier
        });

        if (response.data.success) {
          setIsModalVisible(true);
        } else {
          Alert.alert('Error', response.data.message || 'Password reset failed');
        }
      } catch (error) {
        console.error('Error resetting password:', error);
        Alert.alert('Error', 'Something went wrong. Please try again.');
      } finally {
        setLoading(false);
      }
    } else {
      Alert.alert('Error', 'Passwords do not match');
    }
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    navigation.navigate('Login');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.innerContainer}>
        <Text style={styles.headerTitle}>Reset Your Password</Text>
        <Text style={styles.title}>Create New Password</Text>
        <Text style={styles.instructionText}>
          Enter and confirm your new password to proceed
        </Text>

        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="New Password"
            secureTextEntry
            value={newPassword}
            onChangeText={setNewPassword}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit} disabled={loading}>
          <Text style={styles.submitButtonText}>{loading ? 'Submitting...' : 'Submit'}</Text>
        </TouchableOpacity>
      </View>

      <Modal
        visible={isModalVisible}
        transparent
        animationType="slide"
        onRequestClose={handleModalClose}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeader}>Success</Text>
            <Text style={styles.modalText}>
              Your password has been reset successfully
            </Text>
            <TouchableOpacity style={styles.modalButton} onPress={handleModalClose}>
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};

const colors = {
  background: '#f5f7fa',
  textPrimary: '#344055',
  textSecondary: '#7d869c',
  inputBackground: '#ffffff',
  inputBorder: '#ccc',
  buttonBackground: '#007BFF',
  buttonText: '#ffffff',
  modalBackground: '#ffffff',
  modalOverlay: 'rgba(0, 0, 0, 0.5)',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  innerContainer: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 20,
    textAlign: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.textSecondary,
    marginBottom: 10,
    textAlign: 'center',
  },
  instructionText: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: 25,
  },
  formContainer: {
    marginBottom: 30,
    width: '100%',
    maxWidth: width * 0.9,
  },
  input: {
    backgroundColor: colors.inputBackground,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.inputBorder,
    paddingHorizontal: 15,
    height: 50,
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
    width: '100%',
  },
  submitButton: {
    backgroundColor: colors.buttonBackground,
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    width: '100%',
  },
  submitButtonText: {
    color: colors.buttonText,
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.modalOverlay,
  },
  modalContent: {
    backgroundColor: colors.modalBackground,
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    width: '80%',
    maxWidth: width * 0.8,
  },
  modalHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: colors.buttonBackground,
    padding: 10,
    borderRadius: 8,
  },
  modalButtonText: {
    color: colors.buttonText,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Forgott2;
