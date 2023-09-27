import React from "react";
import { Button, Text, View } from "react-native";
import Hearder from "../components/Hearder";

const LoginScreen = ({ navigation, route }) => {
  const { name } = route.params;
  console.log(navigation);
  const { canGoBack, goBack } = navigation;
  return (
    <View>
      {/* <Text>Login Screen</Text>; */}
      <Hearder />
      <Button
        onPress={() => {
          navigation.navigate("Home");
        }}
        title="Home"
      />
      <Text>{name}</Text>

      <Button
        onPress={() => navigation.goBack()}
        title="Go back"
        disabled={!canGoBack()}
      />
    </View>
  );
};

export default LoginScreen;
