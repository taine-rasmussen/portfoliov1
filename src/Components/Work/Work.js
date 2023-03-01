import { ActiveNavContext } from '../../ActiveNavContext'
import { BsPatchCheckFill } from 'react-icons/bs'
import { useContext } from 'react'
import ProjectCard from './ProjectCard'

import wordleImg1 from '../../assets/wordle1.png'
import wordleImg3 from '../../assets/wordle3.png'
import socialImg1 from '../../assets/social1.png'
import socialImg3 from '../../assets/social3.png'
import './Work.css'

const Work = () => {
  const {
    setActiveNav
  } = useContext(ActiveNavContext)

  const frontEnd = [
    { language: 'JaveScript' },
    { language: 'Redux' },
    { language: 'MaterialUi' },
    { language: 'React' },
    { language: 'CSS' },
    { language: 'HTML' },
  ]

  const backEnd = [
    { language: 'Rails' },
    { language: 'Node.js' },
    { language: 'SQL' },
    { language: 'Postgres' },
    { language: 'MongoDB' },
    { language: 'Express' },
  ];

  const data = [
    {
      id: 1,
      images: [socialImg1, socialImg3],
      title: 'Social media app',
      github: 'https://github.com/taine-rasmussen/social-app',
      demo: 'http://github.com/taine-rasmussen'
    },
    {
      id: 2,
      images: [wordleImg3, wordleImg1],
      title: 'Wordle clone',
      github: 'https://github.com/taine-rasmussen/not-wordle',
      demo: 'http://github.com/taine-rasmussen'
    },
  ]

  return (
    <section
      id='work'
      onMouseEnter={() => { setActiveNav('work') }}
      className='work_container'
    >
      <section className='wrapper_container skills_contianer'>
        <h5>What skills I have</h5>
        <h2>My Experience</h2>
        <div className='skills_wrapper'>
          <div className='skills_container'>
            <h3>Frontend Development</h3>
            <div className='skills_content'>
              {frontEnd.map((info, i) => {
                return (
                  <article className='skills_details' key={i}>
                    <BsPatchCheckFill className='skills_details-icon' />
                    <div>
                      <h4>{info.language}</h4>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
          <div className='skills_container'>
            <h3>Backend Development</h3>
            <div className='skills_content'>
              {backEnd.map((info, i) => {
                return (
                  <article className='skills_details' key={i}>
                    <BsPatchCheckFill className='skills_details-icon' />
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

      <section className='wrapper_container'>
        <h5>My recent work</h5>
        <h2>Portfolio</h2>
        <div className='skills_wrapper'>
          {data.map((proj) => {
            return (
              <ProjectCard proj={proj} />
            )
          })}

        </div>
      </section>
    </section>
  )
}

export default Work
