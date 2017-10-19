import React from 'react';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';

import store from './store';

const Root = () => {
  return (
    <Provider store={store}>
      <Route path="/:filter?" component={App} />
    </Provider>
  );
};

export default Root;
