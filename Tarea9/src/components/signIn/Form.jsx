import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native-animatable";
import InputText from "../common/InputText";
import SwitchInput from "../common/SwitchInput";

const Form = () => {
  return (
    <View style={styles.container}>
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
      <SwitchInput label={"Remember me"} />
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
