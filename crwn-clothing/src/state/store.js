import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';

import rootRedcer from './root-reducer';

const middlewares = [logger];

const store = createStore(rootRedcer, applyMiddleware(...middlewares));

export default store;
