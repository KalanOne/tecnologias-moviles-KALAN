import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import TodoInput from "./TodoInput";
import CustomButton from "./CustomButton";
import Todo from "./Todo";
import { useDispatch, useSelector } from "react-redux";

function TaskList() {
  const [editTodo, setEditTodo] = useState(false);
  const [idEditTodo, setIdEditTodo] = useState(null);
  const { inputValue, todos, modalVisible, todoItem, error } = useSelector(
    (state) => state.todos
  );
  const dispatch = useDispatch();

  const handleEditTodo = (id) => {
    setEditTodo(true);
    setIdEditTodo(id);
    const todo = todos.find((todo) => todo.id === id);
    // setInputValue(todo.name);
    dispatch({ type: "todos/setInputValue", payload: todo.name });
  };

  const handleUpdateTodoLocal = () => {
    // handleUpdateTodo(idEditTodo);
    dispatch({ type: "todos/handleUpdateTodo", payload: idEditTodo });
    setEditTodo(false);
    setIdEditTodo(null);
    // setInputValue("");
    dispatch({ type: "todos/setInputValue", payload: "" });
  };

  const handleUpdateTodoCancel = () => {
    setEditTodo(false);
    setIdEditTodo(null);
    // setInputValue("");
    dispatch({ type: "todos/setInputValue", payload: "" });
  };

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <TodoInput
          value={inputValue}
          onChangeText={(value) => {
            dispatch({ type: "todos/setInputValue", payload: value });
          }}
        />
        {editTodo == false ? (
          <CustomButton
            text={"Add"}
            onPress={() => dispatch({ type: "todos/handleAddTodo" })}
            light={false}
          />
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
        data={todos}
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
              handleDeleteTodo={(ids) =>
                dispatch({ type: "todos/handleDeleteTodo", payload: ids })
              }
              handleDoneTodo={() =>
                dispatch({ type: "todos/handleDoneTodo", payload: id })
              }
              handleEditTodo={handleEditTodo}
              handleInfoTodo={(ids) =>
                dispatch({ type: "todos/handleInfoTodo", payload: ids })
              }
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
