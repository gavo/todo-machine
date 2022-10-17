import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTodos() {
  const {
    item: todos,
    saveItem: saveTodos,
    error,
    loading
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);
  const [openConfirmation, setOpenConfirmation] = React.useState(false);
  const [todoToDelete, setTodoToDelete] = React.useState(undefined);

  const completedTodos = todos.filter((t) => t.completed).length;
  const todoCountSearch = todos.filter((todo) => todo.text.toLowerCase().includes(searchValue.toLowerCase())).length;

  const totalTodos = todos.length;
  const completTodo = (todo) => {
    todo.completed = !todo.completed;
    saveTodos(todos);
  };
  const deleteTodo = (todo) => {
    saveTodos(todos.filter((t) => t.text !== todo.text));
  };
  const createTodo = (text) => {
    const newTodo = {
      text: text,
      completed: false,
    };
    todos.push(newTodo);
    saveTodos(todos);
  };

  return {
    todos,
    saveTodos,
    searchValue,
    completedTodos,
    totalTodos,
    openModal,
    error,
    loading,
    todoCountSearch,
    openConfirmation,
    todoToDelete,
    setTodoToDelete,
    setOpenConfirmation,
    setSearchValue,
    completTodo,
    deleteTodo,
    createTodo,
    setOpenModal
  }
}

export { useTodos };
