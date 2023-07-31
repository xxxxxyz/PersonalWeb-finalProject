import React from 'react';
import { Link }from 'react-router-dom';

import {Box, Typography, } from '@mui/material';

import './styles.scss'

const ProjectCard = ({title, content}) => {
  return (
    <Box className='card-container'>
      <Box className='card-content-container'>
        <Typography variant='h5' className='card-title' gutterBottom>{title}</Typography>
          <Typography variant='body2' color='text.secondary' className='card-content' gutterBottom>{content}</Typography>
          <Link to='/' style={{fontFamily: 'Outfit', textDecoration: 'underline', color: '#fff',fontWeight: '300', fontSize: '12px'}}>More</Link>
      </Box>
        
    </Box>
  )
}

export default ProjectCard;