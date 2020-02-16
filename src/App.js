import React, { useState, useEffect } from "react";
import Counter from "./components/Counter/Counter";

function App() {
  const [state, setState] = useState({ count: 5, error: null });

  const handleAdd = newCount => {
    if (newCount < 9) {
      newCount += 1;
      setState(state => ({ ...state, count: newCount }));
    } else {
      setState(state => ({ ...state, error: "Should be less than 10" }));
    }
  };

  const handleMinus = newCount => {
    if (newCount) {
      newCount -= 1;
      setState(state => ({ ...state, count: newCount }));
    } else {
      setState(state => ({ ...state, error: "Should be truthy" }));
    }
  };

  const handleDismissError = () => {
    setState(state => ({ ...state, error: null }));
  };

  useEffect(() => {
    handleDismissError();
  }, [state.count]);

  return (
    <div style={{ display: "grid", placeItems: "center", minHeight: "100vh" }}>
      <Counter
        state={state}
        onAdd={handleAdd}
        onMinus={handleMinus}
        onDismissError={handleDismissError}
      />
    </div>
  );
}

export default App;
