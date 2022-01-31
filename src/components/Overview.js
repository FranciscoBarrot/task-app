import React, { Component } from 'react';
import Task from './Task';

export default class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [{ name: 'jorge' }, { name: 'alexa' }],
    };
  }

  addTask() {
    this.setState((state, props) => ({
      tasks: state.tasks.push(props.task),
    }));
  }

  showTasks() {
    console.log('hi');
    this.state.tasks.forEach((task) => {
      return <li>{task.name}</li>;
    });
  }

  render() {
    return (
      <div className="task-container">
        <h2>Tasks!</h2>
        <ul className="tasks">
          {this.state.tasks.map((task) => {
            return <Task name={task.name} />;
          })}
        </ul>
      </div>
    );
  }
}
