import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Social = () => {
  return (
    <div className='social flex flex-col justify-evenly '>
      <h2 className='text-2xl' >Profiles</h2>
      <div className='social-btns flex justify-evenly'>
        <a href='http://www.linkedin.com/in/syeda-maham-amjad-4467b1295' target='_blank'>
        <FaLinkedinIn  className='md:text-7xl lg:text-7xl text-4xl hover:scale-110 transition-all duration-300'/></a>
        <a href="https://github.com/maham719">
        <FaGithub  className='md:text-7xl lg:text-7xl text-4xl hover:scale-110 transition-all duration-300'/>
        </a>
      </div>
    </div>
  )
}

export default Social
