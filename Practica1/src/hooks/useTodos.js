import { useState } from "react";
import { handleShowerror } from "../helpers/alerts";

export const useTodos = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [todoItem, setTodoItem] = useState({});

  // console.log(todos);

  const handleAddTodo = () => {
    if (inputValue === "") {
      return handleShowerror("El campo no puede estar vacio");
    }
    const existe = todos.some(
      (todo) => todo.name.toLocaleLowerCase() === inputValue.toLocaleLowerCase()
    );
    if (existe) {
      return handleShowerror("El campo ya existe");
    }
    const highestId = todos.reduce((maxId, todo) => {
      return Math.max(maxId, todo.id);
    }, 0);
    const newId = highestId + 1;
    const now = new Date();
    const createdDate = now.toISOString();
    setTodos([
      ...todos,
      {
        id: newId,
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

  const handleDeleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleDoneTodo = (id) => {
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

  handleInfoTodo = (id) => {
    const todoItem = todos.filter((todo) => todo.id === id)[0];
    setTodoItem(todoItem);
    setModalVisible(true);
  };

  handleCloseModal = () => {
    setModalVisible(false);
  };

  return {
    inputValue,
    setInputValue,
    todos,
    handleAddTodo,
    handleDeleteTodo,
    handleDoneTodo,
    handleUpdateTodo,
    handleInfoTodo,
    handleCloseModal,
    modalVisible,
    todoItem,
  };
};
