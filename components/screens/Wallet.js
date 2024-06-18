import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import Material Icons from react-native-vector-icons

const MyWalletScreen = ({ navigation }) => {
  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleQuestionPress = () => {
    console.log("Navigating to question screen");
  };

  const handleWalletActivityPress = () => {
    console.log("Navigating to wallet activity screen");
  };

  return (
    <View style={styles.container}>

      <View style={styles.referContainer}>
        {/* Replace with your refer banner image */}
        <Text style={styles.referTitle}>Refer your friends and earn</Text>
        <Text style={styles.referSubtitle}>They get ₹100 and you get ₹100</Text>
      </View>
      
      <View style={styles.walletContainer}>
        <Icon name="account-balance-wallet" size={40} color="#6C4BFF" style={styles.walletIcon} />
        <View>
          <Text style={styles.walletTitle}>UC Cash</Text>
          <Text style={styles.walletAmount}>₹ 0</Text>
          <Text style={styles.walletSubtitle}>Formerly UC Credits. Applicable on all services</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.optionContainer} onPress={handleQuestionPress}>
        <Text style={styles.optionText}>Have a question?</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.optionContainer} onPress={handleWalletActivityPress}>
        <Text style={styles.optionText}>Wallet activity</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#000',
  },
  backButton: {
    paddingRight: 10,
  },
  headerText: {
    fontSize: 20,
    color: '#fff',
  },
  referContainer: {
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f8f8f8',
    marginBottom: 10,
  },
  referTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  referSubtitle: {
    fontSize: 16,
    color: '#666',
  },
  walletContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    marginBottom: 10,
  },
  walletIcon: {
    marginRight: 10,
  },
  walletTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  walletAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  walletSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  optionContainer: {
    paddingHorizontal: 16,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  optionText: {
    fontSize: 16,
    color: '#000',
  },
});

export default MyWalletScreen;
