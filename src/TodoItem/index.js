import React from "react";
import { TodoIcon } from "../TodoIcon";
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
      <TodoIcon type='remove' color="red" onClick={()=>onDelete(todo, deleteTodo)}/>
      <p
        className={`todo-item-text ${
          todo.completed ? "todo-item-completed" : ""
        }`}
      >
        {todo.text}
      </p>
      <TodoIcon type={todo.completed?'check':'uncheck'} onClick={()=>onComplete(todo, completTodo)} />
    </li>
  );
}

export { TodoItem };
