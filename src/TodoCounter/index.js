import React from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  return (
    <h2 id="TodoCounter">
      Completaste {completedTodos} de {totalTodos} tarea
      {totalTodos !== 1 ? "s" : ""}
    </h2>
  );
}

export { TodoCounter };
