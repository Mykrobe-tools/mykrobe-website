/* @flow */

import { createStore, applyMiddleware, compose as vanillaCompose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { createBrowserHistory as createHistory } from 'history';
import { createLogger } from 'redux-logger';

import { rootReducer } from '../modules';

const devToolsPresent =
  window && typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function';

let compose;

if (devToolsPresent) {
  const actionCreators = {};
  const actionsBlacklist = [];
  compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    actionCreators,
    actionsBlacklist,
  });
} else {
  compose = vanillaCompose;
}

export const history = createHistory();

const router = routerMiddleware(history);

const middleware = [router];

const actionsBlacklist = [];
const logger = createLogger({
  level: 'info',
  collapsed: true,
  predicate: (getState, action) => {
    return actionsBlacklist.indexOf(action.type) === -1;
  },
});
middleware.push(logger);

const enhancer = compose(applyMiddleware(...middleware));

const store = createStore(rootReducer, enhancer);

if (module.hot) {
  module.hot.accept(
    '../modules',
    () => store.replaceReducer(require('../modules')) // eslint-disable-line global-require
  );
}

export default store;
