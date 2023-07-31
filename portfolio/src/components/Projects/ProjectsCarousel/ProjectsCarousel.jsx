import React, { Component } from 'react';
import Slider from 'react-slick';
import {Box} from '@mui/material';

import ProjectCard from '../ProjectCard/ProjectCard';

import  './styles.scss';



const ProjectsCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

  return (
    <Box>
        <Slider {...settings}>
          <div className='project-card card1'>
            {<ProjectCard title='Filmpire' content='This is a mockup project.' imageUrl='https://images.pexels.com/photos/3137890/pexels-photo-3137890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>}
          </div>
          <div className='project-card card2'>
          {<ProjectCard title='Coming Soon' content='This is a mockup project.' imageUrl='https://images.pexels.com/photos/12743405/pexels-photo-12743405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>}
          </div>
          <div className='project-card card3'>
          {<ProjectCard title='Thank you!' content='This is a mockup project.' imageUrl='https://images.pexels.com/photos/8250916/pexels-photo-8250916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>}
          </div>
        </Slider>
      </Box>
  )
}

export default ProjectsCarousel;