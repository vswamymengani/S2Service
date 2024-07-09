import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image, Alert, Modal } from 'react-native';
import cardImage from '../assets/Card.jpg';
import phonePeImage from '../assets/Phonepay.jpg';
import googlePayImage from '../assets/Gpay.jpg';
import paytmwallet from '../assets/Paytm.jpg';
import amazonepay from '../assets/Amazonpay.jpg';
import upiImage from '../assets/Upi.jpg';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PaymentMethod = ({ route, navigation }) => {
  const { totalAmount } = route.params;

  const [paymentMethod, setPaymentMethod] = useState('');
  const [selectedUPIApp, setSelectedUPIApp] = useState('');
  const [selectedWallet, setSelectedWallet] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [cardCVV, setCardCVV] = useState('');
  const [enteredUPIID, setEnteredUPIID] = useState('');
  const [otpModalVisible, setOtpModalVisible] = useState(false);
  const [otpValue, setOtpValue] = useState('');

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
      case 'upi':
        if (selectedUPIApp === 'other') {
          if (validateUPIID()) {
            console.log('Proceed with UPI payment using UPI ID:', enteredUPIID);
            Alert.alert('Payment Successful', `Amount ₹${totalAmount} has been successfully processed.`);
            navigation.navigate('Home');
          } else {
            Alert.alert('Invalid UPI ID', 'Please enter a valid UPI ID');
          }
        } else {
          console.log('Proceed with UPI payment using:', selectedUPIApp);
          Alert.alert('Payment Successful', `Amount ₹${totalAmount} has been successfully processed.`);
          navigation.navigate('Home');
        }
        break;
      case 'wallet':
        if (selectedWallet === 'paytm' || selectedWallet === 'amazonpay') {
          console.log('Proceed with Wallet payment using:', selectedWallet);
          Alert.alert('Payment Successful', `Amount ₹${totalAmount} has been successfully processed.`);
          navigation.navigate('Home');
        } else {
          Alert.alert('Select Wallet', 'Please select a wallet option');
        }
        break;
      default:
        console.log('Select a payment method');
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

  const validateUPIID = () => {
    // Example validation logic for UPI ID
    return enteredUPIID.trim().length > 0;
  };

  const handleOtpVerification = () => {
    // Example OTP verification logic
    if (otpValue.length === 6) {
      console.log('OTP entered:', otpValue);
      setOtpModalVisible(false);
      Alert.alert('Payment Successful', `Amount ₹${totalAmount} has been successfully processed.`);
      navigation.navigate('Home');
    } else {
      Alert.alert('Invalid OTP', 'Please enter a valid OTP');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
       <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
     
      <Text style={styles.header}>Select payment method</Text>

      <View style={styles.amountContainer}>
        <Text style={styles.amountText}>Amount to pay: ₹{totalAmount}</Text>
      </View>

      {/* Debit/Credit Card Section */}
      <CardSection
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
        cardNumber={cardNumber}
        setCardNumber={setCardNumber}
        expiryMonth={expiryMonth}
        setExpiryMonth={setExpiryMonth}
        expiryYear={expiryYear}
        setExpiryYear={setExpiryYear}
        cardHolderName={cardHolderName}
        setCardHolderName={setCardHolderName}
        cardCVV={cardCVV}
        setCardCVV={setCardCVV}
      />

      {/* UPI Section */}
      <UPISection
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
        selectedUPIApp={selectedUPIApp}
        setSelectedUPIApp={setSelectedUPIApp}
        enteredUPIID={enteredUPIID}
        setEnteredUPIID={setEnteredUPIID}
      />

      {/* Wallet Section */}
      <WalletSection
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
        selectedWallet={selectedWallet}
        setSelectedWallet={setSelectedWallet}
      />

      {/* Proceed Button */}
      <TouchableOpacity style={styles.proceedButton} onPress={handlePayment}>
        <Text style={styles.proceedButtonText}>Proceed</Text>
      </TouchableOpacity>

      {/* OTP Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={otpModalVisible}
        onRequestClose={() => {
          setOtpModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Enter OTP</Text>
            <TextInput
              style={styles.otpInput}
              placeholder="OTP"
              keyboardType="numeric"
              value={otpValue}
              onChangeText={setOtpValue}
              maxLength={6}
            />
            <TouchableOpacity style={styles.modalButton} onPress={handleOtpVerification}>
              <Text style={styles.modalButtonText}>Verify OTP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const CardSection = ({
  paymentMethod,
  setPaymentMethod,
  cardNumber,
  setCardNumber,
  expiryMonth,
  setExpiryMonth,
  expiryYear,
  setExpiryYear,
  cardHolderName,
  setCardHolderName,
  cardCVV,
  setCardCVV,
}) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Debit or Credit card</Text>
      <TouchableOpacity
        style={[styles.optionButton, paymentMethod === 'card' && styles.activeOption]}
        onPress={() => setPaymentMethod('card')}
      >
        <Image source={cardImage} style={styles.paymentLogo} />
        <Text style={styles.optionText}>Add a card</Text>
      </TouchableOpacity>

      {paymentMethod === 'card' && (
        <View style={styles.cardForm}>
          <TextInput
            style={styles.input}
            placeholder="Card Number"
            value={cardNumber}
            onChangeText={setCardNumber}
            keyboardType="numeric"
            maxLength={16}
          />
          <View style={styles.inlineInputs}>
            <TextInput
              style={[styles.input, { flex: 1, marginRight: 10 }]}
              placeholder="Exp Month"
              value={expiryMonth}
              onChangeText={setExpiryMonth}
              keyboardType="numeric"
              maxLength={2}
            />
            <TextInput
              style={[styles.input, { flex: 1, marginLeft: 10 }]}
              placeholder="Exp Year"
              value={expiryYear}
              onChangeText={setExpiryYear}
              keyboardType="numeric"
              maxLength={2}
            />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Card Holder Name"
            value={cardHolderName}
            onChangeText={setCardHolderName}
          />
          <TextInput
            style={[styles.input, { marginBottom: 0 }]}
            placeholder="CVV"
            value={cardCVV}
            onChangeText={setCardCVV}
            keyboardType="numeric"
            maxLength={3}
          />
        </View>
      )}
    </View>
  );
};

const UPISection = ({
  paymentMethod,
  setPaymentMethod,
  selectedUPIApp,
  setSelectedUPIApp,
  enteredUPIID,
  setEnteredUPIID,
}) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>UPI</Text>
      <TouchableOpacity
        style={[
          styles.optionButton,
          paymentMethod === 'upi' && selectedUPIApp === 'googlepay' && styles.activeOption,
        ]}
        onPress={() => {
          setPaymentMethod('upi');
          setSelectedUPIApp('googlepay');
          setEnteredUPIID('');
        }}
      >
        <Image source={googlePayImage} style={styles.paymentLogo} />
        <Text style={styles.optionText}>GPay</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.optionButton,
          paymentMethod === 'upi' && selectedUPIApp === 'phonepe' && styles.activeOption,
        ]}
        onPress={() => {
          setPaymentMethod('upi');
          setSelectedUPIApp('phonepe');
          setEnteredUPIID('');
        }}
      >
        <Image source={phonePeImage} style={styles.paymentLogo} />
        <Text style={styles.optionText}>PhonePe</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.optionButton,
          paymentMethod === 'upi' && selectedUPIApp === 'other' && styles.activeOption,
        ]}
        onPress={() => {
          setPaymentMethod('upi');
          setSelectedUPIApp('other');
          setEnteredUPIID('');
        }}
      >
        <Image source={upiImage} style={styles.paymentLogo} />
        <Text style={styles.optionText}>See all UPI apps</Text>
      </TouchableOpacity>
      {paymentMethod === 'upi' && selectedUPIApp === 'other' && (
        <View style={styles.cardForm}>
          <TextInput
            style={styles.input}
            placeholder="Enter UPI ID"
            value={enteredUPIID}
            onChangeText={setEnteredUPIID}
          />
        </View>
      )}
    </View>
  );
};

const WalletSection = ({ paymentMethod, setPaymentMethod, selectedWallet, setSelectedWallet }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Wallet</Text>
      <TouchableOpacity
        style={[styles.optionButton, paymentMethod === 'wallet' && selectedWallet === 'paytm' && styles.activeOption]}
        onPress={() => {
          setPaymentMethod('wallet');
          setSelectedWallet('paytm');
        }}
      >
        <Image source={paytmwallet} style={styles.paymentLogo} />
        <Text style={styles.optionText}>Paytm Wallet</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.optionButton,
          paymentMethod === 'wallet' && selectedWallet === 'amazonpay' && styles.activeOption,
        ]}
        onPress={() => {
          setPaymentMethod('wallet');
          setSelectedWallet('amazonpay');
        }}
      >
        <Image source={amazonepay} style={styles.paymentLogo} />
        <Text style={styles.optionText}>Amazon Pay</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#F3F4F6',
   
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: -10,
    bottom:40,
    top:-25,
    
    color:'blue'
  },
  amountContainer: {
    alignItems: 'center',
    marginBottom: 20,
    color: 'red'
  },
  amountText: {
    fontSize: 18,
    color: 'red'
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  activeOption: {
    borderWidth: 1,
    borderColor: '#28a745',
  },
  paymentLogo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  optionText: {
    fontSize: 16,
    fontWeight:'bold'
  },
  cardForm: {
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  inlineInputs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  proceedButton: {
    backgroundColor: 'blue',
    paddingVertical: 15,
    borderRadius: 18,
    marginTop: 0,
  },
  proceedButtonText: {
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  // OTP Modal styles
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  otpInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: 200,
    textAlign: 'center',
  },
  modalButton: {
    backgroundColor: '#28a745',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 2,
    marginTop: 10,
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default PaymentMethod;
