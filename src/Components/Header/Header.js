import React, { useContext } from 'react'
import './Header.css'
import CTA from './CTA'
import Socials from './Socials'
import { ActiveNavContext } from '../../ActiveNavContext'

const Header = () => {

  const msg = useContext(ActiveNavContext)


  console.log(msg)
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Taine Rasmussen</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <Socials />

        <a href='#contact' className="scroll_down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header


// if mouse enters a div update nav bar state
// will need global state - useContext?