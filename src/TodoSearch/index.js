import React from "react";
import "./TodoSearch.css";

function TodoSearch({ setSearchValue, searchValue, loading }) {
  return (
    <input
      placeholder="Buscar..."
      id="TodoSearch"
      typeinput="search"
      onChange={(event) => setSearchValue(event.target.value)}
      value={searchValue}
      disabled={loading}
    />
  );
}

export { TodoSearch };
