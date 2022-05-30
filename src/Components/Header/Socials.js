import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

const Socials = () => {
   return (
      <div className="header_socials">
         <a href='https://github.com/taine-rasmussen' target='_blank'><BsGithub /></a>
         <a href='https://www.linkedin.com/in/taine-rasmussen-a66a86184/' target='_blank'><BsLinkedin /></a>
      </div>
   )
}

export default Socials
