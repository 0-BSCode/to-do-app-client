import React from 'react'
import './styles.css';

const TaskInfo = ({taskNumber}) => {
  return (
    <li className="info">
      <p className="info__left">
        {taskNumber} items left
      </p>
      <button className="info__clear">
        Clear completed
      </button>
    </li>
  )
}

export default TaskInfo