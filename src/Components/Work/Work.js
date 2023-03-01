import React, { useContext } from 'react'
import { ActiveNavContext } from '../../ActiveNavContext'
import './Work.css'

const Work = () => {
  const {
    setActiveNav
  } = useContext(ActiveNavContext)

  return (
    <section
      id='work'
      onMouseEnter={() => { setActiveNav('work') }}
    >

    </section>
  )
}

export default Work
