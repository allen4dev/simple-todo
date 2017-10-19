import React from 'react';

import './index.css';

const Todo = props => {
  return (
    <li
      onClick={() => props.toggleTodo(props.id)}
      className={`Todo ${props.completed ? 'Todo-completed' : ''}`}>
      <p className="Todo-text">{props.text}</p>
    </li>
  );
};

export default Todo;
