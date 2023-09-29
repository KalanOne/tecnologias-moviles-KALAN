import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const Header = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: "red",
        padding: 20,
        flexDirection: "row",
        gap: 20,
      }}
    >
      <AntDesign
        name="leftcircleo"
        size={24}
        color="white"
        onPress={() => navigation.goBack()}
        disabled={!navigation.canGoBack()}
      />
      <Text style={{ color: "white" }}>Header</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
