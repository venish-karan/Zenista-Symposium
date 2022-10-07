import React from 'react'
import Eventbox from './Eventbox'
import fimgae1 from'../images/sh7.svg'
import fimgae2 from'../images/qu.svg'
import fimgae3 from'../images/ha.svg'
import fimgae4 from'../images/de.svg'
import fimgae5 from'../images/po.svg'




function Events() {
  return (
    <div id = 'events'>
        <h1>TECHNICAL EVENTS</h1>
        <div className='a-container'>
            {/* <Eventbox image = {fimgae1} title = "THE GREAT WHITES" text = "Project presentation" r1 = "Three members in a team"  r2 = "Preliminary selection round online" r3 = "Shortlisted teams will attend final round" r4 = "7 minutes for marketing your product" r5 = "3 minutes for Q&A" /> */}
            <Eventbox image = {fimgae1} title = "THE GREAT WHITES" text = "Project presentation" />
            <Eventbox image = {fimgae2} title = "THE TURNKEY SALON" text = "Technical quiz"/> 
            {/* <Eventbox image = {fimgae3} title = "HACKTHON" text = "some content"/> */}
            <Eventbox image = {fimgae4} title = "M.O.O.P.O.I.N.T " text = "Technical Debate"/>
            <Eventbox image = {fimgae5} title = "POTPOURRI" text = "Minute to Win it"/>
        </div>
        {/* <div className='a-container'>
            
        </div> */}
        <h1>NON-TECHNICAL EVENTS</h1>
        <div className='a-container'>
            <Eventbox image = {fimgae4} title = "HAMMERED!" text = "Cricket Auction"/>
            {/* <Eventbox image = {fimgae5} title = "POT POURRI" text = "some content"/> */}
        </div>
    </div>
  )
}

export default Events;