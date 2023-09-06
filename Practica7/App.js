import { StatusBar } from "expo-status-bar";
import { StyleSheet, StatusBar as ReactStatus, View } from "react-native";
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
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    paddingTop: ReactStatus.currentHeight,
  },
});
