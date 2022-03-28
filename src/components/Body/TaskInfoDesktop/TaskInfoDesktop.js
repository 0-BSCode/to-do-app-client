import React from 'react'
import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import {Delete} from '../../../actions/tasks';
import TaskFilter from '../TaskFilter/TaskFilter';

const TaskInfoDesktop = ({setFilter}) => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const clearCompleted = e => {
    e.preventDefault();
    const finishedTasks = tasks.filter(task => task.finished);
    finishedTasks.forEach((finishedTask, index) => {
      dispatch(Delete(finishedTask.name));
    });
  }

  return (
    <li className="info">
      <p className="info__left">
        {tasks.filter(task => !task.finished).length} items left
      </p>
      <TaskFilter setFilter={setFilter}/>
      <button 
        className="info__clear"
        onClick={clearCompleted}
      >
        Clear completed
      </button>
    </li>
  )
}

export default TaskInfoDesktop