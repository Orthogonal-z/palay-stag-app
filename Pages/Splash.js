import { Image, StyleSheet, Text, View, StatusBar } from 'react-native';

const Splash = () => {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <StatusBar hidden />
            <View style={{ marginBottom: 200 }}>
                <Image style={{ height: 180, width: 180, alignSelf: 'center', resizeMode: 'contain'}} source={require('../assets/logo.png')} />
            </View>
        </View>
    );
}

export default Splash;

const styles = StyleSheet.create({});
