import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; 

const HelpScreen = ({ navigation }) => {
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>How can we help you?</Text>
      <ScrollView contentContainerStyle={styles.content}>
        <HelpItem icon="person-outline" text="Account" onPress={() => navigateToScreen('HelpAccount')} />
        <HelpItem icon="gift-outline" text="Getting started with S2-SERVICES" onPress={() => navigateToScreen('GettingStarted')} />
        <HelpItem icon="card-outline" text="Payment & Credits" onPress={() => navigateToScreen('Payment')} />
        <HelpItem icon="medal-outline" text="S2-SERVICES Plus Membership" onPress={() => navigateToScreen('UCPlusMembership')} />
        <HelpItem icon="shield-outline" text="S2-SERVICES Safety" onPress={() => navigateToScreen('SafetyMeasures')} />
        <HelpItem icon="shield-checkmark-outline" text="Warranty" onPress={() => navigateToScreen('Warranty')} />
      </ScrollView>
    </View>
  );
};

const HelpItem = ({ icon, text, onPress }) => (
  <TouchableOpacity style={styles.item} onPress={onPress}>
    <Ionicons name={icon} size={24} color="#333" />
    <Text style={styles.itemText}>{text}</Text>
    <MaterialIcons name="keyboard-arrow-right" size={24} color="#333" style={styles.rightIcon} />
  </TouchableOpacity>
);

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
    textAlign: 'center',
    color: '#333',
  },
  content: {
    paddingVertical: 8,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemText: {
    fontSize: 18,
    marginLeft: 16,
    flex: 1,
    color: '#333',
  },
  rightIcon: {
    marginLeft: 'auto',
  },
});

export default HelpScreen;
