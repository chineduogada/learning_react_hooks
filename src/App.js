import React from "react";
import DataFetching from "./components/DataFetching/DataFetching";
import DataFetching2 from "./components/DataFetching/DataFetching2";
function App() {
  const styles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center"
  };
  return (
    <div style={styles}>
      <DataFetching2 />
    </div>
  );
}

export default App;
