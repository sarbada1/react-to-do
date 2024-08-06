import React from "react";
import classes from "./todo-app.module.css";

import { Container, Text } from "../../components";
import Controller from "../controller";
import ListView from "../list-view";
import TableView from "../table-view";

class TodoApp extends React.Component {
  state = {
    todos: [
      {
        id: "ablck",
        title: "First Task",
        description: "This is the description for the first task.",
        time: "10:00 AM",
        isCompleted: true,
        isSelected: false,
      },
      {
        id: "bdefg",
        title: "Second Task",
        description: "This is the description for the second task.",
        time: "11:30 AM",
        isCompleted: false,
        isSelected: true,
      },
      {
        id: "cghij",
        title: "Third Task",
        description: "This is the description for the third task.",
        time: "1:00 PM",
        isCompleted: false,
        isSelected: false,
      },
      {
        id: "dijkl",
        title: "Fourth Task",
        description: "This is the description for the fourth task.",
        time: "2:45 PM",
        isCompleted: true,
        isSelected: true,
      },
      {
        id: "efklm",
        title: "Fifth Task",
        description: "This is the description for the fifth task.",
        time: "4:15 PM",
        isCompleted: false,
        isSelected: false,
      },
    ],
    search: "",
    view: "LIST",
    filter: "ALL",
  };

  createTodo = (todo) => {
    this.setState({ todos: [todo, ...this.state.todos] });
  };

  toggleSelect = (todoId) => {
    const todos = [...this.state.todos];

    const findTodo = todos.find((todo) => todo.id === todoId);
    findTodo.isSelected = !findTodo.isSelected;

    this.setState({ todos });
  };

  toggleCompleted = (todoId) => {
    const todos = [...this.state.todos];

    const findTodo = todos.find((todo) => todo.id === todoId);
    findTodo.isCompleted = !findTodo.isCompleted;

    this.setState({ todos });
  };

  handleSelectAll = () => {
    const todos = this.state.todos.map((todo) => {
      return {
        ...todo,
        isSelected: true,
      };
    });

    this.setState({ todos });
  };

  handleDeselectAll = () => {
    const todos = this.state.todos.map((todo) => {
      return {
        ...todo,
        isSelected: false,
      };
    });

    this.setState({ todos });
  };

  handleDeleteAll = () => {
    this.setState({ todos: [] });
  };

  handleSelectCompleted = () => {
    const todos = this.state.todos.map((todo) => {
      if (todo?.isCompleted) {
        return {
          ...todo,
          isSelected: true,
        };
      } else
        return {
          ...todo,
          isSelected: false,
        };
    });
    this.setState({ todos });
  };

  handleSelectIncomplete = () => {
    const todos = this.state.todos.map((todo) => {
      if (!todo.isCompleted) {
        return {
          ...todo,
          isSelected: true,
        };
      } else
        return {
          ...todo,
          isSelected: false,
        };
    });
    this.setState({ todos });
  };

  handleDeleteSelected = () => {
    const todos = this.state.todos.filter((todo) => !todo.isSelected);
    this.setState({ todos });
  };

  handleViewChange = (view = "LIST") => {
    this.setState({ view });
  };

  handleSearchChange = (text) => {
    this.setState({ search: text });
  };

  performSearch = () => {
    const todos = this.state.todos.filter((todo) =>
      todo.title.toLowerCase().includes(this.state.search.toLowerCase())
    );

    return todos;
  };

  filterOnChange = (filter) => {
    this.setState({ filter });
  };

  handleFilter = (todos) => {
    const { filter } = this.state;
    if (filter === "RUNNING") {
      return todos.filter((todo) => !todo.isCompleted);
    } else if (filter === "COMPLETED") {
      return todos.filter((todo) => todo.isCompleted);
    } else {
      return todos;
    }
  };

  getView = () => {
    let todos = this.performSearch();
    todos = this.handleFilter(todos);

    return this.state.view === "LIST" ? (
      <ListView
        todos={todos}
        toggleSelect={this.toggleSelect}
        toggleCompleted={this.toggleCompleted}
      />
    ) : (
      this.state.view === "TABLE" && (
        <TableView
          todos={todos}
          toggleSelect={this.toggleSelect}
          toggleCompleted={this.toggleCompleted}
        />
      )
    );
  };

  render() {
    return (
      <Container mxWidth={900} className={classes.container}>
        <h1 className={classes.heading}>T O D O S</h1>
        <Controller
          todos={this.state.todos}
          createTodo={this.createTodo}
          handleSearch={this.handleSearchChange}
          handleSelectAll={this.handleSelectAll}
          handleDeselectAll={this.handleDeselectAll}
          handleDeleteAll={this.handleDeleteAll}
          handleSelectCompleted={this.handleSelectCompleted}
          handleSelectIncomplete={this.handleSelectIncomplete}
          handleDeleteSelected={this.handleDeleteSelected}
          filter={this.state.filter}
          filterOnChange={this.filterOnChange}
          handleViewChange={this.handleViewChange}
        />
        {this.getView()}
      </Container>
    );
  }
}

export default TodoApp;
