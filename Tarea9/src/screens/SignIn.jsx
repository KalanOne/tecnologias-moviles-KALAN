import React from "react";
import {
  Dimensions,
  Platform,
  StatusBar as ReactStatus,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { blackTitle, mutedText, shadow } from "../theme/constanst";
import { Ionicons } from "@expo/vector-icons";
import Tabs from "../components/common/Tabs";
import Form from "../components/signIn/Form";
import SubmitInput from "../components/common/SubmitInput";

const SignIn = ({ handleScreen }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backContainer}>
        <TouchableOpacity
          onPress={() => handleScreen("Welcome")}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back-sharp" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Welcome</Text>
        <Text style={styles.titleText}>back!</Text>
      </View>
      <Tabs distribution={"left"} />
      <Form />
      <SubmitInput filled={true} textMain={"Sign In!"} marginBottom={50} />
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? ReactStatus.currentHeight : 0,
  },
  backContainer: {
    width: "100%",
    minHeight: "10%",
    justifyContent: "center",
    paddingHorizontal: "10%",
  },
  backButton: {
    width: 24,
    height: 24,
  },
  titleContainer: {
    width: "100%",
    minHeight: "10%",
    justifyContent: "center",
    paddingHorizontal: "10%",
    alignItems: "flex-start",
    marginTop: 20,
  },
  titleText: {
    color: blackTitle,
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
});
