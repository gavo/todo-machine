import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import "./TodoHeader.css";

function TodoHeader() {
  return (
    <div id="todo-header">
      <TodoCounter />
      <TodoSearch />
    </div>
  );
}

export { TodoHeader };
