import React from 'react'
import './styles.css';
import { useSelector } from 'react-redux';

const TaskFilter = ({setFilter}) => {
  const tasks = useSelector(state => state.tasks);

  const handleClick = e => {
    e.preventDefault();
    setFilter(e.target.textContent);
  }

  return (
    <section className="filter">
      <button 
        className="filter__btn"
        onClick={handleClick}>
        All
      </button>
      <button 
        className="filter__btn"
        onClick={handleClick}>
        Active
      </button>
      <button 
        className="filter__btn"
        onClick={handleClick}>
        Completed
      </button>
    </section>
  )
}

export default TaskFilter