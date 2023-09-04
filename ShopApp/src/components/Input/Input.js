import React from 'react';
import { Text, TextInput, View } from 'react-native';
import styles from './Input.style';

const Input =({placeholder,onChangeText,value,isSecurity}) => {
    return(
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder={placeholder} onChangeText={onChangeText} value={value} secureTextEntry={isSecurity} />
        </View>
    )
}
export default Input;