import React, { useEffect, useRef, useState } from "react";
import { TextInput, View } from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";

const OtpInput = ({ length = 4, onOtpSubmit }) => {
    const [otp, setOtp] = useState(new Array(length).fill(""));
    const inputRefs = useRef([]);

    const insets = useSafeAreaInsets();


    useEffect(() => {
        inputRefs.current[0].focus();
    }, []);

    const handleChange = (index, value) => {
        if (!isNaN(value)) {
            const newOtp = [...otp];
            newOtp[index] = value.substring(value.length - 1);
            setOtp(newOtp);

            const combinedOtp = newOtp.join("");
            if (combinedOtp.length === length) onOtpSubmit(combinedOtp);

            if (value && index < length - 1 && inputRefs.current[index + 1]) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    return (

        <SafeAreaProvider style={{ paddingTop: insets.top, paddingBottom: insets.bottom, backgroundColor: 'white' }}>
            <View style={{ backgroundColor: 'white', paddingLeft: 18, paddingRight: 18, marginTop: 4 }}>

                <View style={{ flexDirection: "row" }}>
                    {otp.map((value, index) => (
                        <TextInput
                            key={index}
                            ref={(ref) => (inputRefs.current[index] = ref)}
                            style={{
                                borderBottomWidth: 1,
                                marginHorizontal: 5,
                                paddingHorizontal: 8,
                            }}
                            keyboardType="numeric"
                            maxLength={1}
                            value={value}
                            onChangeText={(text) => handleChange(index, text)}
                            onKeyPress={(e) => handleKeyDown(index, e)}
                        />
                    ))}
                </View>
            </View>
        </SafeAreaProvider>



    );
};

export default OtpInput;
