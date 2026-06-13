import React from 'react';
import Img from '../assets/filename.png';
import arrow from '../assets/arrow.png';
import '../styles/Dash.css';

// Component receives the state modifier trigger as a prop
function Dash({ onEnter }) {
  return (
    <div id="divmaind">
      {/* Ambient Radial Gradient Overlays */}
      <div className="blur-gradient bg-top"></div>
      <div className="blur-gradient bg-bottom"></div>

      <div className="dash-container">
        {/* Profile Headshot Block */}
        <div className="dash-img-wrapper">
          <img src={Img} alt="Kenvin Jose Roys" id="imgpro" />
        </div>

        {/* Text Presentation Details Block */}
        <div className="dash-text-content">
          <h2 id="welcome">Welcome to MY portfolio</h2>
          <h1 id="name">Kenvin Jose Roys.J</h1>
          <h3 id="profe">MERN Stack Developer</h3>
          
          {/* Action Trigger Element */}
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