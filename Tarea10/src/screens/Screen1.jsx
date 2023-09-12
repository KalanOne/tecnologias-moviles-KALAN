import React from "react";
import { Dimensions, StatusBar, StyleSheet, Text, View } from "react-native";
import { backgroundColor } from "../theme/constanst";
import Welcome from "../components/Welcome";
import Search from "../components/Search";
import History from "../components/History";
import Results from "../components/Results";
import Menu from "../components/Menu";

const Screen1 = () => {
  return (
    <>
      <View style={styles.container}>
        <Welcome />
        <Search />
        <History />
        <Results />
        <View style={styles.fill}></View>
        <Menu />
      </View>
    </>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    backgroundColor: backgroundColor,
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
  },
  fill: {
    flex: 1,
  },
});
