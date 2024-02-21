import { View, Text, ScrollView, Pressable, Image } from 'react-native'
import React from 'react'
import { images } from '../Constants/List'
import { SliderBox } from 'react-native-image-slider-box'
import { COLORS } from '../Constants/COLORS'


const HomeCarousal = () => {
    return (
        <ScrollView>
            <View style={{
                marginTop: 18,
                marginBottom: 12,
                borderRadius: 10
            }}>
                <SliderBox images={images}
                    autoPlay
                    circleLoop
                    dotColor={COLORS.btn__color}
                    inactiveDotColor={COLORS.bg__color}
                    ImageComponentStyle={{ width: '100%' }}
                />
            </View>

        </ScrollView>
    )
}

export default HomeCarousal