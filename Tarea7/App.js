import { StatusBar } from "expo-status-bar";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import WaifuScreen from "./src/screens/WaifuScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <WaifuScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
  },
});
