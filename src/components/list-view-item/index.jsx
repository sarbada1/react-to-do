import React from "react";
import Row from "../row";
import Input from "../input";
import Text from "../text";
import Flex from "../flex";
import Button from "../button";
import classes from "./list-view-item.module.css";

const ListViewItem = ({ todo, toggleSelect, toggleCompleted }) => {
  return (
    <Row className={classes.wrapper}>
      <Row start className={classes.titleAndTimeContainer}>
        <Input
          type="checkbox"
          className={classes.checkbox}
          checked={todo?.isSelected}
          onChange={() => toggleSelect(todo.id)}
        />
        <Flex column className={classes.titleAndTimeWrapper}>
          <h3>{todo?.title}</h3>
          <Text color={"gray"} size={14}>
            {/* Thursday, 27 Feb 2024 */}
            {todo?.time}
          </Text>
        </Flex>
      </Row>

      <Text className={classes.description}>{todo?.description}</Text>

      <Button
        className={todo?.isCompleted && classes.complete}
        onClick={() => toggleCompleted(todo.id)}
      >
        {todo?.isCompleted ? "Completed" : "Running"}
      </Button>
    </Row>
  );
};

export default ListViewItem;
