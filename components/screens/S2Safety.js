import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SafetyMeasuresScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Know more about S2-SERVICES's safety measures</Text>
      </View>
      <Text style={styles.paragraph}>
        At S2-SERVICES, the safety of customers and professionals is taken extremely seriously.
        To ensure this, we have taken the following precautionary measures:
      </Text>
      <View style={styles.bulletContainer}>
        <Text style={styles.bulletPoint}>•</Text>
        <Text style={styles.bulletText}>We conduct background verification on all our professionals</Text>
      </View>
      <View style={styles.bulletContainer}>
        <Text style={styles.bulletPoint}>•</Text>
        <Text style={styles.bulletText}>In case of any critical support, SOS button is available in app for both our customers and professionals</Text>
      </View>
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
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  icon: {
    marginRight: 8,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 16,
    color: '#333',
  },
  bulletContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  bulletPoint: {
    fontSize: 24,
    lineHeight: 24,
    marginRight: 8,
    color: '#333',
  },
  bulletText: {
    fontSize: 16,
    flex: 1,
    color: '#333',
  },
});

export default SafetyMeasuresScreen;
