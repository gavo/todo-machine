import React from "react";
import "./TodoCounter.css";

function TodoCounter({totalTodos, completedTodos, loading }) {
  return (
    <h2 id={loading?"TodoCounter--loading":"TodoCounter"}>
      Completaste {completedTodos} de {totalTodos} tarea
      {totalTodos !== 1 ? "s" : ""}
    </h2>
  );
}

export { TodoCounter };
