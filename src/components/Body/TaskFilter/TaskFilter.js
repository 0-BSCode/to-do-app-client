import React from 'react'
import './styles.css';

const TaskFilter = () => {
  return (
    <section className="filter">
      <button className="filter__btn">
        All
      </button>
      <button className="filter__btn">
        Active
      </button>
      <button className="filter__btn">
        Completed
      </button>
    </section>
  )
}

export default TaskFilter