import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Ammount = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.mutedText}>Withdraw Amount</Text>
      <View style={styles.container2}>
        <Text style={styles.ammount}>$19,290.</Text>
        <Text style={styles.decimal}>00</Text>
      </View>
    </View>
  );
};

export default Ammount;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  mutedText: {
    color: "#bfbfbf",
    textAlign: "center",
  },
  container2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  ammount: {
    color: "#ca6e3c",
    fontWeight: "900",
    fontSize: 40,
    textAlign: "center",
  },
  decimal: {
    color: "#eac5b9",
    fontWeight: "900",
    fontSize: 40,
    textAlign: "center",
  },
});
