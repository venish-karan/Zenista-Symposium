import React from 'react'
import video from '../video/zen2.mp4'
import './Aboutz.css'

function AboutZ() {
  return (
    <div id='about' className="about-bg">
      {/* <h1> here is the video</h1>
      <video width="1080" height="720" autoplay="true" loop="true" >
        <source src={video} type="video/mp4"/>
      </video> */}

      <h1>ABOUT ZENISTA</h1>

      <p>Zenista is a nationwide technical fest hosted by the department of Electronics and Communication Engineering of Sri Sairam Engineering College. Every year, Zenista brings pupils from various colleges whose minds are challenged by unique issues from the real world, aiding them in developing as engineers. We are hosting this festival for the 25th time this year, and we have introduced some brand-new, exciting events. Come on, let's experiment, establish, and expand!</p>
    </div>
  )
}

export default AboutZ