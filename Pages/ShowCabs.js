import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS } from '../Constants/COLORS';
import { useEffect, useState } from 'react';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MainInputs from '../Components/MainInputs';
import { Button } from 'react-native-paper';
import { SIZE } from '../Constants/Size';
import CabsList from '../Components/CabsList';
import { dataToMap } from '../Constants/List';


export default function ShowCabs() {

    const insets = useSafeAreaInsets();
    const [isLoading, setIsLoading] = useState(false);
    const navigation = useNavigation()

    const [pickedDate, setPickedDate] = useState('');

    useEffect(() => {
        const fetchSelectedDate = async () => {
            try {
                const selectedDate = await AsyncStorage.getItem('selectedDate');
                if (selectedDate !== null) {
                    const parsedDate = JSON.parse(selectedDate);
                    setPickedDate(parsedDate);
                }
            } catch (error) {
                console.log('Error retrieving selected date:', error);
            }
        };

        fetchSelectedDate();
    }, []);

    return (
        <SafeAreaProvider style={{ paddingTop: 50, paddingBottom: insets.bottom, backgroundColor: 'white' }}>
            <View style={{ marginBottom: 18, paddingHorizontal: 16, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }} onPress={() => navigation.goBack()}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                    <TouchableOpacity>
                        <Ionicons onPress={() => navigation.goBack()} name="arrow-back" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={{ fontWeight: '700', fontSize: 16 }}>28 Feb 2024</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                    <Text style={{ fontWeight: '700', fontSize: 16, color: COLORS.btn__color }}>Change Date</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.small__btn, paddingHorizontal: 6, paddingVertical: 6, borderRadius: 4 }}>
                        <AntDesign name="filter" size={18} color="black" />
                        <Text>Filter</Text>
                    </View>
                </View>
            </View>

            <ScrollView>
                <View style={{ backgroundColor: 'white', paddingLeft: 18, paddingRight: 18, marginTop: 18 }}>

                    <View style={{ marginTop: -12 }}>
                        <MainInputs />
                    </View>

                    <View style={{ marginTop: 12 }}>
                        <Button loading={isLoading} style={{ borderRadius: SIZE.borderRadius, paddingVertical: 12, backgroundColor: COLORS.btn__color }} rippleColor={'orangered'} textColor='white' mode="contained" >
                            Search
                        </Button>
                    </View>
                </View>

                <View style={{ marginTop: 20 }}>
                    {
                        dataToMap && dataToMap?.map((items, index) => {
                            return (
                                <View style={{ paddingHorizontal: 18, flexDirection: 'column', marginBottom: 12 }} key={index}>
                                    <CabsList data={items} style={{ marginBottom: 12 }} />
                                </View>
                            )
                        })
                    }
                </View>
            </ScrollView>
        </SafeAreaProvider >

    );
}


