import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Actions = ({ onWalletClick }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.shadow]}>
        <Feather name="arrow-down-left" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.shadow]}>
        <Feather name="arrow-up-right" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.shadow]}>
        <MaterialCommunityIcons name="sync" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.shadow]} onPress={onWalletClick}>
        <Ionicons name="add" size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Actions;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  connection: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1c203f",
    marginBottom: 30,
    gap: 15,
    borderRadius: 50,
  },
  connect: {
    width: 10,
    height: 20,
    // marginBottom: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00092d",
    borderRadius: 50,
  },
  shadow: {
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0c36b",
    borderRadius: 50,
  },
  // shadowCenter: {
  //   borderRadius: 40,
  // },
  // shadowRight: {
  //   borderBottomStartRadius: 50,
  //   borderTopStartRadius: 50,
  //   borderTopEndRadius: 40,
  //   borderBottomEndRadius: 40,
  // },
  // shadowLeft: {
  //   borderBottomStartRadius: 40,
  //   borderTopStartRadius: 40,
  //   borderTopEndRadius: 50,
  //   borderBottomEndRadius: 50,
  // },
  accion: {
    color: "lightgray",
    fontSize: 20,
    textAlign: "center",
  },
  image: {
    width: 70,
    height: 70,
    resizeMode: "cover",
    borderRadius: 50,
  },
});
