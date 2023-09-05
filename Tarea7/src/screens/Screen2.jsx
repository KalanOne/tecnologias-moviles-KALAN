import { StatusBar } from "expo-status-bar";
import React from "react";
import { StatusBar as ReactStatus, StyleSheet, View } from "react-native";
import Body from "../components/Screen2/Body";
import Welcome from "../components/Screen2/Welcome";

const Screen2 = ({ onBackClick }) => {
  return (
    <>
      <View style={styles.container}>
        <Welcome onBackClick={onBackClick} />
        <Body />
      </View>
      <StatusBar style="inverted" />
    </>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d76741",
    paddingTop: ReactStatus.currentHeight,
  },
});
