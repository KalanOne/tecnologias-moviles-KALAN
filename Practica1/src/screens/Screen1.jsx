import React from "react";
import { StyleSheet, View } from "react-native";
import Title from "../components/Title";
import TaskList from "../components/TaskList";
import { StatusBar } from "expo-status-bar";
import DetailsModal from "../components/DetailsModal";

const Screen1 = () => {
  return (
    <>
      <View style={styles.container}>
        <Title />
        <TaskList />
        <StatusBar style="light" />
      </View>
      <DetailsModal />
    </>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  container: {
    // width: Dimensions.get("screen").width,
    // height: Dimensions.get("screen").height,
    flex: 1,
    // backgroundColor: "#98bcff",
    // backgroundColor: "#2d7bdc",
    backgroundColor: "#5687ff",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
  container2: {
    flexDirection: "row",
    marginTop: 20,
    gap: 20,
  },
  input: {
    borderWidth: 1,
    paddingHorizontal: 10,
    fontSize: 20,
    flex: 1,
    borderRadius: 5,
    height: 40,
  },
});
