import { StatusBar } from 'expo-status-bar';
import StackNavigator from './Navigation/StackNavigator';
import { PaperProvider } from 'react-native-paper';
import { useEffect, useState } from 'react';
import Splash from './Pages/Splash';
import { AuthProvider } from './Context/AuthContext';


export default function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);


  return (
    <PaperProvider>
      <StatusBar backgroundColor='orangered' />
      {
        isLoading ? <Splash /> : <StackNavigator />
      }
    </PaperProvider>
  );
}
