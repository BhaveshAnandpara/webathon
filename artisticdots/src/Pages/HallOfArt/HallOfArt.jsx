import React, { useRef } from 'react'
import './HallOfArt.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';


export default function HallOfArt() {

  const [arts, setArts] = useState([])

  const hallContainer = useRef()

  useEffect(() => {

    var config = {
      method: 'get',
      url: 'http://localhost:8001/upload/getArts',
      headers: {}
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data.art));

        let arr = []

        for (const key in response.data.art) {
          arr.push({ art: response.data.art[key] })
        }

        // console.log(arr);
        setArts(arr)


      })
      .catch(function (error) {
        console.log(error);
      });


  }, [])

  useEffect(() => {

    const root = createRoot(hallContainer.current)
    let artsArr = []

    arts.map((ele) => {

      console.log(ele.art.imgPath);

      let imgPath = ele.art.imgPath.split("\\")
      imgPath = imgPath[imgPath.length - 1]

      console.log(imgPath)

      let style = {}

      if(imgPath){

         style = {
          backgroundImage: `url(/uploads/${imgPath})`,
        }
      }

      artsArr.push(

        <>
          <div className='grid-items hall-container'  >

            <div className="pic" style={style}  ></div>

            <div >
              <p className='name'>{ele.art.artist}</p>
              <p className='descript'>{ele.art.desc}</p>
            </div>
          </div>
        </>

      )
    })

    root.render(artsArr)

  }, [arts])




  return (
    <div className='container'>

    <p className='section-name' >HALL OF ART</p>

      <div className='container1' ref={hallContainer}>

      </div>
    </div>
  )
}
