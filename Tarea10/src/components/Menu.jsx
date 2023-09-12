import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { backgroundButtonMenuActive, mutedColor } from "../theme/constanst";

const Menu = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerMenu}>
        <TouchableOpacity style={[styles.menuItem, styles.menuItemActive]}>
          <Entypo name="home" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Feather name="shopping-bag" size={24} color={mutedColor} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Feather name="bell" size={24} color={mutedColor} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="person-outline" size={24} color={mutedColor} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  containerMenu: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  menuItem: {
    padding: 18,
    borderRadius: 10,
  },
  menuItemActive: {
    backgroundColor: backgroundButtonMenuActive,
  },
});
