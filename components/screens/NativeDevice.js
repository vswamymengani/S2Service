import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const NativeDevice = ({ navigation }) => {
  const goBack = () => {
    // Logic to navigate back
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
        
        <Text styles={styles.heading}>Work in Progress</Text>
      {/* Additional content of your NativeDeviceScreen */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50, // Adjust top padding for header content
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  heading:{
  fontSize:50,
  color:'red',
  flexDirection: 'row',
  alignItems: 'center',
  },
  header: {
    fontSize: 20,
    marginLeft: 10, // Adjusted margin to provide space between arrow and text
  },
  backButton: {
    padding: 10,
  },
});

export default NativeDevice;