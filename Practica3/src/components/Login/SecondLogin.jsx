import React from 'react'
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native'

const SecondLogin = () => {


    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Image
                    source={{
                        uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
                    }}
                    style={styles.logo} />
                <Text style={styles.buttonText}>Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Image
                    source={{
                        uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
                    }}
                    style={styles.logo} />
                <Text style={styles.buttonText}>Facebook</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SecondLogin;

const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#1e2e3d',
        // backgroundColor: '#0c1c2c',
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        // gap: 20,
        overflow: 'hidden',
    },
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
})