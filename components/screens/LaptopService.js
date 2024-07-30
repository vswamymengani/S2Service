import React,  { useState, useEffect }  from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import laptop from '../assets/laptop.jpeg';
import Offer from '../assets/Offer.png';
import Ionicons from 'react-native-vector-icons/Ionicons';

const LaptopService = ({ navigation, route }) => {
    
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
  
    const fetchData = async () => {
        try {
            const response = await fetch(`http://10.0.2.2:3000/api/LaptopService`);
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

const handleServicePress = (service) => {
    if (service.screen) {
        navigation.navigate(service.screen);
    } else {
        navigation.navigate('ServiceDetails', { serviceId: service.id });
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
              <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
         <Image source={laptop} style={styles.image} />
       <Text style={styles.title}>Laptop Repair & Service</Text>
       <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalScroll}>
       <View style={styles.buttonContainer}>
               
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Save 10% on every order</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>CRED cashback up to ₹500</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Buy more save more₹100 off 2nd item onwards</Text>

                </TouchableOpacity>
            </View>
            </ScrollView>
        <View style={styles.servicesContainer}>
            {services.map((service) => (
                <TouchableOpacity
                    key={service.id}
                    style={styles.serviceItem}
                    onPress={() => handleServicePress(service)}>

                    <Image source={{ uri: `http://10.0.2.2:3000/api/image/${service.id}` }} style={styles.serviceImage} />
                    <Text style={styles.serviceText}>{service.name}</Text>
                    <Text style={styles.serviceText}>{service.warranty}</Text>
                    <Text style={styles.serviceText}>{service.rating}</Text>
                    <Text style={styles.serviceText}>{service.reviews}</Text>
                    <Text style={styles.serviceText}>{service.price}</Text>
                    <Text style={styles.serviceText}>{service.description}</Text>
                    {/* <Text style={styles.serviceText}>{service.image}</Text> */}
                </TouchableOpacity>
                
            ))}
        </View>
        {/* <Image source={Offer} style={styles.offerImage} /> */}
        <TouchableOpacity style={styles.bookButton} onPress={() => navigation.navigate('Scheduler')}>
        <Text style={styles.bookbuttonText}>Book</Text>
      </TouchableOpacity>
    </ScrollView>
);
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#F3F4F6',
        paddingBottom: 20,
    },
    
   
   title: {
        fontSize: 28,
        fontWeight: 'bold',
        left:10,
        fontWeight: 'bold',
        textAlign: 'left',
        marginTop: 0,
        bottom:20,
        color: 'blue',
    },
    image: {
        width: '100%',
        height: 160,
        marginBottom: 35,
        marginTop:0,
       
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        right:20,
    },
    button: {
        backgroundColor: '#caedd3',
        padding: 10,
        borderRadius: 5,
        flex: 1,
        marginHorizontal: 5,
        height:40,
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 13,
        color:'black',
        fontWeight:'bold',
    },
    horizontalScroll: {
        flexDirection: 'row',
        paddingHorizontal: 10,
    },
     servicesContainer: {
        flexDirection: '',
        flexWrap: '',
        justifyContent: '',
        padding: 0,
        marginBottom:0,
    },
    serviceItem: {
        width: '100%',
        height:200,
        marginVertical: 10,
        backgroundColor: 'white',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'left',
        padding: 10,
        
    },
    serviceImage: {
        width: 80,
        height: 80,
    },
    serviceText: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 0,
    },
    serviceText: {
        marginBottom: 10,
        bottom:30,
        fontSize: 16,
        color:'black',
        fontWeight: 'bold',
        left:10,
    },
    offerImage: {
        width: '100%',
        height: 140,
        marginBottom: 20,
      },
      offerText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
      },
    bookButton: {
        width: '60%',
        height: 50,
        backgroundColor: 'blue',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        left:75,
      },
      bookbuttonText: {
        color: 'white',
        fontSize: 20,
      }
});

export default LaptopService;
