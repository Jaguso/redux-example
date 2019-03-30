import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger';
import user from './reducers/userReducer';
import math from './reducers/mathReducer';
import color from './reducers/colorReducer';
import result from './reducers/resultReducer';

export default createStore(
  combineReducers({
    math,
    user,
    color,
    result
  }),
  {},
  applyMiddleware(createLogger())
);