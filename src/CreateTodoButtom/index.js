import React from "react";
import "./CreateTodoButtom.css";
import { TodoContext } from "../TodoContext";
import { TodoIcon } from "../TodoIcon";

function CreateTodoButtom() {
  const { openModal, setOpenModal, openConfirmation, setOpenConfirmation, setTodoToDelete } = React.useContext(TodoContext);

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
