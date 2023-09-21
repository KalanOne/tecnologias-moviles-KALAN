import React, { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

const TodoInput = ({ value, onChangeText }) => {
  const [isBlur, setIsBlur] = useState(false);
  handleBlur = () => {
    setIsBlur(false);
  };
  handleFocus = () => {
    setIsBlur(true);
  };
  return (
    <TextInput
      // style={[styles.input, isBlur && { borderColor: "#62ffa3" }]}
      // style={[styles.input, isBlur && { borderColor: "#cd62ff" }]}
      style={[styles.input, isBlur && { borderColor: "#ff62b0" }]}
      value={value}
      onChangeText={onChangeText}
      onBlur={handleBlur}
      onFocus={handleFocus}
      placeholder="Add a new task"
      placeholderTextColor={"#e2eaff"}
    />
  );
};

export default TodoInput;

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    paddingHorizontal: 10,
    fontSize: 20,
    flex: 1,
    borderRadius: 15,
    height: 50,
    borderColor: "#80a5ff",
    backgroundColor: "#aec5ff",
    color: "#fff",
  },
});
