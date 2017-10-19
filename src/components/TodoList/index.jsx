import React from 'react';

import Todo from './../Todo';

import './index.css';

const TodoList = ({ todos }) => {
  return (
    <ul className="TodoList">
      {todos.map(todo => <Todo key={todo.id} {...todo} />).reverse()}
    </ul>
  );
};

export default TodoList;
