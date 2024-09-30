import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import DateTimePicker from "react-native-modal-datetime-picker";
import { SIZE } from "../Constants/Size";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS } from "../Constants/COLORS";
import useSnackbar from "../Hooks/useSnackBar";
import AsyncStorage from "@react-native-async-storage/async-storage";

const DatePicker = ({ showText }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { showSnackbar, SnackbarComponent } = useSnackbar();

  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "short", year: "numeric" };
    const date = new Date(dateString);
    return `${date.toLocaleString("en-IN", options)}`;
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = async (date) => {
    const currentDate = new Date();
    const selectedDateObject = new Date(date);

    // if (selectedDateObject < currentDate || selectedDateObject > new Date(currentDate.setDate(currentDate.getDate() + 30))) {
    //     showSnackbar('Please Select Correct Date', 'red');
    // } else {

    const formattedDate = selectedDateObject.toISOString().split("T")[0];
    setSelectedDate(formattedDate);

    await AsyncStorage.setItem("selectedDate", JSON.stringify(formattedDate));
    // }

    hideDatePicker();
  };

  return (
    <View>
      <View
        style={{
          marginTop: 18,
          marginBottom: -12,
          flexDirection: "column",
          gap: 28,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {showText ? (
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <FontAwesome name="calendar-minus-o" size={24} color="black" />
              <Text style={{ fontSize: 16 }}>Select Date</Text>
            </View>
          ) : (
            ""
          )}
          <View>
            <Pressable
              style={{
                backgroundColor: COLORS.bg__color,
                width: 150,
                borderWidth: 1,
                borderRadius: SIZE.borderRadius,
                borderBottomWidth: 1,
                borderBottomColor: COLORS.btn__color,
                borderColor: COLORS.tab__color,
              }}
              mode="contained"
              onPress={showDatePicker}
            >
              <Text
                style={{
                  paddingVertical: 10,
                  textAlign: "center",
                  fontWeight: "700",
                }}
              >
                {selectedDate ? formatDate(selectedDate) : "Select"}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>

      <DateTimePicker
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        locale="en-IN"
      />

      <SnackbarComponent />
    </View>
  );
};

export default DatePicker;
