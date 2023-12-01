import React from 'react'
import "./Header.css"
import {Link} from "react-router-dom"

function Header() {
  return (
    <header>
      <div className='HeaderWrapper'>
        <h3>Dev Solary</h3>
        <ul>
          <li><Link to="/" className='navLink'>HOME</Link></li>
          <li><Link to="/Skills" className='navLink'>SKILLS</Link></li>
          <li><Link to="/Portfolio" className='navLink'>PORTFOLIO</Link></li>
          <li><Link to="/Services" className='navLink'>SERVICES</Link></li>
          <li><Link to="/About" className='navLink'>ABOUT</Link></li>
          <li><a href="https://wa.link/l59p25" target='_blank' rel='noopener noreferrer' className='navLink'>CONTACT</a></li>
        </ul>
      </div>
    </header>
  )
}

export default Header