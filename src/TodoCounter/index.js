import React from "react";
import "./TodoCounter.css";

function TodoCounter({totalTodos, completedTodos }) {
  return (
    <h2 id="TodoCounter">
      Completaste {completedTodos} de {totalTodos} tarea
      {totalTodos !== 1 ? "s" : ""}
    </h2>
  );
}

export { TodoCounter };
