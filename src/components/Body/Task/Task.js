import React from 'react'
import deleteIcon from "../../../images/icon-cross.svg";


const Task = () => {
  return (
    <li className="task">
      <label className="task__container">
        <input 
          className="task__input"
          type="checkbox"
        />
        <p className="task__text">
          Task
        </p>
        <button className="task__delete-btn">
          <img
            className="task__delete-img"
            src={deleteIcon}
            alt="delete"
          />
        </button>
      </label>
    </li>
  )
}

export default Task