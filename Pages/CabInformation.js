import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet from "@gorhom/bottom-sheet";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { COLORS } from "../Constants/COLORS";
import { useNavigation } from "@react-navigation/native";
import MapView from "react-native-maps";
import BottomSheetContent from "../Components/BottomSheetContent";

const CabInformation = () => {
  // Snappoints for Bottomsheet
  const snaps = ["60%", "60%"];

  const navigation = useNavigation();

  const [indexBS, setIndexBS] = useState();

  useEffect(() => {
    setIndexBS(1);
  }, []);

  const insets = useSafeAreaInsets();

  return (
    <SafeAreaProvider
      style={{
        // paddingTop: 50,
        paddingBottom: insets.bottom,
        backgroundColor: "transparent",
      }}
    >
      <GestureHandlerRootView style={{ flex: 1 }}>
        {/* Top View For Back Button */}
        {/* <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 12,
            marginLeft: 16,
            backgroundColor: "transparent",
          }}
        >
          <TouchableOpacity>
            <Ionicons
              onPress={() => navigation.goBack()}
              name="arrow-back"
              size={24}
              color="black"
            />
          </TouchableOpacity>
          <Text style={{ fontWeight: "700", fontSize: 16 }}>
            Ertiga 7 Seater
          </Text>
        </View> */}

        {/* Google Maps */}
        <View style={{ flex: 1 }}>
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
        </View>

        {/* BottomSheet */}
        <BottomSheet snapPoints={snaps} index={indexBS}>
          <BottomSheetContent />
        </BottomSheet>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default CabInformation;
