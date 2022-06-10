import React, { useContext } from 'react'
import './Experience.css'
import { ActiveNavContext } from '../../ActiveNavContext'
import { BsPatchCheckFill } from 'react-icons/bs'


const Experience = () => {
  const {
    setActiveNav
  } = useContext(ActiveNavContext)

  const frontEnd = [
    { language: 'JaveScript', experience: 'Intermidate' },
    { language: 'React', experience: 'Intermidate' },
    { language: 'CSS', experience: 'Experienced' },
    { language: 'HTML', experience: 'Experienced' },
  ]

  const backEnd = [
    { language: 'Ruby', experience: 'Basic' },
    { language: 'Node JS', experience: 'Intermidate' },
    { language: 'MySQL', experience: 'Basic' },
  ]


  return (
    <section
      id='experience'
      onMouseEnter={() => { setActiveNav('experience') }}
    >
      <h5>What skills I have</h5>
      <h2>My Experience</h2>
      <div className='container experience_container'>
        <div className='experience_skills'>
          <h3>Frontend Development</h3>
          <div className='experience_content'>
            {frontEnd.map((info) => {
              return (
                <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon' />
                  <div>
                    <h4>{info.language}</h4>
                    <small className='text-light'>{info.experience}</small>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
        <div className='experience_skills'>
          <h3>Backend Development</h3>
          <div className='experience_content'>
            {backEnd.map((info) => {
              return (
                <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon' />
                  <div>
                    <h4>{info.language}</h4>
                    <small className='text-light'>{info.experience}</small>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
