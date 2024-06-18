import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Modal } from 'react-native';

const PaymentSummary = ({ navigation }) => {
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [selectedOffer, setSelectedOffer] = useState(null); // State to track selected offer
  const itemTotal = 1499; // Example item total
  const taxesAndFee = 129; // Example taxes and fees

  // Function to calculate total amount after applying offer
  const getTotalAmount = () => {
    let total = itemTotal + taxesAndFee;
    if (selectedOffer === '10% off') {
      total *= 0.9; // Apply 10% discount
    } else if (selectedOffer === '15% off') {
      total *= 0.85; // Apply 15% discount
    }
    return total.toFixed(2); // Return total amount with 2 decimal places
  };

  const handleProceed = () => {
    // Navigate to PaymentMethodScreen with total amount as parameter
    navigation.navigate('PaymentMethod', { totalAmount: getTotalAmount() });
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const applyOffer = (offer) => {
    setSelectedOffer(offer);
    handleCloseModal();
  };

  return (
    <ScrollView style={styles.container}>
      {/* Coupons and Offers */}
      <TouchableOpacity style={styles.sectionContainer} onPress={handleShowModal}>
        <Text style={styles.sectionTitle}>Coupons and Offers</Text>
        <Text style={styles.offerText}>{selectedOffer ? `${selectedOffer} Applied` : '1 offer >'}</Text>
      </TouchableOpacity>

      {/* Payment Summary */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Payment Summary</Text>
        <View style={styles.row}>
          <Text>Item total</Text>
          <Text>₹{itemTotal}</Text>
        </View>
        <View style={styles.row}>
          <Text>Taxes and Fee</Text>
          <Text>₹{taxesAndFee}</Text>
        </View>
        <View style={[styles.row, styles.totalRow]}>
          <Text>Total</Text>
          <Text>₹{getTotalAmount()}</Text>
        </View>
      </View>

      {/* Cancellation & Reschedule Policy */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Cancellation & Reschedule Policy</Text>
        <Text style={styles.policyText}>
          Free cancellations/reschedules if done more than 3 hrs before the service or if a professional isn't assigned. A fee will be charged otherwise.
        </Text>
      </View>

      {/* Add a Tip */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Add a Tip to Thank the Professional</Text>
        <View style={styles.row}>
          <TouchableOpacity style={styles.tipOption}>
            <Text style={styles.tipText}>₹30</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tipOption}>
            <Text style={styles.tipText}>₹50</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tipOption}>
            <Text style={styles.tipText}>₹100</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tipOption}>
            <Text style={styles.tipText}>Custom</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Proceed Button */}
      <TouchableOpacity style={styles.proceedButton} onPress={handleProceed}>
        <Text style={styles.proceedButtonText}>Proceed to Payment</Text>
      </TouchableOpacity>

      {/* Modal for Coupons and Offers */}
      <Modal visible={showModal} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Available Offers</Text>
            <TouchableOpacity style={styles.modalItem} onPress={() => applyOffer('10% off')}>
              <Text style={styles.modalItemText}>10% off on total</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalItem} onPress={() => applyOffer('15% off')}>
              <Text style={styles.modalItemText}>15% off for summer</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeButton} onPress={handleCloseModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfcfc',
    padding: 20,
  },
  sectionContainer: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  offerText: {
    fontSize: 18,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  totalRow: {
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 10,
  },
  policyText: {
    fontSize: 16,
  },
  tipOption: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginRight: 10,
  },
  tipText: {
    fontSize: 16,
  },
  proceedButton: {
    backgroundColor: '#28a745',
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  proceedButtonText: {
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  // Modal styles
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    width: '80%',
    maxHeight: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  modalItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  modalItemText: {
    fontSize: 16,
    color: '#007bff',
  },
  closeButton: {
    marginTop: 10,
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center',
  },
  closeButtonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
});

export default PaymentSummary;
