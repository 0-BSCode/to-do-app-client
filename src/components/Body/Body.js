import React from 'react'
import AddTask from './AddTask/AddTask'
import Tasks from './Tasks/Tasks'

const Body = () => {
  return (
    <main className="allTasks">
      <AddTask />
      <Tasks />
      <section>
        <button>
          All
        </button>
        <button>
          Active
        </button>
        <button>
          Completed
        </button>
      </section>
      <section>
        Drag and drop to reorder list
      </section>
    </main>
  )
}

export default Body