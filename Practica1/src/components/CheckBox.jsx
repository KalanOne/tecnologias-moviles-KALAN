import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";

const CheckBox = ({ isChecked, onToggle }) => {
  const toggleCheckbox = () => {
    onToggle(!isChecked);
  };

  return (
    <TouchableOpacity onPress={onToggle}>
      <View
        style={[styles.checkbox, isChecked ? styles.checked : styles.unchecked]}
      ></View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderRadius: 4,
    borderColor: "lightgray",
    backgroundColor: "transparent",
  },
  checked: {
    backgroundColor: "lightgray",
  },
  unchecked: {
    backgroundColor: "transparent",
  },
});

export default CheckBox;
