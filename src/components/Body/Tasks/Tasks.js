import React, { useEffect } from 'react'
import Task from '../Task/Task'
import TaskInfo from '../TaskInfo/TaskInfo';
import './styles.css';
import {useSelector} from 'react-redux';

const Tasks = ({filter}) => {
  const tasks = useSelector(state => state.tasks);
  var filterTasks;

  if (filter == 'All') {
    filterTasks = tasks;
  } else if (filter == 'Active') {
    filterTasks = tasks.filter(task => !task.finished);
  } else if (filter == 'Completed') {
    filterTasks = tasks.filter(task => task.finished);
  }

  useEffect(() => {
    const taskText = document.querySelectorAll(".task__text");

    let ctr = 0;
    for (;ctr < taskText.length; ctr++) {
      if (filterTasks[ctr].finished) {
        taskText[ctr].classList.add("task__text--finished");
      } else {
        taskText[ctr].classList.remove("task__text--finished");
      }
    }
  })

  return (
    <ul
      className="tasks">
      {filterTasks.map(task => (
        <Task task={task} key={task.name} />
      ))}
      <TaskInfo />
    </ul>
  )
}

export default Tasks