import React from "react";
import PropTypes from "prop-types";
import classes from "./input.module.css";

const Input = ({
  type = "text",
  placeholder = "",
  value,
  onChange,
  name,
  checked,
  style,
  className,
}) => {
  return type === "textarea" ? (
    <textarea
      style={style}
      className={`${classes.input} ${classes.textarea} ${className}`}
      placeholder={placeholder}
      value={value}
      name={name}
      id={name}
      onChange={onChange}
    ></textarea>
  ) : (
    <input
      style={style}
      className={`${classes.input} ${className}`}
      type={type}
      placeholder={placeholder}
      value={value}
      checked={checked}
      name={name}
      id={name}
      onChange={onChange}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Input;
