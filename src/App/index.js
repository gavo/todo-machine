import React from "react";
import "./App.css";
import { useTodos } from "./useTodos";
import { TodoList } from "../TodoList";
import { CreateTodoButtom } from "../CreateTodoButtom";
import { TodoHeader } from "../TodoHeader";
import { TodoCounter } from "../TodoCounter";
import { TodoItem } from "../TodoItem";
import { TodoSearch } from "../TodoSearch";
import { TodoForm } from "../TodoForm";
import { Modal } from "../Modal";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";
import { TodoConfirmation } from "../TodoConfirmation";

function App() {
  const {
    todos,
    totalTodos,
    completedTodos,
    searchValue,
    openModal,
    openConfirmation,
    error,
    loading,
    todoCountSearch,
    todoToDelete,
    completTodo,
    createTodo,
    deleteTodo,
    setSearchValue,
    setTodoToDelete,
    setOpenConfirmation,
    setOpenModal,
  } = useTodos();
  return (
    <div id="App">
      <TodoHeader>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          setSearchValue={setSearchValue}
          searchValue={searchValue}
        />
      </TodoHeader>
      <TodoList
        error={error}
        loading={loading}
        todoCountSearch={todoCountSearch}
        searchValue={searchValue}
        todos={todos}
        onError={error => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptyEmptySearchResults={() => <p>No hay Resultados para "{searchValue.toUpperCase()}"</p>}
        //render=
      >
        {todo => (
          <TodoItem
            key={todo.text}
            todo={todo}
            completTodo={completTodo}
            setTodoToDelete={setTodoToDelete}
            setOpenConfirmation={setOpenConfirmation}
          />)}
      </TodoList>

      {(openModal || openConfirmation) && (
        <Modal>
          {openModal && <TodoForm
            createTodo={createTodo}
            setOpenModal={setOpenModal}
          />}
          {openConfirmation && <TodoConfirmation
            setOpenConfirmation={setOpenConfirmation}
            deleteTodo={deleteTodo}
            todoToDelete={todoToDelete}
            setTodoToDelete={setTodoToDelete}
          />}
        </Modal>
      )}

      <CreateTodoButtom
        openModal={openModal}
        setOpenModal={setOpenModal}
        openConfirmation={openConfirmation}
        setOpenConfirmation={setOpenConfirmation}
        setTodoToDelete={setTodoToDelete}
      />
    </div>
  );
}

export default App;
