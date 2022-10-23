import React from "react";
import { useTodos } from "./useTodos";
import { TodoHeader } from "../TodoHeader";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";
import { TodoForm } from "../TodoForm";
import { CreateTodoButtom } from "../CreateTodoButtom";
import { TodoConfirmation } from "../TodoConfirmation";
import { Modal } from "../Modal";
import { ChangeAlert } from "../ChangeAlert";
import "./App.css";

function App() {
  const {
    error,
    loading,
    searchValue,
    todos,
    totalTodos,
    completedTodos,
    openModal,
    openConfirmation,
    todoCountSearch,
    todoToDelete,
    completTodo,
    createTodo,
    setSearchValue,
    setTodoToDelete,
    setOpenConfirmation,
    deleteTodo,
    setOpenModal,
    sincronizeTodos,
  } = useTodos();
  return (
    <div id="App" >
      <TodoHeader loading={loading}>
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
        onError={error => <TodosError error={error} />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos message={"No se han encontrado Tareas, Agregar Nueva Tarea con el botón (+)"} />}
        onEmptyEmptySearchResults={() => <EmptyTodos message={`no se han encontrado resultados para "${searchValue.toUpperCase()}"`} />}
      //render=
      >
        {todo => (
          !loading && (
            <TodoItem
              key={todo.text}
              todo={todo}
              completTodo={completTodo}
              setTodoToDelete={setTodoToDelete}
              setOpenConfirmation={setOpenConfirmation}
            />
          )
        )}
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

      <ChangeAlert
        sincronize={sincronizeTodos}
      />
      {
        !loading && (
          <CreateTodoButtom
            openModal={openModal}
            setOpenModal={setOpenModal}
            openConfirmation={openConfirmation}
            setOpenConfirmation={setOpenConfirmation}
            setTodoToDelete={setTodoToDelete}
          />)
      }
    </div>
  );
}

export default App;
