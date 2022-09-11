import React from 'react'
import './Footer.css'
export default function Footer(props) {

  let style = {}

  let color = {
    color: "white"
  }

  if (props.dark) {
    style = {
      backgroundColor: "#1E1E1E",
      color : "white"
    }
  }
  else {

    style = {
      backgroundColor: "white"
    }

  }

  return (
    <div className='info' style={style} >
      <div className='contactus'>
        <p className='contact'>Contact Us</p>
        <div className='desc1'>
          <p>club.csitmjpru@gmail.com</p>
          <p> +91-8534833926</p>
          <p> Harshit Kumar Singh (Student Incharge)</p>
          <p> Department Of CSIT, Mahatma Jyotiba Phule Rohilkhand University, Bareilly, Uttar Pradesh Pincode:-243006</p>
        </div>

      </div>
      <div className='link'>
        <p className='lin'>Link</p>
        <div className='desc2'>
          <p>Official Website Of MJPRU</p>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>YouTube</p>
          <p>Twitter</p>
        </div>

      </div>
    </div>
  )
}
