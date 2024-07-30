import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ServiceDetails = ({ route }) => {
    const { appliancerepairId } = route.params;
    const [serviceDetails, setServiceDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();

    const fetchServiceDetails = async () => {
        try {
            const response = await fetch(`http://10.0.2.2:3000/api/Appliancerepair/${appliancerepairId}`);
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            const data = await response.json();
            setServiceDetails(data);
        } catch (error) {
            console.error('Error fetching service details:', error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchServiceDetails();
    }, []);

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <Text style={styles.loadingText}>Loading...</Text>
            </View>
        );
    }

    if (!serviceDetails) {
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
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>{serviceDetails.name}</Text>
            <Image
                source={{ uri: `http://10.0.2.2:3000/api/image/${appliancerepairId}` }}
                style={styles.image}
            />
            <Text style={styles.description}>{serviceDetails.description}</Text>
            {/* Add other service details here */}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#F3F4F6',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 20,
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
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
    },
    loadingText1: {
        fontSize: 16,
        color: 'gray',
        fontWeight: 'bold',
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
    },
});

export default ServiceDetails;
