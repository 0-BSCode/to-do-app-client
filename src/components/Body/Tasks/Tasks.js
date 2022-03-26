import React, { useEffect } from 'react'
import Task from '../Task/Task'
import TaskInfo from '../TaskInfo/TaskInfo';
import './styles.css';
import {useDispatch, useSelector} from 'react-redux';

const Tasks = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks);
  
  useEffect(() => {
    console.log(tasks);
    const taskText = document.querySelectorAll(".task__text");
    let ctr = 0;
    for (;ctr < taskText.length; ctr++) {
      if (tasks[ctr].finished) {
        taskText[ctr].classList.add("task__text--finished");
      } else {
        taskText[ctr].classList.remove("task__text--finished");
      }
    }
  })
  return (
    <ul
      className="tasks">
      {tasks.map(task => (
        <Task task={task} key={task.name} />
      ))}
      <TaskInfo taskNumber={tasks.length} />
    </ul>
  )
}

export default Tasks