import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import HomePage from '../Pages/HomePage'
import Bookings from '../Pages/Bookings'
import Help from '../Pages/Help'
import ProfilePage from '../Pages/ProfilePage'
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Search from '../Components/Search'
import LoginPage from '../Pages/LoginPage'
import SignUpPage from '../Pages/SignUpPage'
import PhoneOtpForm from '../Components/OTP/otpLogin'

const StackNavigator = () => {

    const Stack = createNativeStackNavigator()
    const Tab = createBottomTabNavigator()

    function BottomTabs() {
        return (
            <Tab.Navigator screenOptions={{ showLabel: false }}>
                <Tab.Screen
                    name='home'
                    component={HomePage}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarLabelStyle: { color: 'black' },
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <Entypo name="home" size={24} color={focused ? "orangered" : "black"} />
                        ),
                    }}
                />

                <Tab.Screen
                    name='bookings'
                    component={Bookings}
                    options={{
                        tabBarLabel: 'Bookings',
                        tabBarLabelStyle: { color: 'black' },
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <FontAwesome6 name="ticket-simple" size={24} color={focused ? "orangered" : "black"} />
                        ),
                    }}
                />


                <Tab.Screen
                    name='help'
                    component={Help}
                    options={{
                        tabBarLabel: 'Help',
                        tabBarLabelStyle: { color: 'black' },
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <FontAwesome5 name="hands-helping" size={24} color={focused ? "orangered" : "black"} />
                        ),
                    }}
                />


                <Tab.Screen
                    name='profile'
                    component={ProfilePage}
                    options={{
                        tabBarLabel: 'Profile',
                        tabBarLabelStyle: { color: 'black' },
                        headerShown: false,
                        tabBarIcon: ({ focused }) => (
                            <FontAwesome name="user" size={24} color={focused ? "orangered" : "black"} />
                        ),
                    }}
                />


            </Tab.Navigator>
        )
    }


    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='otp'>
                <Stack.Screen name='Main' component={BottomTabs} options={{ headerShown: false, animation: 'none' }} />
                <Stack.Screen name='searchpage' component={Search} options={{ headerShown: false, animation: 'none' }} />
                <Stack.Screen name='login' component={LoginPage} options={{ headerShown: false, animation: 'none' }} />
                <Stack.Screen name='signup' component={SignUpPage} options={{ headerShown: false, animation: 'none' }} />
                <Stack.Screen name='otp' component={PhoneOtpForm} options={{ headerShown: false, animation: 'none' }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator

const styles = StyleSheet.create({})