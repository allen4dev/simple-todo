import React from 'react';

import './index.css';

const Form = ({ placeholder, value, handleChange, handleSubmit }) => {
  return (
    <form className="Form" onSubmit={handleSubmit}>
      <input
        className="Form-input"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </form>
  );
};

export default Form;
