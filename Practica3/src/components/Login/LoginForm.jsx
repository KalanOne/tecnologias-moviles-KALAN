import React from 'react'
import { Text, View, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import CustomInput from '../Common/CustomInput'

const LoginForm = () => {

    return (
        <View style={styles.container}>
            <CustomInput
                label={'Email'}
                secure={false}
                keyboardType={true}
                autoCapitalize={true} />
            <CustomInput
                label={'Password'}
                secure={true}
                keyboardType={false}
                autoCapitalize={false} />
            <Text style={styles.forgot}>Forgot Password?</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LoginForm;

const styles = StyleSheet.create({
    container: {
        width: '80%',
        // marginBottom: 10,
        paddingVertical: 10,
        // backgroundColor: 'lightgray',
        // marginTop: 10,
        gap: 20,
    },
    forgot: {
        textAlign: 'right',
        color: '#92a76d',
        fontWeight: 'bold',
    },
    button: {
        width: '100%',
        borderRadius: 12,
        backgroundColor: '#c0e863',
        paddingVertical: 12,
        paddingHorizontal: 20,
    },
    buttonText: {
        color: '#000',
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '900',
    },
})