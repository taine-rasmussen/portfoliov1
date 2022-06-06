import React from 'react'
import './Portfolio.css'
import IMG from '../../assets/portfolio1.jpg'

// TODO:
// Create a data object to store portfolio info in
// Refactor component to use map on data 

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
          <div className='portfolio_item-cta'>
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
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={IMG} alt='profile' />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio_item-cta'>
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
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={IMG} alt='profile' />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio_item-cta'>
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
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={IMG} alt='profile' />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio_item-cta'>
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
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={IMG} alt='profile' />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio_item-cta'>
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
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={IMG} alt='profile' />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio_item-cta'>
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
          </div>
        </article>


      </div>

    </section>
  )
}

export default Portfolio
