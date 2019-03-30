import React, { Component } from 'react';
import { connect } from 'react-redux';

class Results extends Component {
  render() {
    return (
      <div style={{margin: '20px'}}>
        <h3>Total: {this.props.result.total}</h3>
        <button 
          className="btn btn-success" 
          style={{margin: '8px'}}
          onClick={() => this.props.plusOne()}>+1</button>
        <button 
          className="btn btn-warning" 
          style={{margin: '8px'}} 
          onClick={() => this.props.minusOne()} >-1</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    result: state.result
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    plusOne: () => {
      dispatch({
        type: "ADD"
      });
    },
    minusOne: () => {
      dispatch({
        type: "SUBTRACT"
      });
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Results);
