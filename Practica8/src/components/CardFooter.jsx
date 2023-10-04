import React from "react";
import { Text, View } from "react-native";
import CardLocation from "./CardLocation";
import { useAppContext } from "../hooks/useAppContext";

const CardFooter = () => {
  const { person } = useAppContext();
  return (
    <View
      style={{
        padding: 20,
        borderWidth: 1,
        borderRadius: 20,
        marginVertical: 10,
      }}
    >
      <Text>CARD FOOTER</Text>
      <CardLocation />
    </View>
  );
};

export default CardFooter;
