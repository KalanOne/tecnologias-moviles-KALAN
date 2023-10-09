import React from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";

const CustomInput = ({ label, value, handleChange, secure }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={handleChange}
        secureTextEntry={secure}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    // height: 60,
    // backgroundColor: "#F2F2F2",
    // borderRadius: 10,
    // paddingHorizontal: 20,
    justifyContent: "center",
    gap: 10,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#7C7C7C",
  },
  input: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#7C7C7C",
    borderBottomWidth: 1,
    borderBottomColor: "#7C7C7C",
  },
});
