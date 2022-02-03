import React from 'react';

export default function Overview(props) {
  const { tasks } = props;

  function showTasks() {
    return tasks.map((task) => {
      return <li key={task.id}>{task.name}</li>;
    });
  }

  return <ul className="task-container">{showTasks()}</ul>;
}
