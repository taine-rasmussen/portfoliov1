import React, { useContext } from 'react'
import './About.css'
import profileImg from '../../assets/profile.jpeg'
import { FaAward } from 'react-icons/fa'
import { BsFillFolderFill } from 'react-icons/bs'
import { ActiveNavContext } from '../../ActiveNavContext'



const About = () => {
  const {
    setActiveNav
  } = useContext(ActiveNavContext)


  return (
    <section
      id='about'
      onMouseEnter={() => { setActiveNav('about') }}
    >
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className='container about_container'>
        <div className='about-me'>
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
            <article
              className='about_card hover'
            >
              <a
                href="https://github.com/taine-rasmussen"
                target="_blank"
              >
                <BsFillFolderFill className='about_icon' />
                <h5>Projects</h5>
                <small>Take a look at some recent work</small>
              </a>
            </article>
          </div>
          <p>
            As a passionate Full Stack developer with a drive for learning and improving, I possess a strong foundation of skills acquired through completing a web development bootcamp and gaining professional experience while working for a SaaS company in New Zealand over the past 14 months. Recently relocating to London, I am eager to further expand my skill set and take the next step in my career through new opportunities.
          </p>
          <a
            className='btn btn-primary'
            href='#contact'
          >
            Lets talk
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
