import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='HeaderNavbar'>
        <ul className='ulContainer'>
          <Link to='/' className='NavElement'>Home</Link>
          <Link to='/hall-of-art' className='NavElement' >Hall of Art</Link>
          <Link to='/' className='Artistic'> ArtisticDots</Link>
          <Link to='/event' className='NavElement'>Event </Link>
          <Link to='' className='NavElement'>Contact Us </Link>
        </ul>
      
    </div>
  )
}
 