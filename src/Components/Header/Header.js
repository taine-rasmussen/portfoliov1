import { ActiveNavContext } from '../../ActiveNavContext'
import { AiOutlineLeft } from 'react-icons/ai'
import React, { useContext } from 'react'
import Socials from './Socials'
import CTA from './CTA'
import './Header.css'

const Header = () => {
  const {
    setActiveNav,
    activeNav
  } = useContext(ActiveNavContext)

  console.log(activeNav)

  return (
    <>
      <header>
        <div
          className="container header_container"
          onMouseEnter={() => { setActiveNav('#') }}
        >
          <h5>Hello I'm</h5>
          <h1>Taine Rasmussen</h1>
          <h5 className="text-light">Fullstack Developer</h5>
          <CTA />
          <Socials />
        </div>
      </header>

      <div className='scroll_container'>
        {activeNav === '#' ? (
          <a href='#about' className="scroll_down">Scroll Down</a>
        ) : (
          <div className='scroll_icons'>
            <AiOutlineLeft className='up_arrow' />
            <AiOutlineLeft className='down_arrow' />
          </div>
        )
        }
      </div >
    </>
  )
}

export default Header


// if mouse enters a div update nav bar state
// will need global state - useContext?