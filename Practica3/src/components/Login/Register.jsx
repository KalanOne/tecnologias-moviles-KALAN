import React from 'react'
import { Dimensions, Text, View, StyleSheet } from 'react-native'

const Register = () => {

  
  return (
    <View style={styles.container}>
        <Text style={styles.question}>Dont have an account? </Text>
        <Text style={styles.Action}> Register</Text>
    </View>
  )
}

export default Register;

const styles = StyleSheet.create({
  container: {
    width: '80%',
    justifyContent: 'center',
    flexDirection: 'row',
    // backgroundColor: '#0c1c2c',
  },
  question: {
    color: 'gray',
    // fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  Action: {
    color: '#92a76d',
    // fontSize: 10,
    // fontWeight: 'light',
    textAlign: 'left',
  },
})