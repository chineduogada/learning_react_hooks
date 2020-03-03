import React from "react";
// import CounterOne from "./components/CounterOne/CounterOne";
// import CounterTwo from "./components/CounterTwo/CounterTwo";
import CounterThree from "./components/CounterThree/CounterThree";

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
      {/* <CounterOne />
      <CounterTwo /> */}
      <CounterThree />
    </div>
  );
}

export default App;
