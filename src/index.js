import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';



import { createStore, combineReducers } from 'redux';

// REDUCERS
const mathReducer = (state = {
  result: 1,
  lastValues: [],
  name: "Rius"
}, action) => {
  switch (action.type) {
    case "ADD":
      state = {
        ...state,
        result: state.result +  action.payload,
        lastValues: [...state.lastValues, action.payload]
      };
      break;
    case "MULTIPLY":
      state = {
        ...state,
        result: state.result * action.payload,
        lastValues: [...state.lastValues, action.payload]
      };
      break;
    case "SUBTRACT":
      state = {
        ...state,
        result: state.result - action.payload,
        lastValues: [...state.lastValues, action.payload]
      };
      break;
  }
  return state;
};

const userReducer = (state = {
  name: "Rius",
  age: 57
}, action) => {
  switch (action.type) {
    case "SET_NAME":
      state = {
        ...state,
        name: action.payload
      };
      break;
    case "SET_AGE":
      state = {
        ...state,
        age: action.payload
      };
      break;
  }
  return state;
}

// CREATE STORE
const store = createStore(combineReducers({
  mathReducer,
  userReducer
}));

store.subscribe(() => {
  console.log("Store updated", store.getState());
});

store.dispatch({
  type: "ADD",
  payload: 1
});

store.dispatch({
  type: "MULTIPLY",
  payload: 3
});

store.dispatch({
  type: "SUBTRACT",
  payload: 1
});

store.dispatch({
  type: "ADD",
  payload: 10
});

store.dispatch({
  type: "SET_NAME",
  payload: 'Luis'
})


// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
