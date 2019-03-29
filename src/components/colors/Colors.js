import React, { Component } from 'react';
import { connect } from 'react-redux';

class Colors extends Component {
  
  render() {
    return (
      <div>
        <div style={{margin: '20px', textAlign: 'center'}}>
          <h3>Click button to change text: {this.props.color.text}</h3>
          <button className="btn btn-primary" onClick={() => this.props.setText('Python')}>
            Change name
          </button>
        </div>
        <div style={{margin: '20px', textAlign: 'center'}}>
          <h3>
            Click button to change this: {this.props.color.isTrue ? 'red' : 'blue'} 
          </h3>
          <button className="btn btn-primary" onClick={() => this.props.changeBoolean()}>Change</button>
        </div>

      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    color: state.color 
  };
}; // so you call this state with this.props.color

const mapDispatchToProps = (dispatch) => {
  return {
    setText: (text) => {
      dispatch({
        type: "SET_TEXT",
        payload: text
      });
    },
    changeBoolean: () => {
      dispatch({
        type: "CHANGE_BOOLEAN"
      });
    }
  
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(Colors);
