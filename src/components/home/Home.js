import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setName } from '../../actions/userActions';

class Home extends Component {
  render() {
    return (
      <div className="container">
        This is your name: {this.props.user.name}
        <button onClick={() => this.props.setName("Luis")}></button>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch(setName(name));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);