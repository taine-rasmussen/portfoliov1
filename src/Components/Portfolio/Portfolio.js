import React from 'react'
import './Portfolio.css'
import IMG from '../../assets/profile.jpeg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={IMG} alt='profile' />
          </div>
          <h3>This is a portfolio item title</h3>
          <a
            href='http://github.com'
            className='btn'
            target='_blank'
          >Github</a>
          <a
            href='http://github.com/taine-rasmussen'
            className='btn btn-primary'
            target='_blank'
          >Live Demo</a>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={IMG} alt='profile' />
          </div>
          <h3>This is a portfolio item title</h3>
          <a
            href='http://github.com'
            className='btn'
            target='_blank'
          >Github</a>
          <a
            href='http://github.com/taine-rasmussen'
            className='btn btn-primary'
            target='_blank'
          >Live Demo</a>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={IMG} alt='profile' />
          </div>
          <h3>This is a portfolio item title</h3>
          <a
            href='http://github.com'
            className='btn'
            target='_blank'
          >Github</a>
          <a
            href='http://github.com/taine-rasmussen'
            className='btn btn-primary'
            target='_blank'
          >Live Demo</a>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={IMG} alt='profile' />
          </div>
          <h3>This is a portfolio item title</h3>
          <a
            href='http://github.com'
            className='btn'
            target='_blank'
          >Github</a>
          <a
            href='http://github.com/taine-rasmussen'
            className='btn btn-primary'
            target='_blank'
          >Live Demo</a>
        </article>


      </div>

    </section>
  )
}

export default Portfolio
