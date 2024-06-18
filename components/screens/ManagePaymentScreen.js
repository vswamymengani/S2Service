import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ManagePaymentScreen = () => {
  const goBack = () => {
    console.log('Back button pressed');
    // Add logic to handle navigation or other actions on back press
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

export default ManagePaymentScreen;
