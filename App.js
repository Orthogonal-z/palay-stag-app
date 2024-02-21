import { StatusBar } from 'expo-status-bar';
import StackNavigator from './Navigation/StackNavigator';
import { PaperProvider } from 'react-native-paper';


export default function App() {
  return (
    <PaperProvider>
      <StatusBar backgroundColor='orangered' />
      <StackNavigator />
    </PaperProvider>
  );
}
