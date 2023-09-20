import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Alert } from "react-native";
import { useState } from "react";
import Title from "./src/components/Title";
import TaskList from "./src/components/TaskList";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  // console.log(todos);

  handleShowerror = (error) => {
    Alert.alert("Error", error, [
      {
        text: "Aceptar",
        onPress: () => console.log("Aceptar Pressed"),
        style: "ok",
      },
    ]);
  };

  handleAddTodo = () => {
    if (inputValue === "") {
      return handleShowerror("El campo no puede estar vacio");
    }
    const existe = todos.some(
      (todo) => todo.name.toLocaleLowerCase() === inputValue.toLocaleLowerCase()
    );
    if (existe) {
      return handleShowerror("El campo ya existe");
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
        updatedDate: null,
      },
    ]);
    setInputValue("");
  };

  handleDeleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  handleDoneTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.done = !todo.done;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleUpdateTodo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.name = inputValue;
        todo.updatedDate = new Date().toISOString();
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <View style={styles.container}>
      <Title numberTask={todos.length} />
      <TaskList
        handleAddTodo={handleAddTodo}
        handleDeleteTodo={handleDeleteTodo}
        handleDoneTodo={handleDoneTodo}
        handleUpdateTodo={handleUpdateTodo}
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
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // width: Dimensions.get("screen").width,
    // height: Dimensions.get("screen").height,
    flex: 1,
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
