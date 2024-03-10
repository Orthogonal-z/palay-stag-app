import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { COLORS } from "../Constants/COLORS";
import { useEffect, useState } from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MainInputs from "../Components/MainInputs";
import { Button } from "react-native-paper";
import { SIZE } from "../Constants/Size";
import CabsList from "../Components/CabsList";
import { dataToMap } from "../Constants/List";
import DatePicker from "../Components/DatePicker";

export default function ShowCabs() {
  const insets = useSafeAreaInsets();
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  //   Picked date
  useEffect(() => {
    const fetchSelectedDate = async () => {
      try {
        const selectedAsyncDate = await AsyncStorage.getItem("selectedDate");
        setSelectedDate(JSON.parse(selectedAsyncDate));
      } catch (error) {
        console.error("Error retrieving date from AsyncStorage:", error);
      }
    };
    fetchSelectedDate();
  }, []);

  const [selectedDate, setSelectedDate] = useState(new Date());

  const formatDate = (date) => {
    if (!(date instanceof Date) || isNaN(date)) {
      return "Invalid Date";
    }
    const options = { day: "numeric", month: "short", year: "numeric" };
    return date.toLocaleString("en-IN", options);
  };

  return (
    <SafeAreaProvider
      style={{
        paddingTop: 50,
        paddingBottom: insets.bottom,
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          marginBottom: 18,
          paddingHorizontal: 16,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        onPress={() => navigation.goBack()}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
          <TouchableOpacity>
            <Ionicons
              onPress={() => navigation.goBack()}
              name="arrow-back"
              size={24}
              color="black"
            />
          </TouchableOpacity>
          <Text style={{ fontWeight: "700", fontSize: 16 }}>
            Palay Cabs List
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
          <Text>{formatDate(selectedDate)}</Text>
        </View>
      </View>

      <ScrollView style={{ marginBottom: 86 }}>
        <View
          style={{
            backgroundColor: "white",
            paddingLeft: 18,
            paddingRight: 18,
            marginTop: 18,
          }}
        >
          <View style={{ marginTop: -12 }}>
            <MainInputs />
          </View>

          <View style={{ marginTop: 12 }}>
            <Button
              loading={isLoading}
              style={{
                borderRadius: SIZE.borderRadius,
                paddingVertical: 12,
                backgroundColor: COLORS.btn__color,
              }}
              rippleColor={"orangered"}
              textColor="white"
              mode="contained"
            >
              Search
            </Button>
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
          {dataToMap &&
            dataToMap?.map((items, index) => {
              return (
                <View
                  style={{
                    paddingHorizontal: 18,
                    flexDirection: "column",
                    marginBottom: 12,
                  }}
                  key={index}
                >
                  <CabsList data={items} style={{ marginBottom: 12 }} />
                </View>
              );
            })}
        </View>
      </ScrollView>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 999,
          backgroundColor: "white",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,
        }}
      >
        <View
          style={{
            paddingVertical: 8,
            width: 350,
            alignSelf: "center",
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "center",
              paddingVertical: 18,
              paddingHorizontal: 140,
              borderWidth: 1,
              borderColor: "black",
              borderRadius: 6,
              backgroundColor: "black",
              gap: 6,
            }}
          >
            <AntDesign name="filter" size={20} color="white" />
            <Text style={{ fontWeight: "600", fontSize: 16, color: "white" }}>
              Filter
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaProvider>
  );
}
