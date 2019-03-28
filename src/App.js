import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

import Home from './components/home/Home';
import Calculator from './components/calculator/Calculator';
import CalculatorRedux from './components/calculatorRedux/CalculatorRedux';
import Colors from './components/colors/Colors';

class App extends Component {

  render() {
    return (
      <div>
        <h3>My name is: {this.props.user.name}</h3>
        <h3>My age is: {this.props.user.age}</h3>
        <button onClick={() => this.props.setName('Luis')}>change name</button>
        <button onClick={()=>this.props.setAge('12')}>change age</button>
        <Calculator/>
        <CalculatorRedux />
        <Colors/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    math: state.math
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch({
        type: "SET_NAME",
        payload: name
      });
    },
    setAge: (age) => {
      dispatch({
        type: "SET_AGE",
        payload: age
      });
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
