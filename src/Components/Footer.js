import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";


const Footer = () => {
  return (
    <footer>
      <h4>Developed by SWS</h4>
      <h4>Copyright &copy; 2026</h4>
      <div className='footerLinks'>
        <a href="https://github.com/sanchitsatpaise" target='_blank' rel="noopener noreferrer"><FaGithub/></a>
        <a href="https://www.linkedin.com/in/sanchit-satpaise/" target='_blank' rel="noopener noreferrer"><FaLinkedin/></a>
        <a href='mailto:sanchitsatpaise4771@gmail.com' target='_blank' rel="noopener noreferrer"><GrMail/></a>
      </div>
    </footer>
  )
}

export default Footer