import React from 'react'
import './EventsPage.css'
import about_bg from '../images/about-bg.jpg'

import Particle2 from '../components/Particle';

const TheGreatWhites = () => {
  return (
    <>
        <Particle2/>
      <div id="flex">
          <img src={about_bg} alt="Image of perfume" height={460} class="image-dsktp" />
          <img src={about_bg} alt="Image of perfume" style={{display: 'none'}} class="image-mobile" />
      

          <div class="flex2"> 
          <p class="P1">PERFUME</p>
      
          <p class="P2">Gabrielle Essence Eau De Parfum</p> 
          
          <p class="P3">A floral, solar and voluptuous interpretation composed by Olivier Polge, 
              Perfumer-Creator for the House of CHANEL.</p>
          
          <div class="price">
              <p class="price1">$149.99</p>
              <p class="price2"><s>$169.99</s></p>
          </div>
          
          <button type="button"> <img src="./icon-cart.svg" alt="" /><p>Register</p> </button> 
          </div>
      </div>
    </>
  )
}

export default TheGreatWhites