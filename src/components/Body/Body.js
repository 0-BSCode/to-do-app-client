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

  return (
    <main className="allTasks">
      <AddTask />
      <Tasks tasks={filter == "All"? tasks: filteredTasks} />
      <TaskFilter 
      setFilter={setFilter}
      setFilteredTasks={setFilteredTasks}/>
      <DragTask />
    </main>
  )
}

export default Body