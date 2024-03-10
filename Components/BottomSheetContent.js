import { View, Text, Pressable } from "react-native";
import React from "react";
import { COLORS } from "../Constants/COLORS";

const BottomSheetContent = () => {
  return (
    <View style={{ flexDirection: "column", gap: 14, paddingHorizontal: 12 }}>
      <Pressable
        style={{
          backgroundColor: COLORS.btn__color,
          paddingHorizontal: 12,
          paddingVertical: 24,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>Book</Text>
      </Pressable>
      <Pressable
        style={{
          backgroundColor: "white",
          paddingHorizontal: 12,
          paddingVertical: 16,
          borderWidth: 1,
          borderColor: COLORS.btn__color,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "orangered", textAlign: "center" }}>Go Back</Text>
      </Pressable>
    </View>
  );
};

export default BottomSheetContent;
