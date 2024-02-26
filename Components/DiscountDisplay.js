import { View, Text, Image } from 'react-native';
import React from 'react';
import HomeCarousal from './HomeCarousal';
import discountImage from '../assets/discount.png'
import { COLORS } from '../Constants/COLORS';
import { SIZE } from '../Constants/Size';


const DiscountDisplay = () => {
    return (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, backgroundColor: '#EFEFEF', padding: 18, borderRadius: SIZE.borderRadius, marginTop: 22 }}>
                <View>
                    <Image style={{ height: 90, width: 90 }} source={discountImage} />
                </View>

                <View>
                    <Text style={{ fontSize: 24, fontWeight: 800 }}>Get the first 20%</Text>
                    <Text>twenty percent discount on your</Text>
                    <Text>first trip from Palay</Text>
                </View>


            </View>

            <View>
                <Text style={{ alignSelf: 'center', marginTop: 160 }}>Made with ❤️ in Dehradun, India</Text>
            </View>

            {/* <HomeCarousal /> */}

        </View>
    );
};

export default DiscountDisplay;
