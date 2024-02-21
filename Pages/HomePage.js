import React, { useEffect, useState, lazy, Suspense } from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import { Button } from 'react-native-paper';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SIZE } from '../Constants/Size';
import { COLORS } from '../Constants/COLORS';

// Lazy-loaded components
const UserLocation = lazy(() => import('../Components/UserLocation'));
const DiscountDisplay = lazy(() => import('../Components/DiscountDisplay'));

const HomePage = ({ route }) => {
    useEffect(() => {
        const SearchQuery = route?.params?.valueToSet ?? ""
        console.log(SearchQuery)
        const fetchData = async () => {
            try {
                const user_id = await AsyncStorage.getItem('user_id');
                const user_token = await AsyncStorage.getItem('user_token');
                const user_isAdmin = await AsyncStorage.getItem('user_isAdmin');

                console.log('HomePage--------', user_id, user_token, user_isAdmin);
            } catch (error) {
                console.error('Error AsyncStorage data - Homepage:', error);
            }
        };

        fetchData();

    }, []);

    const insets = useSafeAreaInsets();
    const navigation = useNavigation();

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [isLoading, setIsLoading] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        const selectedDateObject = new Date(date);
        const formattedDate = selectedDateObject.toISOString().split('T')[0];
        setSelectedDate(formattedDate);
        console.log(formattedDate)
        hideDatePicker();
    };

    const formatDate = (dateString) => {
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        const date = new Date(dateString);
        return `${date.toLocaleString('en-IN', options)}`;
    };

    return (
        <SafeAreaProvider style={{ paddingTop: insets.top, paddingBottom: insets.bottom, backgroundColor: 'white' }}>
            <ScrollView>
                <View style={{ backgroundColor: 'white', paddingLeft: 18, paddingRight: 18, marginTop: 18 }}>
                    <Suspense fallback={<Text>Loading...</Text>}>
                        <UserLocation />
                    </Suspense>

                    <View>
                        <Text style={{ fontSize: 32, fontWeight: '500', marginTop: 10, marginBottom: 20 }}>Palay</Text>
                    </View>

                    {/* Search Inputs */}
                    <View>
                        <View>
                            <View style={{ flexDirection: 'column', gap: 10 }}>
                                <Pressable onPress={() => navigation.navigate('searchpage', { item: 'select', })} style={{ flexDirection: 'row', alignItems: 'center', gap: 10, backgroundColor: '#EFEFEF', paddingHorizontal: 12, paddingVertical: 18, borderRadius: SIZE.borderRadius }}>
                                    <Ionicons name="search-outline" size={24} color={COLORS.searchIcon__color} />
                                    <Text style={{ fontSize: 18, width: 400 }} >Pickup From</Text>
                                </Pressable >

                                <Pressable onPress={() => navigation.navigate('searchpage')} style={{ flexDirection: 'row', alignItems: 'center', gap: 10, backgroundColor: '#EFEFEF', paddingHorizontal: 12, paddingVertical: 18, borderRadius: SIZE.borderRadius }}>
                                    <Ionicons name="search-outline" size={24} color={COLORS.searchIcon__color} />
                                    <Text style={{ fontSize: 18 }}>Going To</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>

                    {/* Time, Date, Passengers */}
                    <View style={{ marginTop: 28, flexDirection: 'column', gap: 28 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                <FontAwesome name="calendar-minus-o" size={24} color="black" />
                                <Text style={{ fontSize: 16 }}>Select Date</Text>
                            </View>
                            <View>
                                <Pressable style={{ backgroundColor: COLORS.small__btn, width: 150, borderWidth: 0, borderRadius: SIZE.borderRadius }} mode="contained" onPress={showDatePicker}>
                                    <Text style={{ paddingVertical: 16, textAlign: 'center' }}>
                                        {selectedDate ? formatDate(selectedDate) : 'Select'}
                                    </Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>

                    {/* Hit Search Button */}
                    <View style={{ marginTop: 28 }}>
                        <Button loading={isLoading} style={{ borderRadius: SIZE.borderRadius, paddingVertical: 12, backgroundColor: COLORS.btn__color }} rippleColor={'orangered'} textColor='white' mode="contained" onPress={() => setIsLoading(!isLoading)}>
                            Search
                        </Button>
                    </View>

                    {/* Banners and Info */}
                    <Suspense fallback={<Text>Loading banners...</Text>}>
                        <DiscountDisplay />
                    </Suspense>

                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                        locale="en-IN"
                    />
                </View>

                <View style={{ paddingLeft: 18, paddingRight: 18, marginTop: 18, marginBottom: 18 }}>
                    <Text style={{ fontSize: 38, fontWeight: 900, color: '#ADADAD' }}>Made With</Text>
                    <Text style={{ fontSize: 40, fontWeight: 900, color: '#ADADAD' }}>Love ❤️</Text>
                    <Text style={{ fontSize: 42, fontWeight: 900, color: '#ADADAD' }}>in <Text style={{ fontSize: 42, fontWeight: 900, color: COLORS.btn__color }}>Dehradun</Text></Text>
                </View>
            </ScrollView>
        </SafeAreaProvider>
    )
}

export default HomePage;
