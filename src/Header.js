import React, { useEffect } from 'react'
import "./Header.css"
import {Link} from "react-router-dom"
import { useState } from 'react'

function Header() {

  const [isSidebarOpen, setSidebarOpen] = useState(false) 

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  }
  return (
    <header>
      <div className='HeaderWrapper'>
        <h3>Dev Solary</h3>
        {!isSidebarOpen && (<button onClick={toggleSidebar}><i class="fa-solid fa-bars"></i></button>)}
        {isSidebarOpen && (<button onClick={toggleSidebar}><i class="fa-solid fa-x"></i></button>)}
        
        

        

        
        <ul className={`${isSidebarOpen ? "sidebarOpen" : "sidebarClose"}`}>
          <li><Link to="/" className='navLink' onClick={toggleSidebar}>HOME</Link></li>
          <li><Link to="/Skills" className='navLink' onClick={toggleSidebar}>SKILLS</Link></li>
          <li><Link to="/Portfolio" className='navLink' onClick={toggleSidebar}>PORTFOLIO</Link></li>
          <li><Link to="/Services" className='navLink' onClick={toggleSidebar}>SERVICES</Link></li>
          <li><Link to="/About" className='navLink' onClick={toggleSidebar}>ABOUT</Link></li>
          <li><a href="https://wa.link/l59p25" target='_blank' rel='noopener noreferrer' className='navLink' onClick={toggleSidebar}>CONTACT</a></li>
        </ul>
      </div>
    </header>
  )
}

export default Header