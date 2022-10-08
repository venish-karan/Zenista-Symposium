import React from 'react'
import './EventsPage.css'
import thegreatwhites from '../images/THE GREAT WHITES.png'

import Particle2 from '../components/Particle';
import Nav from './EventsNav';

const TheGreatWhites = () => {
  return (
    <>
    <Nav/>
        <Particle2/>
      <div id="flex">
          <img src={thegreatwhites} alt="Image of perfume" height={460} class="image-dsktp" />
          <img src={thegreatwhites} alt="Image of perfume" style={{display: 'none'}} class="image-mobile" />
      

          <div class="flex2"> 
          {/* <p class="P1">PERFUME</p>
      
          <p class="P2">Gabrielle Essence Eau De Parfum</p> 
          
          <p class="P3">A floral, solar and voluptuous interpretation composed by Olivier Polge, 
              Perfumer-Creator for the House of CHANEL.</p>
          
          <div class="price">
              <p class="price1">$149.99</p>
              <p class="price2"><s>$169.99</s></p>
          </div> */}
          
          <p class="P2">The Great Whites</p>
          
          <p class="P3">
            <ol>
            <li>A team should consist 3 members</li>
            <li>2 Rounds will be conducted to shortlist the teams</li>
            <li>The first round will be conducted in the zoom meeting</li>
            <li>Shortlisted teams will attend the final round (Offline) at the given venue</li>
            <li>7 minutes for marketing your product 3 minutes for QnA</li>
            
            </ol>
          </p>

          <button type="button"><p><a href="https://forms.gle/CRiAmoK2kmvnCT427" target="_blank">Register</a></p> </button> 
          </div>
      </div>
    </>
  )
}

export default TheGreatWhites