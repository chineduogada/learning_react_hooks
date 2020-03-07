import React from "react";
import Input from "./Input/Input";
import Button from "./Button/Button";
import useForm from "../Hooks/useForm";

const initialState = {
  firstName: "",
  lastName: ""
};

function UserForm() {
  const doSubmit = e => {
    alert(`Hello ${state.firstName} ${state.lastName}`);
  };

  const [state, onChange, onSubmit] = useForm(initialState, doSubmit);

  return (
    <form onSubmit={onSubmit}>
      <Input
        label="first name"
        name="firstName"
        value={state.firstName}
        onChange={onChange}
      />
      <Input
        label="last name"
        name="lastName"
        value={state.lastName}
        onChange={onChange}
      />

      <Button>Submit</Button>
    </form>
  );
}

export default UserForm;
