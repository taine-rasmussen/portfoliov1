import React, { useContext, useRef } from 'react'
import { ActiveNavContext } from '../../ActiveNavContext'
import './Contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsLinkedin } from 'react-icons/bs'
import emailjs from '@emailjs/browser';


const Contact = () => {
  const {
    setActiveNav
  } = useContext(ActiveNavContext)

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_vfkw5ts', 'template_bm3v122', form.current, 'user_07A1Lkmj3NdwJpVweNfNQ')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

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
            <MdOutlineEmail className='contact_icon' />
            <h4>Email</h4>
            <h5>taine.rasmussen@gmail.com</h5>
            <a href='mailto:taine.rasmussen@gmail.com' target='_blank'>Send a message</a>
          </article>
          <article className='contact_option'>
            <BsLinkedin className='contact_icon' />
            <h4>Linkedin</h4>
            <h5>Taine Rasmussen</h5>
            <a href='https://www.linkedin.com/in/taine-rasmussen-a66a86184/' target='_blank'>Visit profile</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            placeholder='Your full name'
          />
          <input
            type="email"
            name="user_email"
            placeholder='Your email here'
          />
          <textarea
            name="message"
            rows='7'
            placeholder='Your message'
          />
          <input
            className='btn btn-primary'
            type="submit"
            value="Send"
          />
        </form>
      </div>
    </section>
  )
}

export default Contact
