import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import './Work.css'
import "swiper/css";
import "swiper/css/pagination";

const ProjectCard = (props) => {
  const {
    proj: {
      images,
      title,
      github
    },
    proj
  } = props;

  return (
    <article className='project_card_container'>
      <Swiper
        modules={[Pagination]}
        pagination={true}
        className="mySwiper"
      >
        <div className='project_item_image' key={title}>
          {images.map((img, i) => (
            <SwiperSlide
              className='swiper'
              zoom={true}
              key={i}
            >
              <img src={img} alt='profile' />
            </SwiperSlide>
          ))}
        </div>
      </Swiper >






      <div className='cta_wrapper'>
        <h3>{title}</h3>
        <div className='cta_buttons'>
          <a
            href={github}
            className='btn'
            target='_blank'
          >Github</a>
          <a
            href='http://github.com/taine-rasmussen'
            className='btn btn-primary'
            target='_blank'
          >Live Demo</a>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
