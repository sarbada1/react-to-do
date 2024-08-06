import React from "react";
import classes from "./row.module.css";

const Row = ({ children, start, style, className }) => (
  <div
    style={style}
    className={`${classes["row"]} ${start && classes["start"]} ${className}`}
  >
    {children}
  </div>
);

export default Row;
