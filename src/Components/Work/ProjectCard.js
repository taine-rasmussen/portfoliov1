import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import './Work.css'

const ProjectCard = (props) => {
  const {
    proj: {
      images,
      title
    },
    proj
  } = props;

  console.log(proj)

  return (
    <article className='project_card_container'>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className='swiper'
      >
        <div className='project_item_image' key={title}>
          {images.map((img, i) => (
            <SwiperSlide key={i} zoom={true} >
              <img src={img} alt='profile' />
            </SwiperSlide>
          ))}
        </div>
      </Swiper >







      <h3>{proj.title}</h3>
      <div>
        <a
          href={proj.github}
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
}

export default ProjectCard
