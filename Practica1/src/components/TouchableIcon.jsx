import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

const TouchableIcon = ({ onPress, children }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {children}
    </TouchableOpacity>
  );
};

export default TouchableIcon;

const styles = StyleSheet.create({});
