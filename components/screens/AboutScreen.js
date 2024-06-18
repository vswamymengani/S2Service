import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AboutScreen = ({ navigation }) => {
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
          <View style={styles.content}>
          <Text style={styles.heading}>About S2S...</Text>
        <Text style={styles.description}>
          Welcome to S2-SERVICES! We are committed to providing top-notch services to meet all your needs. Our team of experienced professionals works tirelessly to ensure you receive the best experience possible. Whether you are looking for expert advice, quality service, or simply want to learn more about what we offer, you’ve come to the right place. 
        </Text>
        <Text style={styles.description}>
          At S2-SERVICES, we believe in the power of excellent customer service and strive to exceed your expectations. Our services are tailored to suit your unique requirements, ensuring satisfaction at every step. Join us on our journey to excellence and let us help you achieve your goals with confidence.
        </Text>
        <Text style={styles.description}>
          Thank you for choosing S2-SERVICES. We look forward to serving you and making your experience exceptional.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50, // Adjust top padding for header content
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  heading:{
   fontSize:24,
   marginTop:0,
   fontWeight:'bold',
   color:'blue',
  },
  header: {
    fontSize: 20,
    marginLeft: 10, // Adjusted margin to provide space between arrow and text
  },
  backButton: {
    padding: 10,
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  description: {
    fontSize: 16,
    color: 'black',
    marginBottom: 15,
    lineHeight: 24,
    top:20,
  },
});

export default AboutScreen;