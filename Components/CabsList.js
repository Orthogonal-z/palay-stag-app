import { View, Text, Image } from 'react-native'
import React from 'react'
import { COLORS } from '../Constants/COLORS'

export default function CabsList({ data }) {

    // driverImg: '',
    //     driverName: 'Prashant Mali',
    //         driverRatings: '4.2',
    //             driverCar: 'Swift Dzire',
    //                 pickupFrom: 'Jhilmil',
    //                     drop: 'Hardiwar',
    //                         pickupTime: '01:30 PM',
    //                             dropTime: '06:30 PM',
    //                                 vehicleNumber: 'DL MUUBETE',
    //                                     price: '₹ 500',

    return (
        <View style={{ backgroundColor: '#EFEFEF', borderRadius: 10 }}>
            <View>
                <Image />
                <Text>{data.driverName}</Text>
                <Text>{data.driverRatings}</Text>
                <Text>{data.driverCar}</Text>
                <Text>{data.pickupFrom}</Text>
                <Text>{data.drop}</Text>
                <Text>{data.pickupTime}</Text>
                <Text>{data.dropTime}</Text>
                <Text>{data.vehicleNumber}</Text>
                <Text>{data.price}</Text>
            </View>
        </View>
    )
}