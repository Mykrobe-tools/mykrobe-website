/* @flow */

import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { createBrowserHistory as createHistory } from 'history';

import { rootReducer } from '../modules';

export const history = createHistory();

const router = routerMiddleware(history);

const middleware = [router];

const enhancer = compose(applyMiddleware(...middleware));

const store = createStore(rootReducer, enhancer);

export default store;
