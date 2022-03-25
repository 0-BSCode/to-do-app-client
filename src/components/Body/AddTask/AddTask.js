import React, { useEffect } from 'react'
import './styles.css'
import {useDispatch, useSelector} from 'react-redux';
import {Add} from '../../../actions/tasks';

const AddTask = () => {
  const dispatch  = useDispatch();
  const tasks = useSelector(state => state.tasks);

  const submitTask = e => {
    e.preventDefault();
    const input = document.querySelector('.form__input');
    if (input.value != '') dispatch(Add(input.value));
    input.value = '';
  }

  useEffect(() => {
    console.log(tasks);
  })

  return (
    <label className="form">
      <button 
        className="form__submit" 
        onClick={submitTask}
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