import React from 'react'
import Task from '../Task/Task'

const Tasks = () => {
  return (
    <ul
      className="tasks">
      <Task />
      <Task />
      <Task />
      <li>
        <p>
          3 items left
        </p>
        <p>
          Clear completed
        </p>
      </li>
    </ul>
  )
}

export default Tasks