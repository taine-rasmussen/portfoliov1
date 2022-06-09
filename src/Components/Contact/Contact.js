import React, { useContext } from 'react'
import { ActiveNavContext } from '../../ActiveNavContext'
import './Contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsLinkedin } from 'react-icons/bs'


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
            <a href='mailto:taine.rasmussen@gmail.com'>Send a message</a>
          </article>
          <article className='contact_option'>
            <BsLinkedin />
            <h4>Linkedin</h4>
            <h5>Taine Rasmussen</h5>
            <a href='https://www.linkedin.com/in/taine-rasmussen-a66a86184/'>Send a message</a>
          </article>
        </div>
        <form
          action=''
        >


        </form>
      </div>
    </section>
  )
}

export default Contact
