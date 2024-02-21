import { StatusBar } from 'expo-status-bar';
import StackNavigator from './Navigation/StackNavigator';
import { PaperProvider } from 'react-native-paper';
import { useEffect, useState } from 'react';
import Splash from './Pages/Splash';


export default function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation like data loading, authentication, etc.
    // Once the operation is done, set isLoading to false to hide the splash screen.
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Simulating a 3-second loading time, replace with your actual loading logic
  }, []);


  return (
    <PaperProvider>
      <StatusBar backgroundColor='orangered' />
      {isLoading ? <Splash /> : <StackNavigator />}
    </PaperProvider>
  );
}
