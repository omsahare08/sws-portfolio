import React from 'react';
import Skills from './Skills';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react";
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      {/* ── About ── */}
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Sanchit Satpaise</b> and I am from Nagpur, India.
            I'm a <b>Data Analytics &amp; Data Science Learner</b> and a Graduated <b>BTech in Computer Technology</b>.<br /><br />
            I have done an internship as a <b>data analyst</b> at Aivariant.
            I enjoy working with data to uncover patterns, build insights, and create data-driven solutions — you can check out some of my work in the projects section.<br /><br />
            I am <b>open</b> to new collaborations or opportunities where I can contribute and grow. Feel free to connect with me, links are in the footer.<br />
            Apart from data work, I enjoy vlogging. You can check out some of my videos on my YouTube channel.{' '}
            <a href="https://youtube.com/@sanchit7paisevlogs4?si=yI_eNlqx_mrWYNmH" target='_blank' rel='noreferrer'>Youtube</a>
          </p>
        </div>

        <div>
          <Tilt>
            <Lottie className="illustration" animationData={Coder} loop={true} />
          </Tilt>
        </div>
      </div>

      {/* ── Skills ── */}
      <h1 className='SkillsHeading'>Professional <b>Skillset</b></h1>
      <div className='skills'>
        <Skills skill='Python' />
        <Skills skill='Pandas' />
        <Skills skill='NumPy' />
        <Skills skill='Matplotlib' />
        <Skills skill='Seaborn' />
        <Skills skill='Plotly' />
        <Skills skill='ScikitLearn' />
        <Skills skill='TensorFlow' />
        <Skills skill='NLTK' />
        <Skills skill='Streamlit' />
        <Skills skill='PostgreSQL' />
        <Skills skill='PowerBI' />
        <Skills skill='MSExcel' />
        <Skills skill='Jupyter' />
        <Skills skill='Git' />
        <Skills skill='GitHub' />
        <Skills skill='AWS' />
        <Skills skill='GCP' />
        <Skills skill='Azure' />
      </div>
    </>
  );
};

export default About;