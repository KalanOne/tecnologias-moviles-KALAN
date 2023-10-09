import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.drawerIconButton}
        onPress={() => navigation.openDrawer()}
      >
        <Ionicons name="grid-outline" size={24} color="#21b2b2" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerIconButton}>
        <Ionicons name="notifications-outline" size={24} color="#21b2b2" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#fbfcfe",
  },
  drawerIconButton: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "lightgray",
  },
});
