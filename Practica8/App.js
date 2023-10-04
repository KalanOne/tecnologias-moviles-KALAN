import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Card from "./src/Components/Card";
import { AppContextProvider } from "./src/context/AppContext";

const person = {
  id: "1",
  name: "Alan",
  lastName: "Garcia",
  country: "Mexico",
  city: "Morelia",
  age: 22,
  school: "ITM",
};

export default function App() {
  return (
    <AppContextProvider>
      <View style={styles.container}>
        <Card person={person} />
        <StatusBar style="auto" />
      </View>
    </AppContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
