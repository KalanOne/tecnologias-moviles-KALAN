import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const CustomInput = ({ label, secure, keyboardType, autoCapitalize }) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };
    return (
        <View style={styles.container}>
            <Text style={[styles.label, isFocused && styles.focusedLabel]}>{label}</Text>
            <TextInput
                style={[styles.input, isFocused && styles.focusedInput]}
                onFocus={handleFocus}
                onBlur={handleBlur}
                secureTextEntry={secure}
                keyboardType={keyboardType ? 'email-address' : 'default'}
                autoCapitalize={autoCapitalize ? 'none' : 'sentences'}
            />
        </View>
    )
}

export default CustomInput

const styles = StyleSheet.create({
    // container: {
    //   marginBottom: 20,
    // },
    label: {
      fontSize: 16,
      marginBottom: 5,
      color: 'gray',
    },
    focusedLabel: {
      color: '#c0e863',
    },
    input: {
      borderColor: 'gray',
      borderWidth: 1,
      padding: 10,
      fontSize: 16,
      borderRadius: 12,
    },
    focusedInput: {
      borderColor: '#c0e863',
    },
  });