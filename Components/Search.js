import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useSnackbar from '../Hooks/useSnackBar';

const Search = ({ route }) => {
    const [mainPageItem, setMainPageItem] = useState('');
    const navigation = useNavigation();
    const insets = useSafeAreaInsets();

    useEffect(() => {
        const { item } = route?.params;
        setMainPageItem(item);
    }, [route]);

    const handleSelect = useCallback(async (data, details) => {
        const { lat, lng } = details.geometry.location;
        const searchPickupQuery = data.description;
        const storageKey = mainPageItem === 'fromPickup' ? 'pickValues' : 'goingValues';
        const nameKey = mainPageItem === 'fromPickup' ? 'pickValuesName' : 'goingValuesName';

        try {
            if (mainPageItem === 'fromPickup') {
                await AsyncStorage.setItem(storageKey, JSON.stringify({ pickLat: lat, pickLong: lng }));
            } else {
                await AsyncStorage.setItem(storageKey, JSON.stringify({ dropLat: lat, dropLong: lng }));
            }
            await AsyncStorage.setItem(nameKey, JSON.stringify({ searchPickupQuery }));
            navigation.goBack();
        } catch (error) {
            console.error('Error storing data:', error);
        }
    }, [mainPageItem, navigation]);

    return (
        <SafeAreaProvider style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
            <ScrollView keyboardShouldPersistTaps='always' style={{ flex: 0, paddingLeft: 18, paddingRight: 18, marginTop: 18 }}>
                <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons onPress={() => navigation.goBack()} name="arrow-back" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 18, fontWeight: '600' }}>
                        {mainPageItem === 'fromPickup' ? 'Select Pickup Location' : 'Where are you going ?'}
                    </Text>
                </View>
                <View style={{ marginTop: 19 }}>
                    <GooglePlacesAutocomplete
                        listViewDisplayed={false}
                        fetchDetails={true}
                        placeholder='Search....'
                        onPress={handleSelect}
                        query={{
                            key: process.env.EXPO_PUBLIC_GOOGLE_KEY,
                            language: 'en',
                        }}
                        onFail={error => console.error(error)}
                    />
                </View>
            </ScrollView>


        </SafeAreaProvider>
    );
};

export default Search;
