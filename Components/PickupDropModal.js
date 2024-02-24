import React, { useEffect, useRef, useState } from 'react';
import { View, Text } from 'react-native';
import { Modal, Portal, Button } from 'react-native-paper';
import { SIZE } from '../Constants/Size';
import { COLORS } from '../Constants/COLORS';

const PickupDropModal = ({ visible, hideModal }) => {

    const [contentHeight, setContentHeight] = useState(450);
    const contentRef = useRef(null);

    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.measure((x, y, width, height) => {
                setContentHeight(height);
            });
        }
    }, [visible]);

    return (
        <Portal>
            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={{ backgroundColor: 'white', padding: 20, marginHorizontal: 14, height: contentHeight, borderRadius: 12 }}>
                <View>

                    <Text style={{ fontSize: 20, fontWeight: '700' }}>Pickup 1 Pickup and 1 Drop</Text>

                    <View style={{ marginTop: 12 }}>
                        <Text style={{ fontSize: 18, fontWeight: '500' }}>Suggested Pickups</Text>

                        {/* Pickup Locations Mapping Here */}
                        <View></View>
                    </View>

                    <View>
                        <Text style={{ fontSize: 18, fontWeight: '500' }}>Suggested Drops</Text>

                        {/* Drop Locations Mapping Here */}
                        <View></View>
                    </View>

                    <Button style={{
                        borderRadius: SIZE.borderRadius, paddingVertical: 10, backgroundColor: COLORS.btn__color
                    }} rippleColor={'orangered'} textColor='white' mode="contained">Search</Button>
                </View>
            </Modal>
        </Portal>
    );
};

export default PickupDropModal;
