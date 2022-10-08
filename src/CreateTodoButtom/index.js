import React from "react";
import "./CreateTodoButtom.css";
import { TodoContext } from "../TodoContext";

const onClickButton = (createTodo, setOpenModal, openModal) => {
  setOpenModal(!openModal);
};

function CreateTodoButtom() {
  const { createTodo, openModal, setOpenModal } = React.useContext(TodoContext);

  return (
    <button
      formactive={openModal ? "true" : "false"}
      id="create-todo-button"
      onClick={() => onClickButton(createTodo, setOpenModal, openModal)}
    >
      +
    </button>
  );
}

export { CreateTodoButtom };
