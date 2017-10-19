import React from 'react';

import Todo from './../Todo';

import './index.css';

const TodoList = ({ todos, toggleTodo }) => {
  return (
    <ul className="TodoList">
      {todos
        .map(todo => <Todo key={todo.id} {...todo} toggleTodo={toggleTodo} />)
        .reverse()}
    </ul>
  );
};

export default TodoList;
