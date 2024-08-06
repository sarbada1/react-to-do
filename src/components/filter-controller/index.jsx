import React from "react";
import Row from "../row";
import Button from "../button";
import classes from "./filter-controller.module.css";

const FilterController = ({ filter, filterOnChange }) => {
  return (
    <Row className={classes.wrapper}>
      <Button
        isActive={filter === "ALL"}
        onClick={() => filterOnChange("ALL")}
        className={classes["all-btn"]}
      >
        All
      </Button>
      <Button
        isActive={filter === "RUNNING"}
        onClick={() => filterOnChange("RUNNING")}
        className={classes["running-btn"]}
      >
        Running
      </Button>
      <Button
        isActive={filter === "COMPLETED"}
        onClick={() => filterOnChange("COMPLETED")}
        className={classes["completed-btn"]}
      >
        Completed
      </Button>
    </Row>
  );
};

export default FilterController;
