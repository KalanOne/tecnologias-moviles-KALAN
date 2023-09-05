import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Separator({ text, color }) {
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
      height: 1,
      // height: 1,
      // backgroundColor: "#001052",
      backgroundColor: !color ? "transparent" : color,
    },
    text: {
      paddingHorizontal: 10,
      color: "gray",
      fontSize: 16,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.line} />
      {text && <Text style={styles.text}>{text}</Text>}
      <View style={styles.line} />
    </View>
  );
}
