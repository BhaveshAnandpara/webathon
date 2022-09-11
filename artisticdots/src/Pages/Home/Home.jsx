import React from 'react';
import pic1 from '../../img/pic1.png';
import './Home.css';
import React from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls' //(use it after camera)
import { BufferAttribute, BufferGeometry, cloneUniformsGroups } from 'three'
// import dat from 'dat.gui'
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper.js'
import canvas from '../../Pages/Home/Home'
import { useEffect, useState } from 'react'
import texture from '../../Assets/textures/1.png'



export default function Home() {

  const [imgArr, setImgArr] = useState([])

  // useEffect(() => {

  //   const scene = new THREE.Scene()

  //   for (let i = -10; i < 5; i++) {


  //     const geometry = new THREE.CircleGeometry(1, 32)

  //     const material = new THREE.MeshBasicMaterial({
  //       color: 0xE0BBE4, //  color : 'red' , color : '#ff0000' ,  also works
  //       // wireframe : true //Shows Wiref,rame 
  //     });

  //     const mesh = new THREE.Mesh(geometry, material)
  //     mesh.position.set(0.3 * i , 1,)
  //     mesh.scale.set(0.1, 0.1, 0.1)

  //     scene.add(mesh)
  //   }

  //   const sizes = {

  //     width: 800,
  //     height: 600,
  //   }


  //   const camera = new THREE.PerspectiveCamera(70, (sizes.width / sizes.height), 1, 1000)


  //   camera.position.z = 3// used 3 beacuse cube is of 1 unit so got away from cube by 3 units 
  //   // camera.lookAt(mesh.position)
  //   scene.add(camera)

  //   const canvas = document.querySelector('.webgl')

  //   const renderer = new THREE.WebGLRenderer({
  //     canvas: canvas,  // Canvas for WEBGL
  //   })

  //   renderer.setSize(sizes.width, sizes.height)

  //   const tick = () => { //Creating a function for Animation 


  //     //Update Controls

  //     //render
  //     renderer.render(scene, camera);

  //     window.requestAnimationFrame(tick) // requestAnimationFrame() runs at 60 Frames per Second(FPS)


  //   }

  //   tick()

  // }, [])



  return (
    <section className='HomeContainer'>

      <div className='HomeContent'>
        <p>   "For Those with ART as their passion" </p>
      </div>

      <div className='scroll'>scroll</div>


      <section className='Hall_Of_Art'>

        <div className='Hall_Of_Art_Header'>HALL OF ART</div>
        <div className='Hall_Of_Art_img'>
          <div className='pic1'></div>
          <div className='pic2'></div>
          <div className='pic3'></div>
          <div className='pic4'></div>
          <div className='pic5'></div>
          <div className='pic6'></div>
          <div className='pic7'></div>

        </div>




      </section>
      <section className='upcomingEvents'>
        <div className='upcomingHeading'><p>OUR UPCOMING EVENTS</p></div>
        <div className='eventCard'>
          <div className='eventCard_1'>
            <div className='imgcontainer'>img</div>
            <div className='divinfo'>
              <div><p className='info_heading'>Art Class</p></div>
              <div><p className='events_discription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel condimentum magna. Nam quis bibendum nisi. Donec auctor neque quis turpis feugiat, ut blandit orci rhoncus. Nulla auctor fringilla lacinia. Vivamus in augue nunc. Sed pretium diam erat, nec hendrerit arcu volutpat at. In nec viverra velit.</p></div>
              <div><button type='submit' className='btn-register'>Register</button></div>
            </div>
          </div>

          <div className='eventCard_2'>
            <div className='imgcontainer'>img</div>
            <div className='divinfo'>
              <div><p className='info_heading'>Design Fundamentals</p></div>
              <div><p className='events_discription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel condimentum magna. Nam quis bibendum nisi. Donec auctor neque quis turpis feugiat, ut blandit orci rhoncus. Nulla auctor fringilla lacinia. Vivamus in augue nunc. Sed pretium diam erat, nec hendrerit arcu volutpat at. In nec viverra velit.</p></div>
              <div><button type='submit' className='btn-register'>Register</button></div>
            </div>
          </div>
        </div>
      </section>

      <section className='meet_Team_Section'>


        <div className='Card'>
          <div className="meet_Team_Heading">
            <p>
              MEET THE TEAM
            </p>
          </div>
<div className="meet_Team_cont">
  <div className="flex1">
          <div className='Team_elements'>
            <div className="team_img">
              img
            </div>
            <div className='infocontainer'>
              <div className='name'><p>Ralph Edwards</p></div>
              <div>
                <p className='logo'>LOGO</p>
              </div>
            </div>
          </div>

          <div className='Team_elements'>
            <div className="team_img">
              img
            </div>
            <div className='infocontainer'>
              <div className='name'><p>Courtney Henry</p></div>
              <div>
                <p  className='logo'>LOGO</p>
              </div>
            </div>
          </div>
          </div>



<div className="flex2">
          <div className='Team_elements'>
            <div className="team_img">
              img
            </div>
            <div className='infocontainer'>
              <div className='name'><p >Arlene Meloy</p></div>
              <div>
                <p  className='logo'>LOGO</p>
              </div>
            </div>
          </div>

          <div className='Team_elements'>
            <div className="team_img">
              img
            </div>
            <div className='infocontainer'>
              <div className='name'><p>Jerome Bell</p></div>
              <div>
                <p  className='logo'>LOGO</p>
              </div>
            </div>
          </div>
          </div>
          </div>

        </div>
      <section className='Hall_Of_Art'>

        <section className='Hall_Of_Art_Header'>HALL OF ART</section>

        <div className='Hall_Of_Art_img'>



        </div>

      </section>




      </section>

    </section>
  )
}

