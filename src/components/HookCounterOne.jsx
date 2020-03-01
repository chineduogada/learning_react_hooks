import React, { useEffect, useState } from "react";

export default function HookCounterOne() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = e => {
    console.log("logMousePosition called");

    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      console.log("cleaned up");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <div>
      <h2>X - {x}</h2>
      <h2>Y - {y}</h2>
    </div>
  );
}
