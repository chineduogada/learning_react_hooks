import React from "react";
import Button from "./../Button/Button";

function Button2({ onClick, children }) {
  console.log(`Rendering Button2 - ${children}`);

  return (
    <div>
      <Button onClick={() => onClick()}>{children}</Button>
    </div>
  );
}

export default React.memo(Button2);
