import React, { useContext } from 'react'
import { ActiveNavContext } from '../../ActiveNavContext'
import './Contact.css'
import { MdOutlineEmail } from 'react-icons/md'

const Contact = () => {
  const {
    setActiveNav
  } = useContext(ActiveNavContext)

  return (
    <section
      id='contact'
      onMouseEnter={() => { setActiveNav('contact') }}
    >
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>taine.rasmussen@gmail.com</h5>
            <a href='taine.rasmussen@gmail.com'>Send a message</a>
          </article>
        </div>

      </div>
    </section>
  )
}

export default Contact
