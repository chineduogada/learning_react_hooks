import React from "react";

function Title() {
  console.log(`Rendering Title`);

  return <h1>useCallback hook</h1>;
}

export default React.memo(Title);
