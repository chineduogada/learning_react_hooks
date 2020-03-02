import React, { useState } from "react";
import Layout from "./components/Layout/Layout";
import { appContext } from "./appContext";

export const userContext = React.createContext();
export const statusContext = React.createContext();

function App() {
  const state = useState({
    isAsideOpen: false,
    currentMainContent: "recent products"
  });

  return (
    <appContext.Provider value={state}>
      <userContext.Provider value="richCode">
        <statusContext.Provider value={false}>
          <Layout />
        </statusContext.Provider>
      </userContext.Provider>
    </appContext.Provider>
  );
}

export default App;
