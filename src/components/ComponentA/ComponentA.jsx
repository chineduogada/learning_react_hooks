import React, { useContext } from "react";
import { CountContext } from "../../App";
import Button from "./../Button/Button";

function ComponentA() {
  const { countState, countDispatch } = useContext(CountContext);

  return (
    <div className="comp">
      <h1>Component A - {countState}</h1>
      <Button onClick={() => countDispatch("increment")}>increment</Button>
      <Button onClick={() => countDispatch("decrement")}>decrement</Button>
      <Button onClick={() => countDispatch("reset")}>reset</Button>
    </div>
  );
}

export default ComponentA;
