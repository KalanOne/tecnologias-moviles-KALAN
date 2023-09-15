import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Pills = () => {
  return (
    <View style={styles.container}>
      <View style={styles.pillActive}>
        <Text style={styles.text}>All</Text>
      </View>
      <View style={styles.pill}>
        <Text style={styles.text}>Group</Text>
      </View>
      <View style={styles.pill}>
        <Text style={styles.text}>Chats</Text>
      </View>
    </View>
  );
};

export default Pills;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    height: 50,
    backgroundColor: "lightgray",
    marginVertical: 10,
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 9,
  },
  text: {
    color: "black",
    // fontSize: 20,
    fontWeight: "bold",
  },
  pill: {
    width: "30%",
    height: "90%",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  pillActive: {
    width: "30%",
    backgroundColor: "white",
    height: "90%",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
