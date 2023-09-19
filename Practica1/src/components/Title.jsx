import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import CustomDate from "./CustomDate";

const Title = ({ numberTask }) => {
  return (
    <View style={styles.container}>
      <View style={styles.shadow}>
        <MaterialIcons name="sticky-note-2" size={24} color="#80a5ff" />
      </View>
      <View>
        <Text style={styles.title}>Todo</Text>
        <Text style={styles.subtitle}>{numberTask} Tasks</Text>
      </View>
      {/* <CustomDate /> */}
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#5687ff",
    minHeight: 100,
    paddingTop: StatusBar.currentHeight + 20,
    paddingHorizontal: 20,
    gap: 20,
    paddingBottom: 20,
  },
  shadow: {
    backgroundColor: "#fff",
    width: 40,
    height: 40,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#fff",
    fontSize: 20,
  },
});
