import React from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls' //(use it after camera)
import { BufferAttribute, BufferGeometry } from 'three'
// import dat from 'dat.gui'
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper.js'
import canvas from '../../Pages/Home/Home'
import { useEffect } from 'react'
import texture from '../../Assets/textures/1.png'


export default function Home() {

  useEffect(() => {

    const scene = new THREE.Scene()

    for (let i = -10; i < 5; i++) {


      const geometry = new THREE.CircleGeometry(1, 32)

      const material = new THREE.MeshBasicMaterial({
        color: 0xE0BBE4, //  color : 'red' , color : '#ff0000' ,  also works
        // wireframe : true //Shows Wiref,rame 
      });

      const mesh = new THREE.Mesh(geometry, material)
      mesh.position.set(0.3 * i , 1,)
      mesh.scale.set(0.1, 0.1, 0.1)

      scene.add(mesh)
    }

    const sizes = {

      width: 800,
      height: 600,
    }


    const camera = new THREE.PerspectiveCamera(70, (sizes.width / sizes.height), 1, 1000)


    camera.position.z = 3// used 3 beacuse cube is of 1 unit so got away from cube by 3 units 
    // camera.lookAt(mesh.position)
    scene.add(camera)

    const canvas = document.querySelector('.webgl')

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,  // Canvas for WEBGL
    })

    renderer.setSize(sizes.width, sizes.height)

    const tick = () => { //Creating a function for Animation 


      //Update Controls

      //render
      renderer.render(scene, camera);

      window.requestAnimationFrame(tick) // requestAnimationFrame() runs at 60 Frames per Second(FPS)


    }

    tick()

  }, [])


  return (
    <>
      <div>Home</div>
      <canvas className="webgl"></canvas>
    </>
  )
}

