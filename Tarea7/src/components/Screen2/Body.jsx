import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CurrentWallet from "./CurrentWallet";
import Separator from "../../common/Separator";
import Ammount from "./Ammount";
import Number from "./Number";
import Slide from "./Slide";

const Body = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mutedContainer}>
        <Text style={styles.mutedText}>Exchange</Text>
      </View>
      <View style={styles.container2}>
        <CurrentWallet />
        <Separator color={"#cdcdcd"} />
        <Ammount />
        <Number />
        <View style={styles.fill}></View>
        <Slide />
      </View>
    </View>
  );
};

export default Body;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 10,
  },
  mutedContainer: {
    backgroundColor: "#f0c2b3",
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    padding: 20,
    marginTop: 20,
    marginHorizontal: 15,
    justifyContent: "center",
  },
  mutedText: {
    color: "#b08678",
  },
  container2: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 30,
    marginTop: -2,
    marginHorizontal: -5,
    marginBottom: 5,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  fill: {
    flex: 1,
  },
});
