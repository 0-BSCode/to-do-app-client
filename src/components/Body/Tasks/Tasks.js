import React from 'react'
import Task from '../Task/Task'
import TaskInfo from '../TaskInfo/TaskInfo';

const Tasks = () => {
  return (
    <ul
      className="tasks">
      <Task />
      <Task />
      <Task />
      <TaskInfo />
    </ul>
  )
}

export default Tasks