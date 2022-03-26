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
    taskText.forEach(taskText => {
      console.log(taskText.textContent);
    })
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