import React, { useEffect } from 'react';
import deleteIcon from "../../../images/icon-cross.svg";
import './styles.css';
import {useDispatch, useSelector} from 'react-redux';
import {Delete, Finished} from '../../../actions/tasks';

const Task = ({task}) => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks);

  const finishEvent = (e) => {
    dispatch(Finished(task.name));
  }

  // Issue 1: When one button is checked, all the other buttons get deselected
  // Issue 2: If two tasks have the same text, the same actions will be performed on both
  // Suggestion: Restructure state to be a taskName: taskFinished object for
  // easy searching
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
          />
          <span
            className="task__checkbox"
            dataname={task.name}
            onClick={finishEvent} />
          <p className="task__text">
            {task.name}
          </p>
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