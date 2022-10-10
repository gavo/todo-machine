import React from "react";
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext";

function TodoSearch() {
  const { setSearchValue, searchValue } = React.useContext(TodoContext);
  return (
    <input
      placeholder="Buscar..."
      id="TodoSearch"
      typeinput="search"
      onChange={(event) => setSearchValue(event.target.value)}
      value={searchValue}
    />
  );
}

export { TodoSearch };
