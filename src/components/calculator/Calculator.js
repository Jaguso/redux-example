import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
  
  constructor() {
    super();
    this.state = {
      price: "",
      discount: ""
    }
  }

  onChangeInput = (event) => {
    const {name, value} = event.target;
    console.log("Valores ", name, value)
    this.setState({[name]: value});
  }

  calculatePrice = (price, discount) => {
    return parseInt(price) - (parseInt(price) * (parseInt(discount)/100));
  }

  render() {
    return (
      <div className="container calculator">
        <div className="row">
          <div className="col">
            <label>
              Price:
              <input type="text" name="price" className="form-control"
              value={this.state.price} onChange={this.onChangeInput}
              placeholder="$" />
            </label>
          </div>
          <div className="col">
            <label>
              Discount:
              <input type="text" name="discount" className="form-control"
              value={this.state.discount} onChange={this.onChangeInput} 
              placeholder="%" />
            </label>
          </div>
          <div className="col">
            Total price: 
            {
              this.state.price && this.state.discount ? 
                <p>$ {this.calculatePrice(this.state.price, this.state.discount)}</p>
                : <p>$</p>
            }
          </div>
        </div>
          
      </div>
    );
  }
}

export default Calculator;