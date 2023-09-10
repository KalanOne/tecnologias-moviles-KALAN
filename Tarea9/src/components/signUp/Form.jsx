import React from "react";
import { StyleSheet, View } from "react-native";
import InputText from "../common/InputText";

const Form = () => {
  return (
    <View style={styles.container}>
      <InputText
        label={"Full name"}
        placeholder={"Enter your name"}
        type={"text"}
      />
      <InputText
        label={"Email"}
        placeholder={"name@example.com"}
        type={"email"}
      />
      <InputText
        label={"Password"}
        placeholder={"Enter your password"}
        type={"password"}
      />
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: "10%",
    justifyContent: "center",
    paddingHorizontal: "10%",
    alignItems: "center",
    // marginVertical: 150,
    flex: 1,
  },
});
