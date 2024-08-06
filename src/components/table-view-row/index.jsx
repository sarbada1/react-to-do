import React from "react";
import Input from "../input";
import Text from "../text";
import Button from "../button";

import classes from "./table-view-row.module.css";

const TableViewRow = ({ todo, toggleSelect, toggleCompleted }) => {
  return (
    <tr className={classes.tr}>
      <td className={classes.td}>
        <Input
          type="checkbox"
          className={classes.checkbox}
          checked={todo?.isSelected}
          onChange={() => toggleSelect(todo?.id)}
        />
      </td>

      <td className={classes.td}>
        <Text color={"gray"} size={14}>
          {todo?.time}
        </Text>
      </td>

      <td className={classes.td}>
        <h3>{todo?.title}</h3>
      </td>

      <td className={classes.td}>
        <Button
          className={todo?.isCompleted && classes.complete}
          onClick={() => toggleCompleted(todo.id)}
        >
          {todo?.isCompleted ? "Completed" : "Running"}
        </Button>
      </td>
    </tr>
  );
};

export default TableViewRow;
