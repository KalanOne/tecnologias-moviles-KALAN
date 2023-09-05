import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Slide = () => {
  return (
    <View style={styles.container}>
      <View style={styles.shadow}>
        <AntDesign name="arrowright" size={25} color="#d76741" />
      </View>
      <Text style={styles.swipe}>Swipe to Withdraw</Text>
    </View>
  );
};

export default Slide;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: "#d76741",
    marginTop: 20,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  shadow: {
    backgroundColor: "#fff",
    borderRadius: 50,
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  swipe: {
    color: "white",
    fontSize: 17,
    marginLeft: "13%",
  },
});
