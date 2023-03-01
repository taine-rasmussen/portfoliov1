import React, { useContext } from 'react'
import './Experience.css'
import { ActiveNavContext } from '../../ActiveNavContext'
import { BsPatchCheckFill } from 'react-icons/bs'


const Experience = () => {
  const {
    setActiveNav
  } = useContext(ActiveNavContext)

  const frontEnd = [
    { language: 'JaveScript' },
    { language: 'Redux' },
    { language: 'React' },
    { language: 'CSS' },
    { language: 'HTML' },
  ]

  const backEnd = [
    { language: 'Ruby' },
    { language: 'Node JS' },
    { language: 'MySQL' },
    { language: 'Postgres' },
    { language: 'MongoDB' }
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
            {frontEnd.map((info, i) => {
              return (
                <article className='experience_details' key={i}>
                  <BsPatchCheckFill className='experience_details-icon' />
                  <div key={info.language}>
                    <h4>{info.language}</h4>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
        <div className='experience_skills'>
          <h3>Backend Development</h3>
          <div className='experience_content'>
            {backEnd.map((info, i) => {
              return (
                <article className='experience_details' key={i}>
                  <BsPatchCheckFill className='experience_details-icon' />
                  <div>
                    <h4>{info.language}</h4>
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
