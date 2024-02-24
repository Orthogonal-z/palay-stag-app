import React, { useEffect, useState } from 'react';
import { Text, View, Button, ScrollView, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { SIZE } from '../Constants/Size';
import { COLORS } from '../Constants/COLORS';
import UserAvatar from 'react-native-user-avatar';
import { MaterialIcons } from '@expo/vector-icons';

export default function ProfilePage({ navigation }) {

    const [name, setName] = useState('');

    const handleLogout = async () => {
        try {
            await AsyncStorage.removeItem('user_token');
            navigation.replace('signup');
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    const insets = useSafeAreaInsets()

    useEffect(() => {
        const fetchUserName = async () => {
            const userName = await AsyncStorage?.getItem('user__name');
            setName(userName)
        }

        fetchUserName();
    }, [])

    return (
        <SafeAreaProvider style={{ paddingTop: 50, paddingBottom: insets.bottom, backgroundColor: 'white' }}>
            <ScrollView>
                <View>
                    <View style={{ paddingHorizontal: 16 }}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Ionicons onPress={() => navigation.goBack()} name="arrow-back" size={24} color="black" />
                        </TouchableOpacity>
                    </View>

                    <View>
                        <View style={{ marginTop: 16, width: 100, alignSelf: 'center' }}>
                            <UserAvatar size={100} name={name} />
                        </View>

                        <Text style={{ fontWeight: '700', marginTop: 10, fontSize: 24, alignSelf: 'center' }}>{name}</Text>
                    </View>

                </View>

                <View style={{ marginHorizontal: 14, marginTop: 20 }}>
                    <Button style={{ alignSelf: 'center' }} onPress={handleLogout} title='Logout' />
                </View>
            </ScrollView>
        </SafeAreaProvider>
    );
}