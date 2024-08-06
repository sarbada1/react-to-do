import React from "react";
import classes from "./container.module.css";

export default function Container({ children, mxWidth, className }) {
  return (
    <div
      style={{ maxWidth: mxWidth }}
      className={`${classes["container"]} ${className}`}
    >
      {children}
    </div>
  );
}
