import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger';
import user from './reducers/userReducer';
import math from './reducers/mathReducer';
import color from './reducers/colorReducer';

export default createStore(
  combineReducers({
    math,
    user,
    color
  }),
  {},
  applyMiddleware(createLogger())
);