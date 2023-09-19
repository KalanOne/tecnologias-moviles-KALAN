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
import Title from "./src/components/Title";
import TaskList from "./src/components/TaskList";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  handleAddTodo = () => {
    if (inputValue === "") {
      Alert.alert("Error", "El campo no puede estar vacio");
      return;
    }
    const now = new Date();
    const createdDate = now.toISOString();
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        name: inputValue,
        done: false,
        // createdDate: "2023-09-18T01:53:28.513Z",
        // createdDate: "2021-09-18T01:53:28.513Z",
        createdDate: createdDate,
      },
    ]);
    setInputValue("");
  };

  return (
    <View style={styles.container}>
      <Title numberTask={todos.length} />
      <TaskList
        handleAddTodo={handleAddTodo}
        inputValue={inputValue}
        setInputValue={setInputValue}
        todoList={todos}
      />
      {/* <View>
        <Text style={styles.title}>Todo List</Text>
        <View style={styles.container2}>
          <TodoInput value={inputValue} onChangeText={setInputValue} />
          <CustomButton text={"Add"} onPress={handleAddTodo} light={true} />
        </View>
      </View> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
    // backgroundColor: "#98bcff",
    // backgroundColor: "#2d7bdc",
    backgroundColor: "#5687ff",
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
