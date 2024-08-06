import React from "react";
import PropTypes from "prop-types";
import Input from "../input";
import Button from "../button";
import Row from "../row";
import { randomIdGenerator } from "../../utils/randomIdGenerator";

import classes from "./create-todo-modal.module.css";
import { CgClose } from "react-icons/cg";

class CreateTodoModal extends React.Component {
  state = {
    title: "",
    description: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (!this.state.title && !this.state.description) return;

    const todo = {
      ...this.state,
      id: randomIdGenerator(),
      time: new Date().toDateString(),
      isCompleted: false,
      isSelected: false,
    };

    this.props.createTodo(todo);
    this.setState({ title: "", description: "" });
    this.props.toggleIsOpen();
  };

  render() {
    const { isOpen = false, toggleIsOpen = () => {} } = this.props;
    return (
      <>
        {isOpen && (
          <div className={classes["form-container"]}>
            <form onSubmit={this.handleSubmit} className={classes.form}>
              <Row>
                <h2 className={classes.heading}>Create a New Task</h2>
                <CgClose
                  onClick={toggleIsOpen}
                  size={22}
                  className={classes["close-icon"]}
                />
              </Row>

              <div>
                <label className={classes.label} htmlFor="">
                  Task Title
                </label>
                <Input
                  className={classes.input}
                  placeholder="Write your task title"
                  name={"title"}
                  value={this.state.title}
                  onChange={this.handleChange}
                />
              </div>

              <div>
                <label className={classes.label} htmlFor="">
                  Description
                </label>
                <Input
                  type="textarea"
                  className={classes.input}
                  placeholder="Write your short description"
                  name={"description"}
                  value={this.state.description}
                  onChange={this.handleChange}
                />
              </div>

              <Button className={classes.button}>Create Task</Button>
            </form>
          </div>
        )}
        {isOpen && (
          <div onClick={toggleIsOpen} className={classes["overlay"]}></div>
        )}
      </>
    );
  }
}

CreateTodoModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleIsOpen: PropTypes.func.isRequired,
};

export default CreateTodoModal;
