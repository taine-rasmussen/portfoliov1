import React, { useContext } from 'react'
import './Portfolio.css'
import IMG from '../../assets/portfolio1.jpg'
import IMG1 from '../../assets/portfolio2.jpg'
import { ActiveNavContext } from '../../ActiveNavContext'
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Portfolio = () => {
  const {
    setActiveNav
  } = useContext(ActiveNavContext)

  const data = [
    {
      id: 1,
      images: [IMG, IMG1],
      title: 'Example project name',
      github: 'http://github.com',
      demo: 'http://github.com/taine-rasmussen'
    },
    {
      id: 2,
      images: [IMG, IMG1],
      title: 'Example project name',
      github: 'http://github.com',
      demo: 'http://github.com/taine-rasmussen'
    },
    {
      id: 3,
      images: [IMG, IMG1],
      title: 'Example project name',
      github: 'http://github.com',
      demo: 'http://github.com/taine-rasmussen'
    },
    {
      id: 4,
      images: [IMG, IMG1, IMG],
      title: 'Example project name',
      github: 'http://github.com',
      demo: 'http://github.com/taine-rasmussen'
    },
    {
      id: 5,
      images: [IMG, IMG1],
      title: 'Example project name',
      github: 'http://github.com',
      demo: 'http://github.com/taine-rasmussen'
    },
    {
      id: 6,
      images: [IMG],
      title: 'Example project name',
      github: 'http://github.com',
      demo: 'http://github.com/taine-rasmussen'
    },
  ]

  return (
    <section
      id='portfolio'
      onMouseEnter={() => { setActiveNav('portfolio') }}
    >
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio_container'>
        {data.map((d, i) => {
          return (
            <article className='portfolio_item'>
              <Swiper pagination={true} modules={[Pagination]} className='swiper'>
                <div className='portfolio_item-image'>
                  {d.images.map((img) => (
                    <SwiperSlide>
                      <img src={img} alt='profile' />
                    </SwiperSlide>
                  ))}
                </div>
              </Swiper >
              <h3>{d.id}</h3>
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
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio
