import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
  render() {
    return (
      <div className="container calculator">
        <div className="row">
          <div className="col">
            <label>
              Price:
              <input/>
            </label>
          </div>
          <div className="col">
            <label>
              Discount:
              <input/>
            </label>
          </div>
          <div className="col">
            Total price: 
          </div>
        </div>
          
      </div>
    );
  }
}

export default Calculator;