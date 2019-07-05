/* @flow */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

require('./analytics');

import './styles/app.global.scss';

import store, { history } from './store'; // eslint-disable-line import/default

let element = document.getElementById('root');

if (!element) {
  throw new Error(`Fatal - div with id 'root' not found`);
}

console.log('process.env.NODE_ENV', JSON.stringify(process.env.NODE_ENV));
console.log('process.env.API_URL', JSON.stringify(process.env.API_URL));
console.log(
  'process.env.API_SWAGGER_URL',
  JSON.stringify(process.env.API_SWAGGER_URL)
);

const renderRoot = () => {
  const routes = require('./routes');
  render(
    <Provider store={store}>
      <ConnectedRouter history={history}>{routes}</ConnectedRouter>
    </Provider>,
    element
  );
};

renderRoot();

if (module.hot) {
  module.hot.accept('./routes', () => {
    renderRoot();
  });
}
