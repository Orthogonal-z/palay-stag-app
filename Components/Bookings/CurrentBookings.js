import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const CurrentBookings = () => {
    return (
        <View style={{ marginTop: 42, alignSelf: 'center' }}>

            <View>
                <Image style={{ height: 220, width: 220, alignSelf: 'center', marginTop: 16, resizeMode: 'contain' }} source={require('../../assets/travel.png')} />

                <Text style={{ alignSelf: 'center', fontWeight: '500', fontSize: 18 }}>No current bookings Found</Text>
            </View>
        </View>
    )
}

export default CurrentBookings

const styles = StyleSheet.create({})