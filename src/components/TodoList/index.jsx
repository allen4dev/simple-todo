import React from 'react';

import Todo from './../Todo';
import Form from './../Form';

import './index.css';

const TodoList = ({ todos }) => {
  return (
    <div className="TodoList">
      <div className="TodoList-form">
        <Form />
      </div>
      <ul className="TodoList-list">
        {todos.map(todo => <Todo key={todo.id} {...todo} />)}
      </ul>
    </div>
  );
};

export default TodoList;
