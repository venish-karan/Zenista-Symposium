import React from 'react'
import './EventsPage.css'
import POTPOURRI from '../images/POTPOURRI.png'

import Particle2 from '../components/Particle';
import Nav from './EventsNav';

const PotPourri = () => {
  return (
    <>
    <Nav/>
        <Particle2/>
      <div id="flex">
          <img src={POTPOURRI} alt="Image of perfume" height={460} class="image-dsktp" />
          <img src={POTPOURRI} alt="Image of perfume" style={{display: 'none'}} class="image-mobile" />
      

          <div class="flex2"> 
          {/* <p class="P1">PERFUME</p>
      
          <p class="P2">Gabrielle Essence Eau De Parfum</p> 
          
          <p class="P3">A floral, solar and voluptuous interpretation composed by Olivier Polge, 
              Perfumer-Creator for the House of CHANEL.</p>
          
          <div class="price">
              <p class="price1">$149.99</p>
              <p class="price2"><s>$169.99</s></p>
          </div> */}

          <p class="P2">POTPOURRI</p>

          {/* <p class="P3">
          DAY 1 [VIRTUAL]
          <ol>
            Qualification Round : TECHNICAL QUIZ
            <li>Mode: Online</li>
            <li>Website: Quizizz</li>
          </ol>
          DAY 2 [ON CAMPUS]
          <ol>
            <li>Round 1: Component Dumb charades
              <ul>
                <li>A Technical term will be given ,one person has to give clues and the other has to find it out.</li>
              </ul>
            </li>
            <li>Round 2: TechPic
              <ul>
                <li>Technical pick and talk, the team has to talk regarding the displayed picture</li>
              </ul>
            </li>
            <li>Round 3: Circuit breaker
              <ul>
                <li>The components will be provided , the team has to build the circuit which will be displayed.</li>
              </ul>
            </li>
          </ol>
          </p> */}

          
          <p class="P3">
          Round 1
          <ol>
            <li>Mode: Virtual</li>
            <li>Venue : ZOOM</li>
            <li>Event date : 29.10.2022</li>
            <li>reporting time : 10.45 am (29.10.2022)</li>
            <li>Event time: 11:00 AM - 12:00 AM</li>
          </ol>

          Round 2

          <ol>
            <li>Mode: ON CAMPUS</li> 
            <li>Venue : Beta Hall</li>
            <li>Event date : 04.11.2022</li>
            <li>reporting time : 9.00 am (04.11.2022)</li>
            <li>Event time: TBD</li>
          </ol>
          
          </p>
          
          <button type="button"><p><a href="https://forms.gle/J83LWXgYrmsrcuVn6" target="_blank">Register</a></p></button> 
          </div>
      </div>
    </>
  )
}

export default PotPourri