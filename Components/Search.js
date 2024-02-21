import React, { useEffect, useState, useRef } from 'react';
import { View, TextInput, FlatList, Text, TouchableOpacity, Keyboard } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const Search = ({ route }) => {
    const insets = useSafeAreaInsets();
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);
    const inputRef = useRef(null);

    const navigation = useNavigation();

    useEffect(() => {
        const { item } = route.params;
        console.log(item);

        inputRef.current.focus();
        Keyboard.addListener('keyboardDidShow', () => { });
        Keyboard.addListener('keyboardDidHide', () => { });
    }, []);

    // Mock data
    const items2 = [
        { label: 'Munsiyari', value: 'Munsiyari' },
        { label: 'Rudraprayag', value: 'Rudraprayag' },
        { label: 'Joshimath', value: 'Joshimath' },
        { label: 'Agastyamuni', value: 'Agastyamuni' },
        { label: 'Chaukhamba', value: 'Chaukhamba' },
        { label: 'Nainital', value: 'Nainital' },
        { label: 'Sri Nagar', value: 'Nagar' }
    ];

    // Debounce function to delay search action
    const debounce = (func, delay) => {
        let timeoutId;
        return function (...args) {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(() => {
                func(...args);
            }, delay);
        };
    };

    // Handle text input change
    const handleTextInputChange = (text) => {
        setSearchQuery(text);
        debouncedSearch(text);
    };

    // Debounced search function
    const debouncedSearch = debounce((text) => {
        const filtered = items2.filter(item =>
            item.label.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredItems(filtered);
    }, 1000);

    const handlePassValue = (valueToSet) => {
        console.log(valueToSet, 'pickup value from Search')
        navigation.navigate('Main', {
            valueToSet
        })
    }

    return (
        <SafeAreaProvider style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
            <View style={{ paddingLeft: 18, paddingRight: 18, marginTop: 18 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons onPress={() => navigation.goBack()} name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <View style={{ marginTop: 12 }}>
                    <TextInput
                        ref={inputRef}
                        style={{ backgroundColor: 'white', borderWidth: 0, borderRadius: 3, paddingHorizontal: 20, paddingVertical: 18 }}
                        placeholder="Search Pckup Location..."
                        value={searchQuery}
                        onChangeText={handleTextInputChange}
                    />
                    <FlatList
                        style={{ marginTop: 4 }}
                        data={filteredItems}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => handlePassValue(item.value)}>
                                <View style={{ marginTop: 6, backgroundColor: 'white', paddingHorizontal: 10, paddingTop: 6, paddingBottom: 8, paddingHorizontal: 20 }}>
                                    <Text style={{ paddingVertical: 14, }}>{item.label}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item) => item.value}
                    />
                </View>
            </View>
        </SafeAreaProvider>
    );
};

export default Search;
