import React from 'react'
import './About.css'
import profileImg from '../../assets/profile.jpeg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { BsFillFolderFill } from 'react-icons/bs'



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
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>1 year working </small>
            </article>
            <article className='about_card'>
              <FiUsers className='about_icon' />
              <h5>Clients</h5>
              <small>999</small>
            </article>
            <article className='about_card'>
              <BsFillFolderFill className='about_icon' />
              <h5>Projects</h5>
              <small>30+ completed projects  </small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
