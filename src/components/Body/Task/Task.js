import React, { useEffect } from 'react';
import deleteIcon from "../../../images/icon-cross.svg";
import './styles.css';
import {useDispatch} from 'react-redux';
import {Delete, Finished} from '../../../actions/tasks';

const Task = ({task}) => {
  const dispatch = useDispatch();

  const finishEvent = () => {
    dispatch(Finished(task.name));
  }

  const deleteEvent = e => {
    e.preventDefault();
    dispatch(Delete(task.name));
  }

  return (
    <li className="task">
      <label 
        className="task__container"
        htmlFor={task.name}
      >
        <div className="task__info">
          <input 
            className="task__input"
            type="checkbox"
            id={task.name}
            name={task.name}
            checked={task.finished}
          />
          <span
            className="task__checkbox"
            dataname={task.name}
            onClick={finishEvent} />
          <div className="task__text">
            {task.name}
          </div>
        </div>
        <button 
          className="task__delete-btn"
          onClick={deleteEvent} >
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