import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';

const Scheduler = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [agentName] = useState('John Doe'); // Example agent name
  const navigation = useNavigation();

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || selectedDate;
    setShowDatePicker(Platform.OS === 'ios'); // Hide date picker on iOS
    setSelectedDate(currentDate);
  };

  const handleTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || selectedTime;
    setShowTimePicker(Platform.OS === 'ios'); // Hide time picker on iOS
    setSelectedTime(currentTime);
  };

  const showDatePickerModal = () => {
    setShowDatePicker(true);
  };

  const showTimePickerModal = () => {
    setShowTimePicker(true);
  };

  const formatDate = (date) => {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  };

  const formatTime = (time) => {
    return `${time.getHours()}:${time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()}`;
  };

  const handleProceed = () => {
    // Navigate to PaymentSummaryScreen
    navigation.navigate('PaymentSummary', {
      selectedDate: formatDate(selectedDate),
      selectedTime: formatTime(selectedTime),
      agentName: agentName,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>When would you like professionals to serve you?</Text>
      <TouchableOpacity style={styles.button} onPress={showDatePickerModal}>
        <Text style={styles.buttonText}>{formatDate(selectedDate)}</Text>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}

      <Text style={styles.label}>When would you like your service?</Text>
      <TouchableOpacity style={styles.button} onPress={showTimePickerModal}>
        <Text style={styles.buttonText}>{formatTime(selectedTime)}</Text>
      </TouchableOpacity>

      {showTimePicker && (
        <DateTimePicker
          value={selectedTime}
          mode="time"
          display="default"
          onChange={handleTimeChange}
        />
      )}

      <TouchableOpacity style={styles.proceedButton} onPress={handleProceed}>
        <Text style={styles.buttonText}>Proceed to Set Date and Time</Text>
      </TouchableOpacity>

      <Text style={styles.agentText}>Nearest Customer Agent: {agentName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor:'white',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  proceedButton: {
    backgroundColor: '#28a745', // Green color for proceed button
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
  },
  agentText: {
    fontSize: 16,
    marginTop: 20,
    textAlign: 'center',
  },
});

export default Scheduler;
