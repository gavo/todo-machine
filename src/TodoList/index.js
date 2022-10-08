import React from 'react';
import "./TodoList.css";

function TodoList(props){
    return (
        <section id="TodoList">
            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export {TodoList};