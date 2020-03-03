import React, { useContext } from "react";
import ComponentC from "../ComponentC/ComponentC";
import { userContext, statusContext } from "../../App";

function ComponentB() {
  const user = useContext(userContext);
  const status = useContext(statusContext);

  return (
    <div>
      <h1>Component B</h1>
      {user} - {status ? "online" : "offline"}
      <ComponentC />
    </div>
  );
}

export default ComponentB;
