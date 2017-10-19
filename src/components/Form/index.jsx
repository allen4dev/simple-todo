import React, { Component } from 'react';

import './index.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <form className="Form">
        <input className="Form-input" type="text" placeholder="Add new todo" />
      </form>
    );
  }
}

export default Form;
