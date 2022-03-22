import React from 'react'
import sunIcon from '../../images/icon-sun.svg';
import moonIcon from '../../images/icon-moon.svg';

const Header = () => {
  return (
    <header>
        <h1>
            Todo
        </h1>
        <button>
            <img
                src={sunIcon}
                alt="Sun"
            />
        </button>
    </header>
  )
}

export default Header