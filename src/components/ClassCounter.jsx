import React, { Component } from "react";

export default class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0
    };
  }

  logMousePosition = e => {
    console.log("logMousePosition called");
    this.setState({ x: e.clientX, y: e.clientY });
  };

  componentDidMount() {
    console.log("cdm called");
    window.addEventListener("mousemove", this.logMousePosition);
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.logMousePosition);
  }

  render() {
    return (
      <div>
        <h2>X - {this.state.x}</h2>
        <h2>Y - {this.state.y}</h2>
      </div>
    );
  }
}
