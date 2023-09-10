import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native-animatable";
import { labelText, mutedText, orangeMain } from "../../theme/constanst";

const Tabs = ({ distribution }) => {
  return (
    <View style={styles.container}>
      {distribution === "left" ? (
        <>
          <View style={styles.line}></View>
          <View style={styles.dot}></View>
          <View style={styles.dot}></View>
        </>
      ) : distribution === "center" ? (
        <>
          <View style={styles.dot}></View>
          <View style={styles.line}></View>
          <View style={styles.dot}></View>
        </>
      ) : (
        <>
          <View style={styles.dot}></View>
          <View style={styles.dot}></View>
          <View style={styles.line}></View>
        </>
      )}
    </View>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: "0.1%",
    justifyContent: "flex-start",
    paddingHorizontal: "10%",
    alignItems: "center",
    flexDirection: "row",
    gap: 5,
  },
  line: {
    width: 15,
    height: 5,
    backgroundColor: orangeMain,
    borderRadius: 50,
  },
  dot: {
    width: 5,
    height: 5,
    backgroundColor: labelText,
    borderRadius: 50,
  },
});
