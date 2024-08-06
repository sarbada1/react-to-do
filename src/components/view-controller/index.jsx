import React from "react";
import { FaThList, FaTable } from "react-icons/fa";

import classes from "./view-controller.module.css";
import Row from "../row";

const ViewController = ({ handleViewChange }) => {
  return (
    <Row className={classes.wrapper}>
      <FaThList
        title="List View"
        size={22}
        color="dodgerblue"
        className={classes.icon}
        onClick={() => handleViewChange("LIST")}
      />
      <FaTable
        title="Table View"
        size={22}
        color="dodgerblue"
        className={classes.icon}
        onClick={() => handleViewChange("TABLE")}
      />
    </Row>
  );
};

export default ViewController;
