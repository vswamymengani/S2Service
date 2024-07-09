import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Alert } from 'react-native';
import { Icon } from 'react-native-elements';
import axios from 'axios';

const ChangePhoneNumberScreen = ({ navigation, route }) => {
    // const email = route.params.email;
    const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
    const [feedbackType, setFeedbackType] = useState(null);

    // useEffect(() => {
    //     const fetchProfile = async () => {
    //         try {
    //             const response = await axios.get(`http://10.0.2.2:3000/profile?email=${email}`);
    //             console.log('API Response:', response.data);
    //         } catch (error) {
    //             console.error('Error fetching profile:', error);
    //         }
    //     };

    //     fetchProfile();
    // }, [email]);

    const handleChangePhoneNumber = () => {
        navigation.navigate('EditProfile');
    };

    const handleFeedback = (type) => {
        setFeedbackType(type);
        setFeedbackSubmitted(true);
        const message = type === 'liked' ? 'Thank you for liking this article!' : 'We appreciate your feedback!';
        Alert.alert('Feedback Submitted', message);
    };

    const goBack = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.subHeader}>
                You can change your phone number from the profile section after verifying it with an OTP.
            </Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EditProfile')}>
                <Text style={styles.buttonText}>Change Phone Number</Text>
            </TouchableOpacity>
            {!feedbackSubmitted && (
                <View style={styles.feedbackContainer}>
                    <Text style={styles.feedbackText}>Was this article helpful?</Text>
                    <View style={styles.feedbackButtons}>
                        <TouchableOpacity style={styles.feedbackButton} onPress={() => handleFeedback('liked')}>
                            <Text style={styles.feedbackButtonText}>👍</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.feedbackButton} onPress={() => handleFeedback('disliked')}>
                            <Text style={styles.feedbackButtonText}>👎</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
            {feedbackSubmitted && (
                <View style={styles.feedbackSubmittedContainer}>
                    <Text style={styles.feedbackSubmittedText}>
                        Thank you for your feedback!
                        {feedbackType === 'liked' ? ' We are glad you found it helpful.' : ' We will work on improving it.'}
                    </Text>
                </View>
            )}
        </View>
    );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: width * 0.05,
        paddingVertical: height * 0.03,
        backgroundColor: '#fff',
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: height * 0.03,
    },
    backButton: {
        marginRight: width * 0.02,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: width * 0.02,
    },
    subHeader: {
        fontSize: 16,
        color: '#666',
        marginBottom: height * 0.02,
    },
    button: {
        backgroundColor: '#6C4BFF',
        paddingVertical: height * 0.02,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: height * 0.04,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    feedbackContainer: {
        alignItems: 'center',
        marginTop: height * 0.03,
    },
    feedbackText: {
        fontSize: 16,
        color: '#333',
        marginBottom: height * 0.01,
    },
    feedbackButtons: {
        flexDirection: 'row',
        marginTop: height * 0.02,
    },
    feedbackButton: {
        marginHorizontal: width * 0.02,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: width * 0.04,
        paddingVertical: height * 0.01,
    },
    feedbackButtonText: {
        fontSize: 24,
    },
    feedbackSubmittedContainer: {
        alignItems: 'center',
        marginTop: height * 0.03,
    },
    feedbackSubmittedText: {
        fontSize: 16,
        textAlign: 'center',
    },
});

export default ChangePhoneNumberScreen;
