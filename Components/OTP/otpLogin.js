import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import OtpInput from "./otpInput";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { Button } from "react-native-paper";
import { SIZE } from "../../Constants/Size";
import { COLORS } from "../../Constants/COLORS";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


const PhoneOtpForm = ({ route }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');


    useEffect(() => {
        const { phoneNumber } = route.params;
        setPhoneNumber(phoneNumber);
    }, [])

    const insets = useSafeAreaInsets();

    const navigation = useNavigation();

    const onOtpSubmit = (otp) => {
        console.log("Login Successful", otp);


    };

    return (
        <SafeAreaProvider style={{ paddingTop: insets.top, paddingBottom: insets.bottom, backgroundColor: 'white' }}>

            <View style={{ paddingLeft: 18, paddingRight: 18, marginTop: 18 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons onPress={() => navigation.goBack()} name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <View style={{ backgroundColor: 'white', paddingLeft: 18, paddingRight: 18, marginTop: 94, marginBottom: 20 }}>
                <Text style={{ fontWeight: 500, fontSize: SIZE.text__size }}>Enter 4 Digit OTP sent to {phoneNumber}</Text>
                <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
            </View>

            <View>
                <View style={{ padding: 10 }}>
                    <Button loading={isLoading} style={{ borderRadius: SIZE.borderRadius, paddingVertical: 12, backgroundColor: COLORS.btn__color }} rippleColor={'orangered'} textColor='white' mode="contained" onPress={() => setIsLoading(!isLoading)}>Send OTP</Button>
                </View>
            </View>
        </SafeAreaProvider>
    );
};

export default PhoneOtpForm;
