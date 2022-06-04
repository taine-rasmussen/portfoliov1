import React, { useContext } from 'react'
import './Experience.css'
import { ActiveNavContext } from '../../ActiveNavContext'


const Experience = () => {
  const {
    setActiveNav
  } = useContext(ActiveNavContext)
  return (
    <section
      id='experience'
      onMouseEnter={() => { setActiveNav('experience') }}
    >
      <h5>What skills I have</h5>
      <h2>My Experience</h2>

      <div className='container experince_container'>
        <div className='experience_frontend'>
          <h3>Frontend Development</h3>
          <div className='experience_content'>

          </div>
        </div>
        <div className='experience_backend'>
          <h3>Backend Development</h3>
          <div className='experience_content'>

          </div>
        </div>
      </div>

      <div></div>
    </section>
  )
}

export default Experience
