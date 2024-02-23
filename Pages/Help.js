import { useNavigation } from '@react-navigation/native';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { SIZE } from '../Constants/Size';
import { COLORS } from '../Constants/COLORS';



export default function Help() {

    const insets = useSafeAreaInsets();

    const navigation = useNavigation();

    return (
        <SafeAreaProvider style={{ paddingTop: 50, paddingBottom: insets.bottom, backgroundColor: 'white' }}>
            <ScrollView>
                <View>
                    <View style={{ paddingHorizontal: 16 }}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Ionicons onPress={() => navigation.goBack()} name="arrow-back" size={24} color="black" />
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: 16 }}>
                        <View style={{ marginTop: 14, marginHorizontal: 16, borderRadius: SIZE.borderRadius, paddingVertical: 24, paddingHorizontal: 12, backgroundColor: COLORS.bg__color, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }} >
                            <Text style={{ fontWeight: '600' }}>Help regarding your previous bookings ?</Text>
                            <AntDesign name="arrowright" size={18} color="black" />
                        </View>

                        <View style={{ marginTop: 14, marginHorizontal: 16, borderRadius: SIZE.borderRadius, paddingVertical: 24, paddingHorizontal: 12, backgroundColor: COLORS.bg__color, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }} >
                            <Text style={{ fontWeight: '600' }}>Help regarding your upcoming bookings ?</Text>
                            <AntDesign name="arrowright" size={18} color="black" />
                        </View>

                        <View style={{ marginTop: 14, marginHorizontal: 16, borderRadius: SIZE.borderRadius, paddingVertical: 24, paddingHorizontal: 12, backgroundColor: COLORS.bg__color, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }} >
                            <Text style={{ fontWeight: '600' }}>Others</Text>
                            <AntDesign name="arrowright" size={18} color="black" />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaProvider>
    );
}

