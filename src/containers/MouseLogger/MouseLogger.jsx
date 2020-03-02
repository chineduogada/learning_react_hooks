import React, { useState } from "react";
import Button from "../../components/Button/Button";

export default function MouseLogger({ render }) {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <Button onClick={() => setDisplay(!display)}>Toggle Mouse Logger</Button>
      {display && render(display, setDisplay)}
    </div>
  );
}
