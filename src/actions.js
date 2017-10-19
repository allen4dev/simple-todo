import { normalize } from 'normalizr';

import * as actionTypes from './actionTypes';
import * as schemas from './schemas';

import * as api from './api';

// Action creators
export function setTodos(filter, response) {
  return {
    type: actionTypes.SET_TODOS,
    payload: { filter, response },
  };
}

export function setTodo(filter, response) {
  return {
    type: actionTypes.SET_TODO,
    payload: { filter, response },
  };
}

export function updateTodo(toggledId, response) {
  return {
    type: actionTypes.TOGGLE_TODO,
    payload: { toggledId, response },
  };
}

// Async actions
export function getTodos(filter) {
  return async dispatch => {
    const results = await api.fetchTodos(filter);
    const response = normalize(results, schemas.todoListSchema);
    console.log('NORMALIZED_TODOS:', response);

    dispatch(setTodos(filter, response));

    return response;
  };
}

export function addTodo(filter, text) {
  return async dispatch => {
    const result = await api.addTodo(text);
    const response = normalize(result, schemas.todoSchema);
    console.log('NORMALIZED_TODO:', response);

    dispatch(setTodo(filter, response));

    return response;
  };
}

export function toggleTodo(id) {
  return async dispatch => {
    const result = await api.toggleTodo(id);
    const response = normalize(result, schemas.todoSchema);

    dispatch(updateTodo(response.result, response));

    return response;
  };
}
