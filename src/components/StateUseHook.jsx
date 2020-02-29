import React, { useState } from "react";
import Button from "./Button/Button";

export default function StateUseHook() {
  const [names, setNames] = useState({ firstName: "", lastName: "" });
  const [items, setItems] = useState([]);

  return (
    <div>
      <input
        type="text"
        value={names.firstName}
        onChange={e => setNames({ ...names, firstName: e.currentTarget.value })}
      />
      <input
        type="text"
        value={names.lastName}
        onChange={e => setNames({ ...names, lastName: e.currentTarget.value })}
      />

      <h2>Your first name - {names.firstName}</h2>
      <h2>Your last name - {names.lastName}</h2>

      <h4>{JSON.stringify(names)}</h4>

      <ul>
        {items.map(item => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
}
