import { StatusBar } from "expo-status-bar";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import CharactersScreen from "./src/screens/CharactersScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <CharactersScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
