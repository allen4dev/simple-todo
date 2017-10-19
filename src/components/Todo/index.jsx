import React from 'react';

import './index.css';

const Todo = props => {
  return (
    <li className="Todo">
      <p className="Todo-text">{props.text}</p>
    </li>
  );
};

export default Todo;
