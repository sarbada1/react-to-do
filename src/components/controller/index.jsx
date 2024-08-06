import React from "react";
import SearchController from "../search-controller";
import Row from "../row";
import FilterController from "../filter-controller";

import classes from "./controller.module.css";
import ViewController from "../view-controller";
import BulkController from "../bulk-controller";
import CreateTodoModal from "../create-todo-modal";

class Controller extends React.Component {
  state = {
    isOpenModal: false,
  };

  toggleModal = () => {
    this.setState({ isOpenModal: !this.state.isOpenModal });
  };

  render() {
    const {
      createTodo,
      handleSearch,
      handleSelectAll,
      handleDeselectAll,
      handleDeleteAll,
      handleSelectCompleted,
      handleSelectIncomplete,
      handleDeleteSelected,
      filter,
      filterOnChange,
      handleViewChange,
    } = this.props;
    return (
      <div className={classes.controller}>
        <SearchController
          newBtnOnClick={this.toggleModal}
          handleSearch={handleSearch}
        />
        <Row className={classes["action-wrapper"]}>
          <FilterController filter={filter} filterOnChange={filterOnChange} />
          <ViewController handleViewChange={handleViewChange} />
          <BulkController
            handleSelectAll={handleSelectAll}
            handleDeselectAll={handleDeselectAll}
            handleDeleteAll={handleDeleteAll}
            handleSelectCompleted={handleSelectCompleted}
            handleSelectIncomplete={handleSelectIncomplete}
            handleDeleteSelected={handleDeleteSelected}
          />
        </Row>

        <CreateTodoModal
          isOpen={this.state.isOpenModal}
          toggleIsOpen={this.toggleModal}
          createTodo={createTodo}
        />
      </div>
    );
  }
}

export default Controller;
