import React from "react";
import Button from "./Button/Button";
import useCounter from "../hooks/useCounter";

const initialCount = 20;

function CounterTwo() {
  const [count, increment, decrement, reset] = useCounter(initialCount, 20);

  return (
    <div>
      <h1>Counter - {count}</h1>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
      <Button onClick={reset}>Reset</Button>
    </div>
  );
}

export default CounterTwo;
