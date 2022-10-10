import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
  const {
    item: todos, 
    saveItem: saveTodos, 
    error, 
    loading
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter((t) => t.completed).length;
  const todoCountSearch = todos.filter((todo)=>todo.text.toLowerCase().includes(searchValue.toLowerCase())).length;
  
  const totalTodos = todos.length;
  const completTodo = (todo) => {
    todo.completed = !todo.completed;
    saveTodos(todos);
  };
  const deleteTodo = (todo) => {
    saveTodos(todos.filter((t) => t !== todo));
  };
  const createTodo = (text) => {
    const newTodo = {
      text: text,
      completed: false,
    };
    todos.push(newTodo);
    saveTodos(todos);
  };

  React.useEffect(() => {
    console.log("Aquí cambia el estado de TotalTodos");
  }, [totalTodos]);

  return (
    <TodoContext.Provider
      value={{
        todos,
        saveTodos,
        searchValue,
        completedTodos,
        totalTodos,
        openModal,
        error,
        loading,
        todoCountSearch,
        setSearchValue,
        completTodo,
        deleteTodo,
        createTodo,
        setOpenModal
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
