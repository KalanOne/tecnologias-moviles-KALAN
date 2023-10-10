import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CustomInput from "../../components/CustomInput";
import { UseAuth } from "../../hooks/UseAuth";

const Register = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");

  const handlePassword = (text) => {
    setPassword(text);
  };
  const handleUsername = (text) => {
    setUsername(text);
  };
  const handleName = (text) => {
    setName(text);
  };

  const navigation = useNavigation();
  const { handleRegister } = UseAuth();

  const handleLocalRegister = () => {
    const registerResponse = handleRegister(name, username, password);
    if (registerResponse) {
      navigation.navigate("LoggedScreens");
    } else {
      Alert.alert("Error", "Something went wrong");
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.goBackContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.goBackButton}
        >
          {/* <Text style={styles.goBackText}>Go Back</Text> */}
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollViewContainer}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Sign Up!</Text>
          <View style={styles.signInReturnContainer}>
            <Text style={styles.alreadyAccountText}>
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.inputsContainer}>
          <CustomInput
            label={"Name"}
            handleChange={handleName}
            value={name}
            secure={false}
          />
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
        <TouchableOpacity
          style={styles.signUpButton}
          onPress={handleLocalRegister}
        >
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.privacyNoticesContainer}>
          <Text style={styles.privacyNoticesText}>
            By signing up, you are agreeing to our{" "}
          </Text>
          <TouchableOpacity>
            <Text style={styles.privacyNoticesLink}>Terms of Service</Text>
          </TouchableOpacity>
          <Text style={styles.privacyNoticesText}> and </Text>
          <TouchableOpacity>
            <Text style={styles.privacyNoticesLink}>Privacy Policy.</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbfcfe",
    paddingTop: StatusBar.currentHeight,
  },
  goBackContainer: {
    marginLeft: 20,
    marginBottom: 20,
  },
  goBackButton: {
    width: 40,
    height: 40,
    // borderRadius: 20,
    // backgroundColor: "#e8e8e8",
    alignItems: "center",
    justifyContent: "center",
  },
  goBackText: {
    fontSize: 16,
    fontWeight: "900",
  },
  scrollViewContainer: {
    // width: "100%",
    // height: "100%",
    // flex: 1,
    // backgroundColor: "#fbfcfe",
    // paddingBottom: 80,
    // gap: 20,
    flex: 1,
    paddingHorizontal: 40,
  },
  titleContainer: {
    marginTop: 20,
    // marginHorizontal: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: "900",
  },
  signInReturnContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  alreadyAccountText: {
    fontSize: 16,
    fontWeight: "400",
  },
  loginText: {
    fontSize: 16,
    fontWeight: "900",
    marginLeft: 5,
    color: "#21b2b2",
  },
  inputsContainer: {
    marginTop: 20,
    // marginHorizontal: 40,
  },
  signUpButton: {
    backgroundColor: "#21b2b2",
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 40,
    // marginHorizontal: 40,
  },
  signUpText: {
    fontSize: 16,
    fontWeight: "900",
    color: "#fff",
    textAlign: "center",
  },
  privacyNoticesContainer: {
    flexDirection: "row",
    marginTop: 20,
    // marginHorizontal: 40,
    alignItems: "center",
    // justifyContent: "center",
    flexWrap: "wrap",
  },
  privacyNoticesText: {
    fontSize: 16,
    fontWeight: "400",
  },
  privacyNoticesLink: {
    fontSize: 16,
    fontWeight: "400",
    color: "#21b2b2",
  },
});
