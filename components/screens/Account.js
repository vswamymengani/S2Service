import React from 'react';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import gift1 from '../assets/gift1.jpeg';

const Account = ({ navigation }) => {
  const handleLogout = () => {
    Alert.alert(
      "Confirm Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Logout cancelled"),
          style: "cancel"
        },
        { text: "Yes", onPress: () => navigation.replace('Login') }
      ],
      { cancelable: false }
    );
  };

  const handleMyBookingsPress = () => {
    navigation.navigate('BookingScreen'); // Navigate to BookingScreen
  };

  const handleHelpCenterPress = () => {
    navigation.navigate('HelpScreen'); // Navigate to HelpScreen
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={styles.name}>Raghav</Text>
          <Text style={styles.phone}>+91 9381973549</Text>
        </View>
        <TouchableOpacity
          style={styles.editIcon}
          onPress={() => navigation.navigate('EditProfile')}>
          <Icon name="mode-edit" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity style={styles.item} onPress={handleMyBookingsPress}>
          <View style={styles.subItem}>
            <Icon name="book" size={24} color="black" style={styles.icon} />
            <Text style={styles.itemText}>My bookings</Text>
          </View>
          <Icon name="keyboard-arrow-right" size={24} color="black" style={styles.rightIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={handleHelpCenterPress}>
          <View style={styles.subItem}>
            <Icon name="headset-mic" size={24} color="black" style={styles.icon} />
            <Text style={styles.itemText}>Help center</Text>
          </View>
          <Icon name="keyboard-arrow-right" size={24} color="black" style={styles.rightIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('NativeDevice')}>
          <View style={styles.subItem}>
            <Icon name="devices" size={24} color="black" style={styles.icon} />
            <Text style={styles.itemText}>Native devices</Text>
          </View>
          <Icon name="keyboard-arrow-right" size={24} color="black" style={styles.rightIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <View style={styles.subItem}>
            <Icon name="account-balance-wallet" size={24} color="black" style={styles.icon} />
            <Text style={styles.itemText}>Wallet</Text>
          </View>
          <Icon name="keyboard-arrow-right" size={24} color="black" style={styles.rightIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('PlusMembershipScreen')}>
          <View style={styles.subItem}>
            <Icon name="wallet-membership" size={24} color="black" style={styles.icon} />
            <Text style={styles.itemText}>Plus membership</Text>
          </View>
          <Icon name="keyboard-arrow-right" size={24} color="black" style={styles.rightIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('RatingScreen')}>
          <View style={styles.subItem}>
            <Icon name="star" size={24} color="black" style={styles.icon} />
            <Text style={styles.itemText}>My rating</Text>
          </View>
          <Icon name="keyboard-arrow-right" size={24} color="black" style={styles.rightIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('ManageAddress')}>
          <View style={styles.subItem}>
            <Icon name="location-on" size={24} color="black" style={styles.icon} />
            <Text style={styles.itemText}>Manage addresses</Text>
          </View>
          <Icon name="keyboard-arrow-right" size={24} color="black" style={styles.rightIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('ManagePayment')}>
          <View style={styles.subItem}>
            <Icon name="payment" size={24} color="black" style={styles.icon} />
            <Text style={styles.itemText}>Manage payment methods</Text>
          </View>
          <Icon name="keyboard-arrow-right" size={24} color="black" style={styles.rightIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <View style={styles.subItem}>
            <Icon name="settings" size={24} color="black" style={styles.icon} />
            <Text style={styles.itemText}>Settings</Text>
          </View>
          <Icon name="keyboard-arrow-right" size={24} color="black" style={styles.rightIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <View style={styles.subItem}>
            <Icon name="schedule" size={24} color="black" style={styles.icon} />
            <Text style={styles.itemText}>Scheduled bookings</Text>
          </View>
          <Icon name="keyboard-arrow-right" size={24} color="black" style={styles.rightIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('AboutScreen')}>
          <View style={styles.subItem}>
            <Icon name="info" size={24} color="black" style={styles.icon} />
            <Text style={styles.itemText}>About S2S</Text>
          </View>
          <Icon name="keyboard-arrow-right" size={24} color="black" style={styles.rightIcon} />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.item} onPress={handleLogout}>
          <View style={styles.subItem}>
            <Icon name="logout" size={24} color="black" style={styles.icon} />
            <Text style={styles.itemText}>Logout</Text>
          </View>
          <Icon name="keyboard-arrow-right" size={24} color="black" style={styles.rightIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.referralContainer}>
        <Text style={styles.referralTitle}>Refer & earn ₹100</Text>
        <Text style={styles.referralSubtitle}>Get ₹100 when your friend</Text>
        <Image source={{ uri: 'https://link.to/gift-image.png' }} style={styles.referralImage} />
        <Image source={gift1} style={styles.referralImage} />
        <TouchableOpacity style={styles.referButton} onPress={''}>
          <Text style={styles.referButtonText}>Refer Now</Text>
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
    color: '#a30b9e',
    fontWeight: 'bold',
  },
  phone: {
    fontSize: 16,
    color: '#a30b9e',
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
  itemText: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
  },
  referralContainer: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  referralTitle: {
    fontSize: 16,
    color: 'blue',
    fontWeight: 'bold',
  },
  referralSubtitle: {
    fontSize: 16,
    color: '#8c53e0',
  },
  referralImage: {
    width: 90,
    height: 80,
    marginTop: -40,
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

export default Account;
