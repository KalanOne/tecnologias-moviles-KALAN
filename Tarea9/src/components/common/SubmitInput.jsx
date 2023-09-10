import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { mutedText, orangeMain } from "../../theme/constanst";

const SubmitInput = ({
  textMain,
  textSecond,
  filled,
  onPress,
  marginBottom,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        !filled ? styles.buttonUnfilled : null,
        marginBottom ? { marginBottom: marginBottom } : { marginBottom: 0 },
      ]}
      onPress={onPress}
    >
      <Text style={[styles.text, !filled ? styles.textUnfilledMain : null]}>
        {textMain}
      </Text>
      <Text style={[styles.text, !filled ? styles.textUnfilledSecond : null]}>
        {textSecond}
      </Text>
    </TouchableOpacity>
  );
};

export default SubmitInput;

const styles = StyleSheet.create({
  button: {
    width: "80%",
    padding: 20,
    backgroundColor: orangeMain,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    alignSelf: "center",
    marginVertical: 10,
    flexDirection: "row",
    gap: 5,
  },
  buttonUnfilled: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "lightgrey",
  },
  text: {
    color: "white",
    fontWeight: "900",
  },
  textUnfilledMain: {
    color: mutedText,
  },
  textUnfilledSecond: {
    color: orangeMain,
  },
});
