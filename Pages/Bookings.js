import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS } from '../Constants/COLORS';
import { SegmentedButtons } from 'react-native-paper';
import { useState } from 'react';
import CurrentBookings from '../Components/Bookings/CurrentBookings';
import PreviouslyBookings from '../Components/Bookings/PreviouslyBookings';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function Bookings() {

    const insets = useSafeAreaInsets();

    const navigation = useNavigation()

    const [value, setValue] = useState('upcomingBook');


    return (
        <SafeAreaProvider style={{ paddingTop: 50, paddingBottom: insets.bottom, backgroundColor: 'white' }}>
            <ScrollView>

                <TouchableOpacity style={{ paddingHorizontal: 16 }} onPress={() => navigation.goBack()}>
                    <Ionicons onPress={() => navigation.goBack()} name="arrow-back" size={24} color="black" />
                </TouchableOpacity>

                <View style={{ backgroundColor: 'white', paddingLeft: 18, paddingRight: 18, marginTop: 18 }}>

                    <View style={{ flexDirection: 'column', gap: 10 }}>
                        <Text style={{ fontWeight: '700', fontSize: 28, color: COLORS.bookings__text }}>Your future bookings will appear here</Text>

                        {/* <Text style={{ fontWeight: '400', fontSize: 16, color: COLORS.bookings__text }}>Find the perfect ride from thousands of destinations</Text> */}
                    </View>


                    <View style={{ marginTop: 14 }}>
                        <SegmentedButtons
                            value={value}
                            onValueChange={setValue}
                            buttons={[
                                { value: 'upcomingBook', label: 'Bookings' },
                                { value: 'previousBook', label: 'Previously Bookings' },
                            ]}
                        />
                    </View>

                    {
                        value === 'upcomingBook' ? <CurrentBookings /> : <PreviouslyBookings />
                    }

                </View>
            </ScrollView>
        </SafeAreaProvider >
    );
}


