import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementCount, decrementCount } from '../redux/actions/counterActions'
export class Counter extends Component {
  render() {
    return (
      <div>
        <h1>REACT-REDUX COUNTER</h1>
        <hr />
        <h3>COUNT : {this.props.count} </h3>
        <button onClick={this.props.incrementCount}>Increment Count</button>
        <button onClick={this.props.decrementCount
        }>Decrement Count</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = dispatch => {
    return {
        incrementCount : () => dispatch(incrementCount()) , 
        decrementCount : () => dispatch(decrementCount())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
