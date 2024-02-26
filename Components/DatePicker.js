import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import DateTimePicker from 'react-native-modal-datetime-picker';
import { SIZE } from '../Constants/Size';
import { FontAwesome } from '@expo/vector-icons';
import { COLORS } from '../Constants/COLORS';

const DatePicker = () => {

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());

    const formatDate = (dateString) => {
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        const date = new Date(dateString);
        return `${date.toLocaleString('en-IN', options)}`;
    };

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        const selectedDateObject = new Date(date);
        const formattedDate = selectedDateObject.toISOString().split('T')[0];
        setSelectedDate(formattedDate);
        hideDatePicker();
    };

    return (
        <View>
            <View style={{ marginTop: 18, marginBottom: -12, flexDirection: 'column', gap: 28 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <FontAwesome name="calendar-minus-o" size={24} color="black" />
                        <Text style={{ fontSize: 16 }}>Select Date</Text>
                    </View>
                    <View>
                        <Pressable style={{ backgroundColor: COLORS.small__btn, width: 150, borderWidth: 0, borderRadius: SIZE.borderRadius, borderBottomWidth: 0, borderBottomColor: COLORS.btn__color }} mode="contained" onPress={showDatePicker}>
                            <Text style={{ paddingVertical: 16, textAlign: 'center', fontWeight: '700' }}>
                                {selectedDate ? formatDate(selectedDate) : 'Select'}
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
        </View>
    )
}

export default DatePicker