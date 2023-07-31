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
            {<ProjectCard title='Project_1' content='This is a mockup project.'/>}
          </div>
          <div className='project-card card2'>
          {<ProjectCard title='Project_2' content='This is a mockup project.'/>}
          </div>
          <div className='project-card card3'>
          {<ProjectCard title='Project_3' content='This is a mockup project.'/>}
          </div>
        </Slider>
      </Box>
  )
}

export default ProjectsCarousel;