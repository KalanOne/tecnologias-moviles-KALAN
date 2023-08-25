import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StyleText from './src/components/welcome';
import { TouchableOpacity } from 'react-native';

export default function App() {

  const onPress = () => {
    alert("Hello World");
  };

  return (
    <View style={styles.container}>
      <StyleText text={"Custom Text Title"} fontWeight={"bold"} />
      <Text>Open up App.js to start working on your app!</Text>
      <StyleText text={"Custom Text Description"} fontWeight={200} />
      <TouchableOpacity onPress={onPress}>
        <StyleText text={"Custom Text Buttom"} fontWeight={100} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}> Touch Here </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    // backgroundColor: '#ff6f61',
    backgroundColor: '#9b59b6',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
