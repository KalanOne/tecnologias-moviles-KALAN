import React, { useState } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Screen1 = () => {
  const [state, setState] = useState(1);
  console.log(state, "**STATE 0**");
  console.log(setState, "**STATE 1**");

  const [inputState, setInputState] = useState("Value");

  sumValue = () => {
    setState(state + 1);
  };
  return (
    <View style={styles.container}>
      <Text>{state}</Text>
      <TouchableOpacity onPress={sumValue}>
        <Text>Change +1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setState(state + 5)}>
        <Text>Change +5</Text>
      </TouchableOpacity>
      <View></View>
      <Text>{inputState}</Text>
      <TextInput
        style={styles.input}
        value={inputState}
        onChangeText={(value) => setInputState(value)}
      />
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
    gap: 10,
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: "cyan",
  },
});
