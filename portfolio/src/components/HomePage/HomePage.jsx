import React from 'react';

import './styles.scss';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material'

const HomePage = () => {
  return (
     <div className='home-content'>
        <div className='content-container'>
          <div className='loading-line-h'></div>
          <div className='loading-line-v'></div>
          <Typography variant='h2' className='home-title'><span className='word-a'>Web Developer,</span> <br/><Link className='design-link' style={{textDecoration: 'none', color: '#fff'}}>Designer</Link></Typography>
        </div>
      </div>    
  )
}

export default HomePage;