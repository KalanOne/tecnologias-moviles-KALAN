import React from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer}>
        <Ionicons name="ios-arrow-back-sharp" size={24} color="white" />
      </TouchableOpacity>
      <Text style={styles.text}>Send</Text>
      <TouchableOpacity style={styles.iconContainer}>
        <MaterialCommunityIcons
          name="theme-light-dark"
          size={24}
          color="white"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingTop: StatusBar.currentHeight + 5,
    // paddingTop: 5,
    paddingHorizontal: 20,
  },
  iconContainer: {
    height: 55,
    width: 55,
    borderRadius: 20,
    borderColor: "#cfcfcf",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
