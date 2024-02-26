import { View, Text, Pressable, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons, Entypo } from '@expo/vector-icons';
import { useFocusEffect, useIsFocused, useNavigation } from '@react-navigation/native';
import { SIZE } from '../Constants/Size';
import { COLORS } from '../Constants/COLORS';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MainInputs = ({ route }) => {

    const isFocused = useIsFocused();

    useEffect(() => {
        isFocused && pickupValFromSearch() && goingValFromSearch()
    }, [isFocused]);

    const navigation = useNavigation()

    // For Pickup Values
    const [pickVal, setPickVal] = useState('');

    const pickupValFromSearch = async () => {
        const pickName = await AsyncStorage?.getItem('pickValuesName');
        setPickVal(pickName);
    }

    // For Dropping Values
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
                        <Pressable onPress={() => navigation.navigate('searchpage', { item: 'fromPickup', })} style={{
                            flexDirection: 'row', alignItems: 'center', gap: 10, backgroundColor: '#EFEFEF', paddingHorizontal: 12, paddingVertical: 18, borderRadius: SIZE.borderRadius, justifyContent: 'space-between', borderBottomColor: 'gray',
                            borderBottomWidth: 1
                        }}>
                            <View style={{ flexDirection: 'row', gap: 10 }}>
                                <Ionicons name="search-outline" size={24} color={COLORS.searchIcon__color} />
                                {
                                    pickVal ?
                                        <Text style={{ fontSize: 18, fontWeight: '500' }}>
                                            {handleShowLimitedStrings(JSON.parse(pickVal).searchPickupQuery)}
                                        </Text>
                                        :
                                        <Text style={{ fontSize: 18 }}>
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
                            style={{
                                borderBottomColor: 'gray',
                                borderBottomWidth: 1, flexDirection: 'row', alignItems: 'center', gap: 3, backgroundColor: '#EFEFEF', paddingHorizontal: 12, paddingVertical: 18, borderRadius: SIZE.borderRadius, justifyContent: 'space-between'
                            }}>
                            <View style={{ flexDirection: 'row', gap: 10 }}>
                                <Ionicons name="search-outline" size={24} color={COLORS.searchIcon__color} />
                                {
                                    goingVal ?
                                        <Text style={{ fontSize: 18, fontWeight: '500' }}>
                                            {handleShowLimitedStrings(JSON.parse(goingVal).searchPickupQuery)}
                                        </Text>
                                        :
                                        <Text style={{ fontSize: 18 }}>
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
        </View>
    )
}

export default MainInputs