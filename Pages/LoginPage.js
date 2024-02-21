import { View, Text, Image, KeyboardAvoidingView, Platform, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context'
import { COLORS } from '../Constants/COLORS';
import { SIZE } from '../Constants/Size';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const LoginPage = () => {

    const insets = useSafeAreaInsets();

    const navigation = useNavigation()

    const [isLoading, setIsLoading] = useState(false);
    const [userPhoneNumber, setUserPhoneNumber] = useState('');

    




    return (
        <SafeAreaProvider style={{ paddingTop: insets.top, paddingBottom: insets.bottom, backgroundColor: 'white' }}>
            <View style={{ backgroundColor: 'white', paddingLeft: 18, paddingRight: 18, marginTop: 4 }}>
                <View>
                    <Image style={{ height: 120, width: 130, alignSelf: 'center', marginTop: 16, resizeMode: 'contain' }} source={require('../assets/logo.png')} />
                </View>

                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                    <View style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 10 }}>
                        <TextInput
                            placeholder='Enter Phone Number'
                            style={{ borderRadius: SIZE.borderRadius, paddingVertical: 12, backgroundColor: '#EFEFEF', paddingHorizontal: 12, paddingVertical: 20 }} />


                    </View>
                </KeyboardAvoidingView>

                <KeyboardAvoidingView style={{ marginTop: 20 }}>
                    <Button onPress={() => navigation.navigate('otp', {
                        phoneNumber: { userPhoneNumber },
                    })} loading={isLoading} style={{ borderRadius: SIZE.borderRadius, paddingVertical: 12, backgroundColor: COLORS.btn__color }} rippleColor={'orangered'} textColor='white' mode="contained" onPress={() => setIsLoading(!isLoading)}>Send OTP</Button>
                </KeyboardAvoidingView>

                <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 14 }}>
                    <Text style={{ fontSize: 16 }}>New User? </Text>
                    <Pressable onPress={() => navigation.navigate('signup')}>
                        <Text style={{ fontWeight: 700, color: COLORS.btn__color, fontSize: 16 }}>Sign Up</Text>
                    </Pressable>
                </View>

                <View>
                    <Text style={{ alignSelf: 'center', top: 280 }}>Made with ❤️ in Dehradun</Text>
                </View>
            </View>


        </SafeAreaProvider>
    )
}

export default LoginPage