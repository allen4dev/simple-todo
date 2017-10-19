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
      return {
        ...state,
        ...action.payload.response.entities.todos,
      };

    default:
      return state;
  }
}

function createList(filter) {
  return (state = INITIAL_STATE.byFilter[filter], action = {}) => {
    if (!action.payload || action.payload.filter !== filter) {
      return state;
    }
    console.log('REDUCER FILTER', filter);
    switch (action.type) {
      case actionTypes.SET_TODOS:
        return action.payload.response.result;

      case actionTypes.SET_TODO:
        return [...state, action.payload.response.result];

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
