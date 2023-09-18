import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const CustomButton = ({ text, onPress, light }) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        light && { backgroundColor: "transparent", borderColor: "white" },
      ]}
      onPress={onPress}
    >
      <Text style={{ color: light ? "white" : "black" }}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 5,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
  },
});
