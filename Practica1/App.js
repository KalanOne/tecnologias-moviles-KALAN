import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Alert } from "react-native";
import { useState } from "react";
import Title from "./src/components/Title";
import TaskList from "./src/components/TaskList";
import { useTodos } from "./src/hooks/useTodos";
import DetailsModal from "./src/components/DetailsModal";
import { Provider } from "react-redux";
import { store } from "./src/store";
import Screen1 from "./src/screens/Screen1";

export default function App() {
  return (
    <Provider store={store}>
      {/* <View style={styles.container}>
        <Title numberTask={todos.length} />
        <TaskList
          handleAddTodo={handleAddTodo}
          handleDeleteTodo={handleDeleteTodo}
          handleDoneTodo={handleDoneTodo}
          handleUpdateTodo={handleUpdateTodo}
          inputValue={inputValue}
          setInputValue={setInputValue}
          todoList={todos}
          handleInfoTodo={handleInfoTodo}
        />
        <StatusBar style="light" />
      </View>
      <DetailsModal
        todo={todoItem}
        handleCloseModal={handleCloseModal}
        modalVisible={modalVisible}
      /> */}
      <Screen1 />
    </Provider>
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
