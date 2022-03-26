import React from 'react'
import './styles.css';

const TaskFilter = ({filteredTasks, setFilteredTasks}) => {
  const returnAll = e => {
    e.preventDefault();
    setFilteredTasks(filteredTasks);
  }

  const returnActive = e => {
    e.preventDefault();
    setFilteredTasks(filteredTasks.filter(task => !task.finished));
  }

  const returnCompleted = e => {
    e.preventDefault();
    setFilteredTasks(filteredTasks.filter(task => task.finished));
  }

  return (
    <section className="filter">
      <button 
        className="filter__btn"
        onClick={returnAll}>
        All
      </button>
      <button 
        className="filter__btn"
        onClick={returnActive}>
        Active
      </button>
      <button 
        className="filter__btn"
        onClick={returnCompleted}>
        Completed
      </button>
    </section>
  )
}

export default TaskFilter