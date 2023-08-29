import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import LoginBody from '../components/Login/LoginBody'
import LoginHeader from '../components/Login/LoginHeader'

const Login = () => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
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
