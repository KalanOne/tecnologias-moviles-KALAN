import { SimpleLineIcons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { Toast } from "react-native-toast-message/lib/src/Toast";

function Welcome({ onBackClick }) {
  const [starFill, setStarFill] = useState(false);

  const handleStarClick = () => {
    if (!starFill) {
      showToast("Gracias por su preferencia");
    } else {
      showToast("Lo sentimos, ¿Hay algo en que podemos mejorar?");
    }
    setStarFill(!starFill);
  };
  const showToast = (message) => {
    Toast.show({
      type: "success",
      text1: message,
      position: "bottom",
    });
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBackClick}>
        <MaterialIcons name="arrow-back-ios" size={24} color="white" />
      </TouchableOpacity>
      <Text style={styles.money}>Withdraw Money</Text>
      <TouchableOpacity onPress={handleStarClick}>
        <AntDesign
          size={24}
          color="white"
          name={!starFill ? "staro" : "star"}
        />
      </TouchableOpacity>
    </View>
  );
}

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    minHeight: "10%",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
  },
  money: {
    color: "white",
    fontWeight: "900",
    fontSize: 20,
  },
});
