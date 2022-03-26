import React from 'react'
import sunIcon from '../../images/icon-sun.svg';
import moonIcon from '../../images/icon-moon.svg';
import './styles.css'
import {useState, useEffect} from 'react';

const Header = () => {
  const [light, setLight] = useState(true);
  const toggleMode = (e) => {
    e.preventDefault();
    setLight(!light);
  }

  useEffect(() => {
    const themeImg = document.querySelector(".theme-img");
    const rootGetter = getComputedStyle(document.documentElement);
    const rootSetter = document.documentElement.style;
    console.log(rootGetter.getPropertyValue("--bright-blue"));
    if (light) {
      themeImg.setAttribute('src', `${moonIcon}`);
      rootSetter.setProperty("--vl-gray", "white");
    } else {
      themeImg.setAttribute('src', `${sunIcon}`);
      rootSetter.setProperty("--vl-gray", "black");
    }
  })

  return (
    <header className="header">
        <h1 className="heading">
            Todo
        </h1>
        <button 
          className="theme-btn"
          onClick={toggleMode}>
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