import React from 'react'
import './Header.css'
import CTA from './CTA'
import Socials from './Socials'
import profile from '../../assets/profile.jpeg'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Taine Rasmussen</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <Socials />
        <div className="me">
          <img src={profile} alt='prfole image' />
        </div>
        <a href='#contact' className="scroll_down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
