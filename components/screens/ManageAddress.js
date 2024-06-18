import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ManageAddress = ({ navigation }) => {
  const handleAddAddress = () => {
    console.log('Add another address');
    // Add navigation to the add address screen
    // navigation.navigate('AddAddress');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
    

      {/* Content */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <TouchableOpacity onPress={handleAddAddress} style={styles.addAddressContainer}>
          <Icon name="add" size={24} color="purple" />
          <Text style={styles.addAddressText}>Add another address</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
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
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  backButton: {
    marginRight: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  contentContainer: {
    flexGrow: 1,
    padding: 20,
  },
  addAddressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  addAddressText: {
    marginLeft: 8,
    fontSize: 16,
    color: 'purple',
  },
});

export default ManageAddress;