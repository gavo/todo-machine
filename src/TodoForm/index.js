import React from "react";
import "./TodoForm.css";

function TodoForm({ createTodo, setOpenModal }) {
  const [newTodoValue, setNewTodoValue] = React.useState("");

  const onchangeTA = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    createTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Describe la Nueva Tarea</label>
      <textarea
        placeholder="Nueva Tarea"
        onChange={onchangeTA}
        value={newTodoValue}
      ></textarea>
      <div className="TodoForm-buttonContainer">
        <button 
            type="button"
             onClick={onCancel}
             className="TodoForm-button TodoForm-button--cancel">
          Cancelar
        </button>
        <button 
        type="submit"        
        className="TodoForm-button TodoForm-button--add"
        >Añadir</button>
      </div>
    </form>
  );
}

export { TodoForm };
