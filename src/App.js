import React, { Component } from 'react';
import uniqid from 'uniqid';
import Overview from './components/Overview';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      task: { name: '', id: uniqid() },
    };
  }

  handleChange = (e) => {
    this.setState({
      task: {
        name: e.target.value,
        id: this.state.task.id,
      },
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { name: '', id: uniqid() },
    });
  };

  render() {
    let { tasks, task } = this.state;

    return (
      <div className="App">
        <form onSubmit={this.onSubmitTask}>
          <input
            onChange={this.handleChange}
            value={task.name}
            type="text"
            placeholder="Task Name"
            id="name"
            name="name"
          ></input>
          <input type="submit"></input>
        </form>
        <Overview tasks={tasks} />
      </div>
    );
  }
}
