import React, { useEffect } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Atomo from "../../../assets/Atomo.png";
import { useNavigation } from "@react-navigation/native";
import { UseAuth } from "../../hooks/UseAuth";

const Welcome = () => {
  const navigation = useNavigation();
  const { user, handleLogin, handleRegister, handleLogout, isLogged } =
    UseAuth();

  useEffect(() => {
    if (isLogged()) {
      // Realizar la navegación o reset aquí
      navigation.navigate("LoggedScreens");
    }
  }, []);
  return (
    <View style={styles.container}>
      <Image source={Atomo} style={styles.image} />
      <Text style={styles.title}>Shopping with best e-commerce store</Text>
      <Text style={styles.subtitle}>
        Find best shopping experience with us by your favourite daily needs
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fbfcfe",
    paddingHorizontal: 40,
    paddingVertical: 80,
    justifyContent: "space-evenly",
    gap: 20,
  },
  image: {
    width: "80%",
    height: undefined,
    aspectRatio: 537 / 499,
    resizeMode: "cover",
    alignSelf: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
    color: "#7C7C7C",
  },
  button: {
    backgroundColor: "#21b2b2",
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 40,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
