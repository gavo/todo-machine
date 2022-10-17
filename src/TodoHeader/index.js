import React from "react";
import "./TodoHeader.css";

function TodoHeader({children}) {
  return (
    <div id="todo-header">
      {children}
    </div>
  );
}

export { TodoHeader };
