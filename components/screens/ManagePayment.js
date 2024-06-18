import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ManagePayment = () => {
  const goBack = () => {
    console.log('Back button pressed');
    // Add logic to handle navigation or other actions on back press
  };
  const handlePayment = () => {
    switch (paymentMethod) {
      case 'card':
        if (validateCardDetails()) {
          console.log('Proceed with Debit/Credit Card payment');
          console.log('Card Number:', cardNumber);
          console.log('Expiry Date:', expiryMonth, '/', expiryYear);
          console.log('Card Holder Name:', cardHolderName);
          console.log('CVV:', cardCVV);
          setOtpModalVisible(true); // Show OTP modal after card details are validated
        } else {
          Alert.alert('Invalid Card Details', 'Please check the entered card details');
        }
        break;
    }
};
const validateCardDetails = () => {
    // Example validation logic for card details
    return (
      cardNumber.length === 16 &&
      expiryMonth.length === 2 &&
      expiryYear.length === 2 &&
      cardHolderName.length > 0 &&
      cardCVV.length === 3
    );
  };


  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}

      {/* Description Section */}
      <Text style={styles.description}>
        We will debit ₹1 to verify a new payment method. This will be refunded after verification.
      </Text>

      {/* Payment Method Section */}
      <View style={styles.paymentMethod}>
        <Text style={styles.methodTitle}>Debit or Credit Card</Text>
        <TouchableOpacity style={styles.addCardButton}>
          <Icon name="credit-card" size={24} color="black" />
          <Text style={styles.addCardText}>Add a Card</Text>
          <Icon name="keyboard-arrow-right" size={24} color="black" style={styles.rightIcon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 16,
      paddingHorizontal: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    headerTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginLeft: 16,
    },
    description: {
      padding: 16,
      fontSize: 14,
      color: '#555',
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    paymentMethod: {
      padding: 16,
    },
    methodTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 12,
      color: '#333', // Adjust color as needed
    },
    addCardButton: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 12,
      paddingHorizontal: 16,
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 8,
    },
    addCardText: {
      fontSize: 16,
      marginLeft: 8,
      flex: 1,
      color: '#333', // Adjust color as needed
    },
    rightIcon: {
      marginLeft: 8,
    },
  });

export default ManagePayment;