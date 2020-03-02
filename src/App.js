import React, { useState } from "react";
import Layout from "./components/Layout/Layout";
import { appContext } from "./appContext";

function App() {
  const state = useState({
    isAsideOpen: false,
    currentMainContent: "recent products"
  });

  return (
    <appContext.Provider value={state}>
      <Layout />
    </appContext.Provider>
  );
}

export default App;
