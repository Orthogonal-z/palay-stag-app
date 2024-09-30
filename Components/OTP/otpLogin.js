import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import OtpInput from "./otpInput";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { Button } from "react-native-paper";
import { SIZE } from "../../Constants/Size";
import { COLORS } from "../../Constants/COLORS";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { AuthAPIs } from "../../ClientAPIs/AuthenticationApis";
import useSnackbar from "../../Hooks/useSnackBar";
import AsyncStorage from "@react-native-async-storage/async-storage";


const PhoneOtpForm = ({ route }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');

    const { showSnackbar, SnackbarComponent } = useSnackbar();

    useEffect(() => {
        const { phoneNumber } = route.params;
        setPhoneNumber(phoneNumber);
    }, [])

    const insets = useSafeAreaInsets();

    const navigation = useNavigation();

    const onOtpSubmit = async (otp) => {
        setIsLoading(true);

        const data = {
            "phone": phoneNumber,
            "otp": otp
        }

        try {
            const response = await AuthAPIs.verifyPhoneOtp(data);
            if (response.status) {
                showSnackbar(response.message, 'green');
                setIsLoading(false);

                console.log(response);

                await AsyncStorage.setItem('user_id', response.data._id);
                await AsyncStorage.setItem('user_name', response.data._id);
                await AsyncStorage.setItem('user_token', response.token);
                await AsyncStorage.setItem('user_isAdmin', JSON.stringify(response.data.isAdmin));

                // await AsyncStorage.setItem('user_id', response.data._id);
                // await AsyncStorage.setItem('user_token', response.token);
                // await AsyncStorage.setItem('user_isAdmin', JSON.stringify(response.data.isAdmin));

                setTimeout(() => {
                    navigation.navigate('Main')
                }, 500)
            } else {
                showSnackbar(response.message, 'red');
                setIsLoading(false);
            }
        } catch (error) {
            console.error('Error:', error);
            showSnackbar('An error occurred', 'red');
            setIsLoading(false);
        }
    };

    return (
        <SafeAreaProvider style={{ paddingTop: insets.top, paddingBottom: insets.bottom, backgroundColor: 'white' }}>
            <View style={{ marginTop: 18, zIndex: 999 }}>
                <SnackbarComponent />
            </View>
            <View style={{ paddingLeft: 10, paddingRight: 10, marginTop: 18 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons onPress={() => navigation.goBack()} name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <View style={{ backgroundColor: 'white', paddingLeft: 10, paddingRight: 10, marginTop: 34, marginBottom: 20 }}>
                <Text style={{ fontWeight: 500, fontSize: SIZE.text__size }}>Enter 4 Digit OTP sent to {phoneNumber}</Text>
                <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
            </View>

            <View>
                <View style={{ padding: 10 }}>
                    <Button loading={isLoading} style={{ borderRadius: SIZE.borderRadius, paddingVertical: 12, backgroundColor: COLORS.btn__color }} rippleColor={'#0B192C'} textColor='white' mode="contained" onPress={() => setIsLoading(!isLoading)}>Verify OTP</Button>
                </View>
            </View>

            <View style={{ padding: 10, marginTop: 5, alignSelf: 'center' }}>
                <Text onPress={() => navigation.navigate('login')} style={{ fontWeight: '600', color: 'green' }}>Change Number</Text>
            </View>

        </SafeAreaProvider>
    );
};

export default PhoneOtpForm;
