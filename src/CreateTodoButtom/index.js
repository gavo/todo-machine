import React from "react";
import "./CreateTodoButtom.css";
import { TodoIcon } from "../TodoIcon";

function CreateTodoButtom({ openModal, setOpenModal, openConfirmation, setOpenConfirmation, setTodoToDelete }) {

  return (
    <span
      onClick={() => {
        setOpenConfirmation(false);
        setOpenModal(openModal === openConfirmation);
        setTodoToDelete(undefined);
      }}
      id="create-todo-button"
      formactive={openModal ? "true" : "false"}
    >
      <TodoIcon type="plus" />
    </span>
  );
}

export { CreateTodoButtom };
