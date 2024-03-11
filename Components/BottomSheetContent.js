import { View, Text, Pressable } from "react-native";
import React from "react";
import { COLORS } from "../Constants/COLORS";
import { TouchableOpacity } from "react-native";

const BottomSheetContent = () => {
  return (
    <View style={{}}>
      <View style={{ flexDirection: "column", gap: 14, paddingHorizontal: 12, marginTop: 290 }}>
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.btn__color,
            paddingHorizontal: 12,
            paddingVertical: 16,
            borderRadius: 8,
          }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>Book</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            paddingHorizontal: 12,
            paddingVertical: 8,
            borderWidth: 1,
            borderColor: COLORS.btn__color,
            borderRadius: 8,
          }}
        >
          <Text style={{ color: "orangered", textAlign: "center", fontWeight: '600' }}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomSheetContent;
