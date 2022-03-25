import React from 'react';
import deleteIcon from "../../../images/icon-cross.svg";
import './styles.css';

const Task = ({task}) => {
  return (
    <li className="task">
      <label className="task__container">
        <div className="task__info">
          <input 
            className="task__input"
            type="checkbox"
          />
          <span
            className="task__checkbox task__checkbox--finished" />
          <p className="task__text">
            {task.name}
          </p>
        </div>
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