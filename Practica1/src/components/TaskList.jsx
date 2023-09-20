import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import TodoInput from "./TodoInput";
import CustomButton from "./CustomButton";
import Todo from "./Todo";

function TaskList({
  inputValue,
  setInputValue,
  handleAddTodo,
  todoList,
  handleDeleteTodo,
  handleDoneTodo,
  handleUpdateTodo,
}) {
  const [editTodo, setEditTodo] = useState(false);
  const [idEditTodo, setIdEditTodo] = useState(null);

  const handleEditTodo = (id) => {
    setEditTodo(true);
    setIdEditTodo(id);
    const todo = todoList.find((todo) => todo.id === id);
    setInputValue(todo.name);
  };

  const handleUpdateTodoLocal = () => {
    handleUpdateTodo(idEditTodo);
    setEditTodo(false);
    setIdEditTodo(null);
    setInputValue("");
  };

  const handleUpdateTodoCancel = () => {
    setEditTodo(false);
    setIdEditTodo(null);
    setInputValue("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <TodoInput value={inputValue} onChangeText={setInputValue} />
        {editTodo == false ? (
          <CustomButton text={"Add"} onPress={handleAddTodo} light={false} />
        ) : (
          <>
            <CustomButton
              text={"Edit"}
              onPress={handleUpdateTodoLocal}
              light={false}
            />
            <CustomButton
              text={"Cancel"}
              onPress={handleUpdateTodoCancel}
              light={false}
            />
          </>
        )}
      </View>
      <FlatList
        data={todoList}
        keyExtractor={(item) => item.id}
        renderItem={({
          item: { id, name, done, createdDate, updatedDate },
        }) => {
          return (
            <Todo
              id={id}
              name={name}
              done={done}
              createdDate={createdDate}
              updatedDate={updatedDate}
              handleDeleteTodo={handleDeleteTodo}
              handleDoneTodo={handleDoneTodo}
              handleEditTodo={handleEditTodo}
            />
          );
        }}
        style={{ marginTop: 20, flex: 1 }}
      />
    </View>
  );
}

export default TaskList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 25,
  },
  container2: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
});
