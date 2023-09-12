import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { backgroundButton, mutedColor } from "../theme/constanst";

const Search = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TouchableOpacity style={styles.searchIcon}>
          <AntDesign name="search1" size={24} color={mutedColor} />
        </TouchableOpacity>
        <TextInput style={styles.input} />
      </View>
      <TouchableOpacity style={styles.filterButton}>
        <Entypo name="flow-parallel" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 5,
    gap: 10,
  },
  searchContainer: {
    width: "80%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 15,
    justifyContent: "space-evenly",
    paddingEnd: 10,
  },
  input: {
    width: "80%",
    height: "100%",
    fontSize: 18,
    // backgroundColor: "red",
  },
  searchIcon: {
    width: "20%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "blue",
    borderRadius: 15,
  },
  filterButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: backgroundButton,
    borderRadius: 15,
    width: 50,
    height: 50,
  },
});
