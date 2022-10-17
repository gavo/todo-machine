import React from "react";
import "./TodoConfirmation.css";

function TodoConfirmation({
  setOpenConfirmation,
  deleteTodo,
  todoToDelete,
  setTodoToDelete}) {
  return (
    <div className="TodoConfirmation-container">
      <span className="TodoConfirmation-message">
        ¿Quieres eliminar esta tarea de la lista?
      </span>
      <div className="TodoConfirmation-container-button">
        <button
          className="TodoConfirmation-button TodoConfirmation-cancel"
          onClick={() => {
            setTodoToDelete(undefined);
            setOpenConfirmation(false);
          }}
        >
          Cancelar
        </button>
        <button
          className="TodoConfirmation-button TodoConfirmation-accept"
          onClick={() => {
            deleteTodo(todoToDelete);
            setTodoToDelete(undefined);
            setOpenConfirmation(false);
          }}
        >
          Aceptar
        </button>
      </div>
    </div>
  );
}

export { TodoConfirmation };
