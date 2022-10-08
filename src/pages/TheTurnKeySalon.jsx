import React from 'react'
import './EventsPage.css'
import theTurnkeySalon from '../images/the turnkey salon.png'

import Particle2 from '../components/Particle';
import Nav from './EventsNav';

const TheTurnKeySalon = () => {
  return (
    <>
    <Nav/>
        <Particle2/>
      <div id="flex">
          <img src={theTurnkeySalon} alt="Image of perfume" height={460} class="image-dsktp" />
          <img src={theTurnkeySalon} alt="Image of perfume" style={{display: 'none'}} class="image-mobile" />
      

          <div class="flex2"> 
          {/* <p class="P1">PERFUME</p>
      
          <p class="P2">Gabrielle Essence Eau De Parfum</p> 
          
          <p class="P3">A floral, solar and voluptuous interpretation composed by Olivier Polge, 
              Perfumer-Creator for the House of CHANEL.</p>
          
          <div class="price">
              <p class="price1">$149.99</p>
              <p class="price2"><s>$169.99</s></p>
          </div> */}

        <p class="P2">THE TURNKEY SALON</p>

        <p class="P3">
        DAY 1 [VIRTUAL]
        <ol>
          <li>Qualification Round : 
            <ul>
              <li>Mode: Online</li>
              <li>Website: Quizizz</li>
            </ul>
          </li>
        </ol>
        DAY 2 [ON-CAMPUS]
        <ol>
          <li>Round 1: Pick your Poison!☠
            <ul>
              <li>Teams have to pick a Category; 5 Questions under each one of them</li>
            </ul>
          </li>
          <li>Round 2: Lightning McQueen⚡
            <ul>
              <li>Mode : Rapid Fire</li>
            </ul>
          </li>
          <li>Round 3: Ace in the Hole! �
            <ul>
              <li>Basis : Clues through trivia & images</li>
            </ul>
          </li>
        </ol>
        </p>
          
          <button type="button"><p><a href="https://forms.gle/RJTHs8rAkejbUyFA6" target="_blank">Register</a></p> </button>
          
          </div>
      </div>
    </>
  )
}

export default TheTurnKeySalon