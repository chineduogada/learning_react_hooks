import React, { Component } from "react";
import Button from "../Button/Button";
export default class ClassCounterInterval extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  timer = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };

  startTimer = () => {
    this.interval = setInterval(this.timer, 1000);
  };

  stopTimer = () => {
    clearInterval(this.interval);
  };

  render() {
    return (
      <div>
        <Button onClick={this.startTimer}>Start timer</Button>
        <Button onClick={this.stopTimer}>Stop timer</Button>
        <h1
          style={{ fontSize: "3rem", margin: ".75rem 0", textAlign: "center" }}
        >
          {this.state.count}
        </h1>
      </div>
    );
  }
}
