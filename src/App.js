import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

import Calculator from './components/calculator/Calculator';
import CalculatorRedux from './components/calculatorRedux/CalculatorRedux';
import Colors from './components/colors/Colors';

class App extends Component {

  render() {
    return (
      <div>
        <div style={{textAlign: 'center', margin: '30px'}}>
          <h3>My name is: {this.props.user.name}</h3>
          <h3>My age is: {this.props.user.age}</h3>
          <button onClick={() => this.props.setName('Luis')} className="btn btn-primary" style={{margin: '8px'}}>change name</button>
          <button onClick={()=>this.props.setAge('12')} className="btn btn-primary" style={{margin: '8px'}}>change age</button>
        </div>
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
