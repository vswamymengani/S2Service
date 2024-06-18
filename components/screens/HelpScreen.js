import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; 

const HelpScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.header}>How can we help you?</Text>
      <ScrollView contentContainerStyle={styles.content}>
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('HelpAccountScreen')}>
          <Ionicons name="person-outline" size={24} color="black" />
          <Text style={styles.itemText}>Account</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" style={styles.rightIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('GettingStarted')}>
          <Ionicons name="gift-outline" size={24} color="black" />
          <Text style={styles.itemText}>Getting started with S2S</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" style={styles.rightIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Payment')}>
          <Ionicons name="card-outline" size={24} color="black" />
          <Text style={styles.itemText}>Payment & S2S Credits</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" style={styles.rightIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('UCPlusMembership')}>
          <Ionicons name="medal-outline" size={24} color="black" />
          <Text style={styles.itemText}>S2S Plus Membership</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" style={styles.rightIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('UCSafety')}>
          <Ionicons name="shield-outline" size={24} color="black" />
          <Text style={styles.itemText}>S2S Safety</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" style={styles.rightIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('WarrantyScreen')}>
          <Ionicons name="shield-checkmark-outline" size={24} color="black" />
          <Text style={styles.itemText}>Warranty</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" style={styles.rightIcon} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
    color:'blue',
  },
  content: {
    paddingVertical: 8,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemText: {
    fontSize: 18,
    fontWeight:'bold',
    marginLeft: 16,
    flex: 1, // Added to push the right arrow to the end
  },
  rightIcon: {
    marginLeft: 'auto', // Align right arrow to the right end
  },
});

export default HelpScreen;
