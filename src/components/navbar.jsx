import React from 'react'
import '../styles/navbar.css'
import { Link } from 'react-router-dom'

export default function navbar() {
  return (
    <div className="navbar">
        <nav>
            <ul className='nav'>
                <li><Link to='/'>Home</Link></li>       
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/skills'>Skills</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
                <li><Link to='/contact'>Contact me</Link></li> 
            </ul>
        </nav>
    </div>
  )
}
