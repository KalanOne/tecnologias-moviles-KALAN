import React, { useState } from "react";
import { StyleSheet, Switch, Text } from "react-native";
import { View } from "react-native-animatable";
import {
  labelText,
  orangeMain,
  placehorlderText,
  textMuted,
} from "../../theme/constanst";

const SwitchInput = ({ label }) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Switch
        trackColor={{ false: placehorlderText, true: orangeMain }}
        thumbColor={"white"}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export default SwitchInput;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  label: {
    color: labelText,
    fontSize: 16,
  },
});
