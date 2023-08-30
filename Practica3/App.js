import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, TextInput } from 'react-native';
import Login from './src/screens/Login';

export default function App() {
  const {height, width} = Dimensions.get('window');
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      {/* <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          width: 200,
          height: 200
          // width: width/4,
          // height: height/4
        }}
      />
      <TextInput style={styles.input} placeholder='Nombre' /> */}
      <Login />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
