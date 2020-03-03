import React, { useReducer, createContext } from "react";
import ComponentA from "./components/ComponentA/ComponentA";
import ComponentB from "./components/ComponentB/ComponentB";
import ComponentC from "./components/ComponentC/ComponentC";

export const CountContext = createContext();

const initialCount = 0;
const reducer = (count, action) => {
  switch (action) {
    case "increment":
      return count + 1;
    case "decrement":
      return count - 1;
    case "reset":
      return initialCount;
    default:
      return count;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialCount);

  const styles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center"
  };
  return (
    <div style={styles}>
      <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        Count - {count}
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider>
    </div>
  );
}

export default App;
