import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AccountScreen = ({ navigation }) => {
  const handleLogout = () => {
    console.log('User logged out');
    // Add logic to navigate to login screen or initial screen after logout
    // navigation.replace('Login');
  };

  const handleMyBookingsPress = () => {
    navigation.navigate('Booking'); // Navigate to Booking screen
  };

  const handleHelpCenterPress = () => {
    navigation.navigate('Help'); // Navigate to Help screen
  };

  const handleNativeDevicePress = () => {
    navigation.navigate('NativeDevice'); // Navigate to NativeDevice screen
  };

  const handleWalletPress = () => {
    navigation.navigate('Wallet'); // Navigate to Wallet screen
  };

  const handleReferNow = () => {
    console.log('Refer Now button pressed');
  };

  const handlePlusMembershipPress = () => {
    navigation.navigate('PlusMembership'); // Navigate to PlusMembership screen
  };

  const handleRatingPress = () => {
    navigation.navigate('Rating'); // Navigate to Rating screen
  };

  const handleManageAddressesPress = () => {
    navigation.navigate('ManageAddresses'); // Navigate to ManageAddresses screen
  };

  const handleManagePaymentMethodsPress = () => {
    navigation.navigate('ManagePayment'); // Navigate to ManagePaymentMethods screen
  };

  const handleNavigation = (screenName) => {
    navigation.navigate(screenName);
  };

  const handleScheduledBookingsPress = () => {
    navigation.navigate('ScheduledBookings'); // Navigate to ScheduledBookings screen
  };

  const handleAboutPress = () => {
    navigation.navigate('About'); // Navigate to About screen
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={styles.name}>RAGHAV</Text>
          <Text style={styles.phone}>+91 9381973549</Text>
        </View>
        <TouchableOpacity style={styles.editIcon} onPress={() => navigation.navigate('EditProfile')}>
          <Icon name="mode-edit" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity style={styles.item} onPress={handleMyBookingsPress}>
          <View style={styles.subItem}>
            <Icon name="book" size={24} color="black" style={styles.icon} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemText}>My bookings</Text>
              <Text style={styles.itemDescription}>View and manage all your bookings</Text>
            </View>
          </View>
          <Icon name="keyboard-arrow-right" size={24} color="black" style={styles.rightIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={handleHelpCenterPress}>
          <View style={styles.subItem}>
            <Icon name="headset-mic" size={24} color="black" style={styles.icon} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemText}>Help center</Text>
              <Text style={styles.itemDescription}>Get help and support</Text>
            </View>
          </View>
          <Icon name="keyboard-arrow-right" size={24} color="black" style={styles.rightIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={handleNativeDevicePress}>
          <View style={styles.subItem}>
            <Icon name="devices" size={24} color="black" style={styles.icon} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemText}>Native devices</Text>
              <Text style={styles.itemDescription}>Explore devices supported by our services</Text>
            </View>
          </View>
          <Icon name="keyboard-arrow-right" size={24} color="black" style={styles.rightIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={handleWalletPress}>
          <View style={styles.subItem}>
            <Icon name="account-balance-wallet" size={24} color="black" style={styles.icon} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemText}>Wallet</Text>
              <Text style={styles.itemDescription}>View and manage your wallet balance</Text>
            </View>
          </View>
          <Icon name="keyboard-arrow-right" size={24} color="black" style={styles.rightIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={handlePlusMembershipPress}>
          <View style={styles.subItem}>
            <Icon name="star" size={24} color="black" style={styles.icon} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemText}>Plus Membership</Text>
              <Text style={styles.itemDescription}>Explore benefits of our Plus Membership</Text>
            </View>
          </View>
          <Icon name="keyboard-arrow-right" size={24} color="black" style={styles.rightIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={handleRatingPress}>
          <View style={styles.subItem}>
            <Icon name="star-rate" size={24} color="black" style={styles.icon} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemText}>Rate Us</Text>
              <Text style={styles.itemDescription}>Leave a rating and feedback</Text>
            </View>
          </View>
          <Icon name="keyboard-arrow-right" size={24} color="black" style={styles.rightIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={handleManageAddressesPress}>
          <View style={styles.subItem}>
            <Icon name="location-on" size={24} color="black" style={styles.icon} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemText}>Manage addresses</Text>
              <Text style={styles.itemDescription}>Add, edit, or remove your addresses</Text>
            </View>
          </View>
          <Icon name="keyboard-arrow-right" size={24} color="black" style={styles.rightIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={handleManagePaymentMethodsPress}>
          <View style={styles.subItem}>
            <Icon name="payment" size={24} color="black" style={styles.icon} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemText}>Manage payment methods</Text>
              <Text style={styles.itemDescription}>Add or remove your payment methods</Text>
            </View>
          </View>
          <Icon name="keyboard-arrow-right" size={24} color="black" style={styles.rightIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={handleNavigation.bind(this, 'Settings')}>
          <View style={styles.subItem}>
            <Icon name="settings" size={24} color="black" style={styles.icon} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemText}>Settings</Text>
              <Text style={styles.itemDescription}>Adjust app settings</Text>
            </View>
          </View>
          <Icon name="keyboard-arrow-right" size={24} color="black" style={styles.rightIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={handleScheduledBookingsPress}>
          <View style={styles.subItem}>
            <Icon name="schedule" size={24} color="black" style={styles.icon} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemText}>Scheduled bookings</Text>
              <Text style={styles.itemDescription}>View and manage all your scheduled bookings</Text>
            </View>
          </View>
          <Icon name="keyboard-arrow-right" size={24} color="black" style={styles.rightIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={handleAboutPress}>
          <View style={styles.subItem}>
            <Icon name="info" size={24} color="black" style={styles.icon} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemText}>About S2-SERVICES</Text>
              <Text style={styles.itemDescription}>Learn more about our services and team</Text>
            </View>
          </View>
          <Icon name="keyboard-arrow-right" size={24} color="black" style={styles.rightIcon} />
        </TouchableOpacity>

      </View>

      <View style={styles.referralContainer}>
        <Text style={styles.referralTitle}>Refer & earn ₹100</Text>
        <Text style={styles.referralSubtitle}>Get ₹100 when your friend</Text>
        <Image source={require('../assets/giftbox.jpg')} style={styles.referralImage} />
        <TouchableOpacity style={styles.referButton} onPress={handleReferNow}>
          <Text style={styles.referButtonText}>Refer Now</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.logoutContainer}>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    flex: 1,
  },
  name: {
    fontSize: 24,
    color: '#333',
    fontWeight: 'bold',
  },
  phone: {
    fontSize: 16,
    color: 'gray',
    marginVertical: 10,
  },
  editIcon: {
    padding: 10,
  },
  subItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    justifyContent: 'space-between',
    flex: 1,
    padding: 20,
    color: '#333',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  icon: {
    marginRight: 20,
  },
  rightIcon: {
    justifyContent: 'flex-end',
  },
  itemDetails: {
    flex: 1,
  },
  itemText: {
    color: '#333',
    fontSize: 16,
  },
  itemDescription: {
    color: 'gray',
    fontSize: 14,
  },
  referralContainer: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  referralTitle: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  referralSubtitle: {
    fontSize: 16,
    color: '#333',
  },
  referralImage: {
    width: 50,
    height: 50,
    marginTop: 10,
  },
  referButton: {
    marginTop: 10,
    backgroundColor: '#ff5c5c',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  referButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoutContainer: {
    padding: 20,
    alignItems: 'center',
  },
  logoutButton: {
    backgroundColor: '#ff5c5c',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AccountScreen;
