import React, { useReducer } from "react";
import Button from "./../Button/Button";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function CounterOne() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>First Example</h2>
      <h3>count {count}</h3>
      <Button onClick={() => dispatch("increment")}>Increment</Button>
      <Button onClick={() => dispatch("decrement")}>Decrement</Button>
      <Button onClick={() => dispatch("reset")}>reset</Button>
    </div>
  );
}

export default CounterOne;
