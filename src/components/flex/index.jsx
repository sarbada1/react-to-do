import React from "react";
import classes from "./flex.module.css";

const Flex = ({ children, jcBetween, jcStart, column, className }) => (
  <div
    className={`${classes.flex} ${column && classes.column} ${
      jcBetween && classes["jc-between"]
    } ${jcStart && classes["jc-start"]} ${className}`}
  >
    {children}
  </div>
);

export default Flex;
