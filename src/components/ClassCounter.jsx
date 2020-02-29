import React, { Component } from "react";
import Button from "./Button/Button";

export default class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: ""
    };
  }

  componentDidMount() {
    document.title = `React App ${this.state.count}`;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("Updating document title");
      document.title = `React App ${this.state.count}`;
    }
  }

  render() {
    return (
      <>
        <input
          type="text"
          value={this.state.name}
          onChange={e => {
            this.setState({ name: e.currentTarget.value });
          }}
        />
        <Button
          onClick={() =>
            this.setState(prevState => ({ count: prevState.count + 1 }))
          }
        >
          clicked {this.state.count} times
        </Button>
      </>
    );
  }
}
