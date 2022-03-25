import React from 'react';
import deleteIcon from "../../../images/icon-cross.svg";
import './styles.css';
import {useDispatch} from 'react-redux';
import {Delete} from '../../../actions/tasks';

const Task = ({task}) => {
  const dispatch = useDispatch();

  const handleClick = e => {
    e.preventDefault();
    dispatch(Delete(task.name));
  }

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
        <button 
          className="task__delete-btn"
          onClick={handleClick} >
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