import React from 'react'
import sunIcon from '../../images/icon-sun.svg';
import moonIcon from '../../images/icon-moon.svg';
import './styles.css'

const Header = () => {
  return (
    <header className="header">
        <h1 className="heading">
            Todo
        </h1>
        <button className="theme-btn">
            <img
                className="theme-img"
                src={moonIcon}
                alt="Moon"
            />
        </button>
    </header>
  )
}

export default Header