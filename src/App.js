import React, { useState } from "react";
import ClassTimer from "./components/ClassTimer";
import Button from "./components/Button/Button.jsx";
import HookTimer from "./components/HookTimer";
function App() {
  const [isDisplayed, setIsDisplayed] = useState(true);

  const styles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "3rem"
  };
  return (
    <div style={styles}>
      {/* <FocusInput /> */}
      <Button primary onClick={() => setIsDisplayed(prevState => !prevState)}>
        toggle counter
      </Button>
      {isDisplayed && <HookTimer />}
    </div>
  );
}

export default App;
