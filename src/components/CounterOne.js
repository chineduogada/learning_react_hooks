import React from "react";
import Button from "./Button/Button";
import useCounter from "../hooks/useCounter";

function CounterOne() {
  const [count, increment, decrement, reset] = useCounter(0, 1);

  return (
    <div>
      <h1>Counter - {count}</h1>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
      <Button onClick={reset}>Reset</Button>
    </div>
  );
}

export default CounterOne;
