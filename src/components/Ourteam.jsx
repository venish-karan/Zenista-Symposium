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
import logeswari from '../images/persons/logeswari.png'
import chitra from '../images/persons/chitra.png'
import janani from '../images/persons/janani.jpg'
import thanush from '../images/persons/thanush.jpg'
import varunapriyan from '../images/persons/varunapriyan.jpg'
import sairam_ceo from '../images/persons/sairam_ceo.jpg'
import sriram from '../images/persons/sriram.jpg'




function Ourteam() {
  return (
    <div id="ourteam" className='profilels'>
        <h1>KEY PERSONS</h1>
        <div className='pro-container'>
        <div className='pro-img-4'>
                
                {/* text = "contact details " */}
                <Profilebox image = {sairam_ceo} title = "Sai Prakash Leo Muthu (CEO)"/>
                <Profilebox image = {principal} title = "Dr. K Porkumaran (Principal)" />
                <Profilebox image = {hod} title = "Dr. J Raja (HOD)"/>
                <Profilebox image = {chitra} title = "Chitra R (Conveners)" />
                <Profilebox image = {logeswari} title = "Logeswari N (Conveners)" />
            </div>
        </div>
        
        <div className='pro-container'>
            <div className='pro-head'>
                <h2>ORGANIZERS</h2>
            </div>
            <div className='pro-img-4'>
                <Profilebox image = {nirmal} title = "Nirmal Raja K L" />
                <Profilebox image = {Shashank} title = "Sashaank S" />
                <Profilebox image = {nishanth} title = "Nishanth N" />
                <Profilebox image = {gopal} title = "Gopalram S" />
            </div>
            <div className='pro-img-4'>
                <Profilebox image = {ASRAF} title = "Asraf S" />
                <Profilebox image = {janani} title = "Janani Priyadharshini S" />
                <Profilebox image = {thanush} title = "Thanush S" />
                <Profilebox image = {varunapriyan} title = "Varunapriyan K" />
            </div>
        </div>
        <div className='pro-container'>
            <div className='pro-head'>
                <h2>BROCHURE & EVENT POSTERS</h2>
            </div>
            <div className='pro-img-3'>
                <Profilebox image = {Tamil_Amudhan} title = "Tamil Amudhan" text = "contact details "/>
                <Profilebox image = {nitin} title = "Sri Nithin" text = "contact details "/>
                <Profilebox image = {GAUTHAM_S} title = "Gaudham Shankar" text = "contact details "/>
            </div>
        </div>

        <div className='pro-container'>
            <div className='pro-head'>
                <h2>WEB DEVELOPERS</h2>
            </div>
            <div className='pro-img'>
                <Profilebox image = {sriram} title = "SRIRAM A" text = "contact details "/>
                <Profilebox image = {venish} title = "VENISH P" text = "contact details "/>
                <Profilebox image = {sarath} title = "SHARATH KUMAR R G" text = "contact details "/>
            </div>
        </div>
       
    </div>
  )
}

export default Ourteam