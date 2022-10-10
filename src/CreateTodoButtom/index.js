import React from "react";
import "./CreateTodoButtom.css";
import { TodoContext } from "../TodoContext";
import { TodoIcon } from "../TodoIcon";

const onClickButton = (createTodo, setOpenModal, openModal) => {
  setOpenModal(!openModal);
};

function CreateTodoButtom() {
  const { createTodo, openModal, setOpenModal } = React.useContext(TodoContext);

  return (
    <span  onClick={() => onClickButton(createTodo, setOpenModal, openModal)} id="create-todo-button" formactive={openModal?'true':'false'}>
      <TodoIcon type="plus" />
    </span>
  );
}

export { CreateTodoButtom };
