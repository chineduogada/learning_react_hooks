import React, { useState, useEffect, useRef } from "react";
import Button from "./Button/Button";

export const HookTimer = () => {
  const [count, setCount] = useState(0);
  const intervalRef = useRef();
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount(prevState => prevState + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      <h1>Count - {count}</h1>
      <Button onClick={() => clearInterval(intervalRef.current)}>
        stop count
      </Button>
    </div>
  );
};

export default HookTimer;
