import React, { useContext } from "react";
import Button from "./../Button/Button";
import { CountContext } from "../../App";

function ComponentD() {
  const { countState, countDispatch } = useContext(CountContext);

  return (
    <div className="comp">
      <h1>Component D - {countState}</h1>
      <Button onClick={() => countDispatch("increment")}>increment</Button>
      <Button onClick={() => countDispatch("decrement")}>decrement</Button>
      <Button onClick={() => countDispatch("reset")}>reset</Button>
    </div>
  );
}

export default ComponentD;
