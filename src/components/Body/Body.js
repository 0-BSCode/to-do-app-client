import React, { useEffect } from 'react'
import AddTask from './AddTask/AddTask'
import Tasks from './Tasks/Tasks'
import TaskFilter from './TaskFilter/TaskFilter'
import DragTask from './DragTask/DragTask'
import {useSelector} from 'react-redux'
import {useState} from 'react'

const Body = () => {
  const tasks = useSelector(state => state.tasks);
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    if (filter == 'Complete') {
      setFilteredTasks(tasks.filter(task => task.finished == true));
    } else if (filter == 'Active') {
      setFilteredTasks(tasks.filter(task => task.finished == false));
    } else {
      setFilteredTasks(tasks);
    }
  })

  return (
    <main className="allTasks">
      <AddTask />
      <Tasks tasks={filteredTasks} />
      <TaskFilter 
      setFilter={setFilter}/>
      <DragTask />
    </main>
  )
}

export default Body