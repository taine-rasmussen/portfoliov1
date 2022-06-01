import React from 'react'
import './About.css'
import profileImg from '../../assets/profile.jpeg'
import { FaAward } from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me_image'>
            <img src={profileImg} alt='Profile Image' />
          </div>

        </div>
        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <FaAward />
              <h5>experience</h5>
              <small>1 year working </small>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About
