import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const Hearder = () => {
  const { canGoBack, goBack } = useNavigation();
  return (
    <View style={{ backgroundColor: "#e0aeff", paddingVertical: 5 }}>
      <TouchableOpacity
        onPress={goBack}
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 20,
        }}
      >
        <Ionicons name="chevron-back" size={24} color="#fff" />
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            marginLeft: 5,
            color: "#fff",
          }}
        >
          Go Back!
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Hearder;
