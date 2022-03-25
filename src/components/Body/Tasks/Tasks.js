import React from 'react'
import Task from '../Task/Task'
import TaskInfo from '../TaskInfo/TaskInfo';
import './styles.css';
import {useDispatch, useSelector} from 'react-redux';

const Tasks = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks);
  
  return (
    <ul
      className="tasks">
      {tasks.map(task => (
        <Task task={task} />
      ))}
      <TaskInfo taskNumber={tasks.length} />
    </ul>
  )
}

export default Tasks