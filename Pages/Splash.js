import { View } from 'react-native';
import { Image } from 'react-native';

const Splash = () => {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ marginBottom: 100 }}>
                <Image style={{ height: 180, width: 180, alignSelf: 'center', resizeMode: 'contain' }} source={require('../assets/logo.png')} />
            </View>
        </View>
    );
}

export default Splash;

