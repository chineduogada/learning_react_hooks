import React from "react";
import "./Input.scss";

const Input = React.forwardRef(
  ({ name, label = name, required, value, type = "text", ...rest }, ref) => {
    const getLabelClassName = () => {
      let className = "formControl__label";
      if (value) className += " formControl__label--move-up";
      return className;
    };

    return (
      <div className="formControl">
        {required && <span className="formControl__required">*</span>}
        <input
          ref={ref}
          className="formControl__input"
          id={name}
          name={name}
          type={type}
          value={value}
          {...rest}
        />

        <label className={getLabelClassName()} htmlFor={name}>
          {label}
        </label>
      </div>
    );
  }
);

export default Input;
