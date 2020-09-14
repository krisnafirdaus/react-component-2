import React, { Component } from "react";

// Statefull component
export default class CounterClass extends Component {
  constructor() {
    super();
    this.state = {
      countNum: 0,
    };
  }

  increment = () => {
    this.setState({
      countNum: this.state.countNum + 1,
    });
  };

  decrement = () => {
    if (this.state.countNum > 0) {
      this.setState({
        countNum: this.state.countNum - 1,
      });
    }
  };

  reset = () => {
    this.setState({
      countNum: 0,
    });
  };

  render() {
    return (
      <div className="countClass">
        <h1 style={{ color: "blue" }}>Counter Class</h1>
        <button onClick={this.decrement}>-</button>
        <h1 className="functNum">{this.state.countNum}</h1>
        <button onClick={this.increment}>+</button>
        <div className="reset">
          <button onClick={this.reset}>reset</button>
        </div>
        <hr />
      </div>
    );
  }
}
