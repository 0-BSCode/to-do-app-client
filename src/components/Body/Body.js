import React from 'react'
import AddTask from './AddTask/AddTask'
import Tasks from './Tasks/Tasks'
import TaskFilter from './TaskFilter/TaskFilter'
import DragTask from './DragTask/DragTask'

const Body = () => {
  return (
    <main className="allTasks">
      <AddTask />
      <Tasks />
      <TaskFilter />
      <DragTask />
    </main>
  )
}

export default Body