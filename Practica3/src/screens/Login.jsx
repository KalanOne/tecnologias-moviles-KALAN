import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import LoginBody from '../components/Login/LoginBody'
import LoginHeader from '../components/Login/LoginHeader'

const Login = () => {
    const styles = StyleSheet.create({
        container: {
            // flex: 1,
            width: '100%',
            height: '100%',
        },
    })

    return (
        <View style={styles.container}>
            <LoginHeader />
            <LoginBody />
        </View>
    )
}

export default Login;
