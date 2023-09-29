import { Button, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import Header from "../components/Header";

const Login = ({ route }) => {
  const { name } = route.params;

  const navigation = useNavigation();

  // console.log(navigation);

  return (
    <View>
      <Header />
      <Text>{name}</Text>
      <Button
        title="Go back"
        disabled={!navigation.canGoBack()}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
