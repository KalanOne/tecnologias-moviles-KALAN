import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Provider, useSelector } from "react-redux";
import { store } from "./src/store";
import Counter from "./src/Counter";

export default function App() {
  // const count = useSelector((state) => state.counter.value);

  return (
    <Provider store={store}>
      {/* <View style={styles.container}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>
          Counter value: {count}
        </Text>
        <TouchableOpacity
          onPress={() => {
            store.dispatch({ type: "counter/increment" });
          }}
        >
          <Text>Increment by 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            store.dispatch({ type: "counter/decrement" });
          }}
        >
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
      </View> */}
      <Counter />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
