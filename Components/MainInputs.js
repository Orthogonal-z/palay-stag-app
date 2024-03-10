import { View, Text, Pressable, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons, Entypo } from "@expo/vector-icons";
import {
  useFocusEffect,
  useIsFocused,
  useNavigation,
} from "@react-navigation/native";
import { SIZE } from "../Constants/Size";
import { COLORS } from "../Constants/COLORS";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { handleShowLimitedStrings } from "../Hooks/showLimitedString";

const MainInputs = ({ route }) => {
  const isFocused = useIsFocused();

  useEffect(() => {
    isFocused && pickupValFromSearch() && goingValFromSearch();
  }, [isFocused]);

  const navigation = useNavigation();

  // For Pickup Values
  const [pickVal, setPickVal] = useState("");
  const pickupValFromSearch = async () => {
    const pickName = await AsyncStorage?.getItem("pickValuesName");
    setPickVal(pickName);
  };

  // For Dropping Values
  const [goingVal, setGoingVal] = useState("");
  const goingValFromSearch = async () => {
    const goName = await AsyncStorage?.getItem("goingValuesName");
    setGoingVal(goName);
  };

  const handleSetPickupVal = async () => {
    setPickVal("");
    await AsyncStorage?.setItem("pickValuesName", "");
  };

  const handleSetGoingVal = async () => {
    setGoingVal("");
    await AsyncStorage?.setItem("goingValuesName", "");
  };

  return (
    <View>
      <View>
        <View>
          <View style={{ flexDirection: "column", gap: 14 }}>
            {/* Pickup Search Bar */}
            <Pressable
              onPress={() =>
                navigation.navigate("searchpage", { item: "fromPickup" })
              }
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                backgroundColor: "white",
                paddingHorizontal: 12,
                paddingVertical: 18,
                borderRadius: SIZE.borderRadius,
                justifyContent: "space-between",
                borderWidth: 1,
                borderColor: COLORS.tab__color,
              }}
            >
              <View style={{ flexDirection: "row", gap: 10 }}>
                <Ionicons
                  name="search-outline"
                  size={24}
                  color={COLORS.tab__color}
                />
                {pickVal ? (
                  <Text style={{ fontSize: 18, fontWeight: "500" }}>
                    {handleShowLimitedStrings(
                      JSON.parse(pickVal).searchPickupQuery,
                      28,
                      28
                    )}
                  </Text>
                ) : (
                  <Text style={{ fontSize: 18 }}>Pickup From</Text>
                )}
              </View>
              <TouchableOpacity
                style={{
                  position: "absolute",
                  marginLeft: 310,
                  backgroundColor: "white",
                  paddingHorizontal: 4,
                  paddingVertical: 4,
                  borderRadius: 10,
                }}
                onPress={handleSetPickupVal}
              >
                <Entypo name="cross" size={24} color="orangered" />
              </TouchableOpacity>
            </Pressable>

            {/* Drop Search Bar */}
            <Pressable
              onPress={() =>
                navigation.navigate("searchpage", { item: "fromGoing" })
              }
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                backgroundColor: "white",
                paddingHorizontal: 12,
                paddingVertical: 18,
                borderRadius: SIZE.borderRadius,
                justifyContent: "space-between",
                borderWidth: 1,
                borderColor: COLORS.tab__color,
              }}
            >
              <View style={{ flexDirection: "row", gap: 10 }}>
                <Ionicons
                  name="search-outline"
                  size={24}
                  color={COLORS.tab__color}
                />
                {goingVal ? (
                  <Text style={{ fontSize: 18, fontWeight: "500" }}>
                    {handleShowLimitedStrings(
                      JSON.parse(goingVal).searchPickupQuery,
                      28,
                      28
                    )}
                  </Text>
                ) : (
                  <Text style={{ fontSize: 18 }}>Dropping Location</Text>
                )}
              </View>
              <TouchableOpacity
                style={{
                  position: "absolute",
                  marginLeft: 310,
                  backgroundColor: "white",
                  paddingHorizontal: 4,
                  paddingVertical: 4,
                  borderRadius: 10,
                }}
                onPress={handleSetGoingVal}
              >
                <Entypo name="cross" size={24} color="orangered" />
              </TouchableOpacity>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MainInputs;
