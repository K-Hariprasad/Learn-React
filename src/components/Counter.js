import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }
  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
    // if counter needs to be updated multiple times based on the previous state
    // setState method will take a callback with a parameter. This param holds the previous state of the component.
    this.setState((prev) => {
      return { counter: prev.counter + 1 };
    });
  };
  render() {
    let { counter } = this.state;
    return (
      <div>
        <h1>Counter</h1>
        <br />
        <h2>{counter}</h2>
        <button onClick={this.incrementCounter}>Increment by 1</button>
      </div>
    );
  }
}

export default Counter;
