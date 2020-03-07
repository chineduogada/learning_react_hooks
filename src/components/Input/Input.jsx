import React from "react";
import "./Input.scss";
import { PropTypes } from "prop-types";

const Input = React.forwardRef(
  ({ name, label, onChange, required, value, type, ...rest }, ref) => {
    const getLabelClassName = () => {
      let className = "formControl__label";
      if (value) className += " formControl__label--move-up";
      return className;
    };

    return (
      <div className="formControl">
        {required && <span className="formControl__required">*</span>}
        <label
          className={getLabelClassName()}
          htmlFor={name}
          onClick={() => ref.current.focus()}
        >
          {label}
        </label>
        <input
          ref={ref}
          className="formControl__input"
          id={name}
          type={type}
          value={value}
          onChange={onChange}
          {...rest}
        />
      </div>
    );
  }
);

Input.propTypes = {
  label: PropTypes.any.isRequired
};

export default Input;
