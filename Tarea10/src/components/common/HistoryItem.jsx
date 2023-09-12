import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { mutedColor } from "../../theme/constanst";

const HistoryItem = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <Entypo name="cross" size={20} color={mutedColor} />
    </View>
  );
};

export default HistoryItem;

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 15,
    marginRight: 5,
  },
  text: {
    // fontSize: 18,
    color: mutedColor,
  },
});
