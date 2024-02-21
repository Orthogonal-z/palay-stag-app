import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import OtpInput from "./otpInput";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { Button } from "react-native-paper";

const PhoneOtpForm = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [showOtpInput, setShowOtpInput] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const insets = useSafeAreaInsets();

    const onOtpSubmit = (otp) => {
        console.log("Login Successful", otp);


    };

    return (
        <SafeAreaProvider style={{ paddingTop: insets.top, paddingBottom: insets.bottom, backgroundColor: 'white' }}>
            <View style={{ backgroundColor: 'white', paddingLeft: 18, paddingRight: 18, marginTop: 4 }}>
                <Text>Enter OTP sent to {phoneNumber}</Text>
                <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
            </View>

            <View>
                <View style={{ marginTop: 20 }}>
                    <Button loading={isLoading} style={{ borderRadius: SIZE.borderRadius, paddingVertical: 12, backgroundColor: COLORS.btn__color }} rippleColor={'orangered'} textColor='white' mode="contained" onPress={() => setIsLoading(!isLoading)}>Send OTP</Button>
                </View>
            </View>
        </SafeAreaProvider>
    );
};

export default PhoneOtpForm;
