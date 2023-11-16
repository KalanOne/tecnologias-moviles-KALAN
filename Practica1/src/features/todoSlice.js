import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inputValue: "",
  todos: [],
  modalVisible: false,
  todoItem: {},
  error: "",
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    handleAddTodo: (state) => {
      if (state.inputValue === "") {
        return { ...state, error: "El campo no puede estar vacío" };
      }
      const existe = state.todos.some(
        (todo) => todo.name.toLowerCase() === state.inputValue.toLowerCase()
      );
      if (existe) {
        return { ...state, error: "El campo ya existe" };
      }
      const highestId = state.todos.reduce((maxId, todo) => {
        return Math.max(maxId, todo.id);
      }, 0);
      const newId = highestId + 1;
      const now = new Date();
      const createdDate = now.toISOString();
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: newId,
            name: state.inputValue,
            done: false,
            createdDate: createdDate,
            updatedDate: null,
          },
        ],
        inputValue: "",
      };
    },
    handleDeleteTodo: (state, action) => {
      const newTodos = state.todos.filter((todo) => todo.id !== action.payload);
      return { ...state, todos: newTodos };
    },
    handleDoneTodo: (state, action) => {
      const newTodos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.done = !todo.done;
        }
        return todo;
      });
      return { ...state, todos: newTodos };
    },
    handleUpdateTodo: (state, action) => {
      const newTodos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.name = state.inputValue;
          todo.updatedDate = new Date().toISOString();
        }
        return todo;
      });
      return { ...state, todos: newTodos };
    },
    handleInfoTodo: (state, action) => {
      const todoItem = state.todos.filter(
        (todo) => todo.id === action.payload
      )[0];
      return { ...state, todoItem: todoItem, modalVisible: true };
    },
    handleCloseModal: (state) => {
      return { ...state, modalVisible: false };
    },
    setInputValue: (state, action) => {
      return { ...state, inputValue: action.payload };
    },
  },
});

// Aquí deberías tener tus propias acciones
export const {
  handleAddTodo,
  handleDeleteTodo,
  handleDoneTodo,
  handleUpdateTodo,
  handleInfoTodo,
  handleCloseModal,
  setInputValue,
} = todoSlice.actions;
