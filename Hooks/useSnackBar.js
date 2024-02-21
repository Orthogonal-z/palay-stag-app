import React, { useState } from 'react';
import { Snackbar } from 'react-native-paper';
import { COLORS } from '../Constants/COLORS';
import { Text } from 'react-native';

const useSnackbar = () => {
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState('');
    const [backgroundColor, setBackgroundColor] = useState(COLORS.btn__color);

    const showSnackbar = (msg, bgColor) => {
        setMessage(msg);
        setVisible(true);
        setBackgroundColor(bgColor);
    };

    const hideSnackbar = () => {
        setVisible(false);
    };

    const SnackbarComponent = () => (
        <Snackbar
            visible={visible}
            onDismiss={hideSnackbar}
            style={{ alignSelf: 'center', backgroundColor: backgroundColor, zIndex: 999 }}
            duration={Snackbar.DURATION_SHORT}
            wrapperStyle={{ top: 0 }}
        >
            <Text style={{ color: 'white' }}>{message}</Text>
        </Snackbar>
    );

    return { showSnackbar, hideSnackbar, SnackbarComponent };
};

export default useSnackbar;
