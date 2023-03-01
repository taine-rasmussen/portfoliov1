import { ActiveNavContext } from '../../ActiveNavContext'
import { BsPatchCheckFill } from 'react-icons/bs'
import React, { useContext } from 'react'

import Experience from '../Experience/Experience'

import './Work.css'

const Work = () => {
  const {
    setActiveNav
  } = useContext(ActiveNavContext)

  const skills = [
    { language: 'JaveScript' },
    { language: 'Redux' },
    { language: 'MaterialUi' },
    { language: 'React' },
    { language: 'CSS' },
    { language: 'HTML' },
    { language: 'Rails' },
    { language: 'Node.js' },
    { language: 'SQL' },
    { language: 'Postgres' },
    { language: 'MongoDB' },
    { language: 'Express' },
  ]

  return (
    <section
      id='work'
      onMouseEnter={() => { setActiveNav('work') }}
      className='work_container'
    >
      <section className='wrapper_container'>
        <h5>What skills I have</h5>
        <h2>My Experience</h2>
        <div>
          {skills.map((skill) => (
            <article className='work_details' key={skill.language}>
              <h4>{skill.language}</h4>
              <BsPatchCheckFill className='work_details-icon' />
            </article>
          ))}
        </div>
      </section>



      {/* <Experience /> */}

      <section className='wrapper_container'>
        <h5>My recent work</h5>
        <h2>Portfolio</h2>
        <div>
          Projects go here
        </div>
      </section>
    </section>
  )
}

export default Work
