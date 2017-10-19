import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodoList from './components/TodoList';
import Form from './components/Form';
import VisibilityFilters from './components/VisibilityFilters';

import './App.css';

import * as actions from './actions';

class App extends Component {
  state = {
    loading: true,
    value: '',
  };

  componentDidMount() {
    // const { items } = this.props;
    console.log('CDM');
    // if (this.props.items.length === 0) {
    this.fetchData(this.props.filter);
    console.log('CDM fetching...');
    // }
  }

  componentWillReceiveProps(nextProps) {
    // Fix: Two childs with the same key
    if (nextProps.filter !== this.props.filter) {
      // if (nextProps.items.length === 0) {
      this.fetchData(nextProps.filter);
      // }
      // console.log(nextProps.filter);
    }
  }

  fetchData = async filter => {
    const { getTodos } = this.props;

    this.setState({ loading: true });
    await getTodos(filter);
    this.setState({ loading: false });
  };

  handleChange = e => {
    const value = e.target.value;

    this.setState({ value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.addTodo(this.props.filter, this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <div className="App">
        <VisibilityFilters />

        <Form
          placeholder="Add todo"
          value={this.state.value}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />

        <TodoList todos={this.props.items} toggleTodo={this.props.toggleTodo} />
      </div>
    );
  }
}

function mapStateToProps(state, { match }) {
  const filter = match.params.filter || 'all';
  const ids = state.byFilter[filter] || [];

  return {
    items: ids.map(id => state.entities[id]),
    filter,
  };
}

export default connect(mapStateToProps, {
  getTodos: actions.getTodos,
  addTodo: actions.addTodo,
  toggleTodo: actions.toggleTodo,
})(App);
