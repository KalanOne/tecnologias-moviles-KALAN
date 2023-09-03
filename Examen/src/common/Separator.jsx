import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Separator({ text }) {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      {text && <Text style={styles.text}>{text}</Text>}
      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  line: {
    flex: 1,
    height: 0.3,
    // height: 1,
    backgroundColor: "lightgray",
  },
  text: {
    paddingHorizontal: 10,
    color: "gray",
    fontSize: 16,
  },
});
