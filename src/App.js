import React from "react";
import ParentComponent from "./components/ParentComponent/ParentComponent";
function App() {
  const styles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    padding: "3rem"
  };
  return (
    <div style={styles}>
      <ParentComponent />
    </div>
  );
}

export default App;
