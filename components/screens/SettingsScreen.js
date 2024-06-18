import React, { useState } from 'react';
import { View, Text, Switch, Alert, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import the icon library

const SettingsScreen = () => {
  const [isWhatsAppUpdatesEnabled, setIsWhatsAppUpdatesEnabled] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const toggleSwitch = () => setIsWhatsAppUpdatesEnabled(previousState => !previousState);

  const handleDeleteAccount = () => {
    Alert.alert(
      "Delete Account",
      "Are you sure you want to delete your account? This action is irreversible.",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Delete", style: "destructive", onPress: () => setModalVisible(true) }
      ],
      { cancelable: false }
    );
  };

  const confirmDeleteAccount = () => {
    setModalVisible(false);
    Alert.alert("Account deleted");
    // Handle account deletion logic here
  };

  const handleDownloadData = () => {
    Alert.alert(
      "Download Data",
      "Your data is being prepared for download. You will receive a notification once the download is ready.",
      [{ text: "OK" }]
    );
    // Handle data download here
  };

  return (
    <View style={styles.container}>
      <View style={styles.setting}>
        <Icon name="logo-whatsapp" size={30} color="green" />
        <Text style={styles.text}>Updates on WhatsApp</Text>
        <Switch
          onValueChange={toggleSwitch}
          value={isWhatsAppUpdatesEnabled}
        />
      </View>
      <TouchableOpacity style={styles.buttonContainer} onPress={handleDeleteAccount}>
        <Icon name="trash-outline" size={30} color="red" style={styles.deleteIcon} />
        <Text style={styles.deleteText}>Delete Account</Text>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleDownloadData}>
          <Text style={styles.downloadText}>Download Data</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>You'll no longer be able to:</Text>
            <View style={styles.bulletContainer}>
              <Text style={styles.bulletText}>• Access your Saved professionals</Text>
              <Text style={styles.bulletText}>• Your Customer rating will be reset</Text>
              <Text style={styles.bulletText}>• All your memberships will be cancelled</Text>
              <Text style={styles.bulletText}>• Claim under any active warranty or insurance</Text>
              <Text style={styles.bulletText}>• The changes are irreversible</Text>
            </View>

            <TouchableOpacity
              style={[styles.button, styles.buttonDelete]}
              onPress={confirmDeleteAccount}
            >
              <Text style={styles.textStyle}>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.buttonCancel]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
    justifyContent: 'flex-start', // Align content to the top
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 18,
    color: 'black',
  },
  buttonContainer: {
    flexDirection: 'row', // Align items in a row
    alignItems: 'center', // Center items vertically
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  deleteIcon: {
    marginRight: 10, // Add some space between the icon and the text
  },
  deleteText: {
    fontSize: 18,
    color: 'red',
  },
  downloadText: {
    color: 'blue',
    fontSize: 18,
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '80%', // Adjust the width for better alignment
  },
  modalText: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: 'center',
    color: 'black',
  },
  bulletContainer: {
    alignSelf: 'flex-start', // Align bullet points to the start of the modal
    paddingLeft: 10, // Add some padding for better visual alignment
  },
  bulletText: {
    fontSize: 16,
    textAlign: 'left',
    marginVertical: 2,
    color: 'black',
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    marginTop: 10,
    width: '100%',
  },
  buttonDelete: {
    backgroundColor: 'red',
  },
  buttonCancel: {
    backgroundColor: 'gray',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SettingsScreen;
