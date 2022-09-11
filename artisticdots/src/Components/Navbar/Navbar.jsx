import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { Menu } from 'react-feather'

export default function Navbar(props) {

  let style = {}

  let color = {
    color: "black"
  }

  if (props.dark) {
    style = { backgroundColor: "#1E1E1E", }
    color = { color: "white" }
  }



  return (
    <>
      <div className="navigation">
        <Menu className='menu' onClick={()=>{

          if(document.getElementById('drawer').style.transform === "translateX(-100%)" ){
            document.getElementById('drawer').style.transform = "translateX(0%)"
          }
          else{
            document.getElementById('drawer').style.transform = "translateX(-100%)"
          }

        }} />
        <div className="drawer" id='drawer' >
          <ul className='ulContainer' >
            <Link  to='/' >Home</Link>
            <Link  to='/hall-of-art' >Hall of Art</Link>
            <Link  to='/event' >Event</Link>
            <Link  to='' >Contact Us</Link>
          </ul>
        </div>
      </div>
      <div className='HeaderNavbar' style={style} >
        <ul className='ulContainer'>
          <Link style={color} to='/' className='NavElement'>Home</Link>
          <Link style={color} to='/hall-of-art' className='NavElement' >Hall of Art</Link>
          <Link to='/' className='Artistic'> ArtisticDots</Link>
          <Link style={color} to='/event' className='NavElement'>Event </Link>
          <Link style={color} to='' className='NavElement'>Contact Us </Link>
        </ul>

      </div>
    </>
  )
}
