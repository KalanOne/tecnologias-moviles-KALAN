import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  StatusBar as ReactStatus,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import Todo from "./src/components/Todo";
import { useState } from "react";
import CustomButton from "./src/components/CustomButton";
import TodoInput from "./src/components/TodoInput";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  handleAddTodo = () => {
    if (inputValue === "") {
      Alert.alert("Error", "El campo no puede estar vacio");
      return;
    }
    setTodos([
      ...todos,
      { id: todos.length + 1, name: inputValue, done: false },
    ]);
    setInputValue("");
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Todo List</Text>
        <View style={styles.container2}>
          <TodoInput value={inputValue} onChangeText={setInputValue} />
          <CustomButton text={"Add"} onPress={handleAddTodo} light={true} />
        </View>
      </View>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { name } }) => {
          return <Todo name={name} />;
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
    paddingTop: ReactStatus.currentHeight,
    paddingHorizontal: 20,
    // backgroundColor: "#98bcff",
    backgroundColor: "#2d7bdc",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
  container2: {
    flexDirection: "row",
    marginTop: 20,
    gap: 20,
  },
  input: {
    borderWidth: 1,
    paddingHorizontal: 10,
    fontSize: 20,
    flex: 1,
    borderRadius: 5,
    height: 40,
  },
});
