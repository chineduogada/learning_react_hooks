import React, { useReducer } from "react";
import Button from "./../Button/Button";

const initialCount = 0;

const reducer = (count, action) => {
  switch (action) {
    case "increment":
      return count + 1;
    case "decrement":
      return count - 1;
    case "reset":
      return initialCount;
    default:
      return count;
  }
};

function CounterThree() {
  const [count, dispatchCount] = useReducer(reducer, initialCount);
  const [count2, dispatchCount2] = useReducer(reducer, initialCount);

  return (
    <div>
      <h2>Third Example</h2>
      <h3>count - {count}</h3>
      <h2>count 2 - {count2}</h2>
      <Button onClick={() => dispatchCount("increment")}>Increment</Button>
      <Button onClick={() => dispatchCount("decrement")}>Decrement</Button>
      <Button onClick={() => dispatchCount("reset")}>reset</Button>

      <Button onClick={() => dispatchCount2("increment")}>
        Increment count 2
      </Button>
      <Button onClick={() => dispatchCount2("decrement")}>
        Decrement count 2
      </Button>
      <Button onClick={() => dispatchCount2("reset")}>reset count 2</Button>
    </div>
  );
}

export default CounterThree;
