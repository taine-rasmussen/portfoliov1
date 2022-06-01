import React from 'react'
import './About.css'

const About = () => {
   return (
      <section id='about'>
         <h5>Get to know</h5>
         <h2>About me</h2>

         <div className='container about_container'>
            <div className='about_me'>
               <div className='about_me_image'>
                  <img src='src/assets/profile.jpeg' alt='Profile Image' />
               </div>

            </div>
            <div className='about_content'>

            </div>

         </div>
      </section>
   )
}

export default About
