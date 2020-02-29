import React, { useState, useEffect } from "react";
import Button from "./Button/Button";

export default function HookCounterOne() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("Update document title.");
    document.title = `React App ${count}`;
  }, [count]);

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={e => {
          setName(e.currentTarget.value);
        }}
      />

      <Button onClick={() => setCount(prevCount => prevCount + 1)}>
        clicked {count} times
      </Button>
    </>
  );
}
