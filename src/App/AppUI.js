import React from "react";
import "./App.css";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButtom } from "../CreateTodoButtom";
import { TodoHeader } from "../TodoHeader";
import { TodoContext } from "../TodoContext";
import { TodoForm } from "../TodoForm";
import { Modal } from "../Modal";

function AppUI() {
  const {
    todos,
    searchValue,
    completTodo,
    deleteTodo,
    openModal,
  } = React.useContext(TodoContext);

  return (
    <div id="App">
      <TodoHeader />
      <TodoList>
        {todos
          .filter((t) =>
            t.text.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((todo) => (
            <TodoItem
              key={todo.text}
              todo={todo}
              completTodo={completTodo}
              deleteTodo={deleteTodo}
            />
          ))}
      </TodoList>

      {openModal && (
        <Modal>
          <TodoForm/>
        </Modal>
      )}

      <CreateTodoButtom />
    </div>
  );
}

export { AppUI };
