import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Home = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const response = await fetch('http://10.0.2.2:3000/api/s2services'); // Ensure the port is correct
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

    const handleSearch = (text) => {
        setSearchQuery(text);
    };

    const filteredServices = services.filter(service =>
        service.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const categorizeServices = (category) => {
        return filteredServices.filter(service => service.category === category);
    };

    const handleServicePress = (service) => {
        if (service.screen) {
            navigation.navigate(service.screen);
        } else {
            navigation.navigate('ServiceDetails', { serviceId: service.id });
        }
    };

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <Text style={styles.loadingText}>Loading...</Text>
            </View>
        );
    }

    const noServicesAvailable = filteredServices.length === 0;

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.searchContainer}>
                {isSearchActive ? (
                    <TouchableOpacity onPress={() => {
                        setIsSearchActive(false);
                        setSearchQuery('');
                    }} style={styles.iconContainer}>
                        <Icon name="arrow-back" size={24} color="black" />
                    </TouchableOpacity>
                ) : (
                    <View style={styles.iconContainer}>
                        <Icon name="search" size={24} color="black" />
                    </View>
                )}
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search For Services"
                    value={searchQuery}
                    onFocus={() => setIsSearchActive(true)}
                    onChangeText={handleSearch}
                />
            </View>
            <Text style={styles.headingText1}>
                {'\u2605'} Save 15% on Every Service
            </Text>
            <View style={styles.welcomeBox}>
                <Image source={{ uri: 'https://example.com/images/welcomeBox.png' }} style={styles.Image} />
            </View>

            {noServicesAvailable ? (
                <Text style={styles.noServicesText}>No services available</Text>
            ) : (
                <>
                    {categorizeServices('Home Services').length > 0 && (
                        <View style={styles.sectionContainer}>
                            <Text style={styles.headingText2}>Home Services</Text>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalScroll}>
                                {categorizeServices('Home Services').map((service, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        style={styles.square}
                                        onPress={() => handleServicePress(service)}>
                                        <Image
                                            source={{ uri: `http://10.0.2.2:3000/api/image/${service.id}` }} // Ensure the port is correct
                                            style={styles.squareImage}
                                        />
                                        <Text style={styles.loginButtonText}>{service.name}</Text>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                        </View>
                    )}

                    {categorizeServices('Personal Services').length > 0 && (
                        <View style={styles.sectionContainer}>
                            <Text style={styles.headingText2}>Personal Services</Text>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalScroll}>
                                {categorizeServices('Personal Services').map((service, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        style={styles.square}
                                        onPress={() => handleServicePress(service)}>
                                        <Image
                                            source={{ uri: `http://10.0.2.2:3000/api/image/${service.id}` }} // Ensure the port is correct
                                            style={styles.squareImage}
                                        />
                                        <Text style={styles.loginButtonText}>{service.name}</Text>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                        </View>
                    )}

                    {categorizeServices('Trending Services').length > 0 && (
                        <View style={styles.sectionContainer}>
                            <Text style={styles.headingText2}>Trending Services</Text>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalScroll}>
                                {categorizeServices('Trending Services').map((service, index) => (
                                    <TouchableOpacity
                                        key={index}
                                        style={styles.square}
                                        onPress={() => handleServicePress(service)}>
                                        <Image
                                            source={{ uri: `http://10.0.2.2:3000/api/image/${service.id}` }} // Ensure the port is correct
                                            style={styles.squareImage}
                                        />
                                        <Text style={styles.loginButtonText}>{service.name}</Text>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                        </View>
                    )}
                </>
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#F3F4F6',
        paddingBottom: 20,
    },
    headingText1: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 100,
        color: 'blue',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 20,
        right: 20,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 8,
        paddingHorizontal: 10,
        zIndex: 1,
        marginTop: 30,
    },
    iconContainer: {
        paddingRight: 10,
    },
    searchInput: {
        flex: 1,
        height: '100%',
        color: 'black',
        fontSize: 16,
    },
    welcomeBox: {
        alignItems: 'center',
        marginVertical: 20,
    },
    headingText2: {
        fontSize: 23,
        fontWeight: 'bold',
        marginVertical: 10,
        color: 'black',
    },
    noServicesText: {
        fontSize: 18,
        color: 'red',
        textAlign: 'center',
        marginTop: 20,
    },
    sectionContainer: {
        marginVertical: 10,
    },
    horizontalScroll: {
        flexDirection: 'row',
        paddingHorizontal: 10,
    },
    square: {
        width: 80,
        height: 110,
        marginHorizontal: 5,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    squareImage: {
        width: 60,
        height: 60,
    },
    loginButtonText: {
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 5,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        fontSize: 20,
        color: 'gray',
    },
});

export default Home;
