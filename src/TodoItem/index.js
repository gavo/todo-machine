import React from "react";
import "./TodoItem.css";

function onComplete(todo, completTodo) {
  completTodo(todo);
}

function onDelete(todo, deleteTodo) {
  deleteTodo(todo);
}

function TodoItem({ todo, completTodo, deleteTodo }) {
  return (
    <li className={`todo-item`}>
      <span className="todo-item-right" onClick={() => onDelete(todo, deleteTodo)}>
       x
      </span>
      <p
        className={`todo-item-text ${
          todo.completed ? "todo-item-completed" : ""
        }`}
      >
        {todo.text}
      </p>
      <span className="todo-item-left" onClick={() => onComplete(todo, completTodo)}>
        {todo.completed === true ? "✅" : "🔳"}
      </span>
    </li>
  );
}

export { TodoItem };
