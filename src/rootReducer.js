import { combineReducers } from 'redux';

import * as actionTypes from './actionTypes';

const INITIAL_STATE = {
  entities: {},
  byFilter: {
    all: [],
    active: [],
    completed: [],
  },
};

function entitiesReducer(state = INITIAL_STATE.entities, action = {}) {
  switch (action.type) {
    case actionTypes.SET_TODOS:
    case actionTypes.SET_TODO:
    case actionTypes.TOGGLE_TODO:
      return {
        ...state,
        ...action.payload.response.entities.todos,
      };

    default:
      return state;
  }
}

function createList(filter) {
  function handleToggle(state, action) {
    const { toggledId, response } = action.payload;
    const { entities } = response;

    const { completed } = entities.todos[toggledId];

    const shouldRemove =
      (completed && filter === 'active') ||
      (!completed && filter === 'completed');

    return shouldRemove ? state.filter(id => id !== toggledId) : state;
  }

  return (state = INITIAL_STATE.byFilter[filter], action = {}) => {
    // if (!action.payload || action.payload.filter !== filter) {
    //   return state;
    // }

    switch (action.type) {
      case actionTypes.SET_TODOS:
        return action.payload.filter === filter
          ? action.payload.response.result
          : state;

      case actionTypes.SET_TODO:
        return action.payload.filter === filter
          ? [...state, action.payload.response.result]
          : state;

      case actionTypes.TOGGLE_TODO:
        // debugger;
        return handleToggle(state, action);

      default:
        return state;
    }
  };
}

const byFilterReducer = combineReducers({
  all: createList('all'),
  active: createList('active'),
  completed: createList('completed'),
});

const rootReducer = combineReducers({
  entities: entitiesReducer,
  byFilter: byFilterReducer,
});

export default rootReducer;
