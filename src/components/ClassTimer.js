import React, { Component } from "react";
import Button from "./Button/Button";

export class ClassTimer extends Component {
  interval;
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({ count: prevState.count + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h1>Count - {this.state.count}</h1>
        <Button onClick={() => clearInterval(this.interval)}>stop count</Button>
      </div>
    );
  }
}

export default ClassTimer;
