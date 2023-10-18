import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#21b2b2" />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fbfcfe",
    paddingHorizontal: 40,
    paddingVertical: 80,
    justifyContent: "space-evenly",
    gap: 20,
    alignItems: "center",
  },
});
