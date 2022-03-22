import React from 'react'
import './styles.css'

const AddTask = () => {
  return (
    <label className="form">
      <button 
        className="form__submit" 
      />
      <input 
        className="form__input"
        type="text" 
        placeholder="Create a new todo..."
      />
    </label>
  )
}

export default AddTask