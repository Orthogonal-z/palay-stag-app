import { View, Text, Image } from 'react-native';
import { COLORS } from '../Constants/COLORS';
import { AntDesign } from '@expo/vector-icons';
import { handleShowLimitedStrings } from '../Hooks/showLimitedString';
import { LinearGradient } from 'expo-linear-gradient';

export default function CabsList({ data }) {

    return (
        <View style={{
            borderWidth: 1, borderColor: COLORS.tab__color, paddingHorizontal: 12, paddingVertical: 12, borderRadius: 12, shadowColor: "#000", shadowOffset: {
                width: 0,
                height: 2,
            }, shadowOpacity: 0.23, shadowRadius: 2.62,
        }}>
            <View>

                <View style={{ marginBottom: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

                    <LinearGradient
                        colors={['#FF4700', '#FFBBA1']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={{ borderRadius: 4 }}
                    >
                        <Text
                            style={{ color: 'white', paddingHorizontal: 6, paddingVertical: 2 }}
                        >
                            Palay Discount
                        </Text>
                    </LinearGradient>

                    <LinearGradient
                        colors={['#15C000', '#ABFFA1']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 3 }}
                        style={{ borderRadius: 4 }}
                    >
                        <Text style={{ color: 'white', borderRadius: 4, paddingHorizontal: 6, paddingVertical: 2, textAlign: 'center', fontSize: 12 }}>Low Price</Text>
                    </LinearGradient>

                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                        <Image style={{ height: 40, width: 40, borderRadius: 60 }} source={{ uri: data.driverImg }} />
                        <Text style={{ fontWeight: '600', fontSize: 16 }}>{data.driverName}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                        <AntDesign name="star" size={18} color="orange" />
                        <Text>{data.driverRatings}</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 12, gap: 14 }}>
                    <View style={{ flexDirection: 'columns', backgroundColor: COLORS.bg__color, paddingHorizontal: 8, paddingVertical: 8, borderRadius: 8 }}>
                        <Text style={{ fontSize: 14, fontWeight: '500', color: COLORS.tab__color }}>{handleShowLimitedStrings(data.pickupFrom, 16, 16)}</Text>
                        <Text>{data.pickupTime}</Text>
                    </View>

                    <View>
                        <Text style={{ fontWeight: '900' }}>6 hrs</Text>
                    </View>


                    <View style={{ flexDirection: 'columns', backgroundColor: COLORS.bg__color, paddingHorizontal: 8, paddingVertical: 8, borderRadius: 8 }}>
                        <Text style={{ fontSize: 14, fontWeight: '500', color: COLORS.tab__color }}>{handleShowLimitedStrings(data.drop, 16, 16)}</Text>
                        <Text>{data.dropTime}</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 12, gap: 12, justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        {/* <Image style={{ height: 70, width: 70, resizeMode: 'contain', marginTop: 16, marginLeft: -14 }} source={require('../assets/car.png')} /> */}
                        <View>
                            <Text style={{ fontWeight: '700', fontSize: 18 }}>{data.driverCar}</Text>
                            {/* <Text style={{ backgroundColor: COLORS.btn__color, color: 'white', paddingHorizontal: 4 }}>{data.vehicleNumber}</Text> */}
                        </View>
                    </View>

                    <View>
                        <Text style={{ fontSize: 18, fontWeight: '600' }}>{data.price}</Text>
                    </View>
                </View>

            </View>
        </View>
    );
}
