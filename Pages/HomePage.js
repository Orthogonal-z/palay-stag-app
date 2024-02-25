import React, { useEffect, useState, lazy, Suspense } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SIZE } from '../Constants/Size';
import { COLORS } from '../Constants/COLORS';
import DiscountDisplay from '../Components/DiscountDisplay';
import PickupDropModal from '../Components/PickupDropModal';
import MainInputs from '../Components/MainInputs';
import { HomePageAPI } from '../ClientAPIs/HomePageAPI';

const UserLocation = lazy(() => import('../Components/UserLocation'));
// const DiscountDisplay = lazy(() => import('../Components/DiscountDisplay'));

const HomePage = ({ route }) => {
    useEffect(() => {

        const fetchData = async () => {
            try {
                const user_id = await AsyncStorage.getItem('user_id');
                const user_token = await AsyncStorage.getItem('user_token');
                const user_isAdmin = await AsyncStorage.getItem('user_isAdmin');

            } catch (error) {
                console.error('Error AsyncStorage data - Homepage:', error);
            }
        };

        fetchData();

    }, []);

    const insets = useSafeAreaInsets();
    const navigation = useNavigation();
    const [isLoading, setIsLoading] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleOpenModal = () => {
        setIsModalVisible(!isModalVisible);
    }

    const handleInputsSearch = async () => {
        try {
            const pick = JSON.parse(await AsyncStorage.getItem('pickValues'));
            const going = JSON.parse(await AsyncStorage.getItem('goingValues'));

            // Extract latitude and longitude from pick and going objects
            const pickLat = pick.pickLat;
            const pickLong = pick.pickLong;
            const dropLat = going.dropLat;
            const dropLong = going.dropLong;


            const dataToSend = {
                "pickup": {
                    "latitude": pickLat,
                    "longitude": pickLong
                },
                "drop": {
                    "latitude": dropLat,
                    "longitude": dropLong
                }
            };

            console.log("Data to Send:", dataToSend);

            HomePageAPI.fetchAllVehicles(dataToSend).then((response) => {
                if (response.status) {
                    console.log('COOOOOOOL')
                } else {
                    console.log('NOT COOOOOOOL')
                }
            })

        } catch (error) {
            console.error('Error handling input search:', error);
        }
    };

    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <SafeAreaProvider style={{ paddingTop: insets.top, paddingBottom: insets.bottom, backgroundColor: 'white' }}>

                <View style={{ backgroundColor: 'white', paddingLeft: 18, paddingRight: 18, marginTop: 18 }}>
                    <Suspense fallback={<Text>Loading...</Text>}>
                        <UserLocation />
                    </Suspense>

                    <View>
                        <Text style={{ fontSize: 32, fontWeight: '500', marginTop: 10, marginBottom: 20 }}>PALAY</Text>
                    </View>

                    <MainInputs />

                    {/* Hit Search Button */}
                    <View style={{ marginTop: 28 }}>
                        <Button onPress={handleInputsSearch} loading={isLoading} style={{ borderRadius: SIZE.borderRadius, paddingVertical: 12, backgroundColor: COLORS.btn__color }} rippleColor={'orangered'} textColor='white' mode="contained" >
                            Search
                        </Button>
                    </View>

                    <DiscountDisplay />

                </View>

                {/* Modal */}
                <PickupDropModal visible={isModalVisible} hideModal={() => setIsModalVisible(false)} />

            </SafeAreaProvider>
        </ScrollView>

    )
}

export default HomePage;
