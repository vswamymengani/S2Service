import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';

const Chimneyservice = ({ navigation }) => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const response = await fetch('http://10.0.2.2:3000/api/ChimneyService'); // Ensure this matches your API route
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            const data = await response.json();
            setServices(data);
        } catch (error) {
            console.error('Error fetching data:', error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="blue" />
                <Text style={styles.loadingText}>Loading...</Text>
            </View>
        );
    }

    const handleServicePress = (service) => {
        navigation.navigate('ServiceDetails', { serviceId: service.id });
    };

    return (
        <View style={styles.loadingContainer}>
            <Text style={styles.loadingText}>Services you are looking for are</Text>
            <Text style={styles.loadingText}>currently not live in this location</Text>
            <Text style={styles.loadingText1}>Please change location or explore other</Text>
            <Text style={styles.loadingText1}>services on our homepage</Text>
            <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.loginButtonText}>Go to homepage</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F4F6',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    loadingText1: {
        fontSize: 16,
        color: 'gray',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    loginButton: {
        width: '60%',
        height: 50,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 20,
    },
    loginButtonText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
    },
});

export default Chimneyservice;
