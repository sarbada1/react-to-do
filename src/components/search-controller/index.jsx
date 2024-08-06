import React from "react";
import Row from "../row";
import Input from "../input";
import Button from "../button";

import classes from "./search-controller.module.css";

const SearchController = ({ newBtnOnClick = () => {}, handleSearch }) => {
  return (
    <Row className={classes.wrapper}>
      <Input
        type="text"
        style={{ flex: 1 }}
        placeholder="Search todo item"
        onChange={(e) => handleSearch(e.target.value)}
      />
      <Button onClick={newBtnOnClick}>New</Button>
    </Row>
  );
};

export default SearchController;
