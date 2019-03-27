import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';



import { createStore } from 'redux';

const initalState = {
  result: 1,
  lastValues: [],
  name: "Rius"
};

const reducer = (state = initalState, action)  => {
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

const store = createStore(reducer);

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


// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
