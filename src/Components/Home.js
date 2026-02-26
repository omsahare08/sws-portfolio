import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import ProfilePhoto from '../images/profile.jpeg';

const Home = () => {
  return (
    <div>
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>SANCHIT SATPAISE</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>

        {/* ── Photo on LEFT ── */}
        <Tilt>
          <img className='Avatar' src={ProfilePhoto} alt="Sanchit Satpaise" />
        </Tilt>

        {/* ── Text on RIGHT ── */}
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>I love the process of transforming raw data into meaningful insights and models 
  that drive better decisions and real-world impact. 
  I want to do work that challenges me as a data professional & work that I can 
  be proud of.<br /><br />
  I am fluent in <b>Python</b> and <b>SQL</b> and have experience with <b>Data Analysis</b>, 
  <b> Data Statistics</b>, and <b>Machine Learning</b>.<br />
  I am currently working on projects involving <b>Data Visualization</b>, 
  <b>Predictive Modeling</b>, and <b>Exploratory Data Analysis</b>.<br /><br />  
          </p>
        </div>

      </div>
    </div>
  )
}

export default Home