import React from 'react';
import pic1 from '../../img/pic1.png';
import './Home.css';


export default function Home() {
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








      </section>

    </section>
  )
}
