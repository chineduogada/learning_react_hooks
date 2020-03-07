import React, { useState } from "react";
import Button from "./Button/Button";
import useDocumentTitle from "./../hooks/useDocumentTitle";

function DocTitleOne() {
  const [count, setCount] = useState(0);

  useDocumentTitle(count);
  return (
    <div>
      <Button onClick={setCount.bind(null, prevCount => prevCount + 1)}>
        Count - {count}
      </Button>
    </div>
  );
}

export default DocTitleOne;
