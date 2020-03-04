import React from "react";
import DataFetching from "./components/DataFetching/DataFetching";
function App() {
  const styles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center"
  };
  return (
    <div style={styles}>
      <DataFetching />
    </div>
  );
}

export default App;
