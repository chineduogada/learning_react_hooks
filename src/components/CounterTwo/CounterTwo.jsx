import React, { useReducer } from "react";
import Button from "./../Button/Button";

const initialState = {
  firstCount: 0,
  secondCount: 10
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return (state = {
        ...state,
        firstCount: state.firstCount + action.value
      });
    case "decrement":
      return (state = {
        ...state,
        firstCount: state.firstCount - action.value
      });
    case "increment-2":
      return (state = {
        ...state,
        secondCount: state.secondCount + action.value
      });
    case "decrement-2":
      return (state = {
        ...state,
        secondCount: state.secondCount - action.value
      });

    case "reset":
      return initialState;
    default:
      return state;
  }
};

function CounterTwo() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>Second Example</h2>
      <h3>First Count {state.firstCount}</h3>
      <h4>Second Count {state.secondCount}</h4>
      <Button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </Button>
      <Button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </Button>
      <Button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment 5
      </Button>
      <Button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Decrement 5
      </Button>
      <div>
        <Button onClick={() => dispatch({ type: "increment-2", value: 1 })}>
          Increment
        </Button>
        <Button onClick={() => dispatch({ type: "decrement-2", value: 1 })}>
          Decrement
        </Button>
      </div>
      <Button onClick={() => dispatch({ type: "reset" })}>Reset</Button>
    </div>
  );
}

export default CounterTwo;
