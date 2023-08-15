import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';

// import Slider from 'react-slick';
import { Box } from '@mui/material';

import ProjectCard from '../ProjectCard/ProjectCard';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/effect-fade';


import  './styles.scss';

import { EffectFade, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const ProjectsCarousel = () => {
  return (
    <Box className="tab-container">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        slidesPerView={1}
        spaceBetween={20}
        speed={800}
        modules={[EffectFade, Navigation, Pagination, Mousewheel, Keyboard]}
        className="projects-swiper"
      >
        <SwiperSlide>
          <Link to='/projects/projectpage' className='project-card card1' style={{textDecoration: 'none'}}>
              {<ProjectCard title='Filmpire' content='This is a mockup project.' imageUrl='https://images.pexels.com/photos/3137890/pexels-photo-3137890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>}
            </Link>
        </SwiperSlide>
        <SwiperSlide>
          <div className='project-card card2'>
            {<ProjectCard title='Coming Soon' content='This is a mockup project.' imageUrl='https://images.pexels.com/photos/12743405/pexels-photo-12743405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='project-card card3'>
            {<ProjectCard title='Thank you!' content='This is a mockup project.' imageUrl='https://images.pexels.com/photos/8250916/pexels-photo-8250916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>}
          </div>
        </SwiperSlide>
      </Swiper>

    </Box>
  )
}

export default ProjectsCarousel;