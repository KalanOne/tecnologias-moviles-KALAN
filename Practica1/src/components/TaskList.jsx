import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import TodoInput from "./TodoInput";
import CustomButton from "./CustomButton";
import Todo from "./Todo";

function TaskList({ inputValue, setInputValue, handleAddTodo, todoList }) {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <TodoInput value={inputValue} onChangeText={setInputValue} />
        <CustomButton text={"Add"} onPress={handleAddTodo} light={false} />
      </View>
      <FlatList
        data={todoList}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { name, done, createdDate } }) => {
          return <Todo name={name} createdDate={createdDate} />;
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
    gap: 15,
  },
});
