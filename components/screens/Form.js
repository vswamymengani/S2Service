import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  Modal,
  Button,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Picker } from '@react-native-picker/picker';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import DocumentPicker from 'react-native-document-picker';
import { RadioButton } from 'react-native-paper';
import Tags from 'react-native-tags-input';

const SignUpScreen = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [gender, setGender] = useState('');
  const [userType, setUserType] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [experience, setExperience] = useState('');
  const [skills, setSkills] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [availability, setAvailability] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSuccessModalVisible, setSuccessModalVisible] = useState(false);
  const navigation = useNavigation();

  const validateForm = () => {
    let errors = {};

    if (!userType) {
      errors.usertype = 'User type is required.';
    }
    if (userType !== 'admin' && !fullName) {
      errors.fullname = 'Full name is required.';
    }
    if (!email) {
      errors.email = 'Email is required.';
    }
    if (userType !== 'admin' && !gender) {
      errors.gender = 'Gender is required.';
    }
    if (userType !== 'admin' && !phoneNumber) {
      errors.mobile = 'Phone number is required.';
    }
    if (userType !== 'admin' && !address) {
      errors.presentaddress = 'Address is required.';
    }
    if (!password) {
      errors.password = 'Password is required.';
    }
    if (!confirmPassword) {
      errors.confirmpassword = 'Confirm password is required.';
    } else if (password !== confirmPassword) {
      errors.confirmpassword = 'Passwords do not match.';
    }
    if (userType === 'technician') {
      if (!experience) {
        errors.experience = 'Experience is required.';
      }
      if (skills.length === 0) {
        errors.skills = 'Skills are required.';
      }
      if (certifications.length === 0) {
        errors.certifications = 'Certifications are required.';
      }
      if (!availability) {
        errors.availability = 'Availability is required.';
      }
    }

    setErrors(errors);
    return errors;
  };

  const handleRegister = async () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const apiUrl =
          userType === 'customer'
            ? 'http://10.0.2.2:3000/register'
            : userType === 'technician'
            ? 'http://10.0.2.2:3000/register1'
            : 'http://10.0.2.2:3000/registerAdmin';
        setLoading(true);
        const response = await axios.post(apiUrl, {
          fullname: fullName,
          gender: gender,
          email: email,
          mobile: phoneNumber,
          presentaddress: address,
          password: password,
          confirmpassword: confirmPassword,
          experience: experience,
          skills: skills.join(', '),
          certifications: certifications.join(', '),
          availability: availability,
        });
        setLoading(false);
        if (response.status === 200) {
          setSuccessModalVisible(true);
        } else {
          console.error('Failed to register:', response.status);
        }
      } catch (error) {
        setLoading(false);
        console.error('Axios Error:', error);
      }
    }
  };

  const genderOptions = useMemo(() => ['male', 'female', 'other'], []);
  const userTypes = useMemo(
    () => [
      { label: 'Select User Type', value: '' },
      { label: 'Customer', value: 'customer' },
      { label: 'Technician', value: 'technician' },
      { label: 'Admin', value: 'admin' },
    ],
    []
  );

  const handleSkillToggle = (skill) => {
    const updatedSkills = [...skills];
    if (updatedSkills.includes(skill)) {
      updatedSkills.splice(updatedSkills.indexOf(skill), 1); // Remove skill if already selected
    } else {
      updatedSkills.push(skill); // Add skill if not selected
    }
    setSkills(updatedSkills);
  };

  const certificationOptions = useMemo(
    () => [
      { label: 'Certified Electrician', value: 'Certified Electrician' },
      { label: 'HVAC Certified', value: 'HVAC Certified' },
      { label: 'Licensed Plumber', value: 'Licensed Plumber' },
      { label: 'Certified Carpenter', value: 'Certified Carpenter' },
    ],
    []
  );

  const availabilityOptions = useMemo(
    () => [
      { label: 'Full Time', value: 'Full Time' },
      { label: 'Part Time', value: 'Part Time' },
      { label: 'On Call', value: 'On Call' },
    ],
    []
  );

  // Function to handle document upload
  const handleDocumentUpload = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf, DocumentPicker.types.images],
      });
      // Assuming certifications state is an array of URIs
      setCertifications([...certifications, res[0].uri]); // Update state with new URI
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled the picker');
      } else {
        throw err;
      }
    }
  };

  const renderAsterisk = (field) => (errors[field] ? <Text style={styles.asterisk}>*</Text> : null);

  return (
    <LinearGradient colors={['#2567E8', '#1CE6DA']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.innerContainer}>
          <Text style={styles.signUpText}>Create an account</Text>
          <Text style={styles.subText}>Connect with our S2services today!</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>
              Select User Type {renderAsterisk('usertype')}
            </Text>
            <Picker
              selectedValue={userType}
              style={styles.input}
              onValueChange={(itemValue) => setUserType(itemValue)}
            >
              {userTypes.map((type) => (
                <Picker.Item
                  key={type.value}
                  label={type.label}
                  value={type.value}
                />
              ))}
            </Picker>
            {errors.usertype && (
              <Text style={styles.errorText}>{errors.usertype}</Text>
            )}
          </View>

          {userType !== 'admin' && (
            <View style={styles.inputContainer}>
              <Text style={styles.label}>
                Full Name {renderAsterisk('fullname')}
              </Text>
              <TextInput
                style={styles.input}
                value={fullName}
                onChangeText={(value) => setFullName(value)}
                placeholder="Enter your name"
                placeholderTextColor="#A9A9A9"
              />
              {errors.fullname && (
                <Text style={styles.errorText}>{errors.fullname}</Text>
              )}
            </View>
          )}

          <View style={styles.inputContainer}>
            <Text style={styles.label}>
              Email {renderAsterisk('email')}
            </Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={(value) => setEmail(value)}
              placeholder="Enter your email"
              placeholderTextColor="#A9A9A9"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            {errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}
          </View>

          {userType !== 'admin' && (
            <>
              <Text style={[styles.label, styles.genderLabel]}>
                Gender {renderAsterisk('gender')}
              </Text>
              <View style={styles.genderContainer}>
                {genderOptions.map((option) => (
                  <View key={option} style={styles.radioButtonContainer}>
                    <RadioButton
                      value={option}
                      status={gender === option ? 'checked' : 'unchecked'}
                      onPress={() => setGender(option)}
                      color="#fff"
                    />
                    <Text style={styles.radioButtonLabel}>{option}</Text>
                  </View>
                ))}
              </View>
              {errors.gender && (
                <Text style={styles.errorText}>{errors.gender}</Text>
              )}

              <View style={styles.inputContainer}>
                <Text style={styles.label}>
                  Phone Number {renderAsterisk('mobile')}
                </Text>
                <TextInput
                  style={styles.input}
                  value={phoneNumber}
                  onChangeText={(value) => setPhoneNumber(value)}
                  placeholder="Enter your phone number"
                  placeholderTextColor="#A9A9A9"
                  keyboardType="phone-pad"
                />
                {errors.mobile && (
                  <Text style={styles.errorText}>{errors.mobile}</Text>
                )}
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>
                  Address {renderAsterisk('presentaddress')}
                </Text>
                <TextInput
                  style={styles.input}
                  value={address}
                  onChangeText={(value) => setAddress(value)}
                  placeholder="Enter your address"
                  placeholderTextColor="#A9A9A9"
                  multiline={true}
                  numberOfLines={3}
                />
                {errors.presentaddress && (
                  <Text style={styles.errorText}>
                    {errors.presentaddress}
                  </Text>
                )}
              </View>
            </>
          )}

          <View style={styles.inputContainer}>
            <Text style={styles.label}>
              Password {renderAsterisk('password')}
            </Text>
            <View style={styles.passwordInputContainer}>
              <TextInput
                style={styles.passwordInput}
                value={password}
                onChangeText={(value) => setPassword(value)}
                placeholder="Enter your password"
                placeholderTextColor="#A9A9A9"
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                style={styles.eyeIconContainer}
              >
                <Icon
                  name={showPassword ? 'eye-off' : 'eye'}
                  size={24}
                  color="#A9A9A9"
                />
              </TouchableOpacity>
            </View>
            {errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>
              Confirm Password {renderAsterisk('confirmpassword')}
            </Text>
            <TextInput
              style={styles.input}
              value={confirmPassword}
              onChangeText={(value) => setConfirmPassword(value)}
              placeholder="Confirm your password"
              placeholderTextColor="#A9A9A9"
              secureTextEntry={!showPassword}
            />
            {errors.confirmpassword && (
              <Text style={styles.errorText}>
                {errors.confirmpassword}
              </Text>
            )}
          </View>

          {userType === 'technician' && (
            <>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Experience</Text>
                <TextInput
                  style={styles.input}
                  value={experience}
                  onChangeText={(value) => setExperience(value)}
                  placeholder="Enter your experience"
                  placeholderTextColor="#A9A9A9"
                />
                {errors.experience && (
                  <Text style={styles.errorText}>
                    {errors.experience}
                  </Text>
                )}
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>Skills</Text>
                <Tags
                  initialTags={skills}
                  onChangeTags={(tags) => setSkills(tags)}
                  onTagPress={(index) =>
                    handleSkillToggle(skills[index])
                  }
                  containerStyle={styles.tagsContainer}
                  inputContainerStyle={styles.tagInputContainer}
                  tagTextStyle={styles.tagText}
                  tagContainerStyle={styles.tagContainer}
                  deleteIconStyles={styles.deleteIcon}
                  deleteIconColor="#FFF"
                />
                {errors.skills && (
                  <Text style={styles.errorText}>
                    {errors.skills}
                  </Text>
                )}
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>Certifications</Text>
                <View style={styles.certificationsContainer}>
                  {certifications.map((cert, index) => (
                    <View key={index} style={styles.certificationItem}>
                      <Text style={styles.certificationText}>
                        {cert}
                      </Text>
                    </View>
                  ))}
                  <TouchableOpacity
                    onPress={handleDocumentUpload}
                    style={styles.uploadButton}
                  >
                    <Icon
                      name="upload"
                      size={24}
                      color="#FFF"
                      style={styles.uploadIcon}
                    />
                  </TouchableOpacity>
                </View>
                {errors.certifications && (
                  <Text style={styles.errorText}>
                    {errors.certifications}
                  </Text>
                )}
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>Availability</Text>
                <Picker
                  selectedValue={availability}
                  style={styles.input}
                  onValueChange={(itemValue) =>
                    setAvailability(itemValue)
                  }
                >
                  {availabilityOptions.map((option) => (
                    <Picker.Item
                      key={option.value}
                      label={option.label}
                      value={option.value}
                    />
                  ))}
                </Picker>
                {errors.availability && (
                  <Text style={styles.errorText}>
                    {errors.availability}
                  </Text>
                )}
              </View>
            </>
          )}

          <TouchableOpacity
            style={styles.submitButton}
            onPress={handleRegister}
          >
            <Text style={styles.submitButtonText}>Register</Text>
          </TouchableOpacity>

          {loading && (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#fff" />
            </View>
          )}

          <Modal
            visible={isSuccessModalVisible}
            transparent={true}
            animationType="slide"
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalInnerContainer}>
                <Text style={styles.modalText}>
                  Registration Successful!
                </Text>
                <Button
                  title="Go to Login"
                  onPress={() => navigation.navigate('Login')}
                />
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 30,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    color: '#fff',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 5,
    color: '#000',
  },
  genderLabel: {
    marginBottom: 10,
  },
  genderContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  radioButtonLabel: {
    color: '#fff',
    marginLeft: 5,
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 12,
    color: '#000',
  },
  eyeIconContainer: {
    padding: 10,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
    marginBottom: 15,
  },
  tagInputContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 5,
    minWidth: 150,
    marginRight: 10,
    marginBottom: 10,
  },
  tagText: {
    color: '#000',
  },
  tagContainer: {
    backgroundColor: '#1CE6DA',
    borderRadius: 5,
    padding: 8,
    marginRight: 10,
    marginBottom: 10,
  },
  deleteIcon: {
    marginLeft: 5,
  },
  certificationsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15,
  },
  certificationItem: {
    backgroundColor: '#1CE6DA',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  certificationText: {
    color: '#fff',
  },
  uploadButton: {
    backgroundColor: '#2567E8',
    borderRadius: 5,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginBottom: 10,
  },
  uploadIcon: {
    paddingHorizontal: 5,
  },
  submitButton: {
    backgroundColor: '#1CE6DA',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 10,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  loadingContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -25 }, { translateY: -25 }],
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalInnerContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  asterisk: {
    color: 'red',
    fontSize: 16,
    marginLeft: 5,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 5,
  },
});

export default SignUpScreen;
