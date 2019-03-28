import React, { Component } from 'react';

class CalculatorRedux extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <label>
              Price:
              <input className="form-control" />
            </label>
          </div>
          <div className="col">
            <label>
              Discount:
              <input className="form-control"/>
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

export default CalculatorRedux;