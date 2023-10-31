import React, { useMemo, useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Screen1 = () => {
  const [count, setCount] = useState(0);
  const [newCount, setNewCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const multiply = useMemo(() => {
    console.log("Multipicar");
    return count * 2;
  }, [count]);

  const handleIncrementNewCounter = () => {
    setNewCount((prevCount) => prevCount + 1);
  };

  const sayHello = () => {
    console.log("Hola");
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.counterText}>Contador: {count}</Text> */}
      <TouchableOpacity>
        <Text style={styles.counterText}>Mult {multiply}</Text>
      </TouchableOpacity>
      <Button title="Incrementar" onPress={handleIncrement} />
      <Button
        title="Incrementar nuevo contador"
        onPress={handleIncrementNewCounter}
      />
      <Button title="Reset" onPress={handleReset} />
      <TouchableOpacity onPress={sayHello}>
        <Text>Hello</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4f71e0",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  counterText: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
