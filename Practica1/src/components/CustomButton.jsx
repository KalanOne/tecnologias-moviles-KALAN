import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const CustomButton = ({ text, onPress, light }) => {
  return (
    <TouchableOpacity
      style={[styles.container, light ? styles.lightButton : styles.darkButton]}
      onPress={onPress}
    >
      <Text style={[styles.text, light && styles.lightText]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    width: 80,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "center",
  },
  darkButton: {
    backgroundColor: "#80a5ff",
    // borderColor: "#5687ff",
  },
  lightButton: {
    backgroundColor: "white",
    borderColor: "white",
  },
  text: {
    color: "white",
    fontSize: 16,
  },
  lightText: {
    color: "black",
  },
});
