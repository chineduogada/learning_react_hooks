import React from "react";
import CounterOne from "./components/CounterOne/CounterOne";
import CounterTwo from "./components/CounterTwo/CounterTwo";

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
      <CounterOne />
      <CounterTwo />
    </div>
  );
}

export default App;
