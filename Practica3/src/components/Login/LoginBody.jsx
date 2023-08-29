import React from 'react'
import { Text, View, Dimensions, StyleSheet } from 'react-native'
import LoginForm from './LoginForm'
import CustomSeparator from '../Common/CustomSeparator'
import SecondLogin from './SecondLogin'
import Register from './Register'

const LoginBody = () => {

  return (
    <View style={styles.container}>
      <LoginForm/>
      <CustomSeparator text="Or login with" />
      <SecondLogin/>
      <Register/>
    </View>
  )
}

export default LoginBody;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
    width: Dimensions.get('window').width,
    height: '75%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  item: {
    width: '80%',
    // marginBottom: 10,
    padding: 10,
    backgroundColor: 'lightgray',
  },
  firstItem: {
    marginTop: 20,
  },
  lastItem: {
    marginBottom: 5,
  },
})