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
    console.log(tasks);
    const inputs = document.querySelectorAll(".task__checkbox");
    inputs.forEach(input => {
      const zIndex = input.style.getPropertyValue("--z-index");
      const dataName = input.getAttribute("dataname")
      console.log("Data: ", input.getAttribute("dataname"));
      console.log("Task: ", task.name);
      console.log("\n");
      if ((dataName == task.name && zIndex  == 0)) {
        input.style.setProperty("--z-index", "-1");
      } else {
        input.style.setProperty("--z-index", "0");
      }
    })
  }

  // Issue: When one button is checked, all the other buttons get deselected
  // Possible fix: Restructure state to be a taskName: taskFinished object for
  // easy searching
  const deleteEvent = e => {
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