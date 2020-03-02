import React from "react";
import { userContext, statusContext } from "../../App";

function ComponentC() {
  return (
    <div>
      <h1>Component C</h1>

      <userContext.Consumer>
        {user => (
          <statusContext.Consumer>
            {status => (
              <div>
                hi {user}, you're {status ? "online" : "offline"}
              </div>
            )}
          </statusContext.Consumer>
        )}
      </userContext.Consumer>
    </div>
  );
}

export default ComponentC;
