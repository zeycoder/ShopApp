import React from 'react';
import { TouchableOpacity, ActivityIndicator,Text } from 'react-native';
import styles from './Button.style';

const Buttons = ({ title, onPress, loading }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container} disabled={loading}>
            {loading
                ? (<ActivityIndicator color='white'/> )
                : (<Text style={styles.txt}>{title}</Text> )
            }
        </TouchableOpacity>
    )
}
export default Buttons;