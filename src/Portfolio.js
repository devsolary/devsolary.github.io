import React from 'react';
import "./Portfolio.css"
import solaryCineTune from "./img/SolaryCineTune.png"
import netflixClone from "./img/NetflixClone.png"

function Portfolio() {
 
  return (
    <div className='projectContainer'>
      <h2>My Projects</h2>
      <div className="projects">
        <div className="project">
          <a href="https://devsolary.github.io/solaryCineTune/"  target='_blank' rel='noopener noreferrer'>
            <img src={solaryCineTune} alt="" />
            <p>Entertainment web page interface design</p>
          </a>
        </div>
        <div className="project">
          <a href="https://devsolary.github.io/netflix-clone/"  target='_blank' rel='noopener noreferrer'>
            <img src={netflixClone} alt="" />
            <p>Netflix Clone app</p>
          </a>
        </div>

      </div>
      
    </div>
  )
}

export default Portfolio