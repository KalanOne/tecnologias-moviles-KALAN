import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CurrentWallet = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.current}>Current Wallet Balance</Text>
        <Text style={styles.money}>$23,867</Text>
      </View>
      <TouchableOpacity style={styles.shadow}>
        <Ionicons name="add" size={24} color="#cb6a5d" />
      </TouchableOpacity>
    </View>
  );
};

export default CurrentWallet;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  current: {
    color: "#bfbfbf",
    // fontWeight: "900",
    fontSize: 15,
  },
  money: {
    color: "black",
    fontWeight: "900",
    fontSize: 35,
  },
  shadow: {
    backgroundColor: "#f9efed",
    borderRadius: 50,
    width: 45,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
  },
});
