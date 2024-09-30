import { View, Text, ScrollView, Pressable } from 'react-native';
import React from 'react';
import { Image } from 'expo-image';
import discountImage from '../assets/discount.png'
import { SIZE } from '../Constants/Size';


const DiscountDisplay = () => {

    const listOfItems = [
        { title: 'Intercity' },
        { title: 'Off Road' },
        { title: 'Long Drive' },
        { title: 'For Self' },
        { title: 'With Driver' },
        { title: 'Per Hour' },
    ]

    const handlePressOnMoreCabs = (title) => {
        console.log(title);
    }
    return (
        <View>

            <View>
                <Text style={{ fontSize: 18, fontWeight: 600, marginTop: 12 }}>More Cabs</Text>
                <Text>search for more cabs</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={{ flexDirection: 'row', gap: 14, marginTop: 12 }}>
                        {listOfItems.map((items, index) => {
                            return <Pressable onPress={() => handlePressOnMoreCabs(items.title)} key={index} style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }}>
                                <View style={{ backgroundColor: '#F5F5F5', borderRadius: 8, padding: 12 }}>
                                    <Image
                                        style={{ width: 40, height: 40 }}
                                        source={require('../assets/cab.png')}
                                    />
                                </View>
                                <Text style={{ textAlign: 'center', fontWeight: 600, marginTop: 8 }}>{items.title}</Text>
                            </Pressable>
                        })}
                    </View>
                </ScrollView>
            </View>


            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, backgroundColor: '#EFEFEF', paddingHorizontal: 14, paddingVertical: 12, borderRadius: SIZE.borderRadius, marginTop: 22 }}>
                <View>
                    <Image style={{ height: 90, width: 90 }} source={discountImage} />
                </View>

                <View>
                    <Text style={{ fontSize: 24, fontWeight: 800 }}>Get the first 20%</Text>
                    <Text>twenty percent discount on your</Text>
                    <Text>first trip from Cabbly</Text>
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
