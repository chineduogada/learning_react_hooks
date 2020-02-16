import React from "react";
import "./Button.scss";
import { PropTypes } from "prop-types";

export default function Button({ label, ...rest }) {
  return (
    <button className="button" {...rest}>
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired
};
