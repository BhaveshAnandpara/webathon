import React from 'react'
import Eventcard from '../../Components/EventCard/Eventcard'
import axios from 'axios'
import { useEffect, useState, useRef } from 'react'
import * as ReactDOM from 'react-dom/client';
import './Event.css'
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

export default function Event() {

  const [upcEvents, setUpcEvents] = useState([])
  const [pastEvents, setPastEvents] = useState([])

  const upcContainer = useRef()
  const pastEventsContainer = useRef()

  useEffect(() => {

    var config = {
      method: 'get',
      url: 'http://localhost:8001/upload/getEvents',
      headers: {}
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));

        let upcEvents = []
        let pastEvents = []

        for (const key in response.data.upcomingEvents) {
          upcEvents.push({ data: response.data.upcomingEvents[key] })
        }

        for (const key in response.data.pastEvents) {
          pastEvents.push({ data: response.data.pastEvents[key] })
        }

        setUpcEvents(upcEvents)
        setPastEvents(pastEvents)


      })
      .catch(function (error) {
        console.log(error);
      });

  }, [])


  useEffect(() => {


    let events = []
    let pEvents = []

    const root = ReactDOM.createRoot(upcContainer.current)
    const root2 = ReactDOM.createRoot(pastEventsContainer.current)

    upcEvents.map((ele) => {
      events.push(<Eventcard data={ele} />)
    })

    root.render(events)

    pastEvents.map((ele) => {
      pEvents.push(
        <div className="event-row ">
            <span> {ele.data.name} </span>
            <span> {ele.data.mode} </span>
            <span> {ele.data.date} </span>
            <button className="register-btn">View more</button>
        </div>)
    })

    root2.render(pEvents)


  }, [upcEvents, pastEvents])



  return (
    <>
    <Navbar/>
      <section className='events-container' >

        <div className="upcomingEvents">
          <h2 className='section-name' >UPCOMING EVENTS</h2>
          <div ref={upcContainer} className='upc-events-container'>


          </div>
        </div>

        <div className="pastEvents">
          <h2 className="section-name">PAST EVENTS</h2>

          <div className="pastEvents-container" ref={pastEventsContainer}>



          </div>

        </div>



      </section>

    <Footer/>
    </>
  )
}
