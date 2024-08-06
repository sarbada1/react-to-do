import React from "react";
import classes from "./table-view.module.css";
import TableViewRow from "../table-view-row";

const TableView = ({ todos, toggleSelect, toggleCompleted }) => {
  return (
    <table className={classes.table}>
      <thead>
        <tr>
          <th className={classes.th}>#</th>
          <th className={classes.th}>Time</th>
          <th className={classes.th}>Title</th>
          <th className={classes.th}>Action</th>
        </tr>
      </thead>

      <tbody>
        {todos?.map((todo) => (
          <TableViewRow
            key={todo.id}
            todo={todo}
            toggleSelect={toggleSelect}
            toggleCompleted={toggleCompleted}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TableView;
