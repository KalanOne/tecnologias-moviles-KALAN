import React from "react";
import { StyleSheet, TextInput } from "react-native";

const TodoInput = ({ value, onChangeText }) => {
  return (
    <TextInput style={styles.input} value={value} onChangeText={onChangeText} />
  );
};

export default TodoInput;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    paddingHorizontal: 10,
    fontSize: 20,
    flex: 1,
    borderRadius: 5,
    height: 40,
    borderColor: "#fff",
  },
});
