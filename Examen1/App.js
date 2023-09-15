import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  StyleSheet,
  StatusBar as ReactSatatus,
  View,
} from "react-native";
import Screen1 from "./src/screens/Screen1";

export default function App() {
  return (
    <View style={styles.container}>
      <Screen1 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
    backgroundColor: "#fff",
    paddingTop: ReactSatatus.currentHeight,
  },
});
