import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';

const { width, height } = Dimensions.get('window');

const WarrantyScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.item}>
        <View style={styles.subItem}>
          <Text style={styles.question}>Which services are covered under S2-SERVICES warranty?</Text>
          <Icon name="keyboard-arrow-right" size={24} color="#333" style={styles.rightIcon} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <View style={styles.subItem}>
          <Text style={styles.question}>Do I have to pay for the service under warranty?</Text>
          <Icon name="keyboard-arrow-right" size={24} color="#333" style={styles.rightIcon} />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: width * 0.04,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: height * 0.03,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: width * 0.04,
    color: '#333',
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  subItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: height * 0.015,
  },
  question: {
    fontSize: 16,
    flex: 1,
    color: '#333',
  },
  rightIcon: {
    marginLeft: 8,
    color: '#333',
  },
});

export default WarrantyScreen;
