import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Button = ({ text, role, onPress }) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        role == "number" ? styles.numberContainer : styles.operatorContainer,
      ]}
      onPress={onPress}
    >
      <Text
        style={[role == "number" ? styles.numbertext : styles.operatortext]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 70,
    borderRadius: 15,
    backgroundColor: "#e2e2e2",
    elevation: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  numberContainer: {
    backgroundColor: "#e2e2e271",
    color: "white",
  },
  operatorContainer: {
    backgroundColor: "#5b94ff7c",
  },
  numbertext: {
    color: "white",
    fontSize: 30,
  },
  operatortext: {
    color: "#1b3dff",
    fontSize: 30,
  },
});
