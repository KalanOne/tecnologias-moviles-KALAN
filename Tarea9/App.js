import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  StyleSheet,
  Text,
  Platform,
  StatusBar as ReactStatus,
  SafeAreaView,
} from "react-native";
import { Svg, G, Path, Defs, ClipPath, Rect } from "react-native-svg";
import Welcome from "./src/screens/Welcome";
import SignIn from "./src/screens/SignIn";
import SignUp from "./src/screens/SignUp";
import { useState } from "react";
import Screen1 from "./src/screens/Screen1";

export default function App() {
  // const [screen, setScreen] = useState("Welcome");
  // const handleScreen = (screen) => setScreen(screen);
  return (
    <>
      {/* {screen === "Welcome" ? (
        <Welcome handleScreen={handleScreen} />
      ) : screen === "SignIn" ? (
        <SignIn handleScreen={handleScreen} />
      ) : (
        <SignUp handleScreen={handleScreen} />
      )} */}
      {/* <Welcome /> */}
      {/* <SignIn /> */}
      {/* <SignUp /> */}
      <Screen1 />
      <StatusBar style="auto" />
    </>
  );
}
