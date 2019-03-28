import React, { Component } from 'react';
import { connect } from 'react-redux';

class Colors extends Component {
  render() {
    return (
      <div style={{margin: '20px', textAlign: 'center'}}>
        <h3>Click button to change text: {this.props.color.text}</h3>
        <button onClick={() => this.props.setText('Python')}>
          Try
        </button>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    color: state.color
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setText: (text) => {
      dispatch({
        type: "SET_TEXT",
        payload: text
      });
    }
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(Colors);
