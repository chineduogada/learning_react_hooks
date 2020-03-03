import React from "react";
import ComponentA from "./components/ComponentA/ComponentA";
import ComponentB from "./components/ComponentB/ComponentB";
import ComponentC from "./components/ComponentC/ComponentC";

export const userContext = React.createContext();
export const statusContext = React.createContext();

function App() {
  const styles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center"
  };
  return (
    <div style={styles}>
      <ComponentA />
      <ComponentB />
      <ComponentC />
    </div>
  );
}

export default App;
