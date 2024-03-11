import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet from "@gorhom/bottom-sheet";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker, Polyline } from "react-native-maps";
import { COLORS } from "../Constants/COLORS";
import BottomSheetContent from "../Components/BottomSheetContent";
import MapViewDirections from "react-native-maps-directions";


const CabInformation = () => {

  const snaps = ["55%", "55%"];
  const navigation = useNavigation();
  const [indexBS, setIndexBS] = useState();
  useEffect(() => {
    setIndexBS(1);
  }, []);
  const insets = useSafeAreaInsets();

  // Coordinates for pickup and drop - testing 
  const pickup = { latitude: 28.6664723, longitude: 77.2332892 };
  const drop = { latitude: 30.0869281, longitude: 78.2676116 };

  return (
    <SafeAreaProvider
      style={{
        paddingBottom: insets.bottom,
        backgroundColor: "transparent",
      }}
    >

      <GestureHandlerRootView style={{ flex: 1 }}>

        {/* Google Maps */}
        <View style={{ flex: 1 }}>
          <MapView
            style={{ flex: 1 }}
            showsUserLocation={true}
            showsMyLocationButton={true}
            showsBuildings={true}
            initialRegion={{
              latitude: (pickup.latitude + drop.latitude) / 2,
              longitude: (pickup.longitude + drop.longitude) / 2,
              latitudeDelta: Math.abs(pickup.latitude - drop.latitude) * 2,
              longitudeDelta: Math.abs(pickup.longitude - drop.longitude) * 2,
            }}
          >
            {/* Drop Marker */}
            <Marker
              coordinate={{
                latitude: drop.latitude,
                longitude: drop.longitude,
              }}
              title="Drop"
              description="Rishikesh"
              callout
            />

            {/* Pickup Marker */}
            <Marker
              coordinate={{
                latitude: pickup.latitude,
                longitude: pickup.longitude,
              }}
              title="Pickup"
              description="Kashmiri Gate"
              callout

            >
              <Image source={require('../assets/marker.png')}
                style={{
                  height: 40,
                  width: 40,
                  resizeMode: "contain",
                }} />
            </Marker>

            {/* Polyline */}
            <MapViewDirections
              origin={pickup}
              destination={drop}
              apikey={process.env.EXPO_PUBLIC_GOOGLE_KEY}
              strokeWidth={3}
              strokeColor="orangered"
            />
          </MapView>
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
