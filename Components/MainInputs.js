import { View, Text, Pressable, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FontAwesome, Ionicons, Entypo } from '@expo/vector-icons';
import { useFocusEffect, useIsFocused, useNavigation } from '@react-navigation/native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { SIZE } from '../Constants/Size';
import { COLORS } from '../Constants/COLORS';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MainInputs = ({ route }) => {

    const isFocused = useIsFocused();

    useEffect(() => {
        isFocused && pickupValFromSearch() && goingValFromSearch()
    }, [isFocused]);

    const navigation = useNavigation()

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());

    const formatDate = (dateString) => {
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        const date = new Date(dateString);
        return `${date.toLocaleString('en-IN', options)}`;
    };

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
        hideDatePicker();
    };


    // For Pickup Values
    const [pickVal, setPickVal] = useState('');

    const pickupValFromSearch = async () => {
        const pickName = await AsyncStorage?.getItem('pickValuesName');
        setPickVal(pickName);
    }

    // For Going Values
    const [goingVal, setGoingVal] = useState('');

    const goingValFromSearch = async () => {
        const goName = await AsyncStorage?.getItem('goingValuesName');
        setGoingVal(goName);
    }

    const handleShowLimitedStrings = (text) => {
        if (text.length > 25) {
            return text.substring(0, 27) + '..';
        } else {
            return text;
        }
    };

    return (
        <View>
            <View>
                <View>
                    <View style={{ flexDirection: 'column', gap: 10 }}>

                        {/* Pickup Search Bar */}
                        <Pressable onPress={() => navigation.navigate('searchpage', { item: 'fromPickup', })} style={{ flexDirection: 'row', alignItems: 'center', gap: 10, backgroundColor: '#EFEFEF', paddingHorizontal: 12, paddingVertical: 18, borderRadius: SIZE.borderRadius, justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', gap: 10 }}>
                                <Ionicons name="search-outline" size={24} color={COLORS.searchIcon__color} />
                                {
                                    pickVal ?
                                        <Text style={{ fontSize: 18, fontWeight: '500' }}>
                                            {handleShowLimitedStrings(JSON.parse(pickVal).searchPickupQuery)}
                                        </Text>
                                        :
                                        <Text style={{ fontSize: 18}}>
                                            Pickup From
                                        </Text>
                                }
                            </View>
                            <Pressable onPress={() => setPickVal('')}>
                                <Entypo style={{ marginLeft: 20 }} name="cross" size={24} color="orangered" />
                            </Pressable>
                        </Pressable >


                        {/* Drop Search Bar */}
                        <Pressable
                            onPress={() => navigation.navigate('searchpage', { item: 'fromGoing', })}
                            style={{ flexDirection: 'row', alignItems: 'center', gap: 3, backgroundColor: '#EFEFEF', paddingHorizontal: 12, paddingVertical: 18, borderRadius: SIZE.borderRadius, justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', gap: 10 }}>
                                <Ionicons name="search-outline" size={24} color={COLORS.searchIcon__color} />
                                {
                                    goingVal ?
                                        <Text style={{ fontSize: 18, fontWeight: '500' }}>
                                            {handleShowLimitedStrings(JSON.parse(goingVal).searchPickupQuery)}
                                        </Text>
                                        :
                                        <Text style={{ fontSize: 18}}>
                                            Dropping Location
                                        </Text>
                                }
                            </View>
                            <Pressable onPress={() => setGoingVal('')}>
                                <Entypo name="cross" size={24} color="orangered" />
                            </Pressable>
                        </Pressable>
                    </View>
                </View>
            </View>

            <View style={{ marginTop: 28, flexDirection: 'column', gap: 28 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <FontAwesome name="calendar-minus-o" size={24} color="black" />
                        <Text style={{ fontSize: 16 }}>Select Date</Text>
                    </View>
                    <View>
                        <Pressable style={{ backgroundColor: COLORS.small__btn, width: 150, borderWidth: 0, borderRadius: SIZE.borderRadius }} mode="contained" onPress={showDatePicker}>
                            <Text style={{ paddingVertical: 16, textAlign: 'center', fontWeight: '700' }}>
                                {selectedDate ? formatDate(selectedDate) : 'Select'}
                            </Text>
                        </Pressable>
                    </View>

                </View>

                {/* <View><Button title='fetch' onPress={pickupValFromSearch} /></View> */}
            </View>

            <DateTimePicker
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                locale="en-IN"
            />

        </View>
    )
}

export default MainInputs