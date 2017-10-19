import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodoList from './components/TodoList';
import VisibilityFilters from './components/VisibilityFilters';

import './App.css';

import * as actions from './actions';

class App extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    // const { items } = this.props;
    console.log('CDM');
    if (this.props.items.length === 0) {
      this.fetchData(this.props.filter);
      console.log('CDM fetching...');
    }
  }

  componentWillReceiveProps(nextProps) {
    // Fix: Two childs with the same key
    if (nextProps.filter !== this.props.filter) {
      if (nextProps.items.length === 0) {
        this.fetchData(nextProps.filter);
      }
      console.log(nextProps.filter);
    }
  }

  fetchData = async filter => {
    const { getTodos } = this.props;

    this.setState({ loading: true });
    await getTodos(filter);
    this.setState({ loading: false });
  };

  render() {
    return (
      <div className="App">
        <VisibilityFilters />
        <TodoList todos={this.props.items} />
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
})(App);
