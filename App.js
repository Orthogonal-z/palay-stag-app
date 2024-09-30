import { StatusBar } from 'expo-status-bar';
import StackNavigator from './Navigation/StackNavigator';
import { PaperProvider } from 'react-native-paper';
import { useEffect, useState } from 'react';
import Splash from './Pages/Splash';


export default function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);


  return (
    <PaperProvider>
      <StatusBar backgroundColor='#0B192C' />
      {
        isLoading ? <Splash /> : <StackNavigator />
      }
    </PaperProvider>
  );
}
