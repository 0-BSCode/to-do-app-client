import React from 'react'

const AddTask = () => {
  return (
    <form className="form">
      <label className="form__container">
        <button 
          type="submit"
          className="form__submit" />
        <input 
          className="form__input"
          type="text" 
          placeholder="Create a new todo..."
        />
      </label>
    </form>
  )
}

export default AddTask