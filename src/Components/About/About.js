import { ParallaxProvider, useParallax, Parallax } from 'react-scroll-parallax'
import { ActiveNavContext } from '../../ActiveNavContext'

import profileImg from '../../assets/profile.jpeg'
import { BsFillFolderFill } from 'react-icons/bs'
import React, { useContext, useRef } from 'react'
import { FaAward } from 'react-icons/fa'
import './About.css'



const About = () => {
  const {
    setActiveNav
  } = useContext(ActiveNavContext);

  // const parallax = useParallax({
  //   speed: -10,
  // });
  // const { ref } = useParallax({ speed: 10 });


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
        <Parallax
          translateY={[-10, 10]}
          speed={5}
        >
          <div className='about_content'>
            <div className='about_cards'>
              <article className='about_card'>
                <FaAward className='about_icon' />
                <h5>Experience</h5>
                <small>1 year working </small>
              </article>
              <a href='#work' className='about_card_click'>
                <article className='about_card'>
                  <BsFillFolderFill className='about_icon' />
                  <h5>Projects</h5>
                  <small>Take a look at some recent work</small>
                </article>
              </a>
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
        </Parallax>
      </div>
    </section >
  )
}

export default About
