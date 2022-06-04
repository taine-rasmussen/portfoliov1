import React, { useContext } from 'react'
import { ActiveNavContext } from '../../ActiveNavContext'
import './Contact.css'

const Contact = () => {
  const {
    setActiveNav
  } = useContext(ActiveNavContext)

  return (
    <section
      id='contact'
      onMouseEnter={() => { setActiveNav('contact') }}
    >
      Contact
    </section>
  )
}

export default Contact
