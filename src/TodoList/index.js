import React from 'react';
import "./TodoList.css";

function TodoList(props) {
    const items = props.children || props.render
    return (
        <section id="TodoList">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {!props.loading && props.todoCountSearch === 0 && props.onEmptyTodos()}
            {!props.loading &&
                !!props.todos.length &&
                !props.todos.filter(t => t.text.toLowerCase().includes(props.searchValue.toLowerCase())).length &&
                props.onEmptyEmptySearchResults()}
            <ul>
                {props.todos.filter((t) => t.text.toLowerCase().includes(props.searchValue.toLowerCase())).map(items)}
            </ul>
        </section>
    );
}

export { TodoList };