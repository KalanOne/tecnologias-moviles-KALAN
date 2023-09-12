import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Screen1 from "./src/screens/Screen1";

export default function App() {
  return (
    <>
      <Screen1 />
      <StatusBar style="auto" />
    </>
  );
}
