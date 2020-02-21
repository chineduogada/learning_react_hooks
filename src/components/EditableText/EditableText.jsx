import React, { useState } from "react";

export default function EditableText() {
  const [state, setState] = useState({ value: "some text", isEditMode: false });

  const handleEditMode = () => {
    setState(state => ({ ...state, value: "hi" }));
  };

  return state.isEditMode ? (
    <input type="text" defaultValue={state.value} />
  ) : (
    <h1 onDoubleClick={handleEditMode}>{state.value}</h1>
  );
}
