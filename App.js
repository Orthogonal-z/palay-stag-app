import { StatusBar } from 'expo-status-bar';
import StackNavigator from './Navigation/StackNavigator';
import { PaperProvider } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';


export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user_id = await AsyncStorage.getItem('user_id');
        const user_token = await AsyncStorage.getItem('user_token');
        const user_isAdmin = await AsyncStorage.getItem('user_isAdmin');

        console.log('APP PAGE--------', user_id, user_token, user_isAdmin);

        if (!user_token) {
          setIsLoggedIn(false);
        }

        setIsLoggedIn(true);

      } catch (error) {
        console.error('Error AsyncStorage data - Homepage:', error);
      }
    };
    fetchData();
  }, []);



  return (
    <PaperProvider>
      <StatusBar backgroundColor='orangered' />
      <StackNavigator />
    </PaperProvider>
  );
}
