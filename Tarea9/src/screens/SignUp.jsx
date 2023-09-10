import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Dimensions,
  Platform,
  StatusBar as ReactStatus,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { blackTitle } from "../theme/constanst";
import { Text } from "react-native-animatable";
import Tabs from "../components/common/Tabs";
import Form from "../components/signUp/Form";
import SubmitInput from "../components/common/SubmitInput";

const SignUp = ({ handleScreen }) => {
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
        <Text style={styles.titleText}>Create new</Text>
        <Text style={styles.titleText}>account!</Text>
      </View>
      <Tabs distribution={"center"} />
      <Form />
      <SubmitInput filled={true} textMain={"Sign Un!"} marginBottom={50} />
    </SafeAreaView>
  );
};

export default SignUp;

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
