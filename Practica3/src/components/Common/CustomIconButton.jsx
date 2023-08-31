import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'

const CustomIconButton = ({ image, text }) => {
    return (
        <TouchableOpacity style={styles.button}>
            <Image
                source={image}
                style={styles.logo} />
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}

export default CustomIconButton

const styles = StyleSheet.create({
    button: {
        // width: '40%',
        borderRadius: 12,
        // backgroundColor: '#c0e863',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderWidth: 0.5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonText: {
        color: '#000',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '900',
    },
    logo: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
});