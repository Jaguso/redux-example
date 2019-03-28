import React, { Component } from 'react';

class CalculatorRedux extends Component {

  constructor() {
    super();
    this.state = {
      price: "",
      discount: ""
    }
  }

  onChangeInput = (event) => {
    const {name, value} = event.target;
    console.log("Valores: ", name, value);
    this.setState({[name]: value});
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <label>
              Price:
              <input className="form-control" type="text" name="price"
              value={this.state.price} onChange={this.onChangeInput}
              placeholder="$" />
            </label>
          </div>
          <div className="col">
            <label>
              Discount:
              <input className="form-control" type="text" name="discount"
              value={this.state.discount} onChange={this.onChangeInput}
              placeholder="%" />
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