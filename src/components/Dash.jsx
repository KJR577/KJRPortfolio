import React, { useState, useEffect } from 'react';
import Img from '../assets/filename.png';
import arrow from '../assets/arrow.png';
import '../styles/Dash.css';

function Dash({ onEnter }) {
  const fullName = "Kenvin Jose Roys.J";
  const [typedName, setTypedName] = useState("");
useEffect(() => {
  let index = 0;
  let isDeleting = false;

  const interval = setInterval(() => {
    if (!isDeleting) {
      setTypedName(fullName.slice(0, index + 1));
      index++;

      if (index > fullName.length) {
        isDeleting = true;
      }
    } else {
      setTypedName(fullName.slice(0, index - 1));
      index--;

      if (index === 0) {
        isDeleting = false;
      }
    }
  }, 150);

  return () => clearInterval(interval);
}, []);

  return (
    <div id="divmaind">
      <div className="blur-gradient bg-top"></div>
      <div className="blur-gradient bg-bottom"></div>

      <div className="dash-container">
        <div className="dash-img-wrapper">
          <img src={Img} alt="Kenvin Jose Roys" id="imgpro" />
        </div>

        <div className="dash-text-content">
          <h2 id="welcome">Welcome to MY portfolio</h2>

          {/* Typing effect */}
          <h1 id="name">{typedName}</h1>

          <h3 id="profe">MERN Stack Developer</h3>

          <div className="entry-action" onClick={onEnter}>
            <span>Explore Portfolio</span>
            <img id="arrow" src={arrow} alt="Enter Link Pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dash;