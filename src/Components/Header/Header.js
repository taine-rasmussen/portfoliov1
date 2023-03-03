import { ActiveNavContext } from '../../ActiveNavContext'
import { useContext } from 'react'
import Socials from './Socials'
import CTA from './CTA'
import './Header.css'

const Header = () => {
  const {
    setActiveNav
  } = useContext(ActiveNavContext)

  return (
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
        <a href='#about' className="scroll_down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header

