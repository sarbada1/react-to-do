import React from "react";
import classes from "./button.module.css";

const Button = ({ children, onClick, className, isActive }) => {
  return (
    <button
      onClick={onClick}
      className={`${classes["button"]} ${className} ${
        isActive && classes.active
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
