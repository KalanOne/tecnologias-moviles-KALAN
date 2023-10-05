import { StatusBar } from "expo-status-bar";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Screen3 from "./src/screens/Screen3";

export default function App() {
  return (
    <View style={styles.container}>
      <Screen3 />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //   flex: 1,
    //   backgroundColor: '#fff',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
  },
});
