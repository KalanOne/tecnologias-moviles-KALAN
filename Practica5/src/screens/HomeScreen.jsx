import React from "react";
import { Button, Text, View } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        onPress={() => {
          navigation.navigate("Login", { name: "Alan Garcia Diaz" });
        }}
        title="Login"
      />
    </View>
  );
};

export default HomeScreen;
