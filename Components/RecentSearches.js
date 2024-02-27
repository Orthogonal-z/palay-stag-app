import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const RecentSearches = () => {
    return (
        <View style={{ paddingHorizontal: 16, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text>Recent Searches</Text>
        </View>
    )
}

export default RecentSearches