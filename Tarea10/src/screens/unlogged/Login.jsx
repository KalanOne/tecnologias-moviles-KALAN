import React, { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from "react-native";
import CustomInput from "../../components/CustomInput";
import { useNavigation } from "@react-navigation/native";
import { UseAuth } from "../../hooks/UseAuth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (text) => {
    setUsername(text);
  };
  const handlePassword = (text) => {
    setPassword(text);
  };

  const { user, handleLogin, handleRegister, handleLogout, isLogged } =
    UseAuth();
  const navigation = useNavigation();

  useEffect(() => {
    if (isLogged()) {
      // Realizar la navegación o reset aquí
      navigation.reset({
        index: 0,
        routes: [{ name: "LoggedScreens" }],
      });
    }
  }, []);

  const handleLocalLogin = () => {
    const loginResponse = handleLogin(username, password);
    if (loginResponse) {
      navigation.navigate("LoggedScreens");
    } else {
      Alert.alert("Error", "Invalid credentials");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1380&q=80",
          }}
          style={styles.image}
        />
        <Text style={styles.title}>Welcome!</Text>
        <View style={styles.inputsContainer}>
          <CustomInput
            label={"Username"}
            handleChange={handleUsername}
            value={username}
            secure={false}
          />
          <CustomInput
            label={"Password"}
            handleChange={handlePassword}
            value={password}
            secure={true}
          />
        </View>
        <TouchableOpacity style={styles.forgotButton}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleLocalLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.signUpContainer}>
          <Text style={styles.haventText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    // width: "100%",
    // height: "100%",
    flex: 1,
    backgroundColor: "#fbfcfe",
    // paddingBottom: 80,
    // gap: 20,
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
  title: {
    fontSize: 30,
    fontWeight: "900",
    marginHorizontal: 40,
    marginTop: 20,
  },
  inputsContainer: {
    marginTop: 20,
    marginHorizontal: 40,
  },
  forgotButton: {
    alignSelf: "flex-end",
    marginHorizontal: 40,
    marginTop: -10,
  },
  forgotText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#21b2b2",
    alignSelf: "flex-end",
    // marginHorizontal: 40,
    // marginTop: -10,
  },
  button: {
    backgroundColor: "#21b2b2",
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 40,
    marginHorizontal: 40,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  haventText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#7C7C7C",
  },
  signUpText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#21b2b2",
  },
});
