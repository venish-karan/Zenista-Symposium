import React from 'react'
import Profilebox from './Profilebox'
import fimgae1 from'../images/pro.jpg'
import principal from '../images/persons/principal.jpg'
import hod from '../images/persons/hod.jpg'
import venish from '../images/persons/venish.jpg'
import sarath from '../images/persons/SHARATH KUMAR RG.JPG'
import Shashank from '../images/persons/Shashank.jpg'
import nishanth from '../images/persons/nishanth.jpg'
import nirmal from '../images/persons/NIRMAL RAJA K L.jpeg'
import gopal from '../images/persons/gopal.jpeg'
import ASRAF from '../images/persons/ASRAF S.JPG'
import Tamil_Amudhan from  '../images/persons/Tamil Amudhan.jpg'
import nitin from  '../images/persons/nitin.png'
import GAUTHAM_S from  '../images/persons/GAUTHAM S.JPG'



function Ourteam() {
  return (
    <div id="ourteam" className='profilels'>
        <h1>KEY PERSONS</h1>
        <div className='pro-container'>
        <div className='pro-img-4'>
                <Profilebox image = {fimgae1} title = "PRINCIPAL" text = "contact details "/>
                <Profilebox image = {principal} title = "PRINCIPAL" text = "contact details "/>
                <Profilebox image = {hod} title = "HOD" text = "contact details "/>
                <Profilebox image = {fimgae1} title = "PRINCIPAL" text = "contact details "/>
                <Profilebox image = {fimgae1} title = "PRINCIPAL" text = "contact details "/>
            </div>
        </div>
        
        <div className='pro-container'>
            <div className='pro-head'>
                <h2>ORGANIZERS</h2>
            </div>
            <div className='pro-img-4'>
                <Profilebox image = {nirmal} title = "PRINCIPAL" text = "contact details "/>
                <Profilebox image = {Shashank} title = "PRINCIPAL" text = "contact details "/>
                <Profilebox image = {nishanth} title = "PRINCIPAL" text = "contact details "/>
                <Profilebox image = {gopal} title = "PRINCIPAL" text = "contact details "/>
            </div>
            <div className='pro-img-4'>
                <Profilebox image = {ASRAF} title = "PRINCIPAL" text = "contact details "/>
                <Profilebox image = {Tamil_Amudhan} title = "PRINCIPAL" text = "contact details "/>
                <Profilebox image = {nitin} title = "PRINCIPAL" text = "contact details "/>
                <Profilebox image = {GAUTHAM_S} title = "PRINCIPAL" text = "contact details "/>
            </div>
        </div>
        <div className='pro-container'>
            <div className='pro-head'>
                <h2>Technical Support</h2>
            </div>
            <div className='pro-img-3'>
                <Profilebox image = {fimgae1} title = "PRINCIPAL" text = "contact details "/>
                <Profilebox image = {fimgae1} title = "PRINCIPAL" text = "contact details "/>
                <Profilebox image = {fimgae1} title = "PRINCIPAL" text = "contact details "/>
            </div>
        </div>

        <div className='pro-container'>
            <div className='pro-head'>
                <h2>WEB DEVELOPERS</h2>
            </div>
            <div className='pro-img'>
                <Profilebox image = {fimgae1} title = "SHRI RAM" text = "contact details "/>
                <Profilebox image = {venish} title = "VENISH" text = "contact details "/>
                <Profilebox image = {sarath} title = "SHARATH KUMAR RG" text = "contact details "/>
            </div>
        </div>
       
    </div>
  )
}

export default Ourteam