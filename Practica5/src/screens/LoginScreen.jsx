import React from "react";
import { Button, Text, View } from "react-native";

const LoginScreen = ({ navigation, route }) => {
  const { name } = route.params;
  return (
    <View>
      {/* <Text>Login Screen</Text>; */}
      <Button
        onPress={() => {
          navigation.navigate("Home");
        }}
        title="Home"
      />
      <Text>{name}</Text>
    </View>
  );
};

export default LoginScreen;
