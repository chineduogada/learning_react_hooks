import React, { useReducer } from "react";
import Input from "./Input/Input";
import Button from "./Button/Button";

const initialState = {
  firstName: "",
  lastName: ""
};

const reducer = (state, action) => {
  switch (action.type) {
    case "change":
      console.log(action.input.name);

      return {
        ...state,
        [action.input.name]: action.input.value
      };

    case "reset":
      return initialState;
    default:
      return state;
  }
};

function UserForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = e => {
    e.preventDefault();

    alert(`Hello ${state.firstName} ${state.lastName}`);
    dispatch({ type: "reset" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="first name"
        name="firstName"
        value={state.firstName}
        onChange={e => dispatch({ type: "change", input: e.currentTarget })}
      />
      <Input
        label="last name"
        name="lastName"
        value={state.lastName}
        onChange={e => dispatch({ type: "change", input: e.currentTarget })}
      />

      <Button>Submit</Button>
    </form>
  );
}

export default UserForm;
