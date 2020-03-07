import React, { useEffect, useRef } from "react";
import Input from "./Input/Input";

function FocusInput() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <Input ref={inputRef} placeholder="focus input" />;
}

export default FocusInput;
