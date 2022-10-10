import React from "react";
import "./TodosLoading.css";

function TodosLoading({error}) {
  return (
    <div className="LoadingTodo-container">
      <span className="LoadingTodo-completeIcon">x</span>
      <p className="LoadingTodo-text">Cargando Tareas...</p>
      <span className="LoadingTodo-deleteIcon">⬜</span>
    </div>
  );
}

export { TodosLoading };
