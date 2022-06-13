import React, { useContext } from 'react'
import './About.css'
import profileImg from '../../assets/profile.jpeg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
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
            <article className='about_card'>
              <BsFillFolderFill className='about_icon' />
              <h5>Projects</h5>
              <small>30+ completed projects  </small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quam enim, facilisis nec tempor sed, placerat sit amet tellus. Nunc malesuada fermentum convallis. Cras dui ex, dapibus vitae dapibus vel.
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
