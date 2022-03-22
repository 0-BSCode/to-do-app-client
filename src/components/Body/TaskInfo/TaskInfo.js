import React from 'react'
import './styles.css';

const TaskInfo = () => {
  return (
    <li className="info">
      <p className="info__left">
        3 items left
      </p>
      <button className="info__clear">
        Clear completed
      </button>
    </li>
  )
}

export default TaskInfo