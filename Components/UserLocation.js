import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import * as Location from 'expo-location';
import { FontAwesome6 } from '@expo/vector-icons';
import { COLORS } from '../Constants/COLORS';
import { ActivityIndicator } from 'react-native-paper';


const UserLocation = () => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [locationName, setLocationName] = useState(null);
    const [userLocationEverything, setUserLocationEverything] = useState('');

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);

            // Fetch location name based on latitude and longitude
            fetchLocationName(location.coords.latitude, location.coords.longitude);
        })();
    }, []);

    const fetchLocationName = async (latitude, longitude) => {
        try {
            let location = await Location.reverseGeocodeAsync({ latitude, longitude });
            if (location && location.length > 0) {
                setUserLocationEverything(location[0]);
                const { formattedAddress, district, city, region, postalCode, country } = location[0];
                setLocationName(`${district ? district : ''}, ${city ? city : ''}, ${postalCode ? postalCode : ''}`);
            }
        } catch (error) {
            console.error('Error fetching location name: ', error);
        }
    };

    let text = <ActivityIndicator size='small' animating={true} color={COLORS.btn__color} />;;
    if (errorMsg) {
        text = errorMsg;
    } else if (locationName) {
        text = locationName;
    }

    

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
            <FontAwesome6 name="location-arrow" size={24} color={COLORS.text__color} />
            <Text>{text}</Text>
        </View>
    );
};

export default UserLocation;
