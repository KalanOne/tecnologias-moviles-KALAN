import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useAppContext } from "../hooks/useAppContext";

const CardSchool = () => {
  const { handleActive, person } = useAppContext();
  return (
    <View>
      <Text>CARD SCHOOL</Text>
      <Text>School: {person.school}</Text>
      <TouchableOpacity onPress={handleActive}>
        <Text>Is Active: {JSON.stringify(person.isActive)}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardSchool;
