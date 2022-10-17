import React from "react";
import "./TodoHeader.css";

function TodoHeader({ children, loading }) {
  return (
    <div id="todo-header">
      {
        React.Children
          .toArray(children)
          .map(child => React.cloneElement(child, { loading }))
      }
    </div>
  );
}

export { TodoHeader };
