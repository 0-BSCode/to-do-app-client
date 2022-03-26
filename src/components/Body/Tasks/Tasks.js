import React, { useEffect } from 'react'
import Task from '../Task/Task'
import TaskInfo from '../TaskInfo/TaskInfo';
import './styles.css';
import {useSelector} from 'react-redux';

const Tasks = ({filteredTasks}) => {
  const tasks = useSelector(state => state.tasks);

  useEffect(() => {
    const taskText = document.querySelectorAll(".task__text");
    let ctr = 0;
    for (;ctr < taskText.length; ctr++) {
      if (filteredTasks[ctr].finished) {
        taskText[ctr].classList.add("task__text--finished");
      } else {
        taskText[ctr].classList.remove("task__text--finished");
      }
    }
  })

  return (
    <ul
      className="tasks">
      {filteredTasks.map(task => (
        <Task task={task} key={task.name} />
      ))}
      <TaskInfo />
    </ul>
  )
}

export default Tasks