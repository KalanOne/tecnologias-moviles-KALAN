import React from 'react'
import { Dimensions, Text, View, StyleSheet } from 'react-native'

const LoginHeader = () => {

  
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Sign in to your</Text>
        <Text style={styles.title}>Account</Text>
        <Text style={styles.subtitle}>Welcome back!</Text>
    </View>
  )
}

export default LoginHeader;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#1e2e3d',
    backgroundColor: '#0c1c2c',
    width: Dimensions.get('window').width,
    height: '25%',
    // alignItems: 'end',
    justifyContent: 'flex-end',
    padding: 20,
  },
  title: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  subtitle: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'light',
    textAlign: 'left',
  },
})