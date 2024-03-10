import { View, Text } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

const RecentSearches = () => {
  return (
    <SafeAreaProvider
      style={{
        paddingHorizontal: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text>Recent Searches</Text>
    </SafeAreaProvider>
  );
};

export default RecentSearches;
