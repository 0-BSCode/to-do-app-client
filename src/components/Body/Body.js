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

  useEffect(() => {
    // setFilteredTasks(tasks);
    console.log(filteredTasks);
  })

  return (
    <main className="allTasks">
      <AddTask />
      <Tasks />
      <TaskFilter 
      filteredTasks={filteredTasks}
      setFilteredTasks={setFilteredTasks}/>
      <DragTask />
    </main>
  )
}

export default Body