import React, { useEffect, useRef, useState } from "react";
import { TextInput, View, StyleSheet, Keyboard } from "react-native";

const OtpInput = ({ length = 4, onOtpSubmit }) => {
    const [otp, setOtp] = useState(new Array(length).fill(""));
    const inputRefs = useRef([]);

    useEffect(() => {
        inputRefs.current[0]?.focus();

        Keyboard.dismiss();
        setTimeout(() => {
            inputRefs.current[0]?.focus();
        }, 100);
    }, []);

    const handleChange = (index, value) => {
        if (!isNaN(value)) {
            const newOtp = [...otp];
            newOtp[index] = value.substring(value.length - 1);
            setOtp(newOtp);

            const combinedOtp = newOtp.join("");
            if (combinedOtp.length === length && onOtpSubmit) {
                onOtpSubmit(combinedOtp);
            }

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
        <View style={styles.inputContainer}>
            {otp.map((value, index) => (
                <TextInput
                    key={index}
                    ref={(ref) => (inputRefs.current[index] = ref)}
                    style={styles.input}
                    keyboardType="numeric"
                    maxLength={1}
                    value={value}
                    onChangeText={(text) => handleChange(index, text)}
                    onKeyPress={(e) => handleKeyDown(index, e)}
                    accessibilityLabel={`OTP digit ${index + 1}`}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        marginTop: 30
    },
    input: {
        borderRadius: 10,
        paddingVertical: 18,
        paddingHorizontal: 12,
        backgroundColor: '#EFEFEF',
        textAlign: 'center',
        fontSize: 16,
        minWidth: 50,
        color: 'black'
    }
});

export default OtpInput;
