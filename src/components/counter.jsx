import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1
  };

  render() {
    return (
      <React.Fragment>
        <span>{this.state.count}</span>
        <button>Increment</button>
        <h1>Hello World</h1>
      </React.Fragment>
    );
  }
}

export default Counter;
