import React from "react";
import { TodoIcon } from "../TodoIcon";
import "./TodosLoading.css";

function TodosLoading({ error }) {
  return (
    <div className="LoadingTodo-container">
      <span className="LoadingTodo-completeIcon">
        <TodoIcon type="remove" color="white" />
      </span>
      <p className="LoadingTodo-text">Cargando Tareas...</p>
      <span className="LoadingTodo-deleteIcon">
        <TodoIcon type="uncheck" color="white"/>
      </span>
    </div>
  );
}

export { TodosLoading };
