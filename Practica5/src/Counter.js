import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { store } from "./store";
import { useDispatch, useSelector } from "react-redux";
import { StatusBar } from "expo-status-bar";
import { decrement } from "./features/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: "counter/increment" });
  };

  const decrements = () => {
    dispatch(decrement());
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>
        Counter value: {count}
      </Text>
      <TouchableOpacity onPress={increment}>
        <Text>Increment by 1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={decrements}>
        <Text>Decrement by 1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          store.dispatch({ type: "counter/incrementByAmount", payload: 5 });
        }}
      >
        <Text>Increment by 5</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
