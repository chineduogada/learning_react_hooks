import React from "react";
import "./Button.scss";
import { PropTypes } from "prop-types";

export default function Button({ label, primary, danger, warning, ...rest }) {
  const getClassName = () => {
    let className = "button";

    if (primary) className += " button--primary";
    if (warning) className += " button--warning";
    if (danger) className += " button--danger";

    return className;
  };

  return (
    <button className={getClassName()} {...rest}>
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.any.isRequired
};
