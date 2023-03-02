import { ActiveNavContext } from '../../ActiveNavContext'
import { AiOutlineLeft } from 'react-icons/ai'
import { useContext, useMemo } from 'react'
import Socials from './Socials'
import CTA from './CTA'
import './Header.css'

const Header = () => {
  const {
    setActiveNav,
    activeNav
  } = useContext(ActiveNavContext)

  const allNavOptions = ['#', 'about', 'work', 'contact']

  const previousOption = useMemo(
    () => {
      const currentIndex = allNavOptions.indexOf(activeNav)
      return allNavOptions[currentIndex - 1]

    }, [activeNav]
  );

  const nextOption = useMemo(
    () => {
      const currentIndex = allNavOptions.indexOf(activeNav)
      return allNavOptions[currentIndex + 1]

    }, [activeNav]
  );

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
          <a href='#about'>
            <AiOutlineLeft className='down_arrow' />
          </a>
        ) : (
          <div className='scroll_icons'>
            <a href={previousOption}>
              <AiOutlineLeft className='up_arrow' />
            </a>
            <a href={nextOption}>
              <AiOutlineLeft className='down_arrow' />
            </a>
          </div>
        )
        }
      </div >
    </>
  )
}

export default Header
