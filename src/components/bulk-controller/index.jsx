import React from "react";
import { CgMoreVerticalAlt } from "react-icons/cg";

import Flex from "../flex";

import classes from "./bulk-controller.module.css";

class BulkController extends React.Component {
  state = {
    isVisible: false,
  };

  handleVisible = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  render() {
    const {
      handleSelectAll,
      handleDeselectAll,
      handleDeleteAll,
      handleSelectCompleted,
      handleSelectIncomplete,
      handleDeleteSelected,
    } = this.props;

    return (
      <>
        <div className={classes.container}>
          <Flex className={classes["more"]}>
            <CgMoreVerticalAlt
              size={25}
              color="dodgerblue"
              onClick={this.handleVisible}
            />
          </Flex>

          {this.state.isVisible && (
            <ul>
              <li onClick={handleSelectAll}>Select All</li>
              <li onClick={handleDeselectAll}>Deselect All</li>
              <li onClick={handleDeleteAll}>Delete All</li>
              <li onClick={handleSelectCompleted}>Select Completed</li>
              <li onClick={handleSelectIncomplete}>Select Incomplete</li>
              <li onClick={handleDeleteSelected}>Delete Selected</li>
              <li>Reset to Defaults</li>
            </ul>
          )}
        </div>

        {this.state.isVisible && (
          <div onClick={this.handleVisible} className={classes.overlay}></div>
        )}
      </>
    );
  }
}

export default BulkController;
