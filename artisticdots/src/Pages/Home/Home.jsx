import React from 'react';
import './Home.css';
import { useEffect, useState, useRef } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import axios from 'axios'
import Eventcard from '../../Components/EventCard/Eventcard';
import { Instagram, Twitter, Facebook } from 'react-feather'


export default function Home() {

  const [arts, setArts] = useState([])
  const [upcEvents, setUpcEvents] = useState([])
  const [imgArr, setImgArr] = useState([])


  const upcContainer = useRef()
  const word = useRef()
  const teamMembersSection = useRef()


  const teamMembers = [
    { name: "Bhavesh Anandpara", img: "/pic1.png", insta: "https://www.instagram.com/bhavesh_anandpara_______", twitter: "https://twitter.com/home", fb: "../" },
    { name: "Shivam Charde", img: "/pic2.png", insta: "https://www.instagram.com/bhavesh_anandpara_______", twitter: "https://twitter.com/home", fb: "../" },
    { name: "Vaishnavi Bhende", img: "/pic3.png", insta: "https://www.instagram.com/bhavesh_anandpara_______", twitter: "https://twitter.com/home", fb: "../" },
    { name: "Pranjal Panchawate", img: "/pic4.png", insta: "https://www.instagram.com/bhavesh_anandpara_______", twitter: "https://twitter.com/home", fb: "../" },
  ]


  useEffect(() => {

    console.log(word.current);

    const fonts = [

    { "fontFamily" : "'Anton', sans - serif",  "fontSize": "32px", "fontWeight": "700", "background": "linear-gradient(90deg, hsla(339, 100%, 55%, 1) 0%, hsla(197, 100%, 64%, 1) 100%)", "-webkit-background-clip": "text" },
    { "fontFamily" : "'Combo', cursive"  ,"fontSize": "32px", "fontWeight": "700", "background": "linear-gradient(90deg, hsla(302, 82%, 76%, 1) 0%, hsla(258, 40%, 68%, 1) 100%)", "-webkit-background-clip": "text" },
    { "fontFamily" : "'Lobster', cursive" , "fontSize": "32px", "fontWeight": "700", "background": "linear-gradient(90deg, hsla(333, 100%, 53%, 1) 0%, hsla(33, 94%, 57%, 1) 100%)", "-webkit-background-clip": "text" },
    { "fontFamily" : "'Lobster Two', cursive",  "fontSize": "32px", "fontWeight": "700", "background": " linear-gradient(90deg, hsla(238, 100%, 71%, 1) 0%, hsla(295, 100%, 84%, 1) 100%)", "-webkit-background-clip": "text" },
    { "fontFamily" : "'Permanent Marker', cursive",  "fontSize": "32px", "fontWeight": "700", "background": "linear-gradient(90deg, hsla(238, 100%, 71%, 1) 0%, hsla(295, 100%, 84%, 1) 100%)", "-webkit-background-clip": "text" },
    { "fontFamily" : "'Poppins', sans - serif"  , "fontSize": "32px", "fontWeight": "700", "background": "linear-gradient(90deg, hsla(339, 100%, 55%, 1) 0%, hsla(197, 100%, 64%, 1) 100%)", "-webkit-background-clip": "text" },
    { "fontFamily" : "'Press Start 2P', cursive"  , "fontSize": "32px", "fontWeight": "700", "background": "linear-gradient(90deg, hsla(302, 82%, 76%, 1) 0%, hsla(258, 40%, 68%, 1) 100%)", "-webkit-background-clip": "text" },
    { "fontFamily" : "'Qwitcher Grypen', cursive"  , "fontSize": "32px", "fontWeight": "700", "background": "linear-gradient(90deg, hsla(333, 100%, 53%, 1) 0%, hsla(33, 94%, 57%, 1) 100%)", "-webkit-background-clip": "text" },
    { "fontFamily" : "'Rampart One', cursive"  , "fontSize": "32px", "fontWeight": "700", "background": " linear-gradient(90deg, hsla(238, 100%, 71%, 1) 0%, hsla(295, 100%, 84%, 1) 100%)", "-webkit-background-clip": "text" },
    { "fontFamily" : "'Shadows Into Light', cursive"  , "fontSize": "32px", "fontWeight": "700", "background": "linear-gradient(90deg, hsla(238, 100%, 71%, 1) 0%, hsla(295, 100%, 84%, 1) 100%)", "-webkit-background-clip": "text" },
    { "fontFamily" : "'Ultra', serif" , "fontSize": "32px", "fontWeight": "700", "background": "linear-gradient(90deg, hsla(302, 82%, 76%, 1) 0%, hsla(258, 40%, 68%, 1) 100%)", "-webkit-background-clip": "text" }

    ]

    let index = 0
    const interval = setInterval(
      () => {


        // if (index > 20) {
        //   console.log(index);
        //   clearInterval(interval)
        // }
        index++
        const root = createRoot(word.current)
        root.render(<span id='artWord' style={fonts[index % fonts.length]} >ART</span>)
      },
      1000

    )



  }, [])

  useEffect(() => {

    var config = {
      method: 'get',
      url: 'http://localhost:8001/upload/getEvents',
      headers: {}
    };

    axios(config)
      .then(function (response) {

        let upcEvents = []

        for (const key in response.data.upcomingEvents) {
          upcEvents.push({ data: response.data.upcomingEvents[key] })
        }

        setUpcEvents(upcEvents)


      })
      .catch(function (error) {
        console.log(error);
      });

  }, [])

  useEffect(() => {


    let members = []

    const root = createRoot(teamMembersSection.current)
    teamMembers.forEach(member => {

      members.push(
        <>
          <div className="member-container ">
            <div className="member-img" style={{ backgroundImage: `url(/team/${member.img})` }}  ></div>
            <div className="member-info">
              <p className="member-name">{member.name}</p>
              <div className="member-socials">
                <Instagram />
                <Twitter />
                <Facebook />
              </div>
            </div>
          </div>
        </>)
    });

    root.render(members)

  }, [])

  useEffect(() => {


    let events = []

    const root = ReactDOM.createRoot(upcContainer.current)

    upcEvents.map((ele) => {
      events.push(<Eventcard data={ele} />)
    })

    root.render(events)


  }, [upcEvents])




  return (
    <>

      <Navbar />

      <section className='hero-section'>

        <div className='HomeContent'>
          <p>" For Those with <span ref={word} id="word" > </span> as their passion " </p>
        </div>
      </section>

      <section className='Hall_Of_Art'>

        <div className='Hall_Of_Art_Header'>HALL OF ART</div>

        <div className='Hall_Of_Art_img'>
          <div>
            <div className=' hoa-art pic1' style={{ backgroundImage: "url(/img/pic1.png)" }} ></div>
            <div className=' hoa-art pic2' style={{ backgroundImage: "url(/img/pic2.png)" }}></div>
          </div>
          <div>
            <div className=' hoa-art pic3' style={{ backgroundImage: "url(/img/pic3.png)" }}></div>
            <div className=' hoa-art pic4' style={{ backgroundImage: "url(/img/pic4.png)" }}></div>
          </div>
          <div>
            <div className=' hoa-art pic5' style={{ backgroundImage: "url(/img/pic5.png)" }}></div>
            <div>
              <div className=' hoa-art pic6' style={{ backgroundImage: "url(/img/pic6.png)" }}></div>
              <div className=' hoa-art pic7' style={{ backgroundImage: "url(/img/pic7.png)" }}></div>
            </div>
          </div>

        </div>
      </section>

      <section className='upcomingEvents'>
        <div className="upcomingEvents">
          <h2 className='section-name' >UPCOMING EVENTS</h2>
          <div ref={upcContainer} className='upc-events-container'>
          </div>
        </div>
      </section>

      <section className='meet_Team_Section'>

        <p className="section-name " style={{ color: "white" }} > MEET THE TEAM </p>

        <div className="teamMebers" ref={teamMembersSection} ></div>

      </section>
      
      <Footer />
    </>
  )
}

