import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HelpAccountScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.header}>Account</Text>
      <ScrollView contentContainerStyle={styles.content}>
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('EditProfile')}>
          <Text style={styles.itemText}>I want to change my phone number</Text>
          <Ionicons name="chevron-forward" size={24} color="black" style={styles.rightIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => {/* Handle navigation or action */}}>
          <Text style={styles.itemText}>Where can I check my saved addresses?</Text>
          <Ionicons name="chevron-forward" size={24} color="black" style={styles.rightIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => {/* Handle navigation or action */}}>
          <Text style={styles.itemText}>I want to change my email address</Text>
          <Ionicons name="chevron-forward" size={24} color="black" style={styles.rightIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => {/* Handle navigation or action */}}>
          <Text style={styles.itemText}>Where can I see my saved payment details?</Text>
          <Ionicons name="chevron-forward" size={24} color="black" style={styles.rightIcon} />
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
  backButton: {
    marginBottom: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color:'blue',
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
    fontWeight:'bold',
    flex: 1,
  },
  rightIcon: {
    marginLeft: 'auto',
  },
});

export default HelpAccountScreen;
