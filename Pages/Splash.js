import { Image, StyleSheet, Text, View, StatusBar } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {

    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Main')
        }, 2000)
    }, []);


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <StatusBar hidden />
            <View >
                <Image style={{ height: 150, width: 150 }} source={require('../assets/splash.png')} />
            </View>
        </View>
    );
}

export default Splash;

const styles = StyleSheet.create({});
