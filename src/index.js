/* @flow */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import reportWebVitals from './reportWebVitals';

import './styles/app.global.scss';

import store, { history } from './store';

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

const routes = require('./routes').default;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>{routes}</ConnectedRouter>
    </Provider>
    ,
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
