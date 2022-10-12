import React from "react";
import "./App.css";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButtom } from "../CreateTodoButtom";
import { TodoHeader } from "../TodoHeader";
import { TodoContext } from "../TodoContext";
import { TodoForm } from "../TodoForm";
import { Modal } from "../Modal";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";
import { TodoConfirmation } from "../TodoConfirmation";

function AppUI() {
  const {
    todos,
    searchValue,
    completTodo,
    openModal,
    openConfirmation,
    error,
    loading,
    todoCountSearch,
    setTodoToDelete,
    setOpenConfirmation,
  } = React.useContext(TodoContext);

  return (
    <div id="App">
      <TodoHeader />
      <TodoList>
        {error && <TodosError error={error} />}
        {loading && new Array(5).fill(1).map((a, i) => <TodosLoading key={i} />)}
        {!loading && todoCountSearch === 0 && <EmptyTodos />}
        {todos
          .filter((t) =>
            t.text.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((todo) => (
            <TodoItem
              key={todo.text}
              todo={todo}
              completTodo={completTodo}
              setTodoToDelete={setTodoToDelete}
              setOpenConfirmation = {setOpenConfirmation}
            />
          ))}
      </TodoList>

      {(openModal || openConfirmation) && (
        <Modal>
          {openModal && <TodoForm /> }
          {openConfirmation && <TodoConfirmation /> }
        </Modal>
      )}

      <CreateTodoButtom />
    </div>
  );
}

export { AppUI };
