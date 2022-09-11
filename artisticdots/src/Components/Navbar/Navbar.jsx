import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar(props) {

  let style = {}

  let color ={
    color : "white"
  }

  if (props.dark) {
     style = {
      backgroundColor: "#1E1E1E",
    }
  }
  else {

       style = {
        backgroundColor: "white"
      }

    }


  return (
    <div className='HeaderNavbar' style={style} >
      <ul className='ulContainer'>
        <Link style={color} to='/' className='NavElement'>Home</Link>
        <Link style={color} to='/hall-of-art' className='NavElement' >Hall of Art</Link>
        <Link  to='/' className='Artistic'> ArtisticDots</Link>
        <Link style={color} to='/event' className='NavElement'>Event </Link>
        <Link style={color} to='' className='NavElement'>Contact Us </Link>
      </ul>

    </div>
  )
}
