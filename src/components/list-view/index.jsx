import React from "react";
import Flex from "../flex";
import ListViewItem from "../list-view-item";
import classes from "./list-view.module.css";

const ListView = ({ todos, toggleSelect, toggleCompleted }) => {
  return (
    <Flex column className={classes.wrapper}>
      {!todos?.length && <h1 className={classes.empty}>Empty</h1>}
      {todos?.map((todo) => (
        <ListViewItem
          key={todo?.id}
          todo={todo}
          toggleSelect={toggleSelect}
          toggleCompleted={toggleCompleted}
        />
      ))}
    </Flex>
  );
};

export default ListView;
