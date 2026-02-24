import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
  Hi, my name is <b>Sanchit Satpaise</b> and I am from Nagpur, India.
  I'm a <b>Data Scientists & Data Analysts</b> and a Graduated  <b>BTech in Computer Technology</b>. <br/><br/>
  I have done an internship as a <b>data analyst</b> at GoalFi which is a fintech startup.
  I enjoy working with data to uncover patterns, build insights, and create data-driven solutions, you can check out some of my work in the projects section.<br/><br/>
  I am <b>open</b> to new collaborations or opportunities where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/>
  Apart from data work I enjoy photography, you can check out some of my shots here <a href="https://www.instagram.com/devansh_sahni_/?hl=en" target='_blank'>Instagram.</a>
</p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='C++' />
        <Skills skill='Postman' />
        <Skills skill='Figma' />
        <Skills skill='Vercel' />
        <Skills skill='Npm' />
        <Skills skill='Bootstrap'/>
        
      </div>
    </>
  )
}

export default About