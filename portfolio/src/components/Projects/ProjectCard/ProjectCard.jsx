import React from 'react';
import {Box, Typography } from '@mui/material';

import './styles.scss'

const ProjectCard = (props) => {
  return (
    <Box className='card-container' sx={{backgroundImage: `url(${props.imageUrl})`}}>
      <Box className='card-content-container'>
        <Typography variant='h5' className='card-title' gutterBottom>{props.title}</Typography>
          <Typography variant='body2' color='text.secondary' className='card-content' sx={{display: 'flex', justifyContent:'space-between'}} gutterBottom >
            {props.content}
            <a href='/projects/projectpage' style={{fontFamily: 'Outfit', textDecoration: 'underline', color: '#fff',fontWeight: '300', fontSize: '10px'}}>
              More
            </a>
          </Typography>         
      </Box>        
    </Box>
  )
}

export default ProjectCard;