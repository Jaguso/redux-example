import React, { Component } from 'react';

class Results extends Component {
  render() {
    return (
      <div style={{margin: '20px'}}>
        <h3>Total: </h3>
        <button className="btn btn-success" style={{margin: '8px'}}>+1</button>
        <button className="btn btn-warning" style={{margin: '8px'}}>-1</button>
      </div>
    );
  }
}

export default Results;