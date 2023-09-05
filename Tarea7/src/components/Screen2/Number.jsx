import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Number = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <TouchableOpacity style={styles.numberButton}>
          <Text style={styles.number}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.numberButton}>
          <Text style={styles.number}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.numberButton}>
          <Text style={styles.number}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.numberButton}>
          <Text style={styles.number}>4</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container2}>
        <TouchableOpacity style={styles.numberButton}>
          <Text style={styles.number}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.numberButton}>
          <Text style={styles.number}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.numberButton}>
          <Text style={styles.number}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.numberButton}>
          <Text style={styles.number}>8</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container2}>
        <TouchableOpacity style={styles.numberButton}>
          <FontAwesome name="repeat" size={22} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.numberButton}>
          <Text style={styles.number}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.numberButton}>
          <Text style={styles.number}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.numberButton}>
          <Entypo name="cross" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Number;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 10,
  },
  container2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  numberButton: {
    borderRadius: 50,
    // backgroundColor: "#f9efed",
    backgroundColor: "#fff",
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    // borderColor: "#cb6a5d",
    borderColor: "#black",
    borderWidth: 0.7,
  },
  number: {
    color: "black",
    fontWeight: "900",
    fontSize: 20,
  },
});
