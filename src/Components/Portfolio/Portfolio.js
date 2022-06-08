import React, { useContext } from 'react'
import './Portfolio.css'
import IMG from '../../assets/portfolio1.jpg'
import { ActiveNavContext } from '../../ActiveNavContext'
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";


// TODO:
// Create a data object to store portfolio info in: DONE
// Refactor component to use map on data 

const Portfolio = () => {

  const {
    setActiveNav
  } = useContext(ActiveNavContext)


  const data = [
    {
      id: 1,
      image: IMG,
      title: 'Example project name',
      github: 'http://github.com',
      demo: 'http://github.com/taine-rasmussen'
    },
    {
      id: 2,
      image: IMG,
      title: 'Example project name',
      github: 'http://github.com',
      demo: 'http://github.com/taine-rasmussen'
    },
    {
      id: 3,
      image: IMG,
      title: 'Example project name',
      github: 'http://github.com',
      demo: 'http://github.com/taine-rasmussen'
    },
    {
      id: 4,
      image: IMG,
      title: 'Example project name',
      github: 'http://github.com',
      demo: 'http://github.com/taine-rasmussen'
    },
    {
      id: 5,
      image: IMG,
      title: 'Example project name',
      github: 'http://github.com',
      demo: 'http://github.com/taine-rasmussen'
    },
    {
      id: 6,
      image: IMG,
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
        <Swiper pagination={true} modules={[Pagination]} className='swiper'>
          {data.map((d, i) => {
            return (
              <SwiperSlide className='swiper-slide'>
                <a
                  href='http://github.com'
                  className='btn'
                  target='_blank'
                >{d.id}</a>
              </SwiperSlide>
            )
          })}
        </Swiper>






      </div>
    </section>
  )
}

export default Portfolio
