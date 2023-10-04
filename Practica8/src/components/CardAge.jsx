import React from "react";
import { Text, View } from "react-native";
import CardSchool from "./CardSchool";
import { useAppContext } from "../hooks/useAppContext";

const CardAge = () => {
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
      <Text>Age: {person.age}</Text>
      <CardSchool />
    </View>
  );
};

export default CardAge;
