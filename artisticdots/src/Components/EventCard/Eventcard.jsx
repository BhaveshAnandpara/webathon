import React from 'react'
import '../EventCard/EventCard.css'

export default function Eventcard(props) {

    const eventInfo = props.data.data

    const imgname = eventInfo.imgPath.split('\\')[4]

    let style = {}

    if(eventInfo.imgPath){

        style = {
            backgroundImage: `url(/uploads/${imgname})`,
        }
        
    }
    return (
        <>
            <div className="event-card-container border">

                <div className="event-img border" style={style}  ></div>

                <div className="event-info ">

                    <p className="event-name">{eventInfo.name}</p>
                    <p className="event-desc">{eventInfo.desc}</p>
                    <button className="register-btn">Register</button>

                </div>

            </div>
        </>
    )
}
