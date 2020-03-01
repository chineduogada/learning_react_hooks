import React, { useState, useEffect } from "react";
import Button from "../Button/Button";

export default function HookCounterInterval() {
  const [count, setCount] = useState(0);
  let interval;

  useEffect(() => startTimer());

  const timer = () => {
    setCount(prevCount => prevCount + 1);
  };

  const startTimer = () => {
    interval = setInterval(timer, 1000);
    return stopTimer;
  };

  const stopTimer = () => {
    clearInterval(interval);
  };

  return (
    <div>
      <Button onClick={startTimer}>Start timer</Button>
      <Button onClick={stopTimer}>Stop timer</Button>
      <h1 style={{ fontSize: "3rem", margin: ".75rem 0", textAlign: "center" }}>
        {count}
      </h1>
    </div>
  );
}
