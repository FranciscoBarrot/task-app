import React, { Component } from 'react';

export default class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
  }

  addTask() {
    this.setState((state, props) => ({
      tasks: state.tasks.push(props.task),
    }));
  }

  showTasks() {}

  render() {
    return (
      <div className="task-container">
        <ul></ul>
      </div>
    );
  }
}
