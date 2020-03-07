import { useReducer } from "react";

function useForm(initialState, doSubmit) {
  const reducer = (state, action) => {
    switch (action.type) {
      case "change":
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

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = e =>
    dispatch({ type: "change", input: e.currentTarget });

  const handleSubmit = e => {
    e.preventDefault();

    doSubmit(e);

    dispatch({ type: "reset" });
  };

  return [state, handleChange, handleSubmit];
}

export default useForm;
