import React from "react";
import { TodoIcon } from "../TodoIcon";
import "./TodoItem.css";

function TodoItem({ todo, completTodo, setTodoToDelete, setOpenConfirmation }) {
  return (
    <li className={`todo-item`}>
      <TodoIcon
        type="remove"
        color="red"
        onClick={() => {
          setTodoToDelete(todo);
          setOpenConfirmation(true);
        }}
      />
      <p
        className={`todo-item-text ${
          todo.completed ? "todo-item-completed" : ""
        }`}
      >
        {todo.text}
      </p>
      <TodoIcon
        type={todo.completed ? "check" : "uncheck"}
        onClick={() => completTodo(todo)}
      />
    </li>
  );
}

export { TodoItem };
