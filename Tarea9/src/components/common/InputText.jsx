import React from "react";
import { StyleSheet, Text, TextInput, TextInputBase } from "react-native";
import { View } from "react-native-animatable";
import {
  blackTitle,
  labelText,
  mutedText,
  placehorlderText,
} from "../../theme/constanst";

const InputText = ({ label, placeholder, type }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType={type === "email" ? "email-address" : "default"}
        secureTextEntry={type === "password"}
        placeholderTextColor={placehorlderText}
      />
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: "10%",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  label: {
    color: labelText,
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: "100%",
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: "#F6F6F6",
    elevation: 1,
  },
});
