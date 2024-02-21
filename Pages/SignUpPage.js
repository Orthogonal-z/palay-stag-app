import { View, Text, Image, KeyboardAvoidingView, Platform, TextInput, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context'
import { COLORS } from '../Constants/COLORS';
import { SIZE } from '../Constants/Size';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';


const SignUpPage = () => {

    const insets = useSafeAreaInsets();

    const navigation = useNavigation()

    const [isLoading, setIsLoading] = useState(false);

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [iconName, setIconName] = useState('eye-off');
    const [haveReferCode, setHaveReferCode] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
        setIconName(prevIconName => (prevIconName === 'eye' ? 'eye-off' : 'eye'));
    };


    return (
        <SafeAreaProvider style={{ paddingTop: insets.top, paddingBottom: insets.bottom, backgroundColor: 'white' }}>
            <KeyboardAvoidingView behavior='height'>
                <View style={{ backgroundColor: 'white', paddingLeft: 18, paddingRight: 18, marginTop: 4 }}>
                    <View>
                        <Image style={{ height: 120, width: 130, alignSelf: 'center', marginTop: 16, resizeMode: 'contain' }} source={require('../assets/logo.png')} />
                    </View>

                    <View>
                        <View style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 10 }}>
                            <Text style={{ fontWeight: 500, fontSize: SIZE.text__size }}>Enter Your Name</Text>
                            <TextInput
                                placeholder='Your Name'
                                style={{ borderRadius: SIZE.borderRadius, paddingVertical: 12, backgroundColor: '#EFEFEF', paddingHorizontal: 12, paddingVertical: 20 }} />
                        </View>

                        <View style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 10 }}>
                            <Text style={{ fontWeight: 500, fontSize: SIZE.text__size }}>Enter Your Phone Number</Text>
                            <TextInput
                                placeholder='Enter Phone Number'
                                style={{ borderRadius: SIZE.borderRadius, paddingVertical: 12, backgroundColor: '#EFEFEF', paddingHorizontal: 12, paddingVertical: 20 }} />
                        </View>

                        <View style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 10 }}>
                            <Text style={{ fontWeight: 500, fontSize: SIZE.text__size }}>Enter Your Password</Text>
                            <View style={{ borderRadius: SIZE.borderRadius, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#EFEFEF', paddingHorizontal: 12, paddingVertical: 12 }}>
                                <TextInput
                                    placeholder="Enter Password"
                                    secureTextEntry={!passwordVisible}
                                />
                                <Pressable onPress={togglePasswordVisibility} style={{ padding: 10 }}>
                                    <Feather name={iconName} size={24} color="black" />
                                </Pressable>
                            </View>
                        </View>

                        <View style={{ marginTop: 12 }}>
                            {
                                haveReferCode ?
                                    <TextInput placeholder='Enter Refer' style={{ paddingHorizontal: 12, backgroundColor: COLORS.small__btn, paddingVertical: 18, borderRadius: SIZE.borderRadius }} />
                                    :
                                    <Pressable onPress={() => setHaveReferCode(prev => !prev)}>
                                        <Text style={{ paddingHorizontal: 4, backgroundColor: COLORS.small__btn, width: 120, textAlign: 'center', paddingVertical: 12, borderRadius: 30 }}>Refer Code ?</Text>
                                    </Pressable>
                            }
                        </View>
                    </View>

                    <View style={{ marginTop: 20 }}>
                        <Button loading={isLoading} style={{ borderRadius: SIZE.borderRadius, paddingVertical: 12, backgroundColor: COLORS.btn__color }} rippleColor={'orangered'} textColor='white' mode="contained" onPress={() => setIsLoading(!isLoading)}>Send OTP</Button>
                    </View>

                    <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 14 }}>
                        <Text style={{ fontSize: 16 }}>Already Have an account? </Text>
                        <Pressable onPress={() => navigation.navigate('login')}>
                            <Text style={{ fontWeight: 700, color: COLORS.btn__color, fontSize: 16 }}>Log In</Text>
                        </Pressable>
                    </View>

                    <View>
                        <Text style={{ alignSelf: 'center', top: 70 }}>Made with ❤️ in Dehradun</Text>
                    </View>
                </View>
            </KeyboardAvoidingView>


        </SafeAreaProvider>
    )
}

export default SignUpPage