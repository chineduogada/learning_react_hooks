import React from "react";
import PropTypes from "prop-types";
import "./Counter.scss";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

export default function Counter({ state, onAdd, onMinus, onDismissError }) {
  const renderError = error => (
    <div className="counter__error">
      <h3>{error}</h3>
      <button className="counter__error--btn" onClick={onDismissError}>
        Dismiss
      </button>
    </div>
  );

  return (
    <div className="counter">
      <div className="counter__center">
        <span className="counter__icon" onClick={() => onAdd(state.count)}>
          <AiFillPlusCircle arial-label="plus" />
        </span>

        <h1>{state.count} minutes</h1>

        <span className="counter__icon" onClick={() => onMinus(state.count)}>
          <AiFillMinusCircle arial-label="minus" />
        </span>
      </div>

      {state.error && renderError(state.error)}
    </div>
  );
}

Counter.propTypes = {
  state: PropTypes.object,
  onAdd: PropTypes.func,
  onMinus: PropTypes.func,
  onDismissError: PropTypes.func
};
